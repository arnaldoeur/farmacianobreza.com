
import React from 'react';
import { Shield, Lock, Eye, FileText, Server, UserCheck } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const primaryColor = "#1B5736";
const goldColor = "#D9A84E";

const Privacy: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-slate-50 min-h-screen pt-32 md:pt-48 pb-24">
            <div className="max-w-4xl mx-auto px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block" style={{ color: primaryColor }}>{t('privacyPage.heroTag')}</span>
                    <h1 className="text-4xl md:text-5xl font-heading font-extrabold text-[#051F12] mb-6">{t('privacyPage.heroTitle')}</h1>
                    <p className="text-slate-500 text-lg">{t('privacyPage.lastUpdated')}</p>
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-10 md:p-16 space-y-12">

                    {/* Intro */}
                    <div className="prose prose-lg text-slate-600 leading-relaxed">
                        <p>
                            {t('privacyPage.intro')}
                        </p>
                    </div>

                    {/* Grid de Destaques */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <Shield className="w-8 h-8 mb-4" style={{ color: primaryColor }} />
                            <h3 className="font-bold text-[#051F12] mb-2">{t('privacyPage.card1Title')}</h3>
                            <p className="text-sm text-slate-500">{t('privacyPage.card1Desc')}</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                            <UserCheck className="w-8 h-8 mb-4" style={{ color: goldColor }} />
                            <h3 className="font-bold text-[#051F12] mb-2">{t('privacyPage.card2Title')}</h3>
                            <p className="text-sm text-slate-500">{t('privacyPage.card2Desc')}</p>
                        </div>
                    </div>

                    {/* Secções Detalhadas */}
                    <div className="space-y-10">
                        <section>
                            <h2 className="text-xl font-bold text-[#051F12] mb-4 flex items-center gap-3">
                                <Eye className="w-5 h-5 text-slate-400" />
                                {t('privacyPage.section1Title')}
                            </h2>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-2">
                                <li><strong>{t('privacyPage.section1List1')}</strong></li>
                                <li>{t('privacyPage.section1List2')}</li>
                                <li>{t('privacyPage.section1List3')}</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#051F12] mb-4 flex items-center gap-3">
                                <Server className="w-5 h-5 text-slate-400" />
                                {t('privacyPage.section2Title')}
                            </h2>
                            <p className="text-slate-600 mb-4">{t('privacyPage.section2Intro')}</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-600 ml-2">
                                <li>{t('privacyPage.section2List1')}</li>
                                <li>{t('privacyPage.section2List2')}</li>
                                <li>{t('privacyPage.section2List3')}</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#051F12] mb-4 flex items-center gap-3">
                                <Lock className="w-5 h-5 text-slate-400" />
                                {t('privacyPage.section3Title')}
                            </h2>
                            <p className="text-slate-600">
                                {t('privacyPage.section3Text')}
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-[#051F12] mb-4 flex items-center gap-3">
                                <FileText className="w-5 h-5 text-slate-400" />
                                {t('privacyPage.section4Title')}
                            </h2>
                            <p className="text-slate-600">
                                {t('privacyPage.section4Text')} <span className="text-[#1B5736] font-medium">geral@farmacianobreza.com</span>.
                            </p>
                        </section>
                    </div>

                    {/* Footer do Card */}
                    <div className="pt-8 border-t border-slate-100 text-center">
                        <p className="text-slate-400 text-sm">{t('privacyPage.cardFooter')}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Privacy;
