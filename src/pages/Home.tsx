
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowRight,
    Phone,
    MapPin,
    Clock,
    Award,
    FileText,
    Camera,
    Globe,
    Lightbulb,
    ShieldCheck,
    ArrowLeft,
    Maximize2,
    X,
    Stethoscope,
    Activity,
    Heart,
    Brain,
    Truck,
    Users,
    User,
    Users2,
    Building2,
    CheckCircle2,
    Check,
    Pill,
    Baby
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { GalleryItem, StrategicPoint } from '../../types';
import { useLanguage } from '../contexts/LanguageContext';

const primaryColor = "#1B5736";
const secondaryColor = "#F2CD5C";
const goldColor = "#D9A84E";
const darkColor = "#051F12";
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.3257232148278!2d35.651183284876154!3d-14.35187477662329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18de8d29d83e0965%3A0x7c2035f9c8bd8390!2sFarm%C3%A1cia%20Nobreza!5e0!3m2!1sen!2sin!4v1768398581254!5m2!1sen!2sin";

type TabType = 'missao' | 'visao' | 'valores';

// Restored Mission/Vision/Values Layout
const Home: React.FC = () => {
    const navigate = useNavigate();
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState<any | null>(null);
    const [activeTab, setActiveTab] = useState<TabType>('missao');
    const { t } = useLanguage();

    const services = [
        { icon: Stethoscope, title: t('home.service1'), desc: t('home.service1Desc') },
        { icon: Activity, title: t('home.service2'), desc: t('home.service2Desc') },
        { icon: Heart, title: t('home.service3'), desc: t('home.service3Desc') },
        { icon: Brain, title: t('home.service4'), desc: t('home.service4Desc') },
        { icon: Truck, title: t('home.service5'), desc: t('home.service5Desc') },
        { icon: Users, title: t('home.service6'), desc: t('home.service6Desc') },
    ];

    const galleryItems: GalleryItem[] = [
        { id: '1', url: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=1000', title: t('imgTitle.infra'), caption: t('imgCap.infra'), categoryId: 'interior', category: '' },
        { id: '2', url: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?q=80&w=1000', title: t('imgTitle.tech'), caption: t('imgCap.tech'), categoryId: 'team', category: '' },
        { id: '3', url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000', title: t('imgTitle.mental'), caption: t('imgCap.mental'), categoryId: 'services', category: '' },
        { id: '4', url: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=2000', title: t('imgTitle.access'), caption: t('imgCap.access'), categoryId: 'location', category: '' },
        { id: '5', url: 'https://images.unsplash.com/photo-1631549916768-4119cb8e15c0?q=80&w=1000', title: t('imgTitle.stock'), caption: t('imgCap.stock'), categoryId: 'products', category: '' },
    ];

    const plans = [
        {
            title: t('home.planSingular'),
            icon: User,
            color: 'green',
            desc: t('home.planSingularDesc'),
            features: [t('home.planSingularFeat1'), t('home.planSingularFeat2'), t('home.planSingularFeat3'), t('home.planSingularFeat4')]
        },
        {
            title: t('home.planFamily'),
            icon: Users2,
            color: 'blue',
            desc: t('home.planFamilyDesc'),
            features: [t('home.planFamilyFeat1'), t('home.planFamilyFeat2'), t('home.planFamilyFeat3'), t('home.planFamilyFeat4')]
        },
        {
            title: t('home.planCollective'),
            icon: Building2,
            color: 'dark',
            desc: t('home.planCollectiveDesc'),
            features: [t('home.planCollectiveFeat1'), t('home.planCollectiveFeat2'), t('home.planCollectiveFeat3'), t('home.planCollectiveFeat4')]
        }
    ];

    const nextSlide = () => setActiveGalleryIndex((prev) => (prev + 1) % galleryItems.length);
    const prevSlide = () => setActiveGalleryIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* HERO SECTION */}
            <section id="inicio" className="bg-white pt-16 pb-20 md:pt-40 md:pb-20 relative overflow-hidden min-h-screen flex flex-col justify-center"> {/* Reduced min-h-screen to 90vh and padding */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-white/80 z-10" /> {/* Increased opacity for better readability */}
                    {/* Placeholder for user's photo. Currently using a clean pharmacy background. */}
                    <img src="https://images.unsplash.com/photo-1631549916768-4119cb8e15c0?q=80&w=2000" className="w-full h-full object-cover opacity-20" alt="Fundo" />
                </div>
                <div className="relative z-20 max-w-6xl mx-auto px-8 text-center flex flex-col items-center justify-center">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}> {/* Reduced y offset */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10"> {/* Reduced mb-12 -> mb-10 */}
                            <span className="px-5 py-2 bg-white border border-slate-100 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm" style={{ color: primaryColor }}>{t('home.since')}</span>
                            <span className="px-5 py-2 text-white rounded-full text-[10px] font-bold uppercase tracking-widest shadow-md" style={{ backgroundColor: primaryColor }}>{t('home.location')}</span>
                        </div>
                        <h1 className="text-5xl md:text-8xl font-heading font-extrabold text-[#051F12] leading-[1.1] mb-12 tracking-tight">
                            {t('home.heroTitle')}
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium mb-16 px-4">
                            {t('home.heroSubtitle')}
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            <Link to="/servicos" className="text-white px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest hover:opacity-90 transition-all shadow-xl flex items-center gap-3" style={{ backgroundColor: darkColor }}>
                                {t('home.ourServices')} <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a href="https://wa.me/258866676779" className="px-10 py-5 rounded-full font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3 shadow-lg" style={{ backgroundColor: secondaryColor, color: darkColor }}>
                                <Phone className="w-4 h-4" /> {t('home.whatsapp')}
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SEÇÃO SOBRE - TABS INTERATIVAS */}
            <section id="sobre" className="bg-slate-50 py-24 md:py-40 min-h-screen flex flex-col justify-center">
                <div className="max-w-7xl mx-auto px-8 md:px-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative group">
                        <div className="aspect-[4/5] bg-white rounded-[3rem] overflow-hidden shadow-2xl relative">
                            <img src="/logo nobreza/fnobreza.png" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="Sobre" />
                            <div className="absolute top-8 left-8 p-4 bg-white/90 backdrop-blur rounded-2xl border border-white/5 shadow-sm flex items-center gap-3">
                                <Award className="w-6 h-6" style={{ color: goldColor }} />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#051F12]">{t('home.certifiedCompany')}</span>
                            </div>
                        </div>
                    </motion.div>
                    <div className="flex flex-col gap-10 text-left">
                        <div>
                            <span className="font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block" style={{ color: primaryColor }}>{t('home.whoWeAre')}</span>
                            <div className="space-y-6 text-slate-600 text-lg md:text-xl leading-relaxed">
                                <p className="font-bold text-[#051F12] text-2xl">
                                    {t('home.aboutText1')}
                                </p>
                                <p>
                                    {t('home.aboutText2')}
                                </p>
                            </div>
                        </div>

                        {/* ABAS: MISSÃO / VISÃO / VALORES - DESIGN PREMIUM COM GRADIENTES */}
                        <div className="relative rounded-[2.5rem] p-6 md:p-10 shadow-2xl overflow-hidden transition-all duration-700 flex flex-col">
                            {/* DYNAMIC BACKGROUND */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1B5736] to-[#0d3520]" />

                            {/* DECORATIVE BLUR */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full mix-blend-overlay" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[100px] rounded-full mix-blend-overlay" />

                            {/* CONTENT WRAPPER */}
                            <div className="relative z-10 flex flex-col h-full">
                                {/* TABS NAV */}
                                <div className="flex justify-center gap-6 mb-6 border-b border-white/20 pb-2">
                                    <button
                                        onClick={() => setActiveTab('missao')}
                                        className={`pb-2 px-2 text-xs font-bold uppercase tracking-[0.2em] transition-all relative ${activeTab === 'missao' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                                    >
                                        {t('home.mission')}
                                        {activeTab === 'missao' && <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full" />}
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('visao')}
                                        className={`pb-2 px-2 text-xs font-bold uppercase tracking-[0.2em] transition-all relative ${activeTab === 'visao' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                                    >
                                        {t('home.vision')}
                                        {activeTab === 'visao' && <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full" />}
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('valores')}
                                        className={`pb-2 px-2 text-xs font-bold uppercase tracking-[0.2em] transition-all relative ${activeTab === 'valores' ? 'text-white' : 'text-white/40 hover:text-white/70'}`}
                                    >
                                        {t('home.values')}
                                        {activeTab === 'valores' && <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 w-full h-0.5 bg-white rounded-full" />}
                                    </button>
                                </div>

                                {/* TAB CONTENT */}
                                <div className="flex-grow flex items-center justify-center">
                                    <AnimatePresence mode="wait">
                                        {activeTab === 'missao' && (
                                            <motion.div
                                                key="missao"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.5 }}
                                                className="w-full flex flex-col md:flex-row items-center md:items-start gap-6"
                                            >
                                                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shrink-0">
                                                    <Globe className="w-7 h-7 text-white" />
                                                </div>
                                                <div className="text-center md:text-left flex-1">
                                                    <h3 className="text-xl font-heading font-bold text-white mb-2">{t('home.ourMission')}</h3>
                                                    <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
                                                        {t('home.missionText')}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'visao' && (
                                            <motion.div
                                                key="visao"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.5 }}
                                                className="w-full flex flex-col md:flex-row items-center md:items-start gap-6"
                                            >
                                                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shrink-0">
                                                    <Lightbulb className="w-7 h-7 text-white" />
                                                </div>
                                                <div className="text-center md:text-left flex-1">
                                                    <h3 className="text-xl font-heading font-bold text-white mb-2">{t('home.ourVision')}</h3>
                                                    <p className="text-sm md:text-base text-white/90 leading-relaxed font-light">
                                                        {t('home.visionText')}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}

                                        {activeTab === 'valores' && (
                                            <motion.div
                                                key="valores"
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -20 }}
                                                transition={{ duration: 0.5 }}
                                                className="w-full flex flex-col md:flex-row items-center md:items-start gap-6"
                                            >
                                                <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20 shrink-0">
                                                    <ShieldCheck className="w-7 h-7 text-white" />
                                                </div>
                                                <div className="text-center md:text-left flex-1 w-full">
                                                    <h3 className="text-xl font-heading font-bold text-white mb-4">{t('home.ourValues')}</h3>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                                                        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10 flex items-center gap-3 hover:bg-white/20 transition-colors">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                                            <span className="text-white font-medium tracking-wide text-xs">{t('home.valueEthics')}</span>
                                                        </div>
                                                        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10 flex items-center gap-3 hover:bg-white/20 transition-colors">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                                            <span className="text-white font-medium tracking-wide text-xs">{t('home.valueQuality')}</span>
                                                        </div>
                                                        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10 flex items-center gap-3 hover:bg-white/20 transition-colors">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                                            <span className="text-white font-medium tracking-wide text-xs">{t('home.valueHumanism')}</span>
                                                        </div>
                                                        <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/10 flex items-center gap-3 hover:bg-white/20 transition-colors">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                                            <span className="text-white font-medium tracking-wide text-xs">{t('home.valueInnovation')}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>

                        <Link to="/sobre" className="self-start px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest text-[#1B5736] hover:bg-green-50 transition-all flex items-center gap-3">
                            {t('home.learnMore')} <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* SERVIÇOS - GRADIENT FIX */}
            <section id="servicos" className="bg-white py-24 md:py-40 min-h-screen flex flex-col justify-center">
                <div className="max-w-7xl mx-auto px-8 w-full flex flex-col justify-center">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
                        <div className="text-left max-w-2xl">
                            <span className="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block" style={{ color: primaryColor }}>{t('home.integralCare')}</span>
                            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#051F12] leading-tight">
                                {t('home.servicesTitle')}
                            </h2>
                        </div>
                        <Link to="/servicos" className="flex items-center gap-3 px-8 py-4 rounded-xl border border-slate-200 hover:bg-slate-50 transition-all font-bold text-xs uppercase tracking-widest text-[#051F12]">
                            {t('home.viewAllServices')} <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                        {services.slice(0, 3).map((s, i) => (
                            <div
                                key={i}
                                className="group p-12 rounded-[3.5rem] border border-slate-100 transition-all duration-500 relative hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2 overflow-hidden bg-gradient-to-br from-[#1B5736] to-[#0d3520]"
                            >
                                {/* Content */}
                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all mb-10 bg-white/10 group-hover:bg-[#D9A84E] group-hover:text-[#051F12]">
                                        <s.icon className="w-7 h-7 text-white group-hover:text-[#051F12] transition-colors duration-500" />
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{s.title}</h4>
                                    <p className="text-base text-white/70 leading-relaxed">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PLANOS - MELHORADOS */}
            <section className="bg-slate-50 py-24 md:py-40 min-h-screen flex flex-col justify-center">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block" style={{ color: primaryColor }}>{t('home.healthPlans')}</span>
                        <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#051F12] mb-8">{t('home.solutionsForEveryone')}</h2>
                        <p className="text-slate-500 text-lg">{t('home.plansDesc')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {plans.map((plan, i) => (
                            <div key={i} className="flex flex-col p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all">
                                <div className="w-16 h-16 rounded-2xl mb-8 flex items-center justify-center transition-all" style={{ backgroundColor: plan.color === 'green' ? `${primaryColor}15` : plan.color === 'blue' ? '#eff6ff' : '#f8fafc' }}>
                                    <plan.icon className="w-8 h-8" style={{ color: plan.color === 'green' ? primaryColor : plan.color === 'blue' ? '#3b82f6' : darkColor }} />
                                </div>
                                <h3 className="text-2xl font-bold text-[#051F12] mb-2 uppercase tracking-tight">{plan.title}</h3>
                                <p className="text-slate-400 text-sm mb-8 min-h-[40px]">{plan.desc}</p>

                                <div className="flex-grow space-y-4 mb-8">
                                    {plan.features.map((f, j) => (
                                        <div key={j} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" style={{ color: primaryColor }} />
                                            <span className="text-slate-600 text-sm font-medium">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="w-full py-4 rounded-xl text-white font-bold uppercase tracking-widest text-[10px] transition-all hover:opacity-90 shadow-md mt-auto" style={{ backgroundColor: darkColor }}>
                                    {t('home.joinNow')}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* GALERIA */}
            <section id="galeria" className="bg-white overflow-hidden py-24 md:py-40 relative min-h-screen flex flex-col justify-center">
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

                <div className="max-w-7xl mx-auto px-8 w-full flex flex-col h-full justify-center">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-12">
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-100 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: primaryColor }}>
                                <Camera className="w-4 h-4" /> {t('home.portfolio')}
                            </div>
                            <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-[#051F12] tracking-tight">{t('home.totalTransparency')}</h2>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={prevSlide} className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-100 active:scale-95 transition-all"><ArrowLeft className="w-6 h-6" /></button>
                            <button onClick={nextSlide} className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md border border-slate-100 active:scale-95 transition-all"><ArrowRight className="w-6 h-6" /></button>
                        </div>
                    </div>
                    <div className="relative overflow-hidden w-full">
                        <motion.div
                            className="flex gap-10 px-2"
                            animate={{ x: `-${activeGalleryIndex * (window.innerWidth < 768 ? 85 : 45)}%` }}
                            transition={{ type: 'spring', damping: 25, stiffness: 100 }}
                        >
                            {galleryItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="min-w-[300px] md:min-w-[500px] aspect-[4/3] relative rounded-[3.5rem] overflow-hidden group shadow-xl cursor-pointer"
                                    onClick={() => setSelectedImage(item)}
                                >
                                    <img src={item.url} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-12">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2" style={{ color: secondaryColor }}>{t(`imgCat.${item.categoryId}`)}</span>
                                        <h4 className="text-white font-bold text-2xl mb-4">{item.title}</h4>
                                        <div className="flex items-center gap-2 text-white/80 text-[10px] font-bold uppercase tracking-widest"><Maximize2 className="w-5 h-5" /> {t('home.expandImage')}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <Link to="/galeria" className="px-8 py-4 rounded-full border border-slate-200 font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
                            {t('home.viewFullGallery')}
                        </Link>
                    </div>
                </div>
            </section>

            {/* LOCALIZAÇÃO - MAPA CORRIGIDO */}
            <section id="localizacao" className="text-white py-24 md:py-40 min-h-screen flex flex-col justify-center" style={{ backgroundColor: darkColor }}>
                <div className="max-w-7xl mx-auto px-8 w-full flex flex-col justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="flex flex-col gap-16">
                            <div>
                                <span className="font-bold uppercase tracking-[0.3em] text-[10px] mb-6 block" style={{ color: primaryColor }}>{t('home.proximity')}</span>
                                <h2 className="text-4xl md:text-7xl font-heading font-extrabold mb-10 tracking-tight leading-tight">
                                    {t('home.alwaysClose')}
                                </h2>
                                <p className="text-slate-400 text-xl leading-relaxed max-w-lg mb-4">{t('home.addressCity')}</p>
                            </div>
                            <div className="space-y-14">
                                <div className="flex gap-8 group items-center">
                                    <div className="w-18 h-18 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-green-800/50 transition-all p-5">
                                        <MapPin className="group-hover:text-white w-8 h-8" style={{ color: goldColor }} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{t('home.officialAddress')}</p>
                                        <p className="text-2xl font-bold tracking-tight text-white">{t('home.addressLine')}</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 group items-center">
                                    <div className="w-18 h-18 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-green-800/50 transition-all p-5">
                                        <Clock className="group-hover:text-white w-8 h-8" style={{ color: goldColor }} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2">{t('home.workingHours')}</p>
                                        <p className="text-2xl font-bold tracking-tight text-white">{t('home.workingTime')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Mapa mais retangular e menos arredondado conforme feedback implícito sobre "shape" */}
                        <div className="h-full min-h-[500px] bg-white rounded-[2.5rem] overflow-hidden border-8 border-white/10 shadow-2xl relative">
                            <iframe
                                className="w-full h-full"
                                src={mapEmbedUrl}
                                style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Localização Oficial Farmácia Nobreza"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Home;
