import { useState } from 'react';
import { Home, Briefcase, Plus, Building2, User, Search, Bell, MoreVertical, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Vagas() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('vagas');
  const [favoritos, setFavoritos] = useState({});
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const todasVagas = [
    {
      id: 1,
      titulo: 'Desenvolvimento Mobile',
      empresa: 'TS',
      nomeEmpresa: 'Tech Solutions',
      descricao: 'Buscamos desenvolvedor mobile com experiência em React Native para projeto inovador',
      tags: ['React Native', 'Mobile', 'Remote']
    },
    {
      id: 2,
      titulo: 'Designer UI/UX',
      empresa: 'CS',
      nomeEmpresa: 'Creative Studio',
      descricao: 'Profissional criativo para desenvolver interfaces modernas e intuitivas',
      tags: ['Figma', 'Design', 'UX']
    },
    {
      id: 3,
      titulo: 'Desenvolvedor Full Stack',
      empresa: 'SI',
      nomeEmpresa: 'StartUp Inc',
      descricao: 'Desenvolvedor versátil para trabalhar com tecnologias front e backend',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 4,
      titulo: 'Analista de Dados',
      empresa: 'GC',
      nomeEmpresa: 'Global Corp',
      descricao: 'Profissional para análise de dados e criação de dashboards',
      tags: ['Python', 'SQL', 'Power BI']
    },
    {
      id: 5,
      titulo: 'DevOps Engineer',
      empresa: 'TS',
      nomeEmpresa: 'Tech Solutions',
      descricao: 'Especialista em infraestrutura e automação de processos',
      tags: ['AWS', 'Docker', 'Kubernetes']
    }
  ];

  const vagas = todasVagas.filter(vaga =>
    vaga.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaga.nomeEmpresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaga.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
    vaga.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleFavorito = (id) => {
    setFavoritos(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleNavigation = (tab) => {
    setActiveTab(tab);
    if (tab === 'inicio') {
      navigate('/home');
    } else if (tab === 'criar') {
      navigate('/criar-vaga');
    } else if (tab === 'empresas') {
      navigate('/empresas');
    } else if (tab === 'usuario') {
      navigate('/perfil');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-card border-b border-border px-4 py-4 sticky top-0 z-10 backdrop-blur-sm bg-card/95"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="nexus-avatar">JP</div>
            <span className="text-white font-semibold">João Paulo</span>
          </motion.div>
          <div className="flex items-center gap-4">
            <motion.button
              className="text-gray-400 hover:text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Search size={24} />
            </motion.button>
            <motion.button
              className="text-gray-400 hover:text-white transition-colors relative"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell size={24} />
              <motion.span
                className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                  boxShadow: '0 0 10px rgba(255, 7, 58, 0.8)'
                }}
              />
            </motion.button>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="max-w-4xl mx-auto mt-4 overflow-hidden"
            >
              <input
                type="text"
                placeholder="Buscar por título, empresa, descrição ou tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="nexus-input"
                autoFocus
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Título */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl font-bold mb-2"
          style={{
            background: 'linear-gradient(135deg, #8B0000 0%, #FF073A 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255, 7, 58, 0.3)'
          }}
        >
          Vagas Disponíveis
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-gray-400 mb-8"
        >
          {vagas.length} {vagas.length === 1 ? 'vaga encontrada' : 'vagas encontradas'}
        </motion.p>

        {/* Lista de Vagas */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {vagas.map((vaga) => (
            <motion.div
              key={vaga.id}
              variants={cardVariants}
              className="nexus-card group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate(`/vaga/${vaga.id}`)}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="nexus-avatar flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {vaga.empresa}
                </motion.div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">
                        {vaga.titulo}
                      </h3>
                      <p className="text-sm text-gray-500">{vaga.nomeEmpresa}</p>
                    </div>
                    <motion.button
                      className="text-gray-400 hover:text-white transition-colors flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <MoreVertical size={20} />
                    </motion.button>
                  </div>
                  <p className="text-gray-400 mb-3">{vaga.descricao}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {vaga.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-accent text-xs font-semibold rounded-full border border-accent/20"
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: 'rgba(255, 7, 58, 0.2)',
                          boxShadow: '0 0 15px rgba(255, 7, 58, 0.3)'
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorito(vaga.id);
                  }}
                  className={`flex-shrink-0 transition-colors ${
                    favoritos[vaga.id] ? 'text-accent' : 'text-gray-400 hover:text-accent'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Bookmark
                    size={20}
                    fill={favoritos[vaga.id] ? 'currentColor' : 'none'}
                  />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {vagas.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Briefcase size={64} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">Nenhuma vaga encontrada</p>
            <p className="text-gray-500 text-sm mt-2">Tente ajustar sua busca</p>
          </motion.div>
        )}
      </div>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="fixed bottom-0 left-0 right-0 bg-card border-t border-border backdrop-blur-sm bg-card/95"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-around py-3">
            <motion.button
              onClick={() => handleNavigation('inicio')}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all ${
                activeTab === 'inicio'
                  ? 'text-accent'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Home size={24} />
              <span className="text-xs font-medium">Início</span>
            </motion.button>

            <motion.button
              onClick={() => handleNavigation('vagas')}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all ${
                activeTab === 'vagas'
                  ? 'bg-gradient-to-r from-primary/20 to-accent/20 text-accent'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={activeTab === 'vagas' ? {
                boxShadow: '0 0 20px rgba(255, 7, 58, 0.3)'
              } : {}}
            >
              <Briefcase size={24} />
              <span className="text-xs font-medium">Vagas</span>
            </motion.button>

            <motion.button
              onClick={() => handleNavigation('criar')}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all ${
                activeTab === 'criar'
                  ? 'text-accent'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Plus size={24} />
              <span className="text-xs font-medium">Criar</span>
            </motion.button>

            <motion.button
              onClick={() => handleNavigation('empresas')}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all ${
                activeTab === 'empresas'
                  ? 'text-accent'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Building2 size={24} />
              <span className="text-xs font-medium">Empresas</span>
            </motion.button>

            <motion.button
              onClick={() => handleNavigation('usuario')}
              className={`flex flex-col items-center gap-1 px-6 py-2 rounded-lg transition-all ${
                activeTab === 'usuario'
                  ? 'text-accent'
                  : 'text-gray-400 hover:text-white'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <User size={24} />
              <span className="text-xs font-medium">Perfil</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
