import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Login from './components/Login';
import CriarConta from './components/CriarConta';
import DemoEmpresa from './components/DemoEmpresa';
import Home from './components/Home';
import Feed from './components/Feed';
import InicioEmpresa from './components/InicioEmpresa';
import Vagas from './components/Vagas';
import VagaDetalhes from './components/VagaDetalhes';
import Criar from './components/Criar';
import CriarVaga from './components/CriarVaga';
import Perfil from './components/Perfil';
import PerfilEmpresa from './components/PerfilEmpresa';
import Empresas from './components/Empresas';
import Estagiarios from './components/Estagiarios';
import Configuracoes from './components/Configuracoes';
import CriarCurriculo from './components/CriarCurriculo';
import MinhasPublicacoes from './components/MinhasPublicacoes';
import Candidaturas from './components/Candidaturas';
import Notificacoes from './components/Notificacoes';
import Mensagens from './components/Mensagens';
import VagasSalvas from './components/VagasSalvas';
import './App.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/criar-conta" element={<CriarConta />} />
          <Route path="/demo-empresa" element={<DemoEmpresa />} />
          <Route path="/home" element={<Home />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/inicio-empresa" element={<InicioEmpresa />} />
          <Route path="/vagas" element={<Vagas />} />
          <Route path="/vaga/:id" element={<VagaDetalhes />} />
          <Route path="/criar" element={<Criar />} />
          <Route path="/criar-vaga" element={<CriarVaga />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/perfil-empresa" element={<PerfilEmpresa />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/estagiarios" element={<Estagiarios />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/criar-curriculo" element={<CriarCurriculo />} />
          <Route path="/minhas-publicacoes" element={<MinhasPublicacoes />} />
          <Route path="/candidaturas" element={<Candidaturas />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          <Route path="/mensagens" element={<Mensagens />} />
          <Route path="/vagas-salvas" element={<VagasSalvas />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
