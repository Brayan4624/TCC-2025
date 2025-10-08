import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Briefcase, Heart, MessageCircle, Users, CheckCheck, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Notificacoes() {
  const navigate = useNavigate();
  const [notificacoes, setNotificacoes] = useState([
    {
      id: 1,
      tipo: 'candidatura',
      titulo: 'Candidatura aceita!',
      mensagem: 'Sua candidatura para Desenvolvedor Full Stack foi aceita pela Tech Solutions',
      lida: false,
      tempo: '5 min atrás',
      link: '/candidaturas'
    },
    {
      id: 2,
      tipo: 'curtida',
      titulo: 'Nova curtida',
      mensagem: 'Tech Solutions curtiu sua postagem sobre projeto TCC',
      lida: false,
      tempo: '1h atrás',
      link: '/feed'
    },
    {
      id: 3,
      tipo: 'comentario',
      titulo: 'Novo comentário',
      mensagem: 'Maria Silva comentou: "Parabéns pelo projeto!"',
      lida: true,
      tempo: '2h atrás',
      link: '/feed'
    },
    {
      id: 4,
      tipo: 'vaga',
      titulo: 'Nova vaga disponível',
      mensagem: 'Uma nova vaga de Designer UI/UX foi publicada',
      lida: true,
      tempo: '1d atrás',
      link: '/vagas'
    },
    {
      id: 5,
      tipo: 'seguidor',
      titulo: 'Novo seguidor',
      mensagem: 'Creative Studio começou a seguir você',
      lida: true,
      tempo: '2d atrás',
      link: '/perfil'
    }
  ]);

  const getIconConfig = (tipo) => {
    switch(tipo) {
      case 'candidatura':
        return { icon: Briefcase, color: 'text-green-400', bg: 'bg-green-500/20' };
      case 'curtida':
        return { icon: Heart, color: 'text-accent', bg: 'bg-accent/20' };
      case 'comentario':
        return { icon: MessageCircle, color: 'text-blue-400', bg: 'bg-blue-500/20' };
      case 'vaga':
        return { icon: Briefcase, color: 'text-primary', bg: 'bg-primary/20' };
      case 'seguidor':
        return { icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/20' };
      default:
        return { icon: Bell, color: 'text-gray-400', bg: 'bg-gray-500/20' };
    }
  };

  const marcarComoLida = (id) => {
    setNotificacoes(notificacoes.map(n => 
      n.id === id ? { ...n, lida: true } : n
    ));
  };

  const marcarTodasComoLidas = () => {
    setNotificacoes(notificacoes.map(n => ({ ...n, lida: true })));
  };

  const removerNotificacao = (id) => {
    setNotificacoes(notificacoes.filter(n => n.id !== id));
  };

  const naoLidas = notificacoes.filter(n => !n.lida).length;

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-br from-primary via-accent to-primary p-8"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                Notificações
                {naoLidas > 0 && (
                  <span className="px-3 py-1 bg-white text-primary rounded-full text-lg font-bold">
                    {naoLidas}
                  </span>
                )}
              </h1>
              <p className="text-gray-200">Fique por dentro de tudo</p>
            </div>
            {naoLidas > 0 && (
              <motion.button
                onClick={marcarTodasComoLidas}
                className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-semibold border border-white/30 backdrop-blur-sm hover:bg-white/20 transition-colors flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <CheckCheck size={16} />
                Marcar todas como lidas
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {notificacoes.length > 0 ? (
          <div className="space-y-3">
            {notificacoes.map((notif, index) => {
              const iconConfig = getIconConfig(notif.tipo);
              const IconComponent = iconConfig.icon;

              return (
                <motion.div
                  key={notif.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.01 }}
                  className={`nexus-card cursor-pointer relative ${
                    !notif.lida ? 'border-accent/40' : ''
                  }`}
                  onClick={() => {
                    marcarComoLida(notif.id);
                    navigate(notif.link);
                  }}
                >
                  {!notif.lida && (
                    <div className="absolute top-4 right-4">
                      <span className="w-3 h-3 bg-accent rounded-full block"></span>
                    </div>
                  )}

                  <div className="flex gap-4">
                    {/* Ícone */}
                    <div className={`w-12 h-12 rounded-xl ${iconConfig.bg} flex items-center justify-center ${iconConfig.color} flex-shrink-0`}>
                      <IconComponent size={24} />
                    </div>

                    {/* Conteúdo */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <h3 className={`font-bold text-sm ${!notif.lida ? 'text-white' : 'text-gray-300'}`}>
                          {notif.titulo}
                        </h3>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                          {notif.tempo}
                        </span>
                      </div>
                      <p className={`text-sm ${!notif.lida ? 'text-gray-300' : 'text-gray-400'}`}>
                        {notif.mensagem}
                      </p>
                    </div>

                    {/* Botão Remover */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        removerNotificacao(notif.id);
                      }}
                      className="text-gray-400 hover:text-red-400 transition-colors flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Trash2 size={16} />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔔</div>
            <p className="text-gray-400 text-lg mb-2">Nenhuma notificação</p>
            <p className="text-gray-500 text-sm">
              Você está em dia! Não há notificações no momento.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
