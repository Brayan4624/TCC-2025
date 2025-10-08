# 🚀 NEXUS - Plataforma de Conexão entre Empresas e Talentos

![NEXUS](https://img.shields.io/badge/NEXUS-Platform-E63946?style=for-the-badge)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5+-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3+-38B2AC?style=for-the-badge&logo=tailwind-css)

## 📋 Sobre o Projeto

**NEXUS** é uma plataforma completa que conecta empresas e talentos (estudantes/estagiários), facilitando o processo de recrutamento e busca por oportunidades profissionais.

### 🎯 Objetivo

Criar uma ponte eficiente entre empresas que buscam talentos e profissionais que procuram oportunidades, oferecendo ferramentas modernas e intuitivas para ambos os perfis.

---

## ✨ Funcionalidades Principais

### 👔 Para Empresas:
- ✅ Dashboard empresarial com métricas em tempo real
- ✅ Busca e filtros avançados de estagiários
- ✅ Publicação de vagas, posts e anúncios
- ✅ Gerenciamento completo de publicações
- ✅ Perfil empresarial editável e personalizável
- ✅ Sistema de mensagens com candidatos
- ✅ Notificações de candidaturas
- ✅ Galeria de fotos da empresa

### 🎓 Para Estudantes/Estagiários:
- ✅ Feed social com postagens de empresas
- ✅ Busca de vagas com filtros
- ✅ Sistema de candidaturas
- ✅ Acompanhamento de status das aplicações
- ✅ Builder de currículo profissional
- ✅ Perfil personalizável
- ✅ Vagas salvas (favoritos)
- ✅ Sistema de mensagens

---

## 🛠️ Tecnologias Utilizadas

### Frontend:
- **React 18+** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápido e moderno
- **React Router v6** - Roteamento SPA
- **Framer Motion** - Animações suaves
- **TailwindCSS** - Framework CSS utility-first
- **Lucide Icons** - Ícones modernos

### Ferramentas:
- **pnpm** - Gerenciador de pacotes
- **ESLint** - Linter JavaScript
- **PostCSS** - Processador CSS

---

## 📦 Instalação e Execução

### Pré-requisitos:
- Node.js 18+ 
- pnpm (ou npm/yarn)

### Passos:

1. **Clone o repositório:**
```bash
git clone https://github.com/Brayan4624/TCC-2025.git
cd TCC-2025
```

2. **Instale as dependências:**
```bash
pnpm install
```

3. **Execute em desenvolvimento:**
```bash
pnpm dev
```

4. **Acesse no navegador:**
```
http://localhost:5173
```

5. **Build para produção:**
```bash
pnpm build
```

6. **Preview da build:**
```bash
pnpm preview
```

---

## 📱 Estrutura do Projeto

```
nexus-app/
├── public/              # Arquivos estáticos
│   ├── _redirects      # Configuração SPA routing
│   └── assets/         # Imagens e recursos
├── src/
│   ├── assets/         # Assets do Figma
│   ├── components/     # Componentes React
│   │   ├── Login.jsx
│   │   ├── CriarConta.jsx
│   │   ├── DemoEmpresa.jsx
│   │   ├── Feed.jsx
│   │   ├── InicioEmpresa.jsx
│   │   ├── Vagas.jsx
│   │   ├── VagaDetalhes.jsx
│   │   ├── Criar.jsx
│   │   ├── CriarVaga.jsx
│   │   ├── Perfil.jsx
│   │   ├── PerfilEmpresa.jsx
│   │   ├── Empresas.jsx
│   │   ├── Estagiarios.jsx
│   │   ├── Configuracoes.jsx
│   │   ├── CriarCurriculo.jsx
│   │   ├── MinhasPublicacoes.jsx
│   │   ├── Candidaturas.jsx
│   │   ├── Notificacoes.jsx
│   │   ├── Mensagens.jsx
│   │   ├── VagasSalvas.jsx
│   │   ├── BottomNav.jsx
│   │   └── Home.jsx
│   ├── context/        # Context API
│   │   └── UserContext.jsx
│   ├── App.jsx         # Componente principal
│   ├── App.css         # Estilos globais
│   └── main.jsx        # Entry point
├── index.html          # HTML base
├── vite.config.js      # Configuração Vite
├── tailwind.config.js  # Configuração Tailwind
└── package.json        # Dependências
```

---

## 🎨 Design System

### Paleta de Cores:
```css
--primary: #E63946      /* Vermelho coral */
--accent: #FF6B7A       /* Rosa salmão */
--background: #0F1419   /* Azul escuro quase preto */
--card: #1E2329         /* Cinza azulado escuro */
--border: rgba(255,255,255,0.1)  /* Bordas sutis */
```

### Tipografia:
- **Font Family:** Inter, system-ui, sans-serif
- **Base Size:** 14px
- **Line Height:** 1.5

---

## 📄 Páginas Disponíveis

### Públicas:
- `/` - Login
- `/criar-conta` - Cadastro
- `/demo-empresa` - Apresentação empresarial
- `/home` - Landing page

### Empresas:
- `/inicio-empresa` - Dashboard
- `/estagiarios` - Buscar talentos
- `/criar` - Criar publicação
- `/minhas-publicacoes` - Gerenciar vagas
- `/perfil-empresa` - Perfil completo

### Estudantes:
- `/feed` - Feed social
- `/vagas` - Lista de vagas
- `/vaga/:id` - Detalhes da vaga
- `/empresas` - Lista de empresas
- `/candidaturas` - Minhas candidaturas
- `/criar-curriculo` - Builder de CV
- `/vagas-salvas` - Favoritos
- `/perfil` - Perfil pessoal

### Compartilhadas:
- `/mensagens` - Chat
- `/notificacoes` - Alertas
- `/configuracoes` - Configurações

---

## 🔐 Autenticação

O sistema possui dois tipos de perfil:

### 1. Perfil Empresa
- Acesso via "Perfil Empresa" no login
- Dashboard empresarial
- Funcionalidades de recrutamento

### 2. Perfil Estudante
- Acesso via "Perfil Estudante" no login
- Feed social
- Busca de vagas

---

## 🚀 Deploy

O projeto está configurado para deploy em plataformas como:
- Vercel
- Netlify
- GitHub Pages
- Manus Platform

### Arquivo `_redirects` (SPA):
```
/*    /index.html   200
```

---

## 👥 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📧 Contato

**Desenvolvedor:** Brayan  
**GitHub:** [@Brayan4624](https://github.com/Brayan4624)  
**Projeto:** [TCC-2025](https://github.com/Brayan4624/TCC-2025)

---

## 🎉 Agradecimentos

- Design inspirado em plataformas modernas de recrutamento
- UI Kit: Daphnex Dark UI Kit
- Ícones: Lucide Icons
- Animações: Framer Motion

---

**Desenvolvido com ❤️ usando React + Vite**
