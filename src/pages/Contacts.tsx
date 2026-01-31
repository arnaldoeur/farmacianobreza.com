
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const primaryColor = "#1B5736";
const darkColor = "#051F12";
const goldColor = "#D9A84E";

const Contacts: React.FC = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d966.3257232148278!2d35.651183284876154!3d-14.35187477662329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18de8d29d83e0965%3A0x7c2035f9c8bd8390!2sFarm%C3%A1cia%20Nobreza!5e0!3m2!1sen!2sin!4v1768398581254!5m2!1sen!2sin";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const text = `Olá! Meu nome é ${formData.name} (${formData.email}). Mensagem: ${formData.message}`;
        window.open(`https://wa.me/258866676779?text=${encodeURIComponent(text)}`, '_blank');
    };

    return (
        <div className="bg-slate-50 min-h-screen pt-40 md:pt-56">

            <div className="max-w-7xl mx-auto px-8 w-full mb-24">
                {/* Header Alinhado com o Logo (Esquerda) e Contactos (Direita) */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-2xl text-left">
                        <span className="font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block" style={{ color: primaryColor }}>{t('contactsPage.heroTag')}</span>
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold text-[#051F12] leading-[1.1]">
                            {t('contactsPage.heroTitle')}
                        </h1>
                    </div>
                    <div className="max-w-sm text-left md:text-right">
                        <p className="text-slate-500 text-lg leading-relaxed">
                            {t('contactsPage.heroDesc')}
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Informações de Contacto */}
                    <div className="space-y-12">
                        <div>
                            <h3 className="text-2xl font-bold text-[#051F12] mb-10">{t('contactsPage.directChannels')}</h3>
                            <div className="space-y-10">
                                <div className="flex items-start gap-8 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:bg-[#1B5736] transition-colors duration-300">
                                        <Phone className="w-7 h-7 text-[#1B5736] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t('contactsPage.phoneLabel')}</p>
                                        <p className="text-2xl font-bold text-[#051F12]">+258 86 667 6779</p>
                                        <p className="text-sm text-slate-500 mt-1">{t('contactsPage.phoneTime')}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-8 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:bg-[#1B5736] transition-colors duration-300">
                                        <Mail className="w-7 h-7 text-[#1B5736] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t('contactsPage.emailLabel')}</p>
                                        <p className="text-2xl font-bold text-[#051F12]">geral@farmacianobreza.com</p>
                                        <p className="text-sm text-slate-500 mt-1">{t('contactsPage.emailTime')}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-8 group">
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:bg-[#1B5736] transition-colors duration-300">
                                        <MapPin className="w-7 h-7 text-[#1B5736] group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">{t('contactsPage.hqLabel')}</p>
                                        <p className="text-2xl font-bold text-[#051F12]">Av. Julius Nyerere, Mandimba</p>
                                        <p className="text-sm text-slate-500 mt-1">{t('contactsPage.hqAddress')}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulário */}
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100">
                        <h3 className="text-2xl font-bold text-[#051F12] mb-8">{t('contactsPage.formTitle')}</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{t('contactsPage.labelName')}</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-[#1B5736] focus:ring-1 focus:ring-[#1B5736] transition-all"
                                    value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{t('contactsPage.labelContact')}</label>
                                <input
                                    type="text"
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 focus:outline-none focus:border-[#1B5736] focus:ring-1 focus:ring-[#1B5736] transition-all"
                                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">{t('contactsPage.labelMessage')}</label>
                                <textarea
                                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 h-32 focus:outline-none focus:border-[#1B5736] focus:ring-1 focus:ring-[#1B5736] transition-all resize-none"
                                    value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 rounded-xl font-bold uppercase tracking-widest text-xs text-white shadow-lg shimmer-effect flex items-center justify-center gap-2 hover:opacity-90 transition-all" style={{ backgroundColor: primaryColor }}>
                                {t('contactsPage.btnSend')} <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* MAPA - LARGURA CONTIDA */}
            <div className="max-w-7xl mx-auto px-8 w-full mb-24">
                <div className="h-[500px] w-full border-4 border-[#051F12] rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <iframe
                        className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                        src={mapEmbedUrl}
                        style={{ border: 0 }} allowFullScreen={true} loading="lazy" title="Localização Oficial Farmácia Nobreza"
                    ></iframe>
                </div>
            </div>

        </div>
    );
};

export default Contacts;
