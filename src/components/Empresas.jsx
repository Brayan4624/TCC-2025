import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Users, Briefcase, Star, TrendingUp, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Empresas() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todas');

  const categorias = [
    { id: 'todas', label: 'Todas' },
    { id: 'tech', label: 'Tecnologia' },
    { id: 'startup', label: 'Startups' },
    { id: 'enterprise', label: 'Empresas' }
  ];

  const empresas = [
    {
      id: 1,
      nome: 'Tech Solutions',
      sigla: 'TS',
      categoria: 'tech',
      localizacao: 'São Paulo, SP',
      funcionarios: '500+',
      vagasAbertas: 12,
      descricao: 'Empresa líder em soluções tecnológicas inovadoras',
      rating: 4.8,
      destaque: true
    },
    {
      id: 2,
      nome: 'Creative Studio',
      sigla: 'CS',
      categoria: 'startup',
      localizacao: 'Rio de Janeiro, RJ',
      funcionarios: '50-100',
      vagasAbertas: 5,
      descricao: 'Studio criativo focado em design e experiência do usuário',
      rating: 4.6,
      destaque: false
    },
    {
      id: 3,
      nome: 'StartUp Inc',
      sigla: 'SI',
      categoria: 'startup',
      localizacao: 'Florianópolis, SC',
      funcionarios: '20-50',
      vagasAbertas: 8,
      descricao: 'Startup em crescimento acelerado no setor de fintech',
      rating: 4.9,
      destaque: true
    },
    {
      id: 4,
      nome: 'Global Corp',
      sigla: 'GC',
      categoria: 'enterprise',
      localizacao: 'São Paulo, SP',
      funcionarios: '1000+',
      vagasAbertas: 25,
      descricao: 'Corporação multinacional com presença global',
      rating: 4.5,
      destaque: false
    }
  ];

  const filteredEmpresas = empresas.filter(empresa => {
    const matchesSearch = empresa.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         empresa.descricao.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'todas' || empresa.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-br from-primary via-accent to-primary p-8"
        style={{
          boxShadow: '0 0 60px rgba(255, 7, 58, 0.3)'
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Empresas Parceiras</h1>
          <p className="text-gray-200">Conheça as empresas que estão contratando</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Busca */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar empresas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="nexus-input pl-12"
            />
          </div>
        </motion.div>

        {/* Categorias */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex gap-3 mb-8 overflow-x-auto pb-2"
        >
          {categorias.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'bg-card text-gray-400 border border-border hover:border-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={selectedCategory === cat.id ? {
                boxShadow: '0 0 20px rgba(255, 7, 58, 0.4)'
              } : {}}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Lista de Empresas */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredEmpresas.map((empresa) => (
            <motion.div
              key={empresa.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.02 }}
              className="nexus-card relative overflow-hidden"
            >
              {empresa.destaque && (
                <div className="absolute top-4 right-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="px-3 py-1 bg-accent rounded-full text-xs font-bold text-white flex items-center gap-1"
                    style={{
                      boxShadow: '0 0 20px rgba(255, 7, 58, 0.6)'
                    }}
                  >
                    <TrendingUp size={14} />
                    Destaque
                  </motion.div>
                </div>
              )}

              <div className="flex gap-4">
                {/* Avatar Empresa */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-bold text-white flex-shrink-0"
                  style={{
                    boxShadow: '0 0 30px rgba(255, 7, 58, 0.4)'
                  }}
                >
                  {empresa.sigla}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-2xl font-bold text-white mb-1">{empresa.nome}</h3>
                  <p className="text-gray-400 mb-3">{empresa.descricao}</p>

                  {/* Detalhes */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} className="text-accent" />
                      {empresa.localizacao}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users size={16} className="text-accent" />
                      {empresa.funcionarios} funcionários
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={16} className="text-accent" fill="currentColor" />
                      {empresa.rating}
                    </span>
                  </div>

                  {/* Vagas */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-accent font-semibold">
                      <Briefcase size={18} />
                      <span>{empresa.vagasAbertas} vagas abertas</span>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold text-sm"
                      style={{
                        boxShadow: '0 0 20px rgba(255, 7, 58, 0.3)'
                      }}
                    >
                      Ver Vagas
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredEmpresas.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Building2 size={64} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">Nenhuma empresa encontrada</p>
          </motion.div>
        )}

        {/* Botão Voltar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <motion.button
            onClick={() => navigate('/vagas')}
            className="text-gray-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Voltar para Vagas
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
