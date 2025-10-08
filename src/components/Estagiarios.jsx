import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, GraduationCap, Star, Mail, Phone, FileText, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Estagiarios() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filtroNivel, setFiltroNivel] = useState('todos');

  const niveis = [
    { id: 'todos', label: 'Todos' },
    { id: 'iniciante', label: 'Iniciante' },
    { id: 'intermediario', label: 'Intermediário' },
    { id: 'avancado', label: 'Avançado' }
  ];

  const estagiarios = [
    {
      id: 1,
      nome: 'Ana Carolina',
      avatar: 'AC',
      curso: 'Ciência da Computação',
      universidade: 'USP',
      nivel: 'avancado',
      localizacao: 'São Paulo, SP',
      disponibilidade: 'Imediata',
      skills: ['React', 'Node.js', 'Python', 'SQL'],
      rating: 4.9,
      projetos: 12,
      destaque: true
    },
    {
      id: 2,
      nome: 'Pedro Henrique',
      avatar: 'PH',
      curso: 'Engenharia de Software',
      universidade: 'UNICAMP',
      nivel: 'intermediario',
      localizacao: 'Campinas, SP',
      disponibilidade: '30 dias',
      skills: ['JavaScript', 'Vue.js', 'MongoDB'],
      rating: 4.7,
      projetos: 8,
      destaque: false
    },
    {
      id: 3,
      nome: 'Julia Santos',
      avatar: 'JS',
      curso: 'Design Digital',
      universidade: 'UFRJ',
      nivel: 'avancado',
      localizacao: 'Rio de Janeiro, RJ',
      disponibilidade: 'Imediata',
      skills: ['Figma', 'UI/UX', 'Adobe XD', 'Prototyping'],
      rating: 4.8,
      projetos: 15,
      destaque: true
    },
    {
      id: 4,
      nome: 'Lucas Oliveira',
      avatar: 'LO',
      curso: 'Sistemas de Informação',
      universidade: 'UFMG',
      nivel: 'iniciante',
      localizacao: 'Belo Horizonte, MG',
      disponibilidade: '15 dias',
      skills: ['HTML', 'CSS', 'JavaScript', 'Git'],
      rating: 4.5,
      projetos: 4,
      destaque: false
    }
  ];

  const filteredEstagiarios = estagiarios.filter(est => {
    const matchesSearch = est.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         est.curso.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         est.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesNivel = filtroNivel === 'todos' || est.nivel === filtroNivel;
    return matchesSearch && matchesNivel;
  });

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-br from-primary via-accent to-primary p-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2">Estagiários</h1>
          <p className="text-gray-200">Encontre os melhores talentos para sua empresa</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Busca */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-4"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar por nome, curso ou habilidades..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="nexus-input pl-12"
            />
          </div>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex gap-2 mb-6 overflow-x-auto pb-2"
        >
          {niveis.map((nivel) => (
            <motion.button
              key={nivel.id}
              onClick={() => setFiltroNivel(nivel.id)}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap text-sm transition-all ${
                filtroNivel === nivel.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'bg-card text-gray-400 border border-border hover:border-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {nivel.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Contador */}
        <p className="text-gray-400 text-sm mb-4">
          {filteredEstagiarios.length} {filteredEstagiarios.length === 1 ? 'estagiário encontrado' : 'estagiários encontrados'}
        </p>

        {/* Lista de Estagiários */}
        <div className="space-y-4">
          {filteredEstagiarios.map((est, index) => (
            <motion.div
              key={est.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="nexus-card relative"
            >
              {est.destaque && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-accent rounded-full text-xs font-bold text-white">
                    ⭐ Destaque
                  </span>
                </div>
              )}

              <div className="flex gap-4">
                {/* Avatar */}
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  {est.avatar}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-1">{est.nome}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                    <GraduationCap size={16} className="text-accent" />
                    <span>{est.curso} - {est.universidade}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {est.localizacao}
                    </span>
                    <span>•</span>
                    <span>Disponibilidade: {est.disponibilidade}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Star size={12} className="text-accent" fill="currentColor" />
                      {est.rating}
                    </span>
                    <span>•</span>
                    <span>{est.projetos} projetos</span>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {est.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-primary/10 text-accent text-xs font-semibold rounded border border-accent/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Ações */}
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg text-sm font-semibold flex items-center gap-2"
                    >
                      <FileText size={14} />
                      Ver Currículo
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 bg-card border border-border text-gray-300 rounded-lg text-sm font-semibold hover:border-accent transition-colors flex items-center gap-2"
                    >
                      <Mail size={14} />
                      Contatar
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEstagiarios.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <GraduationCap size={64} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg">Nenhum estagiário encontrado</p>
            <p className="text-gray-500 text-sm mt-2">Tente ajustar sua busca ou filtros</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
