
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Camera, Maximize2, X, Filter } from 'lucide-react';
import { GalleryItem } from '../../types';
import { useLanguage } from '../contexts/LanguageContext';

const primaryColor = "#1B5736";
const secondaryColor = "#F2CD5C";
const darkColor = "#051F12";

const Gallery: React.FC = () => {
    const { t } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const galleryItems: GalleryItem[] = [
        { id: '1', url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=1000', title: t('imgTitle.infra'), caption: t('imgCap.infra'), categoryId: 'interior', category: t('imgCat.interior') },
        { id: '2', url: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000', title: t('imgTitle.tech'), caption: t('imgCap.tech'), categoryId: 'team', category: t('imgCat.team') },
        { id: '3', url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000', title: t('imgTitle.mental'), caption: t('imgCap.mental'), categoryId: 'services', category: t('imgCat.services') },
        { id: '4', url: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2000', title: t('imgTitle.access'), caption: t('imgCap.access'), categoryId: 'location', category: t('imgCat.location') },
        { id: '5', url: 'https://images.unsplash.com/photo-1631549916768-4119cb8e15c0?q=80&w=1000', title: t('imgTitle.stock'), caption: t('imgCap.stock'), categoryId: 'products', category: t('imgCat.products') },
        { id: '6', url: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=1000', title: t('imgTitle.naturals'), caption: t('imgCap.naturals'), categoryId: 'products', category: t('imgCat.products') },
        { id: '7', url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=1000', title: t('imgTitle.office'), caption: t('imgCap.office'), categoryId: 'interior', category: t('imgCat.interior') },
        { id: '8', url: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=1000', title: t('imgTitle.pharmacist'), caption: t('imgCap.pharmacist'), categoryId: 'team', category: t('imgCat.team') }
    ];

    // Get unique categoryIds
    const categories = ['all', ...Array.from(new Set(galleryItems.map(item => item.categoryId!)))];

    const filteredItems = activeCategory === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.categoryId === activeCategory);

    return (
        <div className="bg-slate-50 min-h-screen pt-32 md:pt-48 pb-24">
            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                            className="max-w-6xl w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl relative flex flex-col md:flex-row"
                            onClick={e => e.stopPropagation()}
                        >
                            <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 z-10 p-2 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors"><X className="w-6 h-6" /></button>
                            <div className="md:w-2/3 h-[40vh] md:h-[70vh]">
                                <img src={selectedImage.url} className="w-full h-full object-cover" alt={selectedImage.title} />
                            </div>
                            <div className="md:w-1/3 p-8 md:p-12 flex flex-col justify-center">
                                <span className="font-bold uppercase tracking-[0.2em] text-[10px] mb-4" style={{ color: primaryColor }}>{selectedImage.category}</span>
                                <h3 className="text-3xl font-heading font-extrabold text-slate-900 mb-6">{selectedImage.title}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">{selectedImage.caption}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto px-8 w-full">
                {/* Header Centrado */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block" style={{ color: primaryColor }}>{t('galleryPage.heroTag')}</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-[#051F12] mb-8">{t('galleryPage.heroTitle')}</h1>
                    <p className="text-slate-500 text-lg">{t('galleryPage.heroDesc')}</p>
                </div>

                {/* Categories Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeCategory === cat
                                ? 'text-white shadow-lg scale-105'
                                : 'bg-white text-slate-500 hover:bg-slate-100'
                                }`}
                            style={{ backgroundColor: activeCategory === cat ? primaryColor : undefined }}
                        >
                            {cat === 'all' ? t('common.all') : t(`imgCat.${cat}`)}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={item.id}
                                className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all"
                                onClick={() => setSelectedImage(item)}
                            >
                                <img src={item.url} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#F2CD5C] mb-2">{item.category}</span>
                                    <h3 className="text-white font-bold text-xl">{item.title}</h3>
                                    <div className="mt-4 flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase tracking-widest">
                                        <Maximize2 className="w-4 h-4" /> {t('galleryPage.viewDetails')}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Gallery;
