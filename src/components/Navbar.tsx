
import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Colors
const primaryColor = "#1B5736";
const darkColor = "#051F12";

const PlusIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;
    const { t, language, setLanguage } = useLanguage();

    const navItems = [
        { key: 'home', path: '/' },
        { key: 'about', path: '/sobre' },
        { key: 'services', path: '/servicos' },
        { key: 'plans', path: '/planos' },
        { key: 'gallery', path: '/galeria' },
        { key: 'contacts', path: '/contactos' }
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 px-6 md:px-12 py-5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 cursor-pointer">
                        <img src="/logo nobreza/Farmácia Nobreza Logo.png" alt="Farmácia Nobreza" className="h-16 w-auto object-contain" />
                    </Link>

                    <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`transition-all relative group py-2 hover:text-[#1B5736] ${isActive(item.path) ? 'text-[#1B5736]' : ''}`}
                            >
                                {t(`navbar.${item.key}`)}
                                <span className={`absolute bottom-0 left-0 h-0.5 transition-all group-hover:w-full ${isActive(item.path) ? 'w-full' : 'w-0'}`} style={{ backgroundColor: primaryColor }} />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Link
                            to="/contactos"
                            className="hidden md:flex text-white px-7 py-3 rounded-full text-[10px] font-bold uppercase tracking-wider items-center gap-2 transition-all shadow-lg"
                            style={{ backgroundColor: primaryColor }}
                        >
                            {t('navbar.talkToUs')}
                        </Link>

                        <button
                            onClick={() => setLanguage(language === 'pt' ? 'en' : 'pt')}
                            className="p-2 rounded-full hover:bg-slate-100 transition-all border border-slate-200 flex items-center justify-center w-10 h-10 shadow-sm"
                            title={language === 'pt' ? 'Mudar para Inglês' : 'Switch to Portuguese'}
                        >
                            <span className="text-xl leading-none">{language === 'pt' ? '🇲🇿' : '🇺🇸'}</span>
                        </button>

                        <button className="lg:hidden p-2 text-slate-900" onClick={() => setMobileMenuOpen(true)}>
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: '100%' }}
                        className="fixed inset-0 z-[60] bg-white p-8 pt-24"
                    >
                        <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 p-2 bg-slate-50 rounded-full"><X /></button>
                        <div className="flex flex-col gap-6 text-2xl font-heading font-extrabold text-slate-900">
                            {navItems.map((item) => (
                                <Link key={item.key} to={item.path} onClick={() => setMobileMenuOpen(false)}>{t(`navbar.${item.key}`)}</Link>
                            ))}
                            <Link to="/contactos" onClick={() => setMobileMenuOpen(false)}>Contactos</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
