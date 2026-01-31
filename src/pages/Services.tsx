
import React from 'react';
import { Stethoscope, Activity, Heart, Brain, Truck, Users } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const primaryColor = "#1B5736";
const goldColor = "#D9A84E";

const Services: React.FC = () => {
    const { t } = useLanguage();

    const services = [
        { icon: Stethoscope, title: t('home.service1'), desc: t('home.service1Desc') },
        { icon: Activity, title: t('home.service2'), desc: t('home.service2Desc') },
        { icon: Heart, title: t('home.service3'), desc: t('home.service3Desc') },
        { icon: Brain, title: t('home.service4'), desc: t('home.service4Desc') },
        { icon: Truck, title: t('home.service5'), desc: t('home.service5Desc') },
        { icon: Users, title: t('home.service6'), desc: t('home.service6Desc') },
    ];

    return (
        <div className="bg-white min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-8 w-full flex flex-col justify-center">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
                    <div className="text-left max-w-2xl">
                        <span className="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block" style={{ color: primaryColor }}>{t('servicesInfo.heroTag')}</span>
                        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-[#051F12] leading-tight">
                            {t('servicesInfo.heroTitle')}
                        </h1>
                    </div>
                    <p className="text-slate-500 text-lg max-w-sm mb-2 leading-relaxed">{t('servicesInfo.heroDesc')}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="group p-12 rounded-[3.5rem] border border-slate-100 transition-all duration-500 relative hover:shadow-2xl hover:shadow-yellow-500/20 hover:-translate-y-2 h-[400px] flex flex-col justify-between overflow-hidden"
                            style={{ backgroundColor: primaryColor }}
                        >
                            {/* Hover Background Layer */}
                            <div
                                className="absolute inset-0 rounded-[3.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ backgroundColor: goldColor }}
                            />

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all mb-10 bg-white/10 group-hover:bg-black/10 shrink-0">
                                    <s.icon className="w-7 h-7 text-white group-hover:text-[#051F12] transition-colors duration-500" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white group-hover:text-[#051F12] mb-4 uppercase tracking-tight transition-colors duration-500">{s.title}</h4>
                                    <p className="text-base text-white/70 group-hover:text-[#051F12]/70 leading-relaxed transition-colors duration-500">{s.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
