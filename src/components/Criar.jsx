import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, FileText, Megaphone, X, Upload, MapPin, DollarSign, Clock, Users, Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import BottomNav from './BottomNav';

export default function Criar() {
  const navigate = useNavigate();
  const { userType } = useUser();
  const [tipoPublicacao, setTipoPublicacao] = useState(null);
  const [formData, setFormData] = useState({
    titulo: '',
    descricao: '',
    localizacao: '',
    salario: '',
    tipo: 'CLT',
    modalidade: 'Híbrido',
    vagas: 1,
    tags: []
  });
  const [novaTag, setNovaTag] = useState('');

  const tiposPublicacao = [
    {
      id: 'vaga',
      titulo: 'Publicar Vaga',
      descricao: 'Encontre o candidato ideal',
      icon: Briefcase,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'post',
      titulo: 'Criar Post',
      descricao: 'Compartilhe novidades',
      icon: FileText,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'anuncio',
      titulo: 'Fazer Anúncio',
      descricao: 'Promova sua empresa',
      icon: Megaphone,
      color: 'from-accent to-primary'
    }
  ];

  const adicionarTag = () => {
    if (novaTag.trim() && !formData.tags.includes(novaTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, novaTag.trim()]
      });
      setNovaTag('');
    }
  };

  const removerTag = (tag) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(t => t !== tag)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`${tipoPublicacao === 'vaga' ? 'Vaga' : tipoPublicacao === 'post' ? 'Post' : 'Anúncio'} publicado com sucesso!`);
    navigate('/minhas-publicacoes');
  };

  if (!tipoPublicacao) {
    return (
      <div className="min-h-screen bg-background pb-24">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-gradient-to-br from-primary via-accent to-primary p-8"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">Criar Publicação</h1>
            <p className="text-gray-200">Escolha o tipo de conteúdo que deseja publicar</p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tiposPublicacao.map((tipo, index) => (
              <motion.button
                key={tipo.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setTipoPublicacao(tipo.id)}
                className="nexus-card hover:scale-105 transition-transform text-left group"
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tipo.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tipo.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{tipo.titulo}</h3>
                <p className="text-gray-400 text-sm">{tipo.descricao}</p>
                <div className="mt-4 text-accent text-sm font-semibold flex items-center gap-2">
                  Começar
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        <BottomNav />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-br from-primary via-accent to-primary p-6"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">
              {tipoPublicacao === 'vaga' ? 'Publicar Vaga' : tipoPublicacao === 'post' ? 'Criar Post' : 'Fazer Anúncio'}
            </h1>
            <p className="text-gray-200 text-sm">Preencha os detalhes abaixo</p>
          </div>
          <motion.button
            onClick={() => setTipoPublicacao(null)}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 bg-white/10 text-white rounded-lg backdrop-blur-sm"
          >
            <X size={24} />
          </motion.button>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Título */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="nexus-card"
          >
            <label className="block text-sm font-bold text-white mb-2">
              {tipoPublicacao === 'vaga' ? 'Título da Vaga' : 'Título'}
            </label>
            <input
              type="text"
              placeholder={tipoPublicacao === 'vaga' ? 'Ex: Desenvolvedor Full Stack' : 'Digite o título...'}
              value={formData.titulo}
              onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
              className="nexus-input"
              required
            />
          </motion.div>

          {/* Upload de Imagem */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="nexus-card"
          >
            <label className="block text-sm font-bold text-white mb-2">
              Imagem {tipoPublicacao !== 'vaga' && '(opcional)'}
            </label>
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-accent transition-colors cursor-pointer">
              <Upload className="w-12 h-12 mx-auto mb-3 text-gray-400" />
              <p className="text-gray-400 text-sm mb-1">Clique ou arraste uma imagem</p>
              <p className="text-gray-500 text-xs">PNG, JPG até 5MB</p>
            </div>
          </motion.div>

          {/* Campos específicos para Vaga */}
          {tipoPublicacao === 'vaga' && (
            <>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="nexus-card">
                  <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <MapPin size={16} className="text-accent" />
                    Localização
                  </label>
                  <input
                    type="text"
                    placeholder="São Paulo, SP"
                    value={formData.localizacao}
                    onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })}
                    className="nexus-input"
                    required
                  />
                </div>

                <div className="nexus-card">
                  <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <DollarSign size={16} className="text-accent" />
                    Salário
                  </label>
                  <input
                    type="text"
                    placeholder="R$ 5.000 - R$ 8.000"
                    value={formData.salario}
                    onChange={(e) => setFormData({ ...formData, salario: e.target.value })}
                    className="nexus-input"
                    required
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                <div className="nexus-card">
                  <label className="block text-sm font-bold text-white mb-2">Tipo de Contrato</label>
                  <select
                    value={formData.tipo}
                    onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
                    className="nexus-input"
                  >
                    <option value="CLT">CLT</option>
                    <option value="PJ">PJ</option>
                    <option value="Estágio">Estágio</option>
                    <option value="Temporário">Temporário</option>
                  </select>
                </div>

                <div className="nexus-card">
                  <label className="block text-sm font-bold text-white mb-2">Modalidade</label>
                  <select
                    value={formData.modalidade}
                    onChange={(e) => setFormData({ ...formData, modalidade: e.target.value })}
                    className="nexus-input"
                  >
                    <option value="Remoto">Remoto</option>
                    <option value="Presencial">Presencial</option>
                    <option value="Híbrido">Híbrido</option>
                  </select>
                </div>

                <div className="nexus-card">
                  <label className="block text-sm font-bold text-white mb-2 flex items-center gap-2">
                    <Users size={16} className="text-accent" />
                    Nº de Vagas
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.vagas}
                    onChange={(e) => setFormData({ ...formData, vagas: e.target.value })}
                    className="nexus-input"
                    required
                  />
                </div>
              </motion.div>
            </>
          )}

          {/* Descrição */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="nexus-card"
          >
            <label className="block text-sm font-bold text-white mb-2">
              {tipoPublicacao === 'vaga' ? 'Descrição da Vaga' : 'Conteúdo'}
            </label>
            <textarea
              placeholder={tipoPublicacao === 'vaga' 
                ? 'Descreva as responsabilidades, requisitos e benefícios...' 
                : 'Escreva seu conteúdo aqui...'}
              value={formData.descricao}
              onChange={(e) => setFormData({ ...formData, descricao: e.target.value })}
              className="nexus-input min-h-[150px] resize-none"
              rows={6}
              required
            />
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="nexus-card"
          >
            <label className="block text-sm font-bold text-white mb-2">
              {tipoPublicacao === 'vaga' ? 'Habilidades Necessárias' : 'Tags'}
            </label>
            
            <div className="flex flex-wrap gap-2 mb-3">
              {formData.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-primary/10 text-accent text-sm font-semibold rounded-full border border-accent/30 flex items-center gap-2"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => removerTag(tag)}
                    className="hover:text-red-400 transition-colors"
                  >
                    <X size={14} />
                  </button>
                </span>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder={tipoPublicacao === 'vaga' ? 'Ex: React, Node.js, Python...' : 'Adicionar tag...'}
                value={novaTag}
                onChange={(e) => setNovaTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), adicionarTag())}
                className="nexus-input flex-1"
              />
              <motion.button
                type="button"
                onClick={adicionarTag}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold flex items-center gap-2"
              >
                <Plus size={16} />
                Adicionar
              </motion.button>
            </div>
          </motion.div>

          {/* Botões */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 pt-4"
          >
            <button
              type="submit"
              className="nexus-btn-primary flex items-center justify-center gap-2"
            >
              <Upload size={18} />
              Publicar {tipoPublicacao === 'vaga' ? 'Vaga' : tipoPublicacao === 'post' ? 'Post' : 'Anúncio'}
            </button>
            <button
              type="button"
              onClick={() => setTipoPublicacao(null)}
              className="nexus-btn-secondary"
            >
              Cancelar
            </button>
          </motion.div>
        </form>
      </div>

      <BottomNav />
    </div>
  );
}
