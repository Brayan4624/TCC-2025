import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, XCircle, Eye, Building2, MapPin, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Candidaturas() {
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState('todas');

  const candidaturas = [
    {
      id: 1,
      vaga: 'Desenvolvedor Full Stack',
      empresa: 'Tech Solutions',
      sigla: 'TS',
      localizacao: 'São Paulo, SP',
      salario: 'R$ 12.000 - R$ 18.000',
      dataAplicacao: '2024-01-15',
      status: 'em_analise',
      visualizada: true
    },
    {
      id: 2,
      vaga: 'Designer UI/UX',
      empresa: 'Creative Studio',
      sigla: 'CS',
      localizacao: 'Remoto',
      salario: 'R$ 8.000 - R$ 12.000',
      dataAplicacao: '2024-01-12',
      status: 'aceita',
      visualizada: true
    },
    {
      id: 3,
      vaga: 'Estagiário de Desenvolvimento',
      empresa: 'StartUp Inc',
      sigla: 'SI',
      localizacao: 'Florianópolis, SC',
      salario: 'R$ 2.000',
      dataAplicacao: '2024-01-10',
      status: 'recusada',
      visualizada: true
    },
    {
      id: 4,
      vaga: 'Analista de Dados Jr',
      empresa: 'Data Corp',
      sigla: 'DC',
      localizacao: 'Rio de Janeiro, RJ',
      salario: 'R$ 5.000 - R$ 7.000',
      dataAplicacao: '2024-01-08',
      status: 'em_analise',
      visualizada: false
    }
  ];

  const filtros = [
    { id: 'todas', label: 'Todas', count: candidaturas.length },
    { id: 'em_analise', label: 'Em Análise', count: candidaturas.filter(c => c.status === 'em_analise').length },
    { id: 'aceita', label: 'Aceitas', count: candidaturas.filter(c => c.status === 'aceita').length },
    { id: 'recusada', label: 'Recusadas', count: candidaturas.filter(c => c.status === 'recusada').length }
  ];

  const filteredCandidaturas = filtro === 'todas' 
    ? candidaturas 
    : candidaturas.filter(c => c.status === filtro);

  const getStatusConfig = (status) => {
    switch(status) {
      case 'em_analise':
        return {
          icon: Clock,
          label: 'Em Análise',
          color: 'text-yellow-400',
          bg: 'bg-yellow-500/20',
          border: 'border-yellow-500/30'
        };
      case 'aceita':
        return {
          icon: CheckCircle,
          label: 'Aceita',
          color: 'text-green-400',
          bg: 'bg-green-500/20',
          border: 'border-green-500/30'
        };
      case 'recusada':
        return {
          icon: XCircle,
          label: 'Recusada',
          color: 'text-red-400',
          bg: 'bg-red-500/20',
          border: 'border-red-500/30'
        };
      default:
        return {
          icon: Clock,
          label: 'Pendente',
          color: 'text-gray-400',
          bg: 'bg-gray-500/20',
          border: 'border-gray-500/30'
        };
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
          <h1 className="text-4xl font-bold text-white mb-2">Minhas Candidaturas</h1>
          <p className="text-gray-200">Acompanhe o status das suas aplicações</p>
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Filtros */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex gap-2 mb-6 overflow-x-auto pb-2"
        >
          {filtros.map((f) => (
            <motion.button
              key={f.id}
              onClick={() => setFiltro(f.id)}
              className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap text-sm transition-all flex items-center gap-2 ${
                filtro === f.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'bg-card text-gray-400 border border-border hover:border-accent'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {f.label}
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                filtro === f.id ? 'bg-white/20' : 'bg-accent/20'
              }`}>
                {f.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Lista de Candidaturas */}
        <div className="space-y-4">
          {filteredCandidaturas.map((cand, index) => {
            const statusConfig = getStatusConfig(cand.status);
            const StatusIcon = statusConfig.icon;

            return (
              <motion.div
                key={cand.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="nexus-card cursor-pointer relative"
                onClick={() => navigate(`/vaga/${cand.id}`)}
              >
                {!cand.visualizada && (
                  <div className="absolute top-4 right-4">
                    <span className="w-3 h-3 bg-accent rounded-full block animate-pulse"></span>
                  </div>
                )}

                <div className="flex gap-4">
                  {/* Avatar Empresa */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {cand.sigla}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{cand.vaga}</h3>
                        <p className="text-gray-400 text-sm">{cand.empresa}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${statusConfig.bg} ${statusConfig.color} border ${statusConfig.border}`}>
                        <StatusIcon size={14} />
                        {statusConfig.label}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {cand.localizacao}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <DollarSign size={12} />
                        {cand.salario}
                      </span>
                      <span>•</span>
                      <span>Aplicado em {new Date(cand.dataAplicacao).toLocaleDateString('pt-BR')}</span>
                    </div>

                    {/* Mensagem de Status */}
                    {cand.status === 'aceita' && (
                      <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                        <p className="text-green-400 text-sm">
                          🎉 Parabéns! Sua candidatura foi aceita. A empresa entrará em contato em breve.
                        </p>
                      </div>
                    )}
                    {cand.status === 'recusada' && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                        <p className="text-red-400 text-sm">
                          Infelizmente sua candidatura não foi selecionada desta vez. Continue tentando!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {filteredCandidaturas.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📋</div>
            <p className="text-gray-400 text-lg mb-4">
              {filtro === 'todas' 
                ? 'Você ainda não se candidatou a nenhuma vaga'
                : `Nenhuma candidatura ${filtros.find(f => f.id === filtro)?.label.toLowerCase()}`
              }
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
