import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, GraduationCap, Star, Mail, FileText, TrendingUp, Users, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function InicioEmpresa() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    { label: 'Vagas Ativas', value: '8', icon: Briefcase },
    { label: 'Candidatos', value: '45', icon: Users },
    { label: 'Visualizações', value: '1.2k', icon: TrendingUp }
  ];

  const estagiarios = [
    {
      id: 1,
      nome: 'Ana Carolina',
      avatar: 'AC',
      curso: 'Ciência da Computação',
      universidade: 'USP',
      skills: ['React', 'Node.js', 'Python'],
      rating: 4.9,
      projetos: 12,
      destaque: true
    },
    {
      id: 2,
      nome: 'Pedro Henrique',
      avatar: 'PH',
      curso: 'Engenharia de Software',
      universidade: 'UNICAMP',
      skills: ['JavaScript', 'Vue.js', 'MongoDB'],
      rating: 4.7,
      projetos: 8,
      destaque: false
    },
    {
      id: 3,
      nome: 'Julia Santos',
      avatar: 'JS',
      curso: 'Design Digital',
      universidade: 'UFRJ',
      skills: ['Figma', 'UI/UX', 'Adobe XD'],
      rating: 4.8,
      projetos: 15,
      destaque: true
    }
  ];

  const publicacoesRecentes = [
    {
      id: 1,
      tipo: 'vaga',
      titulo: 'Desenvolvedor Full Stack',
      candidatos: 12,
      visualizacoes: 234,
      tempo: '2h atrás'
    },
    {
      id: 2,
      tipo: 'post',
      titulo: 'Novidades na empresa',
      curtidas: 89,
      visualizacoes: 567,
      tempo: '1d atrás'
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-br from-primary via-accent to-primary p-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Painel Empresarial</h1>
          <p className="text-gray-200">Encontre os melhores talentos</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="grid grid-cols-3 gap-3 mb-6"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="nexus-card text-center">
              <stat.icon className="w-5 h-5 mx-auto mb-1.5 text-accent" />
              <div className="text-lg font-bold text-white mb-0.5">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Busca Rápida */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar estagiários por habilidades..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="nexus-input pl-12"
            />
          </div>
        </motion.div>

        {/* Estagiários em Destaque */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Estagiários em Destaque</h2>
            <button
              onClick={() => navigate('/estagiarios')}
              className="text-accent text-sm font-semibold hover:underline"
            >
              Ver todos →
            </button>
          </div>

          <div className="space-y-3">
            {estagiarios.map((est, index) => (
              <motion.div
                key={est.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="nexus-card cursor-pointer"
                onClick={() => navigate('/estagiarios')}
              >
                {est.destaque && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 bg-accent rounded-full text-xs font-bold text-white">
                      ⭐ Destaque
                    </span>
                  </div>
                )}

                <div className="flex gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    {est.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold mb-0.5">{est.nome}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                      <GraduationCap size={14} className="text-accent" />
                      <span>{est.curso} - {est.universidade}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {est.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-primary/10 text-accent text-xs font-semibold rounded border border-accent/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-accent" fill="currentColor" />
                        {est.rating}
                      </span>
                      <span>•</span>
                      <span>{est.projetos} projetos</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        alert('Ver currículo');
                      }}
                      className="px-3 py-1.5 bg-gradient-to-r from-primary to-accent text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                    >
                      <FileText size={12} />
                      Ver CV
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate('/mensagens');
                      }}
                      className="px-3 py-1.5 bg-card border border-border text-gray-300 rounded-lg text-xs font-semibold hover:border-accent transition-colors flex items-center gap-1"
                    >
                      <Mail size={12} />
                      Contatar
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Minhas Publicações Recentes */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-white">Publicações Recentes</h2>
            <button
              onClick={() => navigate('/minhas-publicacoes')}
              className="text-accent text-sm font-semibold hover:underline"
            >
              Ver todas →
            </button>
          </div>

          <div className="space-y-3">
            {publicacoesRecentes.map((pub) => (
              <div key={pub.id} className="nexus-card">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white font-bold">{pub.titulo}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    pub.tipo === 'vaga'
                      ? 'bg-accent/20 text-accent border border-accent/30'
                      : 'bg-primary/20 text-primary border border-primary/30'
                  }`}>
                    {pub.tipo === 'vaga' ? '💼 Vaga' : '📝 Post'}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  {pub.tipo === 'vaga' ? (
                    <>
                      <span>{pub.candidatos} candidatos</span>
                      <span>•</span>
                    </>
                  ) : (
                    <>
                      <span>{pub.curtidas} curtidas</span>
                      <span>•</span>
                    </>
                  )}
                  <span>{pub.visualizacoes} visualizações</span>
                  <span>•</span>
                  <span>{pub.tempo}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
