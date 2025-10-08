import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Briefcase, PlusCircle, Building2, User, Users, FileText } from 'lucide-react';
import { useUser } from '../context/UserContext';

export default function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { userType } = useUser();

  // Navegação para EMPRESA
  const navEmpresa = [
    { id: 'inicio', label: 'Início', icon: Home, path: '/feed' },
    { id: 'estagiarios', label: 'Estagiários', icon: Users, path: '/estagiarios' },
    { id: 'criar', label: 'Criar', icon: PlusCircle, path: '/criar' },
    { id: 'publicacoes', label: 'Publicações', icon: FileText, path: '/minhas-publicacoes' },
    { id: 'perfil', label: 'Perfil', icon: User, path: '/perfil' }
  ];

  // Navegação para ESTUDANTE
  const navEstudante = [
    { id: 'inicio', label: 'Início', icon: Home, path: '/feed' },
    { id: 'vagas', label: 'Vagas', icon: Briefcase, path: '/vagas' },
    { id: 'empresas', label: 'Empresas', icon: Building2, path: '/empresas' },
    { id: 'candidaturas', label: 'Candidaturas', icon: FileText, path: '/candidaturas' },
    { id: 'perfil', label: 'Perfil', icon: User, path: '/perfil' }
  ];

  const navItems = userType === 'empresa' ? navEmpresa : navEstudante;

  const isActive = (path) => location.pathname === path;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-card border-t border-border backdrop-blur-lg z-50"
    >
      <div className="max-w-4xl mx-auto px-2 py-2">
        <div className="flex items-center justify-around">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);

            return (
              <motion.button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                  active
                    ? 'text-accent'
                    : 'text-gray-400 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <Icon size={22} strokeWidth={active ? 2.5 : 2} />
                  {active && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                    />
                  )}
                </div>
                <span className={`text-xs font-semibold ${active ? 'text-accent' : ''}`}>
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
