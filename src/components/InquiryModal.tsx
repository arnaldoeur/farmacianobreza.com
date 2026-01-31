import React, { useState } from 'react';
import { X, MessageCircle, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    planTitle: string;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, planTitle }) => {
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (type: 'whatsapp' | 'email') => {
        const cleanMessage = `Olá, meu nome é ${name}. Tenho interesse no plano ${planTitle}. Meu contacto é ${contact}. ${message}`;

        if (type === 'whatsapp') {
            const encodedMessage = encodeURIComponent(cleanMessage);
            window.open(`https://wa.me/258866676779?text=${encodedMessage}`, '_blank');
        } else {
            const mailtoLink = `mailto:geral@farmacianobreza.com?subject=Interesse no Plano ${planTitle}&body=${encodeURIComponent(cleanMessage)}`;
            window.location.href = mailtoLink;
        }
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5 text-slate-500" />
                        </button>

                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-[#051F12] mb-2">Interesse no Plano</h3>
                            <p className="text-slate-500 mb-6">Preencha seus dados para receber mais informações sobre o <span className="font-bold text-[#1B5736]">{planTitle}</span>.</p>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-[#051F12] mb-2">Nome Completo</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1B5736] focus:ring-0 outline-none transition-all"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-[#051F12] mb-2">Contacto (Email ou WhatsApp)</label>
                                    <input
                                        type="text"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1B5736] focus:ring-0 outline-none transition-all"
                                        placeholder="Seu contacto"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-[#051F12] mb-2">Mensagem (Opcional)</label>
                                    <textarea
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1B5736] focus:ring-0 outline-none transition-all h-24 resize-none"
                                        placeholder="Alguma dúvida específica?"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <button
                                    onClick={() => handleSubmit('whatsapp')}
                                    disabled={!name || !contact}
                                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <MessageCircle className="w-4 h-4" />
                                    WhatsApp
                                </button>
                                <button
                                    onClick={() => handleSubmit('email')}
                                    disabled={!name || !contact}
                                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#051F12] text-white font-bold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Mail className="w-4 h-4" />
                                    Email
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InquiryModal;
