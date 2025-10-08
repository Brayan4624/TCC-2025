import { motion } from 'framer-motion';
import { Building2, Users, Briefcase, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function DemoEmpresa() {
  const navigate = useNavigate();
  const { login } = useUser();

  const handleContinuar = () => {
    login('empresa', {
      nome: 'Tech Solutions',
      email: 'contato@techsolutions.com',
      avatar: 'TS'
    });
    navigate('/inicio-empresa');
  };

  const recursos = [
    {
      icon: Users,
      titulo: 'Encontre Talentos',
      descricao: 'Acesse uma base de estagiários qualificados e prontos para trabalhar'
    },
    {
      icon: Briefcase,
      titulo: 'Publique Vagas',
      descricao: 'Crie e gerencie vagas de forma simples e eficiente'
    },
    {
      icon: TrendingUp,
      titulo: 'Analytics',
      descricao: 'Acompanhe métricas de visualizações e candidaturas em tempo real'
    }
  ];

  const beneficios = [
    'Acesso a milhares de candidatos qualificados',
    'Publicação ilimitada de vagas',
    'Sistema de mensagens integrado',
    'Dashboard com estatísticas completas',
    'Gestão de candidaturas simplificada',
    'Perfil empresarial personalizado'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-br from-primary via-accent to-primary p-8"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-6"
          >
            <div className="w-24 h-24 mx-auto mb-4 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <Building2 size={48} className="text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-2">Bem-vindo ao NEXUS Empresas</h1>
            <p className="text-gray-200 text-lg">Conecte-se com os melhores talentos do mercado</p>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Recursos */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">O que você pode fazer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recursos.map((recurso, index) => (
              <motion.div
                key={recurso.titulo}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="nexus-card text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <recurso.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{recurso.titulo}</h3>
                <p className="text-gray-400 text-sm">{recurso.descricao}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefícios */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="nexus-card mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Benefícios da Plataforma</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {beneficios.map((beneficio, index) => (
              <motion.div
                key={beneficio}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="flex items-center gap-3 text-gray-300"
              >
                <CheckCircle size={20} className="text-green-400 flex-shrink-0" />
                <span>{beneficio}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Preview */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="nexus-card mb-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-3">Modo Demonstração</h2>
          <p className="text-gray-400 mb-6">
            Explore todas as funcionalidades da plataforma empresarial sem compromisso.
            Você terá acesso completo a:
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            <span className="px-4 py-2 bg-primary/10 text-accent text-sm font-semibold rounded-full border border-accent/30">
              Dashboard Empresarial
            </span>
            <span className="px-4 py-2 bg-primary/10 text-accent text-sm font-semibold rounded-full border border-accent/30">
              Busca de Estagiários
            </span>
            <span className="px-4 py-2 bg-primary/10 text-accent text-sm font-semibold rounded-full border border-accent/30">
              Publicação de Vagas
            </span>
            <span className="px-4 py-2 bg-primary/10 text-accent text-sm font-semibold rounded-full border border-accent/30">
              Sistema de Mensagens
            </span>
          </div>
        </motion.div>

        {/* Botões de Ação */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            onClick={handleContinuar}
            className="flex-1 nexus-btn-primary flex items-center justify-center gap-2 py-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg font-bold">Continuar como Empresa</span>
            <ArrowRight size={20} />
          </motion.button>
          <motion.button
            onClick={() => navigate('/')}
            className="flex-1 nexus-btn-secondary py-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg font-bold">Voltar ao Login</span>
          </motion.button>
        </motion.div>

        {/* Nota */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-gray-500 text-sm mt-6"
        >
          💡 Este é um ambiente de demonstração. Nenhum dado será salvo permanentemente.
        </motion.p>
      </div>
    </div>
  );
}
