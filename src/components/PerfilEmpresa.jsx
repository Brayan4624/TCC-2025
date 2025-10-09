import { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Users, Globe, Mail, Phone, Star, TrendingUp, Briefcase, Award, Settings, Edit2, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function PerfilEmpresa() {
  const navigate = useNavigate();

  const empresa = {
    nome: 'Tech Solutions',
    sigla: 'TS',
    slogan: 'Inovação e Tecnologia para o Futuro',
    sobre: 'Somos uma empresa líder em desenvolvimento de software, focada em criar soluções inovadoras para empresas de todos os tamanhos. Com mais de 10 anos de experiência, ajudamos nossos clientes a transformar seus negócios através da tecnologia.',
    setor: 'Tecnologia da Informação',
    tamanho: '50-200 funcionários',
    fundacao: '2014',
    localizacao: 'São Paulo, SP',
    website: 'www.techsolutions.com.br',
    email: 'contato@techsolutions.com',
    telefone: '(11) 3456-7890',
    rating: 4.8,
    avaliacoes: 127
  };

  const estatisticas = [
    { label: 'Vagas Publicadas', value: '24', icon: Briefcase, color: 'text-blue-400' },
    { label: 'Candidatos', value: '156', icon: Users, color: 'text-green-400' },
    { label: 'Contratações', value: '18', icon: Award, color: 'text-purple-400' },
    { label: 'Visualizações', value: '2.4k', icon: TrendingUp, color: 'text-accent' }
  ];

  const beneficios = [
    'Vale Refeição',
    'Vale Transporte',
    'Plano de Saúde',
    'Plano Odontológico',
    'Home Office',
    'Horário Flexível',
    'Gympass',
    'Seguro de Vida',
    'PLR',
    'Day Off Aniversário',
    'Cursos e Certificações',
    'Ambiente Descontraído'
  ];

  const vagas = [
    {
      id: 1,
      titulo: 'Desenvolvedor Full Stack',
      tipo: 'CLT',
      candidatos: 12,
      status: 'ativa'
    },
    {
      id: 2,
      titulo: 'Designer UI/UX',
      tipo: 'PJ',
      candidatos: 8,
      status: 'ativa'
    },
    {
      id: 3,
      titulo: 'Product Manager',
      tipo: 'CLT',
      candidatos: 15,
      status: 'pausada'
    }
  ];

  const galeria = [
    { id: 1, tipo: 'Escritório', descricao: 'Nosso espaço de trabalho' },
    { id: 2, tipo: 'Equipe', descricao: 'Time de desenvolvimento' },
    { id: 3, tipo: 'Eventos', descricao: 'Happy hour mensal' },
    { id: 4, tipo: 'Ambiente', descricao: 'Área de descanso' }
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Cover + Avatar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        {/* Cover */}
        <div className="h-48 bg-gradient-to-br from-primary via-accent to-primary"></div>
        
        {/* Avatar e Info Principal */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative -mt-16 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-5xl border-4 border-background shadow-2xl"
              >
                {empresa.sigla}
              </motion.div>

              {/* Info */}
              <div className="flex-1">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h1 className="text-3xl font-bold text-white mb-1">{empresa.nome}</h1>
                      <p className="text-accent text-sm font-semibold mb-2">{empresa.slogan}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Building2 size={16} />
                        <span>{empresa.setor}</span>
                        <span>•</span>
                        <Users size={16} />
                        <span>{empresa.tamanho}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/configuracoes')}
                        className="p-2 bg-card border border-border text-gray-300 rounded-lg hover:border-accent transition-colors"
                      >
                        <Settings size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-2 bg-card border border-border text-gray-300 rounded-lg hover:border-accent transition-colors"
                      >
                        <Share2 size={18} />
                      </motion.button>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-2 pt-2 border-t border-border">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < Math.floor(empresa.rating) ? 'text-accent fill-accent' : 'text-gray-600'}
                        />
                      ))}
                    </div>
                    <span className="text-white font-bold">{empresa.rating}</span>
                    <span className="text-gray-400 text-sm">({empresa.avaliacoes} avaliações)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Estatísticas */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6"
          >
            {estatisticas.map((stat) => (
              <div key={stat.label} className="nexus-card text-center">
                <stat.icon className={`w-6 h-6 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Sobre a Empresa */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="nexus-card mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Sobre a Empresa</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-card transition-colors"
              >
                <Edit2 size={16} />
              </motion.button>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">{empresa.sobre}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} className="text-accent" />
                <span>{empresa.localizacao}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Globe size={16} className="text-accent" />
                <a href={`https://${empresa.website}`} className="hover:text-accent transition-colors">
                  {empresa.website}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-accent" />
                <span>{empresa.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-accent" />
                <span>{empresa.telefone}</span>
              </div>
            </div>
          </motion.div>

          {/* Benefícios */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="nexus-card mb-6"
          >
            <h2 className="text-xl font-bold text-white mb-4">Benefícios</h2>
            <div className="flex flex-wrap gap-2">
              {beneficios.map((beneficio) => (
                <span
                  key={beneficio}
                  className="px-3 py-1.5 bg-primary/10 text-accent text-sm font-semibold rounded-full border border-accent/30"
                >
                  {beneficio}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Vagas Ativas */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="nexus-card mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Vagas Ativas</h2>
              <button
                onClick={() => navigate('/minhas-publicacoes')}
                className="text-accent text-sm font-semibold hover:underline"
              >
                Ver todas →
              </button>
            </div>
            <div className="space-y-3">
              {vagas.map((vaga) => (
                <div key={vaga.id} className="p-3 bg-card border border-border rounded-lg hover:border-accent transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold mb-1">{vaga.titulo}</h3>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>{vaga.tipo}</span>
                        <span>•</span>
                        <span>{vaga.candidatos} candidatos</span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      vaga.status === 'ativa'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {vaga.status === 'ativa' ? '✓ Ativa' : '⏸ Pausada'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Galeria */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="nexus-card"
          >
            <h2 className="text-xl font-bold text-white mb-4">Galeria</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {galeria.map((item) => (
                <div key={item.id} className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-border hover:border-accent transition-colors cursor-pointer flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-4xl mb-2">📸</div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.tipo}</h4>
                  <p className="text-gray-400 text-xs">{item.descricao}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <BottomNav />
    </div>
  );
}
