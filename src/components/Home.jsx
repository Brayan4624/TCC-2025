import { motion } from 'framer-motion';
import { TrendingUp, Briefcase, Building2, Users, ArrowRight, Star, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const stats = [
    { label: 'Vagas Ativas', value: '1,234', icon: Briefcase, color: '#E63946' },
    { label: 'Empresas', value: '456', icon: Building2, color: '#FF6B7A' },
    { label: 'Candidatos', value: '12,345', icon: Users, color: '#E63946' },
    { label: 'Contratações', value: '789', icon: TrendingUp, color: '#FF6B7A' }
  ];

  const vagasDestaque = [
    {
      id: 1,
      titulo: 'Desenvolvedor Full Stack Sênior',
      empresa: 'Tech Solutions',
      sigla: 'TS',
      localizacao: 'São Paulo, SP',
      salario: 'R$ 12.000 - R$ 18.000',
      tipo: 'CLT',
      tags: ['React', 'Node.js', 'AWS']
    },
    {
      id: 2,
      titulo: 'Designer UI/UX',
      empresa: 'Creative Studio',
      sigla: 'CS',
      localizacao: 'Remoto',
      salario: 'R$ 8.000 - R$ 12.000',
      tipo: 'PJ',
      tags: ['Figma', 'Design Systems', 'UX Research']
    },
    {
      id: 3,
      titulo: 'Engenheiro de Dados',
      empresa: 'Data Corp',
      sigla: 'DC',
      localizacao: 'Rio de Janeiro, RJ',
      salario: 'R$ 15.000 - R$ 22.000',
      tipo: 'CLT',
      tags: ['Python', 'SQL', 'Big Data']
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-br from-primary via-accent to-primary p-8 md:p-12"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-3"
          >
            Conectando Talentos e Oportunidades
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/90 mb-6 max-w-2xl"
          >
            Encontre as melhores oportunidades de trabalho ou os talentos ideais para sua empresa.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3"
          >
            <motion.button
              onClick={() => navigate('/vagas')}
              className="px-6 py-3 bg-white text-primary font-semibold rounded-lg flex items-center gap-2 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Vagas
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              onClick={() => navigate('/empresas')}
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
              whileTap={{ scale: 0.95 }}
            >
              Empresas Parceiras
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="nexus-card text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-2" style={{ color: stat.color }} />
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vagas em Destaque */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Star className="text-accent" size={24} />
              Vagas em Destaque
            </h2>
            <motion.button
              onClick={() => navigate('/vagas')}
              className="text-accent text-sm font-semibold flex items-center gap-1"
              whileHover={{ x: 3 }}
            >
              Ver todas
              <ArrowRight size={16} />
            </motion.button>
          </div>

          <div className="space-y-4">
            {vagasDestaque.map((vaga, index) => (
              <motion.div
                key={vaga.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="nexus-card cursor-pointer"
                onClick={() => navigate(`/vaga/${vaga.id}`)}
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                    {vaga.sigla}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white mb-1">{vaga.titulo}</h3>
                    <p className="text-sm text-gray-400 mb-2">{vaga.empresa}</p>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {vaga.localizacao}
                      </span>
                      <span>•</span>
                      <span>{vaga.tipo}</span>
                      <span>•</span>
                      <span className="text-accent font-semibold">{vaga.salario}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {vaga.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-accent text-xs font-semibold rounded border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="flex-shrink-0"
                  >
                    <ArrowRight className="text-gray-400" size={20} />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 nexus-card text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-accent/20"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Pronto para começar?</h3>
          <p className="text-gray-300 mb-4">
            Crie sua conta gratuita e encontre a oportunidade perfeita
          </p>
          <motion.button
            className="nexus-btn-primary px-8 py-3 w-auto mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Criar Conta Gratuita
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
