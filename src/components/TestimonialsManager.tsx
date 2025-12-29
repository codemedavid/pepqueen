import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Save, X, GripVertical, Image, Eye, EyeOff } from 'lucide-react';
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

const TestimonialsManager: React.FC = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState<string | null>(null);
    const [showAddForm, setShowAddForm] = useState(false);
    const [uploading, setUploading] = useState(false);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        image_url: '',
        is_active: true
    });

    useEffect(() => {
        fetchTestimonials();
    }, []);

    const fetchTestimonials = async () => {
        try {
            const { data, error } = await supabase
                .from('testimonials')
                .select('*')
                .order('display_order', { ascending: true });

            if (error) throw error;
            setTestimonials(data || []);
        } catch (error) {
            console.error('Error fetching testimonials:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = async (file: File) => {
        setUploading(true);
        try {
            const fileExt = file.name.split('.').pop();
            const fileName = `testimonial-${Date.now()}.${fileExt}`;
            const filePath = `testimonials/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('images')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('images')
                .getPublicUrl(filePath);

            setFormData(prev => ({ ...prev, image_url: publicUrl }));
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload image. Please try again.');
        } finally {
            setUploading(false);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.description || !formData.image_url) {
            alert('Please fill in all required fields');
            return;
        }

        try {
            if (editingId) {
                const { error } = await supabase
                    .from('testimonials')
                    .update({
                        title: formData.title,
                        description: formData.description,
                        image_url: formData.image_url,
                        is_active: formData.is_active
                    })
                    .eq('id', editingId);

                if (error) throw error;
            } else {
                const maxOrder = Math.max(0, ...testimonials.map(t => t.display_order));
                const { error } = await supabase
                    .from('testimonials')
                    .insert({
                        title: formData.title,
                        description: formData.description,
                        image_url: formData.image_url,
                        is_active: formData.is_active,
                        display_order: maxOrder + 1
                    });

                if (error) throw error;
            }

            resetForm();
            fetchTestimonials();
        } catch (error) {
            console.error('Error saving testimonial:', error);
            alert('Failed to save testimonial. Please try again.');
        }
    };

    const handleDelete = async (id: string) => {
        if (!confirm('Are you sure you want to delete this testimonial?')) return;

        try {
            const { error } = await supabase
                .from('testimonials')
                .delete()
                .eq('id', id);

            if (error) throw error;
            fetchTestimonials();
        } catch (error) {
            console.error('Error deleting testimonial:', error);
            alert('Failed to delete testimonial.');
        }
    };

    const toggleActive = async (id: string, currentState: boolean) => {
        try {
            const { error } = await supabase
                .from('testimonials')
                .update({ is_active: !currentState })
                .eq('id', id);

            if (error) throw error;
            fetchTestimonials();
        } catch (error) {
            console.error('Error toggling testimonial status:', error);
        }
    };

    const handleEdit = (testimonial: Testimonial) => {
        setEditingId(testimonial.id);
        setFormData({
            title: testimonial.title,
            description: testimonial.description,
            image_url: testimonial.image_url,
            is_active: testimonial.is_active
        });
        setShowAddForm(true);
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            image_url: '',
            is_active: true
        });
        setEditingId(null);
        setShowAddForm(false);
    };

    const moveTestimonial = async (index: number, direction: 'up' | 'down') => {
        if ((direction === 'up' && index === 0) || (direction === 'down' && index === testimonials.length - 1)) {
            return;
        }

        const newIndex = direction === 'up' ? index - 1 : index + 1;
        const newTestimonials = [...testimonials];
        [newTestimonials[index], newTestimonials[newIndex]] = [newTestimonials[newIndex], newTestimonials[index]];

        // Update display_order for swapped items
        try {
            await Promise.all([
                supabase
                    .from('testimonials')
                    .update({ display_order: newIndex })
                    .eq('id', testimonials[index].id),
                supabase
                    .from('testimonials')
                    .update({ display_order: index })
                    .eq('id', testimonials[newIndex].id)
            ]);
            fetchTestimonials();
        } catch (error) {
            console.error('Error reordering testimonials:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center py-12">
                <div className="w-8 h-8 border-4 border-rose-200 border-t-rose-400 rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-neutral-800">Customer Testimonials</h2>
                    <p className="text-sm text-neutral-500">Manage customer review screenshots</p>
                </div>
                <button
                    onClick={() => setShowAddForm(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-lg hover:from-rose-500 hover:to-pink-500 transition-all shadow-sm"
                >
                    <Plus className="w-5 h-5" />
                    Add Testimonial
                </button>
            </div>

            {/* Add/Edit Form */}
            {showAddForm && (
                <div className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold text-neutral-800">
                            {editingId ? 'Edit Testimonial' : 'Add New Testimonial'}
                        </h3>
                        <button
                            onClick={resetForm}
                            className="p-1 text-neutral-400 hover:text-neutral-600"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                                Title *
                            </label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                                placeholder="e.g., Dosage Guidance & Effectiveness"
                                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-rose-400 outline-none transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                                Description *
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                                placeholder="Describe what the testimonial shows..."
                                rows={3}
                                className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-rose-400 outline-none transition-all resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-1">
                                Screenshot Image *
                            </label>
                            <div className="flex gap-3">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        value={formData.image_url}
                                        onChange={(e) => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
                                        placeholder="Image URL or upload below"
                                        className="w-full px-3 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-rose-300 focus:border-rose-400 outline-none transition-all"
                                    />
                                </div>
                                <label className="flex items-center gap-2 px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer">
                                    <Image className="w-5 h-5" />
                                    {uploading ? 'Uploading...' : 'Upload'}
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                                        disabled={uploading}
                                    />
                                </label>
                            </div>
                            {formData.image_url && (
                                <div className="mt-2">
                                    <img
                                        src={formData.image_url}
                                        alt="Preview"
                                        className="h-32 w-auto object-cover rounded-lg border border-neutral-200"
                                    />
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="is_active"
                                checked={formData.is_active}
                                onChange={(e) => setFormData(prev => ({ ...prev, is_active: e.target.checked }))}
                                className="w-4 h-4 text-rose-400 border-neutral-300 rounded focus:ring-rose-400"
                            />
                            <label htmlFor="is_active" className="text-sm text-neutral-700">
                                Active (visible on testimonials page)
                            </label>
                        </div>

                        <div className="flex justify-end gap-3 pt-2">
                            <button
                                type="button"
                                onClick={resetForm}
                                className="px-4 py-2 text-neutral-600 hover:text-neutral-800 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-lg hover:from-rose-500 hover:to-pink-500 transition-all"
                            >
                                <Save className="w-4 h-4" />
                                {editingId ? 'Update' : 'Save'}
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Testimonials List */}
            <div className="space-y-3">
                {testimonials.length === 0 ? (
                    <div className="text-center py-12 bg-neutral-50 rounded-xl border border-dashed border-neutral-300">
                        <Image className="w-12 h-12 mx-auto text-neutral-300 mb-3" />
                        <p className="text-neutral-500">No testimonials yet</p>
                        <p className="text-sm text-neutral-400">Add your first customer testimonial above</p>
                    </div>
                ) : (
                    testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`flex items-center gap-4 p-4 bg-white rounded-xl border transition-all ${testimonial.is_active ? 'border-neutral-200' : 'border-neutral-100 opacity-60'
                                }`}
                        >
                            {/* Drag Handle / Order Buttons */}
                            <div className="flex flex-col gap-1">
                                <button
                                    onClick={() => moveTestimonial(index, 'up')}
                                    disabled={index === 0}
                                    className="p-1 text-neutral-400 hover:text-neutral-600 disabled:opacity-30"
                                >
                                    <GripVertical className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Thumbnail */}
                            <div className="w-16 h-20 flex-shrink-0 rounded-lg overflow-hidden border border-neutral-200">
                                <img
                                    src={testimonial.image_url}
                                    alt={testimonial.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-neutral-800 truncate">{testimonial.title}</h4>
                                <p className="text-sm text-neutral-500 line-clamp-2">{testimonial.description}</p>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => toggleActive(testimonial.id, testimonial.is_active)}
                                    className={`p-2 rounded-lg transition-colors ${testimonial.is_active
                                            ? 'text-green-600 hover:bg-green-50'
                                            : 'text-neutral-400 hover:bg-neutral-100'
                                        }`}
                                    title={testimonial.is_active ? 'Hide' : 'Show'}
                                >
                                    {testimonial.is_active ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                                </button>
                                <button
                                    onClick={() => handleEdit(testimonial)}
                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                >
                                    <Edit2 className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => handleDelete(testimonial.id)}
                                    className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default TestimonialsManager;
