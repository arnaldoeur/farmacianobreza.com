
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Globe, Lightbulb, ShieldCheck, Heart, Users2, Linkedin, Mail } from 'lucide-react';
import { StrategicPoint } from '../../types';
import { useLanguage } from '../contexts/LanguageContext';

const primaryColor = "#1B5736";
const goldColor = "#D9A84E";
const darkColor = "#051F12";

const About: React.FC = () => {
    const { t } = useLanguage();

    const strategicPoints: StrategicPoint[] = [
        {
            title: t('about.pillar1Title'),
            description: t('about.pillar1Desc'),
            icon: Heart
        },
        {
            title: t('about.pillar2Title'),
            description: t('about.pillar2Desc'),
            icon: Users2
        },
        {
            title: t('about.pillar3Title'),
            description: t('about.pillar3Desc'),
            icon: Lightbulb
        },
        {
            title: t('about.pillar4Title'),
            description: t('about.pillar4Desc'),
            icon: ShieldCheck
        }
    ];

    return (
        <div className="pt-20">
            {/* HERO SECTION */}
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1631549916768-4119cb8e15c0?q=80&w=2000"
                        alt="Farmácia Nobreza Interior"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#051F12]/80 mix-blend-multiply" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <span className="block text-[#D9A84E] font-bold tracking-[0.3em] uppercase text-sm mb-4">{t('about.heroTag')}</span>
                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                        {t('about.heroTitle')}
                    </h1>
                    <p className="text-xl text-slate-200 max-w-2xl mx-auto font-light">
                        {t('about.heroSubtitle')}
                    </p>
                </div>
            </section>

            {/* SEÇÃO SOBRE - TABS INTERATIVAS (Restructured) */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D9A84E]/5 skew-x-12 translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-16">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative group">
                            <div className="aspect-[4/5] bg-white rounded-[3rem] overflow-hidden shadow-2xl relative">
                                <img src="/logo-nobreza/fnobreza.png" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" alt="Sobre a Farmácia Nobreza" />
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
                                    <p className="font-bold text-[#051F12] border-l-4 pl-6 py-2" style={{ borderColor: goldColor }}>
                                        {t('home.aboutText1')}
                                    </p>
                                    <p>
                                        {t('home.aboutText2')}
                                    </p>
                                    <p>
                                        {t('about.aboutText3')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PENSAMENTO ESTRATÉGICO (MISSÃO / VISÃO / VALORES) - INTEGRADO */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {/* MISSÃO */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="relative overflow-hidden p-8 rounded-[2.5rem] shadow-2xl group hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#1B5736] to-[#051F12]" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                                    <Globe className="w-7 h-7 text-[#D9A84E]" />
                                </div>
                                <h4 className="font-heading font-bold text-white mb-4 text-2xl tracking-tight uppercase">{t('home.mission')}</h4>
                                <p className="text-slate-200 text-sm leading-relaxed font-light">
                                    {t('home.missionText')}
                                </p>
                            </div>
                        </motion.div>

                        {/* VISÃO */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative overflow-hidden p-8 rounded-[2.5rem] shadow-2xl group hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#D9A84E] to-[#B68D40]" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                                    <Lightbulb className="w-7 h-7 text-white" />
                                </div>
                                <h4 className="font-heading font-bold text-[#051F12] mb-4 text-2xl tracking-tight uppercase">{t('home.vision')}</h4>
                                <p className="text-[#051F12]/80 text-sm leading-relaxed font-medium">
                                    {t('home.visionText')}
                                </p>
                            </div>
                        </motion.div>

                        {/* VALORES */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="relative overflow-hidden p-8 rounded-[2.5rem] shadow-2xl group hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[#051F12] to-[#0a3f25]" />
                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                                    <ShieldCheck className="w-7 h-7 text-[#D9A84E]" />
                                </div>
                                <h4 className="font-heading font-bold text-white mb-4 text-2xl tracking-tight uppercase">{t('home.values')}</h4>
                                <ul className="text-slate-200 text-sm leading-relaxed space-y-3 font-light">
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D9A84E]" /> {t('home.valueEthics')}</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D9A84E]" /> {t('home.valueQuality')}</li>
                                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D9A84E]" /> {t('home.valueHumanism')}</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
