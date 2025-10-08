import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Settings, Bell, Lock, User, Mail, Globe, Moon, Sun,
  Shield, Eye, EyeOff, LogOut, Trash2, ChevronRight
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Configuracoes() {
  const navigate = useNavigate();
  const [notificacoes, setNotificacoes] = useState(true);
  const [notificacoesEmail, setNotificacoesEmail] = useState(true);
  const [perfilPublico, setPerfilPublico] = useState(true);
  const [tema, setTema] = useState('dark');

  const secoes = [
    {
      titulo: 'Conta',
      icon: User,
      items: [
        { label: 'Informações Pessoais', icon: User, action: () => {} },
        { label: 'Email e Senha', icon: Lock, action: () => {} },
        { label: 'Privacidade', icon: Shield, action: () => {} }
      ]
    },
    {
      titulo: 'Notificações',
      icon: Bell,
      items: [
        {
          label: 'Notificações Push',
          icon: Bell,
          toggle: true,
          value: notificacoes,
          onChange: setNotificacoes
        },
        {
          label: 'Notificações por Email',
          icon: Mail,
          toggle: true,
          value: notificacoesEmail,
          onChange: setNotificacoesEmail
        }
      ]
    },
    {
      titulo: 'Preferências',
      icon: Settings,
      items: [
        {
          label: 'Perfil Público',
          icon: Eye,
          toggle: true,
          value: perfilPublico,
          onChange: setPerfilPublico
        },
        { label: 'Idioma', icon: Globe, value: 'Português (BR)', action: () => {} }
      ]
    }
  ];

  const Toggle = ({ value, onChange }) => (
    <motion.button
      onClick={() => onChange(!value)}
      className={`relative w-12 h-6 rounded-full transition-colors ${
        value ? 'bg-gradient-to-r from-primary to-accent' : 'bg-gray-600'
      }`}
      style={value ? {
        boxShadow: '0 0 20px rgba(255, 7, 58, 0.4)'
      } : {}}
    >
      <motion.div
        className="absolute top-1 w-4 h-4 bg-white rounded-full"
        animate={{ left: value ? '26px' : '4px' }}
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      />
    </motion.button>
  );

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
          <div className="flex items-center gap-3 mb-2">
            <Settings size={32} className="text-white" />
            <h1 className="text-4xl font-bold text-white">Configurações</h1>
          </div>
          <p className="text-gray-200">Gerencie suas preferências e conta</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Seções */}
        {secoes.map((secao, secaoIndex) => (
          <motion.div
            key={secao.titulo}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: secaoIndex * 0.1 }}
            className="mb-6"
          >
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <secao.icon size={24} className="text-accent" />
              {secao.titulo}
            </h2>

            <div className="nexus-card space-y-1">
              {secao.items.map((item, itemIndex) => (
                <motion.div
                  key={item.label}
                  whileHover={{ backgroundColor: 'rgba(255, 7, 58, 0.05)' }}
                  className="flex items-center justify-between p-4 rounded-lg transition-colors cursor-pointer"
                  onClick={item.action}
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={20} className="text-accent" />
                    <div>
                      <div className="text-white font-medium">{item.label}</div>
                      {item.value && !item.toggle && (
                        <div className="text-sm text-gray-400">{item.value}</div>
                      )}
                    </div>
                  </div>

                  {item.toggle ? (
                    <Toggle value={item.value} onChange={item.onChange} />
                  ) : (
                    <ChevronRight size={20} className="text-gray-400" />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Ações Perigosas */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 space-y-3"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/')}
            className="w-full nexus-card flex items-center justify-between p-4 hover:border-accent transition-colors"
          >
            <div className="flex items-center gap-3">
              <LogOut size={20} className="text-accent" />
              <span className="text-white font-medium">Sair da Conta</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full nexus-card flex items-center justify-between p-4 border-red-500/30 hover:border-red-500/60 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Trash2 size={20} className="text-red-500" />
              <span className="text-red-500 font-medium">Excluir Conta</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </motion.button>
        </motion.div>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center text-gray-500 text-sm"
        >
          <p>NEXUS v1.0.0</p>
          <p className="mt-1">© 2024 NEXUS. Todos os direitos reservados.</p>
        </motion.div>

        {/* Botão Voltar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
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
