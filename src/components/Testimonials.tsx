import React, { useState, useEffect } from 'react';
import { ArrowLeft, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Testimonial {
    id: string;
    title: string;
    description: string;
    image_url: string;
    display_order: number;
    is_active: boolean;
    created_at: string;
}

const Testimonials: React.FC = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const { data, error } = await supabase
                .from('testimonials')
                .select('*')
                .eq('is_active', true)
                .order('display_order', { ascending: true });

            if (error) throw error;
            setTestimonials(data || []);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
        } finally {
            setLoading(false);
        }
    };

    const navigateImage = (direction: 'prev' | 'next') => {
        if (!selectedImage) return;
        const currentIndex = testimonials.findIndex(t => t.image_url === selectedImage);
        if (direction === 'prev') {
            const newIndex = currentIndex > 0 ? currentIndex - 1 : testimonials.length - 1;
            setSelectedImage(testimonials[newIndex].image_url);
        } else {
            const newIndex = currentIndex < testimonials.length - 1 ? currentIndex + 1 : 0;
            setSelectedImage(testimonials[newIndex].image_url);
        }
    };

    return (
        <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#0a0a0a' }}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(212, 175, 55, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(212, 175, 55, 0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                />
                {/* Radial glow effects */}
                <div
                    className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
                    style={{
                        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)'
                    }}
                />
                <div
                    className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-15"
                    style={{
                        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)'
                    }}
                />
                {/* Subtle noise texture overlay */}
                <div
                    className="absolute inset-0 opacity-[0.4]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E")`
                    }}
                />
            </div>

            {/* Header */}
            <header className="sticky top-0 z-40 backdrop-blur-md" style={{ backgroundColor: 'rgba(10, 10, 10, 0.9)', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <a
                        href="/"
                        className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors font-medium"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Home</span>
                    </a>
                    <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                        Customer Testimonials
                    </h1>
                    <div className="flex items-center gap-1.5 text-amber-400">
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-sm">100% Legit</span>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-12 md:py-16 relative z-10">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Real Results from Real Customers
                    </h2>
                    <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        See authentic conversations, delivery confirmations, and progress updates from our
                        satisfied customers. All testimonials are verified and showcase genuine experiences.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="pb-16 md:pb-24 relative z-10">
                <div className="container mx-auto px-4">
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="w-12 h-12 border-4 border-amber-900 border-t-amber-400 rounded-full animate-spin"></div>
                        </div>
                    ) : testimonials.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-neutral-600 mb-4">
                                <Star className="w-16 h-16 mx-auto opacity-30" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-400 mb-2">No testimonials yet</h3>
                            <p className="text-neutral-500">Check back soon for customer reviews!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-amber-900/20 transition-all duration-300 group"
                                    style={{
                                        backgroundColor: 'rgba(20, 20, 20, 0.8)',
                                        border: '1px solid rgba(212, 175, 55, 0.2)',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    {/* Image Container */}
                                    <div
                                        className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                                        onClick={() => setSelectedImage(testimonial.image_url)}
                                    >
                                        <img
                                            src={testimonial.image_url}
                                            alt={testimonial.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-amber-500/30">
                                            Click to expand
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                                            {testimonial.title}
                                        </h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed line-clamp-3">
                                            {testimonial.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 p-2 text-white/70 hover:text-amber-400 transition-colors z-50"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                        className="absolute left-4 p-3 text-white/70 hover:text-amber-400 transition-colors bg-white/10 hover:bg-amber-500/20 rounded-full border border-white/10 hover:border-amber-500/30"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                        className="absolute right-4 p-3 text-white/70 hover:text-amber-400 transition-colors bg-white/10 hover:bg-amber-500/20 rounded-full border border-white/10 hover:border-amber-500/30"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Image */}
                    <img
                        src={selectedImage}
                        alt="Testimonial"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        style={{ boxShadow: '0 0 60px rgba(212, 175, 55, 0.1)' }}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Testimonials;
