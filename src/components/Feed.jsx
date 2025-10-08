import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2, Bookmark, MoreVertical, TrendingUp, Briefcase, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

import BottomNav from './BottomNav';

export default function Feed() {
  const navigate = useNavigate();
  const { userType } = useUser();

  // Se for empresa, redirecionar para InicioEmpresa
  if (userType === 'empresa') {
    navigate('/inicio-empresa');
    return null;
  }
  const [curtidas, setCurtidas] = useState({});
  const [salvos, setSalvos] = useState({});

  const postagens = [
    {
      id: 1,
      tipo: 'empresa',
      autor: 'Tech Solutions',
      avatar: 'TS',
      cargo: 'Empresa de Tecnologia',
      tempo: '2h atrás',
      conteudo: 'Estamos contratando! 🚀 Procuramos desenvolvedores Full Stack apaixonados por tecnologia. Venha fazer parte do nosso time!',
      tags: ['Vaga', 'Full Stack', 'React'],
      curtidas: 45,
      comentarios: 12,
      imagem: null
    },
    {
      id: 2,
      tipo: 'estudante',
      autor: 'Maria Silva',
      avatar: 'MS',
      cargo: 'Estudante de Engenharia de Software',
      tempo: '5h atrás',
      conteudo: 'Acabei de concluir meu projeto de TCC! Foi uma jornada incrível desenvolvendo uma plataforma de e-learning. Agradeço a todos que me ajudaram! 🎓',
      tags: ['TCC', 'Projeto', 'E-learning'],
      curtidas: 128,
      comentarios: 24,
      imagem: null
    },
    {
      id: 3,
      tipo: 'empresa',
      autor: 'Creative Studio',
      avatar: 'CS',
      cargo: 'Design & Innovation',
      tempo: '1d atrás',
      conteudo: 'Nosso time está crescendo! Buscamos designers UI/UX que queiram trabalhar em projetos desafiadores e inovadores. 🎨',
      tags: ['Design', 'UI/UX', 'Oportunidade'],
      curtidas: 67,
      comentarios: 18,
      imagem: null
    },
    {
      id: 4,
      tipo: 'estudante',
      autor: 'Carlos Santos',
      avatar: 'CS',
      cargo: 'Desenvolvedor Mobile',
      tempo: '2d atrás',
      conteudo: 'Compartilhando meu primeiro app publicado na Play Store! 📱 Foi um desafio e tanto, mas valeu cada linha de código. Obrigado pela comunidade incrível!',
      tags: ['Mobile', 'React Native', 'Conquista'],
      curtidas: 203,
      comentarios: 45,
      imagem: null
    }
  ];

  const toggleCurtida = (id) => {
    setCurtidas(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleSalvo = (id) => {
    setSalvos(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const stats = [
    { label: 'Conexões', value: '1,234', icon: TrendingUp },
    { label: 'Vagas Salvas', value: '23', icon: Bookmark },
    { label: 'Aplicações', value: '12', icon: Briefcase }
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-card border-b border-border px-4 py-4 sticky top-0 z-10 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-white">Feed</h1>
          <p className="text-gray-400 text-sm">Acompanhe as últimas atualizações</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Stats Cards */}
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

        {/* Criar Postagem */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="nexus-card mb-6"
        >
          <div className="flex items-center gap-3">
            <div className="nexus-avatar flex-shrink-0">JP</div>
            <button
              className="flex-1 nexus-input text-left text-gray-400"
              onClick={() => {
                if (userType === 'empresa') {
                  navigate('/criar-vaga');
                } else {
                  alert('Funcionalidade de criar postagem em desenvolvimento!');
                }
              }}
            >
              {userType === 'empresa' ? 'Publicar uma vaga...' : 'Compartilhe algo interessante...'}
            </button>
          </div>
        </motion.div>

        {/* Feed de Postagens */}
        <div className="space-y-4">
          {postagens.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="nexus-card"
            >
              {/* Header do Post */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                    post.tipo === 'empresa' 
                      ? 'bg-gradient-to-br from-primary to-accent' 
                      : 'bg-gradient-to-br from-accent to-primary'
                  }`}>
                    {post.avatar}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">{post.autor}</h3>
                    <p className="text-gray-400 text-xs">{post.cargo}</p>
                    <p className="text-gray-500 text-xs">{post.tempo}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-white"
                >
                  <MoreVertical size={18} />
                </motion.button>
              </div>

              {/* Conteúdo */}
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                {post.conteudo}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary/10 text-accent text-xs font-semibold rounded border border-accent/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 pb-3 border-b border-border">
                <span>{curtidas[post.id] ? post.curtidas + 1 : post.curtidas} curtidas</span>
                <span>{post.comentarios} comentários</span>
              </div>

              {/* Ações */}
              <div className="flex items-center justify-around">
                <motion.button
                  onClick={() => toggleCurtida(post.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    curtidas[post.id] 
                      ? 'text-accent' 
                      : 'text-gray-400 hover:text-white hover:bg-card'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart size={18} fill={curtidas[post.id] ? 'currentColor' : 'none'} />
                  <span className="text-sm font-medium">Curtir</span>
                </motion.button>

                <motion.button
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-card transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={18} />
                  <span className="text-sm font-medium">Comentar</span>
                </motion.button>

                <motion.button
                  onClick={() => toggleSalvo(post.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                    salvos[post.id] 
                      ? 'text-accent' 
                      : 'text-gray-400 hover:text-white hover:bg-card'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bookmark size={18} fill={salvos[post.id] ? 'currentColor' : 'none'} />
                  <span className="text-sm font-medium">Salvar</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
