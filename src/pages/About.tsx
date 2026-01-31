
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

            {/* QUEM SOMOS (INSTITUCIONAL) */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#D9A84E]/5 skew-x-12 translate-x-1/2" />

                <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="relative group">
                            <div className="aspect-[4/5] bg-white rounded-[3rem] overflow-hidden shadow-2xl relative">
                                {/* Updated image as requested by user */}
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
                </div>
            </section>

            {/* PENSAMENTO ESTRATÉGICO (MISSÃO / VISÃO / VALORES) - COM GRADIENTES PREMIUM (RESTAURADO) */}
            <section className="pb-24 max-w-7xl mx-auto px-8 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* MISSÃO */}
                    <div className="relative overflow-hidden p-8 rounded-[2.5rem] shadow-2xl group hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#1B5736] to-[#051F12]" />


                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                                <Globe className="w-7 h-7 text-[#D9A84E]" />
                            </div>
                            <h4 className="font-heading font-bold text-white mb-4 text-2xl tracking-tight">{t('home.ourMission')}</h4>
                            <p className="text-slate-200 text-sm leading-relaxed font-light">
                                {t('home.missionText')}
                            </p>
                        </div>
                    </div>

                    {/* VISÃO */}
                    <div className="relative overflow-hidden p-8 rounded-[2.5rem] shadow-2xl group hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D9A84E] to-[#B68D40]" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                                <Lightbulb className="w-7 h-7 text-white" />
                            </div>
                            <h4 className="font-heading font-bold text-[#051F12] mb-4 text-2xl tracking-tight">{t('home.ourVision')}</h4>
                            <p className="text-[#051F12]/80 text-sm leading-relaxed font-medium">
                                {t('home.visionText')}
                            </p>
                        </div>
                    </div>

                    {/* VALORES */}
                    <div className="relative overflow-hidden p-8 rounded-[2.5rem] shadow-2xl group hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#051F12] to-[#0a3f25]" />

                        <div className="relative z-10">
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20">
                                <ShieldCheck className="w-7 h-7 text-[#D9A84E]" />
                            </div>
                            <h4 className="font-heading font-bold text-white mb-4 text-2xl tracking-tight">{t('home.ourValues')}</h4>
                            <ul className="text-slate-200 text-sm leading-relaxed space-y-3 font-light">
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D9A84E]" /> {t('home.valueEthics')}</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D9A84E]" /> {t('home.valueQuality')}</li>
                                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#D9A84E]" /> {t('home.valueHumanism')}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CAPITAL HUMANO (EQUIPA) - DESIGN INOVADOR */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block" style={{ color: primaryColor }}>{t('about.teamTag')}</span>
                        <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-[#051F12] mb-6">{t('about.teamTitle')}</h2>
                        <p className="text-slate-500 text-lg">{t('about.teamDesc')}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Membro 1 - Inovador */}
                        <div className="group relative bg-[#051F12] rounded-[2rem] overflow-hidden h-[450px] shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
                                <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=600" className="w-full h-full object-cover grayscale mix-blend-luminosity" alt="Dr. Carlos Matsinhe" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#051F12] via-transparent to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-[#D9A84E] text-[#051F12] text-[10px] font-bold uppercase tracking-widest">{t('about.roleTechnicalDirector')}</span>
                                <h4 className="text-2xl font-bold text-white mb-2">Dr. Carlos Matsinhe</h4>
                                <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {t('about.teamMember1Desc')}
                                </p>
                                <div className="flex gap-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    <a href="#" className="flex items-center gap-2 text-white hover:text-[#D9A84E] transition-colors text-xs uppercase font-bold tracking-wider">
                                        <Linkedin className="w-4 h-4" /> LinkedIn
                                    </a>
                                    <a href="mailto:carlos@farmacianobreza.com" className="flex items-center gap-2 text-white hover:text-[#D9A84E] transition-colors text-xs uppercase font-bold tracking-wider">
                                        <Mail className="w-4 h-4" /> Email
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Membro 2 */}
                        <div className="group relative bg-[#051F12] rounded-[2rem] overflow-hidden h-[450px] shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
                                <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600" className="w-full h-full object-cover grayscale mix-blend-luminosity" alt="Dra. Ana Silva" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#051F12] via-transparent to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-[#1B5736] text-white text-[10px] font-bold uppercase tracking-widest">{t('about.roleHeadPharmacist')}</span>
                                <h4 className="text-2xl font-bold text-white mb-2">Dra. Ana Silva</h4>
                                <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {t('about.teamMember2Desc')}
                                </p>
                                <div className="flex gap-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    <a href="#" className="flex items-center gap-2 text-white hover:text-[#D9A84E] transition-colors text-xs uppercase font-bold tracking-wider">
                                        <Linkedin className="w-4 h-4" /> LinkedIn
                                    </a>
                                    <a href="mailto:ana@farmacianobreza.com" className="flex items-center gap-2 text-white hover:text-[#D9A84E] transition-colors text-xs uppercase font-bold tracking-wider">
                                        <Mail className="w-4 h-4" /> Email
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Membro 3 */}
                        <div className="group relative bg-[#051F12] rounded-[2rem] overflow-hidden h-[450px] shadow-2xl transition-all duration-500 hover:-translate-y-2">
                            <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity duration-500">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600" className="w-full h-full object-cover grayscale mix-blend-luminosity" alt="Arnaldo Chivale" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[#051F12] via-transparent to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-[#D9A84E] text-[#051F12] text-[10px] font-bold uppercase tracking-widest">{t('about.roleGeneralDirector')}</span>
                                <h4 className="text-2xl font-bold text-white mb-2">Arnaldo Chivale</h4>
                                <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {t('about.teamMember3Desc')}
                                </p>
                                <div className="flex gap-4 pt-4 border-t border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    <a href="#" className="flex items-center gap-2 text-white hover:text-[#D9A84E] transition-colors text-xs uppercase font-bold tracking-wider">
                                        <Linkedin className="w-4 h-4" /> LinkedIn
                                    </a>
                                    <a href="mailto:arnaldo@farmacianobreza.com" className="flex items-center gap-2 text-white hover:text-[#D9A84E] transition-colors text-xs uppercase font-bold tracking-wider">
                                        <Mail className="w-4 h-4" /> Email
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* PILARES DA EXCELÊNCIA (Antiga Visão Estratégica) */}
            <section className="text-white py-24 md:py-40 overflow-visible" style={{ backgroundColor: darkColor }}>
                <div className="max-w-7xl mx-auto px-8 text-center w-full flex flex-col items-center justify-center">
                    <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} className="mb-20">
                        <h2 className="text-4xl md:text-7xl font-heading font-extrabold mb-10 tracking-tight leading-tight">
                            {t('about.pillarsTitle')}
                        </h2>
                        <p className="text-slate-400 max-w-4xl mx-auto text-xl md:text-2xl leading-relaxed px-4">
                            {t('about.pillarsDesc')}
                        </p>
                    </motion.div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                        {strategicPoints.map((point, i) => (
                            <motion.div
                                key={i}
                                className="group p-12 rounded-[3.5rem] text-left border border-white/10 transition-all duration-500 cursor-default flex flex-col md:flex-row gap-8 items-start"
                                style={{ backgroundColor: `${primaryColor}10` }}
                                whileHover={{ backgroundColor: primaryColor, borderColor: goldColor }}
                            >
                                <div className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 group-hover:bg-white/10 shrink-0" style={{ backgroundColor: primaryColor }}>
                                    <point.icon className="w-10 h-10 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold mb-4 tracking-tight uppercase transition-colors duration-500" style={{ color: goldColor }}>{point.title}</h4>
                                    <p className="text-slate-400 text-base leading-relaxed transition-colors duration-500 group-hover:text-white/90">{point.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
