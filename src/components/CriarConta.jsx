import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Building2, Phone, ArrowRight, ArrowLeft } from 'lucide-react';
import { useUser } from '../context/UserContext';
import logoIcon from '../assets/10-21.svg';

export default function CriarConta() {
  const navigate = useNavigate();
  const { login } = useUser();
  const [step, setStep] = useState(1);
  const [tipoConta, setTipoConta] = useState('');
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    senha: '',
    confirmarSenha: ''
  });

  const handleTipoSelect = (tipo) => {
    setTipoConta(tipo);
    setStep(2);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validação básica
    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    
    // Simular criação de conta
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Login automático após criar conta
    login(tipoConta, {
      nome: formData.nome,
      email: formData.email,
      avatar: formData.nome.split(' ').map(n => n[0]).join('').toUpperCase()
    });
    
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* Logo */}
        <div className="text-center mb-6">
          <motion.div
            className="nexus-logo mx-auto mb-3"
            whileHover={{ scale: 1.05 }}
          >
            <img src={logoIcon} alt="NEXUS Logo" className="w-10 h-10" />
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-1">Criar Conta</h1>
          <p className="text-gray-400 text-sm">Junte-se ao NEXUS</p>
        </div>

        {/* Card */}
        <motion.div
          className="bg-card border border-border rounded-xl p-6 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          {step === 1 ? (
            // Escolha do tipo de conta
            <div>
              <h2 className="text-xl font-bold text-white mb-2 text-center">
                Escolha o tipo de conta
              </h2>
              <p className="text-gray-400 text-sm mb-6 text-center">
                Selecione como você deseja usar o NEXUS
              </p>

              <div className="space-y-3">
                <motion.button
                  onClick={() => handleTipoSelect('estudante')}
                  className="w-full p-4 bg-card border-2 border-border rounded-lg hover:border-accent transition-all text-left"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(230, 57, 70, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <User size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Estudante/Estagiário</h3>
                      <p className="text-gray-400 text-sm">
                        Buscar vagas e oportunidades
                      </p>
                    </div>
                  </div>
                </motion.button>

                <motion.button
                  onClick={() => handleTipoSelect('empresa')}
                  className="w-full p-4 bg-card border-2 border-border rounded-lg hover:border-accent transition-all text-left"
                  whileHover={{ scale: 1.02, borderColor: 'rgba(230, 57, 70, 0.5)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <Building2 size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold mb-1">Empresa</h3>
                      <p className="text-gray-400 text-sm">
                        Publicar vagas e encontrar talentos
                      </p>
                    </div>
                  </div>
                </motion.button>
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={() => navigate('/')}
                  className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 mx-auto"
                >
                  <ArrowLeft size={16} />
                  Voltar para login
                </button>
              </div>
            </div>
          ) : (
            // Formulário de cadastro
            <div>
              <button
                onClick={() => setStep(1)}
                className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1 mb-4"
              >
                <ArrowLeft size={16} />
                Voltar
              </button>

              <h2 className="text-xl font-bold text-white mb-1">
                Criar conta {tipoConta === 'empresa' ? 'Empresarial' : 'de Estudante'}
              </h2>
              <p className="text-gray-400 text-sm mb-5">
                Preencha seus dados para começar
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Nome */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                    {tipoConta === 'empresa' ? 'Nome da Empresa' : 'Nome Completo'}
                  </label>
                  <div className="relative">
                    {tipoConta === 'empresa' ? (
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    ) : (
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    )}
                    <input
                      type="text"
                      name="nome"
                      placeholder={tipoConta === 'empresa' ? 'Tech Solutions' : 'João Silva'}
                      value={formData.nome}
                      onChange={handleChange}
                      className="nexus-input pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input
                      type="email"
                      name="email"
                      placeholder="seu.email@exemplo.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="nexus-input pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Telefone */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                    Telefone
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="(11) 98765-4321"
                      value={formData.telefone}
                      onChange={handleChange}
                      className="nexus-input pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Senha */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                    Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input
                      type="password"
                      name="senha"
                      placeholder="••••••••"
                      value={formData.senha}
                      onChange={handleChange}
                      className="nexus-input pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Confirmar Senha */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1.5">
                    Confirmar Senha
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input
                      type="password"
                      name="confirmarSenha"
                      placeholder="••••••••"
                      value={formData.confirmarSenha}
                      onChange={handleChange}
                      className="nexus-input pl-10"
                      required
                    />
                  </div>
                </div>

                {/* Botão */}
                <motion.button
                  type="submit"
                  className="nexus-btn-primary mt-4 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span>Criar Conta</span>
                  <ArrowRight size={16} />
                </motion.button>
              </form>
            </div>
          )}
        </motion.div>

        {/* Link para Login */}
        {step === 1 && (
          <div className="text-center mt-4">
            <p className="text-gray-400 text-sm">
              Já tem uma conta?{' '}
              <button onClick={() => navigate('/')} className="nexus-link">
                Fazer login
              </button>
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
}
