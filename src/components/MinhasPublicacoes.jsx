import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit2, Trash2, Eye, MoreVertical, Users, Heart, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function MinhasPublicacoes() {
  const navigate = useNavigate();
  const [publicacoes, setPublicacoes] = useState([
    {
      id: 1,
      tipo: 'vaga',
      titulo: 'Desenvolvedor Full Stack',
      descricao: 'Buscamos desenvolvedor experiente para projeto inovador',
      data: '2024-01-15',
      status: 'ativa',
      visualizacoes: 234,
      candidatos: 12,
      curtidas: 45
    },
    {
      id: 2,
      tipo: 'post',
      titulo: 'Novidades na empresa',
      descricao: 'Estamos crescendo e expandindo nosso time!',
      data: '2024-01-10',
      status: 'ativa',
      visualizacoes: 567,
      candidatos: 0,
      curtidas: 89
    },
    {
      id: 3,
      tipo: 'vaga',
      titulo: 'Designer UI/UX',
      descricao: 'Profissional criativo para projetos desafiadores',
      data: '2024-01-05',
      status: 'pausada',
      visualizacoes: 189,
      candidatos: 8,
      curtidas: 34
    }
  ]);

  const removerPublicacao = (id) => {
    if (confirm('Tem certeza que deseja remover esta publicação?')) {
      setPublicacoes(publicacoes.filter(p => p.id !== id));
    }
  };

  const toggleStatus = (id) => {
    setPublicacoes(publicacoes.map(p => 
      p.id === id 
        ? { ...p, status: p.status === 'ativa' ? 'pausada' : 'ativa' }
        : p
    ));
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-br from-primary via-accent to-primary p-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Minhas Publicações</h1>
          <p className="text-gray-200">Gerencie suas vagas e postagens</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="grid grid-cols-3 gap-3 mb-6"
        >
          <div className="nexus-card text-center">
            <div className="text-2xl font-bold text-white mb-1">
              {publicacoes.filter(p => p.status === 'ativa').length}
            </div>
            <div className="text-xs text-gray-400">Ativas</div>
          </div>
          <div className="nexus-card text-center">
            <div className="text-2xl font-bold text-white mb-1">
              {publicacoes.reduce((acc, p) => acc + p.candidatos, 0)}
            </div>
            <div className="text-xs text-gray-400">Candidatos</div>
          </div>
          <div className="nexus-card text-center">
            <div className="text-2xl font-bold text-white mb-1">
              {publicacoes.reduce((acc, p) => acc + p.visualizacoes, 0)}
            </div>
            <div className="text-xs text-gray-400">Visualizações</div>
          </div>
        </motion.div>

        {/* Botão Nova Publicação */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          onClick={() => navigate('/criar-vaga')}
          className="nexus-btn-primary mb-6 flex items-center justify-center gap-2"
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <Plus size={18} />
          Nova Publicação
        </motion.button>

        {/* Lista de Publicações */}
        <div className="space-y-4">
          {publicacoes.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="nexus-card"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      pub.tipo === 'vaga' 
                        ? 'bg-accent/20 text-accent border border-accent/30'
                        : 'bg-primary/20 text-primary border border-primary/30'
                    }`}>
                      {pub.tipo === 'vaga' ? '💼 Vaga' : '📝 Post'}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      pub.status === 'ativa'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    }`}>
                      {pub.status === 'ativa' ? '✓ Ativa' : '⏸ Pausada'}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{pub.titulo}</h3>
                  <p className="text-gray-400 text-sm mb-3">{pub.descricao}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Eye size={14} />
                      {pub.visualizacoes} visualizações
                    </span>
                    {pub.tipo === 'vaga' && (
                      <span className="flex items-center gap-1">
                        <Users size={14} />
                        {pub.candidatos} candidatos
                      </span>
                    )}
                    <span className="flex items-center gap-1">
                      <Heart size={14} />
                      {pub.curtidas} curtidas
                    </span>
                    <span>•</span>
                    <span>{new Date(pub.data).toLocaleDateString('pt-BR')}</span>
                  </div>
                </div>
              </div>

              {/* Ações */}
              <div className="flex gap-2 pt-3 border-t border-border">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => toggleStatus(pub.id)}
                  className="flex-1 px-4 py-2 bg-card border border-border text-gray-300 rounded-lg text-sm font-semibold hover:border-accent transition-colors"
                >
                  {pub.status === 'ativa' ? 'Pausar' : 'Ativar'}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 px-4 py-2 bg-card border border-border text-gray-300 rounded-lg text-sm font-semibold hover:border-accent transition-colors flex items-center justify-center gap-2"
                >
                  <Edit2 size={14} />
                  Editar
                </motion.button>
                {pub.tipo === 'vaga' && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg text-sm font-semibold flex items-center justify-center gap-2"
                  >
                    <Users size={14} />
                    Ver Candidatos
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removerPublicacao(pub.id)}
                  className="px-4 py-2 bg-card border border-red-500/30 text-red-400 rounded-lg text-sm font-semibold hover:border-red-500/60 transition-colors"
                >
                  <Trash2 size={14} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {publicacoes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-400 text-lg mb-4">Nenhuma publicação ainda</p>
            <button
              onClick={() => navigate('/criar-vaga')}
              className="nexus-btn-primary px-6 py-3 w-auto mx-auto"
            >
              Criar Primeira Publicação
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
