import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { User, Building2, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import './App.css'

function App() {
  const [showPassword, setShowPassword] = useState(false)
  const [activeTab, setActiveTab] = useState('student')
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt:', { ...formData, type: activeTab })
  }

  return (
    <div className="login-container">
      {/* Formas geométricas decorativas */}
      <div className="geometric-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
        <div className="shape shape-5"></div>
      </div>

      <div className="login-content">
        <div className="login-header">
          <h1 className="login-title">Bem-vindo</h1>
          <p className="login-subtitle">Acesse sua conta para continuar</p>
        </div>

        <Card className="login-card">
          <CardHeader className="login-card-header">
            <CardTitle className="card-title">Fazer Login</CardTitle>
            <CardDescription className="card-description">
              Escolha seu tipo de conta e faça login
            </CardDescription>
          </CardHeader>
          <CardContent className="login-card-content">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="login-tabs">
              <TabsList className="tabs-list">
                <TabsTrigger value="student" className="tab-trigger">
                  <User className="tab-icon" />
                  Estudante
                </TabsTrigger>
                <TabsTrigger value="company" className="tab-trigger">
                  <Building2 className="tab-icon" />
                  Empresa
                </TabsTrigger>
              </TabsList>

              <TabsContent value="student" className="tab-content">
                <form onSubmit={handleSubmit} className="login-form">
                  <div className="form-group">
                    <Label htmlFor="student-email" className="form-label">
                      <Mail className="label-icon" />
                      Email do Estudante
                    </Label>
                    <Input
                      id="student-email"
                      name="email"
                      type="email"
                      placeholder="seu.email@estudante.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="student-password" className="form-label">
                      <Lock className="label-icon" />
                      Senha
                    </Label>
                    <div className="password-input-container">
                      <Input
                        id="student-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="form-input password-input"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="password-toggle"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  <Button type="submit" className="login-button student-button">
                    Entrar como Estudante
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="company" className="tab-content">
                <form onSubmit={handleSubmit} className="login-form">
                  <div className="form-group">
                    <Label htmlFor="company-email" className="form-label">
                      <Mail className="label-icon" />
                      Email Corporativo
                    </Label>
                    <Input
                      id="company-email"
                      name="email"
                      type="email"
                      placeholder="contato@empresa.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Label htmlFor="company-password" className="form-label">
                      <Lock className="label-icon" />
                      Senha
                    </Label>
                    <div className="password-input-container">
                      <Input
                        id="company-password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Digite sua senha"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="form-input password-input"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="password-toggle"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>
                  <Button type="submit" className="login-button company-button">
                    Entrar como Empresa
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="login-footer">
              <a href="#" className="forgot-password">Esqueceu sua senha?</a>
              <div className="signup-link">
                Não tem uma conta? <a href="#" className="signup-link-text">Cadastre-se</a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
