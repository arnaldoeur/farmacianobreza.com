
import React from 'react';
import { Truck, AlertCircle, HelpCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const primaryColor = "#1B5736";

const Terms: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-slate-50 min-h-screen pt-32 md:pt-48 pb-24">
            <div className="max-w-4xl mx-auto px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block" style={{ color: primaryColor }}>{t('termsPage.heroTag')}</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#051F12] mb-6">{t('termsPage.heroTitle')}</h1>
                    <p className="text-slate-500 text-lg">{t('termsPage.heroDesc')}</p>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-10 md:p-16 space-y-12">

                    {/* Intro */}
                    <div className="prose prose-lg text-slate-600 leading-relaxed border-b border-slate-100 pb-8">
                        <p>
                            {t('termsPage.intro')}
                        </p>
                    </div>

                    {/* Secções Detalhadas */}
                    <div className="space-y-12">
                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1B5736]">
                                    <span className="font-bold">1</span>
                                </div>
                                <h2 className="text-xl font-bold text-[#051F12]">{t('termsPage.section1Title')}</h2>
                            </div>
                            <p className="text-slate-600 pl-14">
                                {t('termsPage.section1Text')}
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1B5736]">
                                    <span className="font-bold">2</span>
                                </div>
                                <h2 className="text-xl font-bold text-[#051F12]">{t('termsPage.section2Title')}</h2>
                            </div>
                            <div className="pl-14 space-y-4 text-slate-600">
                                <div className="flex items-start gap-3">
                                    <Truck className="w-5 h-5 text-slate-400 mt-1" />
                                    <p>{t('termsPage.section2Text1')}</p>
                                </div>
                                <div className="flex items-start gap-3">
                                    <AlertCircle className="w-5 h-5 text-slate-400 mt-1" />
                                    <p>{t('termsPage.section2Text2')}</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1B5736]">
                                    <span className="font-bold">3</span>
                                </div>
                                <h2 className="text-xl font-bold text-[#051F12]">{t('termsPage.section3Title')}</h2>
                            </div>
                            <p className="text-slate-600 pl-14">
                                {t('termsPage.section3Text')}
                            </p>
                        </section>

                        <section>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#1B5736]">
                                    <span className="font-bold">4</span>
                                </div>
                                <h2 className="text-xl font-bold text-[#051F12]">{t('termsPage.section4Title')}</h2>
                            </div>
                            <p className="text-slate-600 pl-14">
                                {t('termsPage.section4Text')}
                            </p>
                        </section>
                    </div>

                    {/* Dúvidas */}
                    <div className="bg-[#1B5736] rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <HelpCircle className="w-10 h-10 text-[#D9A84E]" />
                            <div>
                                <h4 className="font-bold text-lg">{t('termsPage.helpTitle')}</h4>
                                <p className="text-white/80 text-sm">{t('termsPage.helpDesc')}</p>
                            </div>
                        </div>
                        <button onClick={() => window.location.href = '/contactos'} className="px-6 py-3 bg-white text-[#1B5736] rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-green-50 transition-colors">
                            {t('termsPage.btnContact')}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Terms;
