import { useState, useRef } from 'react';
import { Plus, Image as ImageIcon, X, Upload, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function CriarVaga() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState('');
  const [subtitulo, setSubtitulo] = useState('');
  const [showSubtitulo, setShowSubtitulo] = useState(false);
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagem(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagem(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular criação de vaga
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setShowSuccess(true);
    setTimeout(() => {
      navigate('/vagas');
    }, 1500);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <motion.div
        className="max-w-4xl mx-auto py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold text-primary mb-8"
        >
          Criar Nova Vaga
        </motion.h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Título */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-400 mb-2">
              Título da Vaga *
            </label>
            <input
              type="text"
              placeholder="Ex: Desenvolvedor Full Stack"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="nexus-input text-xl font-semibold"
              required
            />
          </motion.div>

          {/* Botão Adicionar Subtítulo */}
          <AnimatePresence>
            {!showSubtitulo && (
              <motion.button
                type="button"
                onClick={() => setShowSubtitulo(true)}
                className="flex items-center gap-2 text-white hover:text-primary transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={20} />
                <span className="font-medium">Adicionar Subtítulo</span>
              </motion.button>
            )}
          </AnimatePresence>

          {/* Subtítulo */}
          <AnimatePresence>
            {showSubtitulo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="relative overflow-hidden"
              >
                <label className="block text-sm font-semibold text-gray-400 mb-2">
                  Subtítulo
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Ex: Remoto - Tempo Integral"
                    value={subtitulo}
                    onChange={(e) => setSubtitulo(e.target.value)}
                    className="nexus-input pr-12"
                  />
                  <motion.button
                    type="button"
                    onClick={() => {
                      setShowSubtitulo(false);
                      setSubtitulo('');
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Descrição */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-400 mb-2">
              Descrição da Vaga *
            </label>
            <textarea
              placeholder="Descreva as responsabilidades, requisitos e benefícios da vaga..."
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="nexus-input min-h-[200px] resize-y"
              required
            />
            <p className="text-xs text-gray-500 mt-2">
              {descricao.length} caracteres
            </p>
          </motion.div>

          {/* Upload de Imagem */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-400 mb-2">
              Imagem da Vaga
            </label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            
            <AnimatePresence mode="wait">
              {!imagem ? (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`bg-primary rounded-2xl p-16 cursor-pointer transition-all border-2 border-dashed ${
                    isDragging
                      ? 'border-white bg-primary/80 scale-105'
                      : 'border-primary-foreground/20 hover:border-primary-foreground/40 hover:bg-primary/90'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center justify-center text-white">
                    <motion.div
                      animate={{ y: isDragging ? -10 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Upload size={64} className="mb-4" />
                    </motion.div>
                    <p className="text-lg font-semibold mb-2">
                      {isDragging ? 'Solte a imagem aqui' : 'Solte aqui a sua imagem'}
                    </p>
                    <p className="text-sm opacity-80">ou clique para selecionar</p>
                    <Plus size={32} className="mt-4" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative rounded-2xl overflow-hidden group"
                >
                  <img
                    src={imagem}
                    alt="Preview"
                    className="w-full h-auto max-h-96 object-cover"
                  />
                  <motion.button
                    type="button"
                    onClick={() => setImagem(null)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={24} />
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Tags */}
          <motion.div variants={itemVariants}>
            <label className="block text-sm font-semibold text-gray-400 mb-2">
              Tags
            </label>
            <div className="flex gap-2 mb-3">
              <input
                type="text"
                placeholder="Adicionar tag (ex: React, Remote)"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                className="nexus-input flex-1"
              />
              <motion.button
                type="button"
                onClick={addTag}
                className="nexus-btn-primary px-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus size={20} />
              </motion.button>
            </div>
            
            {/* Lista de Tags */}
            <AnimatePresence>
              {tags.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-wrap gap-2"
                >
                  {tags.map((tag, index) => (
                    <motion.div
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="px-3 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full border border-primary/40 flex items-center gap-2"
                    >
                      <span>{tag}</span>
                      <motion.button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:text-white transition-colors"
                        whileHover={{ scale: 1.2, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <X size={14} />
                      </motion.button>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Botão Submit */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center pt-4"
          >
            <motion.button
              type="submit"
              className="nexus-btn-primary max-w-md flex items-center justify-center gap-2 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              <AnimatePresence mode="wait">
                {showSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Check size={24} />
                    <span>Vaga Criada!</span>
                  </motion.div>
                ) : isSubmitting ? (
                  <motion.div
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                      <Plus size={24} />
                    </motion.div>
                    <span>Criando...</span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="default"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    <Plus size={24} />
                    <span>Criar Vaga</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>
        </form>

        {/* Botão Voltar */}
        <motion.div
          variants={itemVariants}
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
      </motion.div>
    </div>
  );
}
