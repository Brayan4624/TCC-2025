import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, MapPin, Users, Globe, Mail, Phone, Star, TrendingUp, Briefcase, Award, Settings, Edit2, Share2, X, Plus, Trash2, Camera, Upload } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function PerfilEmpresa() {
  const navigate = useNavigate();

  const [empresa, setEmpresa] = useState({
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
  });

  const [beneficios, setBeneficios] = useState([
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
  ]);

  const [galeria, setGaleria] = useState([
    { id: 1, tipo: 'Escritório', descricao: 'Nosso espaço de trabalho' },
    { id: 2, tipo: 'Equipe', descricao: 'Time de desenvolvimento' },
    { id: 3, tipo: 'Eventos', descricao: 'Happy hour mensal' },
    { id: 4, tipo: 'Ambiente', descricao: 'Área de descanso' }
  ]);

  const [modalEditarSobre, setModalEditarSobre] = useState(false);
  const [modalEditarInfo, setModalEditarInfo] = useState(false);
  const [modalAdicionarBeneficio, setModalAdicionarBeneficio] = useState(false);
  const [modalAdicionarFoto, setModalAdicionarFoto] = useState(false);

  const [sobreTemp, setSobreTemp] = useState(empresa.sobre);
  const [novoBeneficio, setNovoBeneficio] = useState('');
  const [novaFoto, setNovaFoto] = useState({ tipo: '', descricao: '' });
  const [infoTemp, setInfoTemp] = useState({ ...empresa });

  const estatisticas = [
    { label: 'Vagas Publicadas', value: '24', icon: Briefcase, color: 'text-blue-400' },
    { label: 'Candidatos', value: '156', icon: Users, color: 'text-green-400' },
    { label: 'Contratações', value: '18', icon: Award, color: 'text-purple-400' },
    { label: 'Visualizações', value: '2.4k', icon: TrendingUp, color: 'text-accent' }
  ];

  const vagas = [
    { id: 1, titulo: 'Desenvolvedor Full Stack', tipo: 'CLT', candidatos: 12, status: 'ativa' },
    { id: 2, titulo: 'Designer UI/UX', tipo: 'PJ', candidatos: 8, status: 'ativa' },
    { id: 3, titulo: 'Product Manager', tipo: 'CLT', candidatos: 15, status: 'pausada' }
  ];

  const salvarSobre = () => {
    setEmpresa({ ...empresa, sobre: sobreTemp });
    setModalEditarSobre(false);
  };

  const salvarInfo = () => {
    setEmpresa(infoTemp);
    setModalEditarInfo(false);
  };

  const adicionarBeneficio = () => {
    if (novoBeneficio.trim() && !beneficios.includes(novoBeneficio.trim())) {
      setBeneficios([...beneficios, novoBeneficio.trim()]);
      setNovoBeneficio('');
      setModalAdicionarBeneficio(false);
    }
  };

  const removerBeneficio = (beneficio) => {
    if (confirm(`Remover "${beneficio}" dos benefícios?`)) {
      setBeneficios(beneficios.filter(b => b !== beneficio));
    }
  };

  const adicionarFoto = () => {
    if (novaFoto.tipo.trim() && novaFoto.descricao.trim()) {
      setGaleria([...galeria, { id: Date.now(), ...novaFoto }]);
      setNovaFoto({ tipo: '', descricao: '' });
      setModalAdicionarFoto(false);
    }
  };

  const removerFoto = (id) => {
    if (confirm('Remover esta foto da galeria?')) {
      setGaleria(galeria.filter(f => f.id !== id));
    }
  };

  const compartilhar = () => {
    if (navigator.share) {
      navigator.share({
        title: empresa.nome,
        text: empresa.slogan,
        url: window.location.href
      });
    } else {
      alert('Link copiado: ' + window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Cover + Avatar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative"
      >
        {/* Cover */}
        <div className="relative h-48 bg-gradient-to-br from-primary via-accent to-primary group">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-lg backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
            title="Alterar capa"
          >
            <Camera size={20} />
          </motion.button>
        </div>
        
        {/* Avatar e Info Principal */}
        <div className="max-w-4xl mx-auto px-4">
          <div className="relative -mt-16 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
              {/* Avatar */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-5xl border-4 border-background shadow-2xl">
                  {empresa.sigla}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute bottom-0 right-0 p-2 bg-accent text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  title="Alterar logo"
                >
                  <Camera size={16} />
                </motion.button>
              </motion.div>

              {/* Info */}
              <div className="flex-1">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
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
                        onClick={() => setModalEditarInfo(true)}
                        className="p-2 bg-card border border-border text-gray-300 rounded-lg hover:border-accent transition-colors"
                        title="Editar informações"
                      >
                        <Edit2 size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={compartilhar}
                        className="p-2 bg-card border border-border text-gray-300 rounded-lg hover:border-accent transition-colors"
                        title="Compartilhar perfil"
                      >
                        <Share2 size={18} />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/configuracoes')}
                        className="p-2 bg-card border border-border text-gray-300 rounded-lg hover:border-accent transition-colors"
                        title="Configurações"
                      >
                        <Settings size={18} />
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
                onClick={() => {
                  setSobreTemp(empresa.sobre);
                  setModalEditarSobre(true);
                }}
                className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors"
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
                <a href={`https://${empresa.website}`} className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                  {empresa.website}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} className="text-accent" />
                <a href={`mailto:${empresa.email}`} className="hover:text-accent transition-colors">
                  {empresa.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} className="text-accent" />
                <a href={`tel:${empresa.telefone}`} className="hover:text-accent transition-colors">
                  {empresa.telefone}
                </a>
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
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Benefícios</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setModalAdicionarBeneficio(true)}
                className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors flex items-center gap-1 text-sm font-semibold"
              >
                <Plus size={16} />
                Adicionar
              </motion.button>
            </div>
            <div className="flex flex-wrap gap-2">
              {beneficios.map((beneficio) => (
                <span
                  key={beneficio}
                  className="group px-3 py-1.5 bg-primary/10 text-accent text-sm font-semibold rounded-full border border-accent/30 flex items-center gap-2 hover:bg-primary/20 transition-colors"
                >
                  {beneficio}
                  <button
                    onClick={() => removerBeneficio(beneficio)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity hover:text-red-400"
                  >
                    <X size={14} />
                  </button>
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
                <div key={vaga.id} className="p-3 bg-card border border-border rounded-lg hover:border-accent transition-colors cursor-pointer">
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
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Galeria</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setModalAdicionarFoto(true)}
                className="p-2 text-accent hover:bg-accent/10 rounded-lg transition-colors flex items-center gap-1 text-sm font-semibold"
              >
                <Plus size={16} />
                Adicionar
              </motion.button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {galeria.map((item) => (
                <div key={item.id} className="group relative aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg border border-border hover:border-accent transition-colors cursor-pointer flex flex-col items-center justify-center p-4 text-center">
                  <button
                    onClick={() => removerFoto(item.id)}
                    className="absolute top-2 right-2 p-1 bg-red-500/80 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Trash2 size={14} />
                  </button>
                  <div className="text-4xl mb-2">📸</div>
                  <h4 className="text-white font-bold text-sm mb-1">{item.tipo}</h4>
                  <p className="text-gray-400 text-xs">{item.descricao}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Modal Editar Sobre */}
      <AnimatePresence>
        {modalEditarSobre && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setModalEditarSobre(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-xl p-6 max-w-2xl w-full"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Editar Sobre</h3>
                <button onClick={() => setModalEditarSobre(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <textarea
                value={sobreTemp}
                onChange={(e) => setSobreTemp(e.target.value)}
                className="nexus-input min-h-[200px] resize-none mb-4"
                placeholder="Descreva sua empresa..."
              />
              <div className="flex gap-3">
                <button onClick={salvarSobre} className="nexus-btn-primary flex-1">
                  Salvar
                </button>
                <button onClick={() => setModalEditarSobre(false)} className="nexus-btn-secondary flex-1">
                  Cancelar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Editar Info */}
      <AnimatePresence>
        {modalEditarInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setModalEditarInfo(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-xl p-6 max-w-2xl w-full my-8"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Editar Informações</h3>
                <button onClick={() => setModalEditarInfo(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-bold text-white mb-1">Nome da Empresa</label>
                  <input
                    type="text"
                    value={infoTemp.nome}
                    onChange={(e) => setInfoTemp({ ...infoTemp, nome: e.target.value })}
                    className="nexus-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-1">Slogan</label>
                  <input
                    type="text"
                    value={infoTemp.slogan}
                    onChange={(e) => setInfoTemp({ ...infoTemp, slogan: e.target.value })}
                    className="nexus-input"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-bold text-white mb-1">Setor</label>
                    <input
                      type="text"
                      value={infoTemp.setor}
                      onChange={(e) => setInfoTemp({ ...infoTemp, setor: e.target.value })}
                      className="nexus-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-1">Tamanho</label>
                    <input
                      type="text"
                      value={infoTemp.tamanho}
                      onChange={(e) => setInfoTemp({ ...infoTemp, tamanho: e.target.value })}
                      className="nexus-input"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-1">Localização</label>
                  <input
                    type="text"
                    value={infoTemp.localizacao}
                    onChange={(e) => setInfoTemp({ ...infoTemp, localizacao: e.target.value })}
                    className="nexus-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-1">Website</label>
                  <input
                    type="text"
                    value={infoTemp.website}
                    onChange={(e) => setInfoTemp({ ...infoTemp, website: e.target.value })}
                    className="nexus-input"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-bold text-white mb-1">Email</label>
                    <input
                      type="email"
                      value={infoTemp.email}
                      onChange={(e) => setInfoTemp({ ...infoTemp, email: e.target.value })}
                      className="nexus-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-white mb-1">Telefone</label>
                    <input
                      type="tel"
                      value={infoTemp.telefone}
                      onChange={(e) => setInfoTemp({ ...infoTemp, telefone: e.target.value })}
                      className="nexus-input"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button onClick={salvarInfo} className="nexus-btn-primary flex-1">
                  Salvar Alterações
                </button>
                <button onClick={() => setModalEditarInfo(false)} className="nexus-btn-secondary flex-1">
                  Cancelar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Adicionar Benefício */}
      <AnimatePresence>
        {modalAdicionarBeneficio && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setModalAdicionarBeneficio(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-xl p-6 max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Adicionar Benefício</h3>
                <button onClick={() => setModalAdicionarBeneficio(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <input
                type="text"
                value={novoBeneficio}
                onChange={(e) => setNovoBeneficio(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && adicionarBeneficio()}
                placeholder="Ex: Vale Alimentação"
                className="nexus-input mb-4"
                autoFocus
              />
              <div className="flex gap-3">
                <button onClick={adicionarBeneficio} className="nexus-btn-primary flex-1">
                  Adicionar
                </button>
                <button onClick={() => setModalAdicionarBeneficio(false)} className="nexus-btn-secondary flex-1">
                  Cancelar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal Adicionar Foto */}
      <AnimatePresence>
        {modalAdicionarFoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setModalAdicionarFoto(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card border border-border rounded-xl p-6 max-w-md w-full"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Adicionar Foto</h3>
                <button onClick={() => setModalAdicionarFoto(false)} className="text-gray-400 hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <div className="space-y-3 mb-4">
                <div>
                  <label className="block text-sm font-bold text-white mb-1">Tipo</label>
                  <input
                    type="text"
                    value={novaFoto.tipo}
                    onChange={(e) => setNovaFoto({ ...novaFoto, tipo: e.target.value })}
                    placeholder="Ex: Escritório, Equipe, Eventos..."
                    className="nexus-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-1">Descrição</label>
                  <input
                    type="text"
                    value={novaFoto.descricao}
                    onChange={(e) => setNovaFoto({ ...novaFoto, descricao: e.target.value })}
                    placeholder="Ex: Nosso espaço de trabalho"
                    className="nexus-input"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-white mb-1">Upload de Imagem</label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-accent transition-colors cursor-pointer">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-400 text-sm">Clique para fazer upload</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <button onClick={adicionarFoto} className="nexus-btn-primary flex-1">
                  Adicionar
                </button>
                <button onClick={() => setModalAdicionarFoto(false)} className="nexus-btn-secondary flex-1">
                  Cancelar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
}
