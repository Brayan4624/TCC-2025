import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bookmark, MapPin, DollarSign, Clock, Trash2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function VagasSalvas() {
  const navigate = useNavigate();
  const [vagasSalvas, setVagasSalvas] = useState([
    {
      id: 1,
      titulo: 'Desenvolvedor Full Stack',
      empresa: 'Tech Solutions',
      sigla: 'TS',
      localizacao: 'São Paulo, SP',
      salario: 'R$ 12.000 - R$ 18.000',
      tipo: 'CLT',
      modalidade: 'Híbrido',
      dataSalva: '2024-01-15',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      titulo: 'Designer UI/UX',
      empresa: 'Creative Studio',
      sigla: 'CS',
      localizacao: 'Remoto',
      salario: 'R$ 8.000 - R$ 12.000',
      tipo: 'PJ',
      modalidade: 'Remoto',
      dataSalva: '2024-01-12',
      tags: ['Figma', 'UI/UX', 'Prototyping']
    },
    {
      id: 3,
      titulo: 'Analista de Dados Jr',
      empresa: 'Data Corp',
      sigla: 'DC',
      localizacao: 'Rio de Janeiro, RJ',
      salario: 'R$ 5.000 - R$ 7.000',
      tipo: 'CLT',
      modalidade: 'Presencial',
      dataSalva: '2024-01-10',
      tags: ['Python', 'SQL', 'Power BI']
    }
  ]);

  const removerVaga = (id) => {
    if (confirm('Deseja remover esta vaga dos salvos?')) {
      setVagasSalvas(vagasSalvas.filter(v => v.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-gradient-to-br from-primary via-accent to-primary p-8"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <Bookmark size={36} />
            Vagas Salvas
          </h1>
          <p className="text-gray-200">
            {vagasSalvas.length} {vagasSalvas.length === 1 ? 'vaga salva' : 'vagas salvas'}
          </p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {vagasSalvas.length > 0 ? (
          <div className="space-y-4">
            {vagasSalvas.map((vaga, index) => (
              <motion.div
                key={vaga.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="nexus-card group"
              >
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {vaga.sigla}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{vaga.titulo}</h3>
                        <p className="text-gray-400 text-sm">{vaga.empresa}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.button
                          onClick={() => navigate(`/vaga/${vaga.id}`)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-gray-400 hover:text-accent rounded-lg hover:bg-card transition-colors"
                          title="Ver detalhes"
                        >
                          <ExternalLink size={18} />
                        </motion.button>
                        <motion.button
                          onClick={() => removerVaga(vaga.id)}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-gray-400 hover:text-red-400 rounded-lg hover:bg-card transition-colors"
                          title="Remover dos salvos"
                        >
                          <Trash2 size={18} />
                        </motion.button>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {vaga.localizacao}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={12} />
                        {vaga.salario}
                      </span>
                      <span>•</span>
                      <span>{vaga.tipo}</span>
                      <span>•</span>
                      <span>{vaga.modalidade}</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {vaga.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary/10 text-accent text-xs font-semibold rounded border border-accent/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Data */}
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock size={12} />
                      Salva em {new Date(vaga.dataSalva).toLocaleDateString('pt-BR')}
                    </div>

                    {/* Botão Candidatar */}
                    <motion.button
                      onClick={() => navigate(`/vaga/${vaga.id}`)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-3 w-full px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-lg text-sm font-semibold"
                    >
                      Candidatar-se Agora
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Bookmark size={64} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 text-lg mb-4">Nenhuma vaga salva</p>
            <p className="text-gray-500 text-sm mb-6">
              Salve vagas interessantes para acessá-las depois
            </p>
            <button
              onClick={() => navigate('/vagas')}
              className="nexus-btn-primary px-6 py-3 w-auto mx-auto"
            >
              Explorar Vagas
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
