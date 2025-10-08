import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Send, MoreVertical, Phone, Video, Paperclip, Smile } from 'lucide-react';

export default function Mensagens() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [mensagem, setMensagem] = useState('');

  const conversas = [
    {
      id: 1,
      nome: 'Tech Solutions',
      avatar: 'TS',
      ultimaMensagem: 'Quando você pode começar?',
      tempo: '5 min',
      naoLidas: 2,
      online: true
    },
    {
      id: 2,
      nome: 'Creative Studio',
      avatar: 'CS',
      ultimaMensagem: 'Obrigado pelo interesse!',
      tempo: '1h',
      naoLidas: 0,
      online: true
    },
    {
      id: 3,
      nome: 'StartUp Inc',
      avatar: 'SI',
      ultimaMensagem: 'Vamos agendar uma entrevista',
      tempo: '2h',
      naoLidas: 1,
      online: false
    },
    {
      id: 4,
      nome: 'Data Corp',
      avatar: 'DC',
      ultimaMensagem: 'Recebemos seu currículo',
      tempo: '1d',
      naoLidas: 0,
      online: false
    }
  ];

  const mensagens = [
    {
      id: 1,
      remetente: 'outro',
      texto: 'Olá! Vimos seu perfil e ficamos interessados.',
      hora: '14:30'
    },
    {
      id: 2,
      remetente: 'eu',
      texto: 'Olá! Muito obrigado pelo contato. Estou muito interessado na vaga!',
      hora: '14:32'
    },
    {
      id: 3,
      remetente: 'outro',
      texto: 'Ótimo! Podemos agendar uma conversa para amanhã?',
      hora: '14:35'
    },
    {
      id: 4,
      remetente: 'eu',
      texto: 'Claro! Qual horário seria melhor para vocês?',
      hora: '14:36'
    },
    {
      id: 5,
      remetente: 'outro',
      texto: 'Quando você pode começar?',
      hora: '14:40'
    }
  ];

  const enviarMensagem = (e) => {
    e.preventDefault();
    if (mensagem.trim()) {
      // Lógica para enviar mensagem
      setMensagem('');
    }
  };

  const conversaSelecionada = conversas.find(c => c.id === selectedChat);

  return (
    <div className="h-screen bg-background flex">
      {/* Lista de Conversas */}
      <div className="w-80 border-r border-border flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-border">
          <h1 className="text-2xl font-bold text-white mb-3">Mensagens</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Buscar conversas..."
              className="nexus-input pl-10 text-sm"
            />
          </div>
        </div>

        {/* Lista */}
        <div className="flex-1 overflow-y-auto">
          {conversas.map((conversa) => (
            <motion.div
              key={conversa.id}
              onClick={() => setSelectedChat(conversa.id)}
              className={`p-4 border-b border-border cursor-pointer transition-colors ${
                selectedChat === conversa.id
                  ? 'bg-primary/10 border-l-4 border-l-accent'
                  : 'hover:bg-card'
              }`}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                    {conversa.avatar}
                  </div>
                  {conversa.online && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white font-bold text-sm truncate">
                      {conversa.nome}
                    </h3>
                    <span className="text-xs text-gray-500">{conversa.tempo}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400 text-xs truncate flex-1">
                      {conversa.ultimaMensagem}
                    </p>
                    {conversa.naoLidas > 0 && (
                      <span className="ml-2 px-2 py-0.5 bg-accent text-white text-xs font-bold rounded-full">
                        {conversa.naoLidas}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Área de Chat */}
      <div className="flex-1 flex flex-col">
        {/* Header do Chat */}
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                {conversaSelecionada?.avatar}
              </div>
              {conversaSelecionada?.online && (
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-background"></div>
              )}
            </div>
            <div>
              <h2 className="text-white font-bold">{conversaSelecionada?.nome}</h2>
              <p className="text-xs text-gray-400">
                {conversaSelecionada?.online ? 'Online' : 'Offline'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-card"
            >
              <Phone size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-card"
            >
              <Video size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-card"
            >
              <MoreVertical size={20} />
            </motion.button>
          </div>
        </div>

        {/* Mensagens */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {mensagens.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.remetente === 'eu' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-md px-4 py-2 rounded-2xl ${
                  msg.remetente === 'eu'
                    ? 'bg-gradient-to-r from-primary to-accent text-white rounded-br-sm'
                    : 'bg-card text-gray-200 rounded-bl-sm'
                }`}
              >
                <p className="text-sm">{msg.texto}</p>
                <span className={`text-xs mt-1 block ${
                  msg.remetente === 'eu' ? 'text-gray-200' : 'text-gray-500'
                }`}>
                  {msg.hora}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input de Mensagem */}
        <form onSubmit={enviarMensagem} className="p-4 border-t border-border">
          <div className="flex items-center gap-2">
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-card"
            >
              <Paperclip size={20} />
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-card"
            >
              <Smile size={20} />
            </motion.button>
            <input
              type="text"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 nexus-input"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold flex items-center gap-2"
            >
              <Send size={18} />
              Enviar
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}
