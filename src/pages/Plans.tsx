
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    User,
    Users2,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    Clock,
    Smartphone,
    CreditCard,
    HelpingHand
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import InquiryModal from '../components/InquiryModal';

const primaryColor = "#1B5736";
const goldColor = "#D9A84E";
const darkColor = "#051F12";

const Plans: React.FC = () => {
    const { t } = useLanguage();
    const [activePlan, setActivePlan] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlanTitle, setSelectedPlanTitle] = useState('');

    const openModal = (title: string) => {
        setSelectedPlanTitle(title);
        setIsModalOpen(true);
    };

    const plans = [
        {
            title: t('home.planSingular'),
            icon: User,
            color: 'green',
            desc: t('home.planSingularDesc'),
            price: 'Sob Consulta',
            period: '',
            features: [
                t('home.planSingularFeat1'),
                t('home.planSingularFeat2'),
                t('home.planSingularFeat3'),
                t('home.planSingularFeat4'),
                'Desconto de 5% em Suplementos'
            ]
        },
        {
            title: t('home.planFamily'),
            icon: Users2,
            color: 'blue',
            desc: t('home.planFamilyDesc'),
            price: 'Sob Consulta',
            period: '',
            recommended: true,
            features: [
                t('home.planFamilyFeat1'),
                t('home.planFamilyFeat2'),
                t('home.planFamilyFeat3'),
                t('home.planFamilyFeat4'),
                t('home.planSingularFeat2'),
                'Histórico Familiar Unificado'
            ]
        },
        {
            title: t('home.planCollective'),
            icon: Building2,
            color: 'dark',
            desc: t('home.planCollectiveDesc'),
            price: 'Sob Consulta',
            period: '',
            features: [
                t('home.planCollectiveFeat1'),
                t('home.planCollectiveFeat2'),
                t('home.planCollectiveFeat3'),
                t('home.planCollectiveFeat4'),
                'Campanhas de Vacinação',
                'Gestor de Conta Dedicado'
            ]
        }
    ];

    const steps = [
        { icon: Smartphone, title: t('plansPage.step1Title'), desc: t('plansPage.step1Desc') },
        { icon: CreditCard, title: t('plansPage.step2Title'), desc: t('plansPage.step2Desc') },
        { icon: ShieldCheck, title: t('plansPage.step3Title'), desc: t('plansPage.step3Desc') },
        { icon: HelpingHand, title: t('plansPage.step4Title'), desc: t('plansPage.step4Desc') }
    ];

    return (
        <div className="bg-slate-50 min-h-screen pt-32 md:pt-48 pb-24">

            {/* HERO SECTION - REDUCED MARGIN BOTTOM */}
            <div className="max-w-7xl mx-auto px-8 text-center mb-16">
                <span className="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block" style={{ color: primaryColor }}>{t('plansPage.heroTag')}</span>
                <h1 className="text-4xl md:text-7xl font-heading font-extrabold text-[#051F12] mb-8">{t('plansPage.heroTitle')}</h1>
                <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    {t('plansPage.heroDesc')}
                </p>
            </div>

            {/* COMO FUNCIONA - REDUCED MARGIN BOTTOM */}
            <div className="max-w-7xl mx-auto px-8 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100" style={{ backgroundColor: 'white' }}>
                                <step.icon className="w-6 h-6" style={{ color: goldColor }} />
                            </div>
                            <h3 className="text-lg font-bold text-[#051F12] mb-3">{step.title}</h3>
                            <p className="text-slate-400 text-sm">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* LISTA DE PLANOS INTERATIVOS */}
            <div className="max-w-7xl mx-auto px-8 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            layout
                            onHoverStart={() => setActivePlan(i)}
                            onHoverEnd={() => setActivePlan(null)}
                            className={`relative p-10 rounded-[3rem] border transition-all duration-300 ${plan.recommended ? 'bg-[#051F12] text-white shadow-2xl scale-105 z-10' : 'bg-white border-slate-100 hover:border-green-200 text-slate-800'}`}
                            style={{
                                borderColor: plan.recommended ? goldColor : undefined,
                            }}
                        >
                            {plan.recommended && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg" style={{ backgroundColor: goldColor, color: darkColor }}>
                                    {t('plansPage.mostPopular')}
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-8">
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${plan.recommended ? 'bg-white/10' : 'bg-green-50'}`}>
                                    <plan.icon className={`w-7 h-7 ${plan.recommended ? 'text-white' : ''}`} style={{ color: !plan.recommended ? primaryColor : undefined }} />
                                </div>
                            </div>

                            <h3 className={`text-3xl font-bold mb-4 ${plan.recommended ? 'text-white' : 'text-[#051F12]'}`}>{plan.title}</h3>
                            <p className={`text-sm mb-8 leading-relaxed ${plan.recommended ? 'text-slate-300' : 'text-slate-500'}`}>{plan.desc}</p>

                            <div className="mb-8">
                                <span className={`text-3xl font-extrabold ${plan.recommended ? 'text-white' : 'text-[#051F12]'}`}>{plan.price}</span>
                                {plan.period && <span className={`text-sm ${plan.recommended ? 'text-slate-400' : 'text-slate-400'}`}>{plan.period}</span>}
                            </div>

                            <div className="space-y-4 mb-10">
                                {plan.features.map((f, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${plan.recommended ? 'text-[#D9A84E]' : 'text-[#1B5736]'}`} />
                                        <span className={`text-sm font-medium ${plan.recommended ? 'text-slate-200' : 'text-slate-600'}`}>{f}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => openModal(plan.title)}
                                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 ${plan.recommended ? 'bg-[#D9A84E] text-[#051F12] hover:bg-white' : 'bg-[#051F12] text-white hover:opacity-90'}`}
                            >
                                {t('home.joinNow')} <ArrowRight className="w-4 h-4" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* VANTAGENS DO SISTEMA */}
            <div className="max-w-7xl mx-auto px-8 bg-[#1B5736] rounded-[3rem] p-12 md:p-24 relative overflow-hidden text-white text-center">
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">{t('plansPage.whyJoinTitle')}</h2>
                    <p className="text-lg text-white/80 leading-relaxed mb-12">
                        {t('plansPage.whyJoinDesc')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 flex-1 min-w-[200px]">
                            <ShieldCheck className="w-8 h-8 mx-auto mb-4 text-[#D9A84E]" />
                            <h4 className="font-bold mb-2">{t('plansPage.safetyTitle')}</h4>
                            <p className="text-xs text-white/70">{t('plansPage.safetyDesc')}</p>
                        </div>
                        <div className="bg-white/10 backdrop-blur rounded-2xl p-6 flex-1 min-w-[200px]">
                            <Clock className="w-8 h-8 mx-auto mb-4 text-[#D9A84E]" />
                            <h4 className="font-bold mb-2">{t('plansPage.speedTitle')}</h4>
                            <p className="text-xs text-white/70">{t('plansPage.speedDesc')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <InquiryModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                planTitle={selectedPlanTitle}
            />
        </div>
    );
};

export default Plans;
