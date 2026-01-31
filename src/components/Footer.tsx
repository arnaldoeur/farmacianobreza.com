
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

const primaryColor = "#1B5736";
const goldColor = "#D9A84E";
const darkColor = "#051F12";

const PlusIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

const Footer: React.FC = () => {
    // Helper function for scrolling to top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="text-white pt-12 border-t border-white/5" style={{ backgroundColor: darkColor }}> {/* Reduced padding pt-24 -> pt-12 */}
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10"> {/* Reduced gap-20 -> gap-10, pb-20 -> pb-10 */}
                <div className="flex flex-col gap-6"> {/* Reduced gap-10 -> gap-6 */}
                    <div className="flex items-start">
                        <Link to="/" onClick={scrollToTop} className="group">
                            {/* Logo resized to h-16 (approx 64px) from h-24 */}
                            <img src="/logo-nobreza/logo-2.png" alt="Farmácia Nobreza" className="h-16 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-sm"> {/* text-base -> text-sm */}
                        A Farmácia Nobreza é uma instituição de saúde de referência em Mandimba, focada em fornecer medicamentos certificados e um serviço humanizado à nossa comunidade.
                    </p>
                    <div className="flex gap-4">
                        <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[9px] font-bold uppercase tracking-widest text-slate-300">Desde 2013</span>
                        <span className="px-4 py-2 border rounded-lg text-[9px] font-bold uppercase tracking-widest" style={{ backgroundColor: `${primaryColor}10`, borderColor: `${primaryColor}30`, color: goldColor }}>Cuidar é a nossa essência</span>
                    </div>
                </div>

                <div className="flex flex-col gap-6"> {/* Reduced gap-10 -> gap-6 */}
                    <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white">Serviços</h4> {/* H4 smaller */}
                    <ul className="flex flex-col gap-3 text-slate-400 text-sm"> {/* Reduced gap-5 -> gap-3, text-base -> text-sm */}
                        <li>Aconselhamento Farmacêutico</li>
                        <li>Consultas de Psicologia</li>
                        <li>Levantamento de Receitas</li>
                    </ul>
                    <div className="mt-4">
                        <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-5">Institucional</h4>
                        <nav className="flex flex-col gap-3 text-slate-400 text-sm">
                            <Link to="/planos" className="hover:text-white transition-colors text-left">Planos de Saúde</Link>
                            <Link to="/sobre" className="hover:text-white transition-colors text-left">Nossa Missão</Link>
                        </nav>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-base font-bold uppercase tracking-[0.2em] text-white">Contactos</h4>
                    <div className="space-y-5 text-slate-400 text-base">
                        <div className="flex gap-4 group">
                            <MapPin className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" style={{ color: goldColor }} />
                            <span>Av. Julius Nyerere, Mandimba – Niassa</span>
                        </div>
                        <div className="flex gap-4 group">
                            <Clock className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" style={{ color: goldColor }} />
                            <span>Seg–Dom | 07:30 – 19:00</span>
                        </div>
                        <div className="flex gap-4 group">
                            <Phone className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" style={{ color: goldColor }} />
                            <span>+258 86 667 6779</span>
                        </div>
                        <div className="flex gap-4 group">
                            <Mail className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" style={{ color: goldColor }} />
                            <span>geral@farmacianobreza.com</span>
                        </div>
                    </div>
                    <a
                        href="https://wa.me/258866676779"
                        className="mt-6 flex items-center justify-center gap-4 py-5 px-8 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all shadow-xl hover:opacity-90"
                        style={{ backgroundColor: primaryColor, color: 'white' }}
                    >
                        Contactar via WhatsApp
                    </a>
                </div>
            </div>

            <div className="border-t border-white/5 py-12 px-8">
                <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-xs">
                        &copy; {new Date().getFullYear()} Farmácia Nobreza, Lda. Todos os direitos reservados.
                    </p>
                    <div className="flex gap-6">
                        <Link to="/privacidade" onClick={scrollToTop} className="text-slate-500 text-xs hover:text-[#D9A84E] transition-colors">Política de Privacidade</Link>
                        <Link to="/termos" onClick={scrollToTop} className="text-slate-500 text-xs hover:text-[#D9A84E] transition-colors">Termos e Condições</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
