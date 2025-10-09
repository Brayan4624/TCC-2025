import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight, Loader2, Building2, User } from 'lucide-react';
import { useUser } from '../context/UserContext';
import logoIcon from '../assets/10-21.svg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    login('estudante');
    navigate('/feed');
  };

  const handleDemoEmpresa = () => {
    navigate('/demo-empresa');
  };

  const handleDemoEstudante = () => {
    login('estudante', {
      nome: 'João Paulo',
      email: 'joao.paulo@email.com',
      avatar: 'JP'
    });
    navigate('/feed');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Logo e Header */}
        <div className="text-center mb-6">
          <motion.div
            className="nexus-logo mx-auto mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logoIcon} alt="NEXUS Logo" className="w-10 h-10" />
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-1">NEXUS</h1>
          <p className="text-gray-400 text-sm">Conectando talentos e oportunidades</p>
        </div>

        {/* Card de Login */}
        <motion.div
          className="bg-card border border-border rounded-xl p-6 shadow-xl backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="text-center mb-5">
            <h2 className="text-xl font-bold text-white mb-1">Entrar na sua conta</h2>
            <p className="text-gray-400 text-sm">Entre para acessar suas oportunidades</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-3">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-gray-400 mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input
                  id="email"
                  type="email"
                  placeholder="seu.email@exemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="nexus-input pl-10"
                  required
                />
              </div>
            </div>

            {/* Senha */}
            <div>
              <label htmlFor="password" className="block text-xs font-semibold text-gray-400 mb-1.5">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="nexus-input pl-10"
                  required
                />
              </div>
            </div>

            {/* Botão Entrar */}
            <motion.button
              type="submit"
              className="nexus-btn-primary mt-4 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  <span>Entrando...</span>
                </>
              ) : (
                <>
                  <span>Entrar</span>
                  <ArrowRight size={16} />
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="nexus-divider my-5">
            <span className="nexus-divider-text text-xs">ou</span>
          </div>

          {/* Acesso Rápido */}
          <div className="space-y-2">
            <p className="text-center text-gray-500 text-xs mb-2">
              Acesso rápido:
            </p>
            <motion.button
              onClick={handleDemoEmpresa}
              className="nexus-btn-secondary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <Building2 size={16} />
              Perfil Empresa
            </motion.button>
            <motion.button
              onClick={handleDemoEstudante}
              className="nexus-btn-secondary flex items-center justify-center gap-2"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <User size={16} />
              Perfil Estudante
            </motion.button>
          </div>
        </motion.div>

        {/* Link Criar Conta */}
        <div className="text-center mt-4">
          <p className="text-gray-400 text-sm">
            Ainda não tem uma conta?{' '}
            <button onClick={() => navigate('/criar-conta')} className="nexus-link">
              Criar conta gratuita
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
