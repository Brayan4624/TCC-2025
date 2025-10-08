import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Plus, X, Save, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CriarCurriculo() {
  const navigate = useNavigate();
  const [curriculo, setCurriculo] = useState({
    dadosPessoais: {
      nome: '',
      email: '',
      telefone: '',
      localizacao: '',
      linkedin: '',
      github: ''
    },
    objetivo: '',
    experiencias: [],
    educacao: [],
    habilidades: [],
    idiomas: []
  });

  const [novaExperiencia, setNovaExperiencia] = useState({
    cargo: '',
    empresa: '',
    periodo: '',
    descricao: ''
  });

  const [novaEducacao, setNovaEducacao] = useState({
    curso: '',
    instituicao: '',
    periodo: '',
    status: 'Em andamento'
  });

  const [novaHabilidade, setNovaHabilidade] = useState('');
  const [novoIdioma, setNovoIdioma] = useState({ idioma: '', nivel: '' });

  const adicionarExperiencia = () => {
    if (novaExperiencia.cargo && novaExperiencia.empresa) {
      setCurriculo({
        ...curriculo,
        experiencias: [...curriculo.experiencias, { ...novaExperiencia, id: Date.now() }]
      });
      setNovaExperiencia({ cargo: '', empresa: '', periodo: '', descricao: '' });
    }
  };

  const adicionarEducacao = () => {
    if (novaEducacao.curso && novaEducacao.instituicao) {
      setCurriculo({
        ...curriculo,
        educacao: [...curriculo.educacao, { ...novaEducacao, id: Date.now() }]
      });
      setNovaEducacao({ curso: '', instituicao: '', periodo: '', status: 'Em andamento' });
    }
  };

  const adicionarHabilidade = () => {
    if (novaHabilidade.trim()) {
      setCurriculo({
        ...curriculo,
        habilidades: [...curriculo.habilidades, novaHabilidade.trim()]
      });
      setNovaHabilidade('');
    }
  };

  const adicionarIdioma = () => {
    if (novoIdioma.idioma && novoIdioma.nivel) {
      setCurriculo({
        ...curriculo,
        idiomas: [...curriculo.idiomas, { ...novoIdioma, id: Date.now() }]
      });
      setNovoIdioma({ idioma: '', nivel: '' });
    }
  };

  const removerItem = (lista, id) => {
    setCurriculo({
      ...curriculo,
      [lista]: curriculo[lista].filter(item => item.id !== id || item !== id)
    });
  };

  const salvarCurriculo = () => {
    // Salvar no localStorage
    localStorage.setItem('curriculo', JSON.stringify(curriculo));
    alert('Currículo salvo com sucesso!');
    navigate('/perfil');
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-br from-primary via-accent to-primary p-6"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Criar Currículo</h1>
          <p className="text-gray-200 text-sm">Monte seu currículo profissional</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Dados Pessoais */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="nexus-card mb-4"
        >
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <User size={20} className="text-accent" />
            Dados Pessoais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Nome completo"
              value={curriculo.dadosPessoais.nome}
              onChange={(e) => setCurriculo({
                ...curriculo,
                dadosPessoais: { ...curriculo.dadosPessoais, nome: e.target.value }
              })}
              className="nexus-input"
            />
            <input
              type="email"
              placeholder="Email"
              value={curriculo.dadosPessoais.email}
              onChange={(e) => setCurriculo({
                ...curriculo,
                dadosPessoais: { ...curriculo.dadosPessoais, email: e.target.value }
              })}
              className="nexus-input"
            />
            <input
              type="tel"
              placeholder="Telefone"
              value={curriculo.dadosPessoais.telefone}
              onChange={(e) => setCurriculo({
                ...curriculo,
                dadosPessoais: { ...curriculo.dadosPessoais, telefone: e.target.value }
              })}
              className="nexus-input"
            />
            <input
              type="text"
              placeholder="Localização"
              value={curriculo.dadosPessoais.localizacao}
              onChange={(e) => setCurriculo({
                ...curriculo,
                dadosPessoais: { ...curriculo.dadosPessoais, localizacao: e.target.value }
              })}
              className="nexus-input"
            />
            <input
              type="text"
              placeholder="LinkedIn (opcional)"
              value={curriculo.dadosPessoais.linkedin}
              onChange={(e) => setCurriculo({
                ...curriculo,
                dadosPessoais: { ...curriculo.dadosPessoais, linkedin: e.target.value }
              })}
              className="nexus-input"
            />
            <input
              type="text"
              placeholder="GitHub (opcional)"
              value={curriculo.dadosPessoais.github}
              onChange={(e) => setCurriculo({
                ...curriculo,
                dadosPessoais: { ...curriculo.dadosPessoais, github: e.target.value }
              })}
              className="nexus-input"
            />
          </div>
        </motion.div>

        {/* Objetivo */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="nexus-card mb-4"
        >
          <h2 className="text-lg font-bold text-white mb-4">Objetivo Profissional</h2>
          <textarea
            placeholder="Descreva seu objetivo profissional..."
            value={curriculo.objetivo}
            onChange={(e) => setCurriculo({ ...curriculo, objetivo: e.target.value })}
            className="nexus-input min-h-[100px] resize-none"
            rows={4}
          />
        </motion.div>

        {/* Experiência */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="nexus-card mb-4"
        >
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Briefcase size={20} className="text-accent" />
            Experiência Profissional
          </h2>
          
          {/* Lista de Experiências */}
          {curriculo.experiencias.map((exp) => (
            <div key={exp.id} className="mb-3 p-3 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-white font-bold text-sm">{exp.cargo}</h3>
                  <p className="text-gray-400 text-xs">{exp.empresa} • {exp.periodo}</p>
                </div>
                <button
                  onClick={() => removerItem('experiencias', exp.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="text-gray-300 text-xs">{exp.descricao}</p>
            </div>
          ))}

          {/* Adicionar Nova */}
          <div className="space-y-2 mt-3">
            <input
              type="text"
              placeholder="Cargo"
              value={novaExperiencia.cargo}
              onChange={(e) => setNovaExperiencia({ ...novaExperiencia, cargo: e.target.value })}
              className="nexus-input"
            />
            <input
              type="text"
              placeholder="Empresa"
              value={novaExperiencia.empresa}
              onChange={(e) => setNovaExperiencia({ ...novaExperiencia, empresa: e.target.value })}
              className="nexus-input"
            />
            <input
              type="text"
              placeholder="Período (ex: Jan 2020 - Dez 2022)"
              value={novaExperiencia.periodo}
              onChange={(e) => setNovaExperiencia({ ...novaExperiencia, periodo: e.target.value })}
              className="nexus-input"
            />
            <textarea
              placeholder="Descrição das atividades"
              value={novaExperiencia.descricao}
              onChange={(e) => setNovaExperiencia({ ...novaExperiencia, descricao: e.target.value })}
              className="nexus-input resize-none"
              rows={2}
            />
            <button
              onClick={adicionarExperiencia}
              className="nexus-btn-secondary flex items-center justify-center gap-2"
            >
              <Plus size={16} />
              Adicionar Experiência
            </button>
          </div>
        </motion.div>

        {/* Educação */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="nexus-card mb-4"
        >
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <GraduationCap size={20} className="text-accent" />
            Educação
          </h2>

          {/* Lista */}
          {curriculo.educacao.map((edu) => (
            <div key={edu.id} className="mb-3 p-3 bg-card border border-border rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-white font-bold text-sm">{edu.curso}</h3>
                  <p className="text-gray-400 text-xs">{edu.instituicao}</p>
                  <p className="text-gray-500 text-xs">{edu.periodo} • {edu.status}</p>
                </div>
                <button
                  onClick={() => removerItem('educacao', edu.id)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          ))}

          {/* Adicionar */}
          <div className="space-y-2 mt-3">
            <input
              type="text"
              placeholder="Curso"
              value={novaEducacao.curso}
              onChange={(e) => setNovaEducacao({ ...novaEducacao, curso: e.target.value })}
              className="nexus-input"
            />
            <input
              type="text"
              placeholder="Instituição"
              value={novaEducacao.instituicao}
              onChange={(e) => setNovaEducacao({ ...novaEducacao, instituicao: e.target.value })}
              className="nexus-input"
            />
            <input
              type="text"
              placeholder="Período"
              value={novaEducacao.periodo}
              onChange={(e) => setNovaEducacao({ ...novaEducacao, periodo: e.target.value })}
              className="nexus-input"
            />
            <select
              value={novaEducacao.status}
              onChange={(e) => setNovaEducacao({ ...novaEducacao, status: e.target.value })}
              className="nexus-input"
            >
              <option value="Em andamento">Em andamento</option>
              <option value="Concluído">Concluído</option>
              <option value="Trancado">Trancado</option>
            </select>
            <button
              onClick={adicionarEducacao}
              className="nexus-btn-secondary flex items-center justify-center gap-2"
            >
              <Plus size={16} />
              Adicionar Educação
            </button>
          </div>
        </motion.div>

        {/* Habilidades */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="nexus-card mb-4"
        >
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Award size={20} className="text-accent" />
            Habilidades
          </h2>

          <div className="flex flex-wrap gap-2 mb-3">
            {curriculo.habilidades.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-primary/10 text-accent text-sm font-semibold rounded-full border border-accent/30 flex items-center gap-2"
              >
                {skill}
                <button
                  onClick={() => removerItem('habilidades', skill)}
                  className="hover:text-red-500"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Ex: React, Python, Design..."
              value={novaHabilidade}
              onChange={(e) => setNovaHabilidade(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && adicionarHabilidade()}
              className="nexus-input flex-1"
            />
            <button
              onClick={adicionarHabilidade}
              className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg font-semibold"
            >
              <Plus size={16} />
            </button>
          </div>
        </motion.div>

        {/* Botões de Ação */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-3"
        >
          <button
            onClick={salvarCurriculo}
            className="nexus-btn-primary flex items-center justify-center gap-2"
          >
            <Save size={16} />
            Salvar Currículo
          </button>
          <button
            onClick={() => navigate('/perfil')}
            className="nexus-btn-secondary flex items-center justify-center gap-2"
          >
            Cancelar
          </button>
        </motion.div>
      </div>
    </div>
  );
}
