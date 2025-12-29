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
        <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm shadow-sm" style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}>
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <a
                        href="/"
                        className="flex items-center gap-2 text-rose-400 hover:text-rose-500 transition-colors font-medium"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span>Back to Home</span>
                    </a>
                    <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-rose-500 bg-clip-text text-transparent">
                        Customer Testimonials
                    </h1>
                    <div className="flex items-center gap-1.5 text-amber-500">
                        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                        <span className="font-semibold text-sm">100% Legit</span>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="py-12 md:py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800 mb-4">
                        Real Results from Real Customers
                    </h2>
                    <p className="text-neutral-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        See authentic conversations, delivery confirmations, and progress updates from our
                        satisfied customers. All testimonials are verified and showcase genuine experiences.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="pb-16 md:pb-24">
                <div className="container mx-auto px-4">
                    {loading ? (
                        <div className="flex justify-center items-center py-20">
                            <div className="w-12 h-12 border-4 border-rose-200 border-t-rose-400 rounded-full animate-spin"></div>
                        </div>
                    ) : testimonials.length === 0 ? (
                        <div className="text-center py-20">
                            <div className="text-neutral-400 mb-4">
                                <Star className="w-16 h-16 mx-auto opacity-30" />
                            </div>
                            <h3 className="text-xl font-semibold text-neutral-600 mb-2">No testimonials yet</h3>
                            <p className="text-neutral-500">Check back soon for customer reviews!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {testimonials.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
                                    style={{ border: '1px solid rgba(212, 175, 55, 0.15)' }}
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
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-xs font-medium text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            Click to expand
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-neutral-800 mb-2 line-clamp-2">
                                            {testimonial.title}
                                        </h3>
                                        <p className="text-neutral-600 text-sm leading-relaxed line-clamp-3">
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
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors z-50"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}
                        className="absolute left-4 p-3 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}
                        className="absolute right-4 p-3 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Image */}
                    <img
                        src={selectedImage}
                        alt="Testimonial"
                        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </div>
    );
};

export default Testimonials;
