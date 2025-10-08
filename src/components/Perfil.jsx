import { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit2, MapPin, Briefcase, Mail, Phone, Calendar, Award, Star, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { useUser } from '../context/UserContext';

export default function Perfil() {
  const navigate = useNavigate();
  const { userType } = useUser();

  // Se for empresa, redirecionar para PerfilEmpresa
  if (userType === 'empresa') {
    navigate('/perfil-empresa');
    return null;
  }

  const userStats = [
    { label: 'Aplicadas', value: '12', icon: Briefcase },
    { label: 'Favoritas', value: '8', icon: Star },
    { label: 'Visualizações', value: '145', icon: Award }
  ];

  const skills = [
    'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB',
    'AWS', 'Docker', 'Git', 'Figma', 'UI/UX'
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header Compacto */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-32 bg-gradient-to-br from-primary via-accent to-primary"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </motion.div>

      <div className="max-w-3xl mx-auto px-4 -mt-16">
        {/* Avatar e Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative"
        >
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
            {/* Avatar */}
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                JP
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute bottom-0 right-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background shadow-lg"
              >
                <Camera size={14} className="text-white" />
              </motion.button>
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-white mb-0.5">João Paulo</h1>
                  <p className="text-gray-400 text-sm mb-2">Desenvolvedor Full Stack</p>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      São Paulo, Brasil
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      Membro desde 2024
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/configuracoes')}
                    className="px-4 py-2 bg-card border border-border rounded-lg flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white hover:border-accent transition-colors"
                  >
                    <Settings size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="nexus-btn-primary px-4 py-2 w-auto flex items-center gap-2 text-sm"
                  >
                    <Edit2 size={14} />
                    <span>Editar</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-3 gap-3 mt-6"
        >
          {userStats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.03 }}
              className="nexus-card text-center"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-1.5 text-accent" />
              <div className="text-xl font-bold text-white mb-0.5">{stat.value}</div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sobre */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="nexus-card mt-4"
        >
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Briefcase size={20} className="text-accent" />
            Sobre
          </h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Desenvolvedor Full Stack apaixonado por criar experiências digitais incríveis. 
            Com mais de 5 anos de experiência em desenvolvimento web, especializado em React, 
            Node.js e tecnologias modernas.
          </p>
        </motion.div>

        {/* Contato */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="nexus-card mt-4"
        >
          <h2 className="text-lg font-bold text-white mb-3">Contato</h2>
          <div className="space-y-2.5">
            <div className="flex items-center gap-2.5 text-gray-300 text-sm">
              <Mail size={16} className="text-accent" />
              <span>joao.paulo@email.com</span>
            </div>
            <div className="flex items-center gap-2.5 text-gray-300 text-sm">
              <Phone size={16} className="text-accent" />
              <span>+55 (11) 98765-4321</span>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="nexus-card mt-4"
        >
          <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
            <Award size={20} className="text-accent" />
            Habilidades
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 bg-primary/10 text-accent text-xs font-semibold rounded-full border border-accent/30"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Botão Criar Currículo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-6"
        >
          <motion.button
            onClick={() => navigate('/criar-curriculo')}
            className="nexus-btn-primary px-6 py-3 w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Criar/Editar Currículo
          </motion.button>
        </motion.div>

        {/* Botão Voltar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-4 mb-6"
        >
          <motion.button
            onClick={() => navigate('/feed')}
            className="text-gray-400 hover:text-white transition-colors text-sm"
            whileHover={{ x: -3 }}
          >
            ← Voltar para Feed
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
