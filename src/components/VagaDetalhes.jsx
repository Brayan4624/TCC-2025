import { motion } from 'framer-motion';
import { MapPin, Briefcase, DollarSign, Clock, Users, Building2, ArrowLeft, Bookmark, Share2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function VagaDetalhes() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isFavorito, setIsFavorito] = useState(false);

  // Dados mockados - em produção viria de uma API
  const vaga = {
    id: id,
    titulo: 'Desenvolvedor Full Stack Sênior',
    empresa: 'Tech Solutions',
    sigla: 'TS',
    localizacao: 'São Paulo, SP',
    salario: 'R$ 12.000 - R$ 18.000',
    tipo: 'CLT',
    modalidade: 'Híbrido',
    nivel: 'Sênior',
    vagas: 3,
    publicadoEm: '2 dias atrás',
    descricao: `Estamos buscando um Desenvolvedor Full Stack Sênior para integrar nosso time de tecnologia. 
    
O profissional será responsável por desenvolver e manter aplicações web modernas, trabalhando com tecnologias de ponta tanto no frontend quanto no backend.`,
    responsabilidades: [
      'Desenvolver e manter aplicações web utilizando React e Node.js',
      'Colaborar com equipes multidisciplinares para definir e implementar novas funcionalidades',
      'Realizar code reviews e garantir qualidade do código',
      'Participar de reuniões de planejamento e retrospectivas',
      'Mentorear desenvolvedores juniores'
    ],
    requisitos: [
      '5+ anos de experiência com desenvolvimento web',
      'Domínio de React, Node.js e TypeScript',
      'Experiência com AWS e arquitetura de microsserviços',
      'Conhecimento em bancos de dados SQL e NoSQL',
      'Inglês intermediário/avançado'
    ],
    beneficios: [
      'Vale refeição/alimentação',
      'Plano de saúde e odontológico',
      'Gympass',
      'Day off no aniversário',
      'Auxílio home office',
      'Programa de desenvolvimento contínuo'
    ],
    tags: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB']
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-card border-b border-border px-4 py-4 sticky top-0 z-10 backdrop-blur-sm"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <motion.button
            onClick={() => navigate('/vagas')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            whileHover={{ x: -3 }}
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Voltar</span>
          </motion.button>
          <div className="flex items-center gap-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-card border border-border hover:border-accent transition-colors"
            >
              <Share2 size={18} className="text-gray-400" />
            </motion.button>
            <motion.button
              onClick={() => setIsFavorito(!isFavorito)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-lg bg-card border transition-colors ${
                isFavorito ? 'border-accent text-accent' : 'border-border text-gray-400'
              }`}
            >
              <Bookmark size={18} fill={isFavorito ? 'currentColor' : 'none'} />
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Cabeçalho da Vaga */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="nexus-card mb-4"
        >
          <div className="flex gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
              {vaga.sigla}
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-white mb-1">{vaga.titulo}</h1>
              <p className="text-gray-400 mb-2">{vaga.empresa}</p>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded border border-accent/20">
                  {vaga.nivel}
                </span>
                <span className="px-2 py-1 bg-card border border-border rounded text-gray-300">
                  {vaga.tipo}
                </span>
                <span className="px-2 py-1 bg-card border border-border rounded text-gray-300">
                  {vaga.modalidade}
                </span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-accent" />
              <span className="text-gray-300">{vaga.localizacao}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <DollarSign size={16} className="text-accent" />
              <span className="text-gray-300">{vaga.salario}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Users size={16} className="text-accent" />
              <span className="text-gray-300">{vaga.vagas} vagas</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock size={16} className="text-accent" />
              <span className="text-gray-300">{vaga.publicadoEm}</span>
            </div>
          </div>

          <motion.button
            className="nexus-btn-primary w-full"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Candidatar-se
          </motion.button>
        </motion.div>

        {/* Descrição */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="nexus-card mb-4"
        >
          <h2 className="text-lg font-bold text-white mb-3">Sobre a Vaga</h2>
          <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
            {vaga.descricao}
          </p>
        </motion.div>

        {/* Responsabilidades */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="nexus-card mb-4"
        >
          <h2 className="text-lg font-bold text-white mb-3">Responsabilidades</h2>
          <ul className="space-y-2">
            {vaga.responsabilidades.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-accent mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Requisitos */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="nexus-card mb-4"
        >
          <h2 className="text-lg font-bold text-white mb-3">Requisitos</h2>
          <ul className="space-y-2">
            {vaga.requisitos.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="text-accent mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Benefícios */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="nexus-card mb-4"
        >
          <h2 className="text-lg font-bold text-white mb-3">Benefícios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {vaga.beneficios.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                <span className="text-accent">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="nexus-card"
        >
          <h2 className="text-lg font-bold text-white mb-3">Tecnologias</h2>
          <div className="flex flex-wrap gap-2">
            {vaga.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 bg-primary/10 text-accent text-sm font-semibold rounded-full border border-accent/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
