# 📚 Guia Completo: Deploy e Atualização do Portfólio FLOWCONNECT DEV

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Pré-requisitos](#pré-requisitos)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Instruções de Deploy](#instruções-de-deploy)
5. [Como Atualizar Conteúdo](#como-atualizar-conteúdo)
6. [Troubleshooting](#troubleshooting)

---

## 🎯 Visão Geral

O portfólio **FLOWCONNECT DEV** é um site estático moderno desenvolvido com:

- **Frontend:** React 19 + Tailwind CSS 4
- **Build Tool:** Vite
- **Hospedagem:** Compatível com EasyPanel (Hostiguer)
- **Versionamento:** GitHub

O projeto está pronto para ser hospedado em qualquer servidor que suporte Node.js ou arquivos estáticos HTML/CSS/JS.

---

## ✅ Pré-requisitos

Antes de fazer deploy, certifique-se de ter instalado:

| Ferramenta | Versão | Propósito |
|-----------|--------|----------|
| Node.js | 18+ | Runtime JavaScript |
| npm ou pnpm | Última | Gerenciador de pacotes |
| Git | Qualquer | Versionamento |
| GitHub Account | - | Repositório remoto |

### Instalação Rápida

**No Ubuntu/Linux:**
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
npm install -g pnpm
```

**No macOS (com Homebrew):**
```bash
brew install node
npm install -g pnpm
```

**No Windows:**
Baixe do [nodejs.org](https://nodejs.org/) e instale o instalador.

---

## 📁 Estrutura do Projeto

```
flowconnect-portfolio/
├── client/                          # Frontend React
│   ├── public/
│   │   ├── images/                 # Imagens, vídeos e certificados
│   │   │   ├── LOGO FLOWCONNECT.png
│   │   │   ├── MINHA FOTO...jpg
│   │   │   ├── chatbot-c-amorim-compressed.mp4
│   │   │   ├── [Em 4K]...mp4
│   │   │   ├── Certificado/        # PDFs dos certificados
│   │   │   └── Logo das empresas...
│   │   └── index.html              # Template HTML
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx            # Página principal
│   │   ├── components/
│   │   │   ├── Header.tsx          # Navegação
│   │   │   ├── Hero.tsx            # Seção inicial
│   │   │   ├── Projects.tsx        # Portfólio de projetos
│   │   │   ├── Skills.tsx          # Habilidades técnicas
│   │   │   ├── Certificates.tsx    # Certificados
│   │   │   ├── Contact.tsx         # Formulário de contato
│   │   │   └── Footer.tsx          # Rodapé
│   │   ├── App.tsx                 # Componente raiz
│   │   ├── main.tsx                # Entry point
│   │   └── index.css               # Estilos globais
│   └── package.json
├── server/                          # Backend (não usado neste projeto)
├── package.json                     # Dependências do projeto
├── vite.config.ts                  # Configuração Vite
├── tsconfig.json                   # Configuração TypeScript
├── tailwind.config.ts              # Configuração Tailwind
└── GUIA_DEPLOY_ATUALIZACAO.md     # Este arquivo
```

### Arquivos Importantes para Atualização

- **`client/src/components/Hero.tsx`** - Informações pessoais, foto, descrição
- **`client/src/components/Projects.tsx`** - Projetos e vídeos
- **`client/src/components/Skills.tsx`** - Habilidades técnicas
- **`client/src/components/Certificates.tsx`** - Certificados e cursos
- **`client/src/components/Contact.tsx`** - Informações de contato
- **`client/public/images/`** - Todos os arquivos de mídia

---

## 🚀 Instruções de Deploy

### Opção 1: Deploy via EasyPanel (Recomendado)

#### Passo 1: Preparar o Repositório GitHub

1. **Criar repositório no GitHub:**
   - Acesse [github.com/new](https://github.com/new)
   - Nome: `flowconnect-portfolio`
   - Descrição: "Portfólio profissional - Automação & IA"
   - Escolha "Public" (para que o EasyPanel possa acessar)
   - Clique em "Create repository"

2. **Clonar e fazer push do projeto:**

```bash
# No seu computador, navegue até a pasta do projeto
cd ~/flowconnect-portfolio

# Inicializar git (se ainda não estiver)
git init

# Adicionar remote
git remote add origin https://github.com/SEU_USUARIO/flowconnect-portfolio.git

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit: FLOWCONNECT DEV portfolio"

# Fazer push para GitHub
git branch -M main
git push -u origin main
```

#### Passo 2: Configurar no EasyPanel

1. **Acessar EasyPanel:**
   - Vá para o painel da Hostiguer/EasyPanel
   - Faça login com suas credenciais

2. **Criar nova aplicação:**
   - Clique em "New Application" ou "Novo Aplicativo"
   - Escolha "Node.js" como tipo de aplicação
   - Selecione a versão 20 ou superior

3. **Conectar ao GitHub:**
   - Escolha "GitHub" como fonte
   - Autorize o acesso ao seu GitHub
   - Selecione o repositório `flowconnect-portfolio`
   - Branch: `main`

4. **Configurar Build:**
   - **Build Command:** `pnpm install && pnpm build`
   - **Start Command:** `pnpm start`
   - **Port:** `3000`

5. **Variáveis de Ambiente (opcional):**
   - Deixe em branco por enquanto (este projeto não precisa)

6. **Deploy:**
   - Clique em "Deploy"
   - Aguarde a compilação (pode levar 2-5 minutos)
   - Seu site estará disponível em: `https://seu-dominio.easypanel.io`

#### Passo 3: Configurar Domínio Personalizado (Opcional)

1. No EasyPanel, vá para "Domains"
2. Clique em "Add Domain"
3. Escolha seu domínio (ex: `jessicaoliveira.com`)
4. Siga as instruções para apontar o DNS

---

### Opção 2: Deploy Manual em VPS

Se preferir fazer deploy manualmente em sua VPS:

```bash
# 1. SSH na sua VPS
ssh usuario@seu-vps.com

# 2. Clonar o repositório
git clone https://github.com/SEU_USUARIO/flowconnect-portfolio.git
cd flowconnect-portfolio

# 3. Instalar dependências
pnpm install

# 4. Fazer build
pnpm build

# 5. Iniciar servidor (em background)
nohup pnpm start > app.log 2>&1 &

# 6. Verificar se está rodando
curl http://localhost:3000
```

**Para manter o servidor rodando permanentemente, use PM2:**

```bash
# Instalar PM2
npm install -g pm2

# Iniciar aplicação
pm2 start "pnpm start" --name "flowconnect-portfolio"

# Salvar configuração
pm2 save

# Iniciar no boot
pm2 startup
```

---

## 📝 Como Atualizar Conteúdo

### 1. Atualizar Informações Pessoais

**Arquivo:** `client/src/components/Hero.tsx`

```typescript
// Alterar descrição
<p className="text-xl text-gray-600 mb-6 leading-relaxed">
  Especialista em automação com N8N, desenvolvimento web e criação de agentes de IA com Gemini. 
  Transformo processos manuais em soluções inteligentes e escaláveis.
</p>

// Alterar semestre/curso
<p className="text-2xl font-bold text-blue-700">5º Semestre</p>
<p className="text-sm text-gray-600">Análise e Desenvolvimento</p>
```

### 2. Adicionar Novo Projeto

**Arquivo:** `client/src/components/Projects.tsx`

Adicione um novo objeto no array `projects`:

```typescript
{
  id: "4",
  title: "Nome do Projeto",
  company: "Nome da Empresa",
  description: "Descrição breve do projeto",
  technologies: ["Tech1", "Tech2", "Tech3"],
  videoPath: "/images/seu-video.mp4", // ou imagem
}
```

**Importante:** Coloque o arquivo de vídeo/imagem em `client/public/images/`

### 3. Adicionar Nova Habilidade

**Arquivo:** `client/src/components/Skills.tsx`

Modifique o array `skillCategories`:

```typescript
{
  title: "Categoria",
  icon: <IconComponent className="w-6 h-6" />,
  skills: ["Skill1", "Skill2", "Skill3"],
  color: "from-blue-500 to-blue-600",
}
```

### 4. Adicionar Novo Certificado

**Arquivo:** `client/src/components/Certificates.tsx`

Adicione ao array `certificates`:

```typescript
{
  id: "10",
  title: "Nome do Certificado",
  issuer: "Instituição",
  date: "2024",
  path: "/images/Certificado/arquivo.pdf",
  category: "Categoria",
}
```

**Importante:** Coloque o PDF em `client/public/images/Certificado/`

### 5. Atualizar Informações de Contato

**Arquivo:** `client/src/components/Contact.tsx`

```typescript
// Email
<a href="mailto:novo@email.com">novo@email.com</a>

// Telefone
<a href="tel:+5577991410379">(77) 99141-0379</a>

// Localização
<p className="text-gray-600">Nova Cidade - Estado</p>
```

### 6. Atualizar Redes Sociais

**Arquivo:** `client/src/components/Hero.tsx` e `client/src/components/Contact.tsx`

```typescript
<a href="https://github.com/seu-usuario" target="_blank">
  <Github className="w-5 h-5 text-blue-700" />
</a>
```

---

## 📤 Fazer Upload de Mídia

### Adicionar Vídeos

1. **Comprimir vídeo (recomendado):**
   ```bash
   ffmpeg -i video-original.mp4 -vcodec libx264 -crf 28 -preset fast \
   -acodec aac -b:a 128k video-comprimido.mp4
   ```

2. **Copiar para pasta:**
   ```bash
   cp video-comprimido.mp4 client/public/images/
   ```

3. **Referenciar no código:**
   ```typescript
   videoPath: "/images/video-comprimido.mp4"
   ```

### Adicionar Imagens

1. **Otimizar imagem (opcional):**
   ```bash
   # Redimensionar
   convert imagem.jpg -resize 1920x1080 imagem-otimizada.jpg
   ```

2. **Copiar para pasta:**
   ```bash
   cp imagem.jpg client/public/images/
   ```

3. **Usar no código:**
   ```typescript
   <img src="/images/imagem.jpg" alt="Descrição" />
   ```

### Adicionar Certificados (PDF)

1. **Copiar PDF:**
   ```bash
   cp certificado.pdf client/public/images/Certificado/
   ```

2. **Adicionar ao array de certificados:**
   ```typescript
   {
     path: "/images/Certificado/certificado.pdf",
     // ... outros dados
   }
   ```

---

## 🔄 Workflow de Atualização Completo

Após fazer alterações localmente:

### 1. Testar Localmente

```bash
# Instalar dependências (se primeira vez)
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Abrir no navegador
# http://localhost:5173
```

### 2. Fazer Commit e Push

```bash
# Adicionar todas as alterações
git add .

# Fazer commit com mensagem descritiva
git commit -m "Adicionar novo projeto: Nome do Projeto"

# Fazer push para GitHub
git push origin main
```

### 3. Deploy Automático

- Se estiver usando EasyPanel: o deploy acontece automaticamente após o push
- Se estiver em VPS manual: faça pull das alterações e rebuild

```bash
# Na VPS
cd flowconnect-portfolio
git pull origin main
pnpm build
pm2 restart flowconnect-portfolio
```

---

## 🐛 Troubleshooting

### Problema: "Port 3000 already in use"

**Solução:**
```bash
# Encontrar processo usando a porta
lsof -i :3000

# Matar o processo
kill -9 <PID>

# Ou usar outra porta
PORT=3001 pnpm start
```

### Problema: Vídeo não carrega

**Verificar:**
1. Arquivo está em `client/public/images/`?
2. Caminho no código está correto? (ex: `/images/video.mp4`)
3. Tamanho do arquivo < 50MB?
4. Formato suportado? (MP4, WebM, MOV)

### Problema: Certificados não aparecem

**Verificar:**
1. Arquivo PDF está em `client/public/images/Certificado/`?
2. Caminho no array está correto?
3. Categoria está correta?

### Problema: Build falha

**Solução:**
```bash
# Limpar cache
rm -rf node_modules .next dist

# Reinstalar
pnpm install

# Tentar build novamente
pnpm build
```

### Problema: Estilos não aparecem corretamente

**Solução:**
```bash
# Limpar cache do Tailwind
rm -rf .tailwindcss-cache

# Rebuild
pnpm build
```

---

## 📊 Monitoramento

### Verificar Logs (EasyPanel)

1. Acesse o dashboard do EasyPanel
2. Selecione a aplicação
3. Clique em "Logs"
4. Verifique erros recentes

### Verificar Logs (VPS Manual)

```bash
# Ver logs em tempo real
tail -f app.log

# Ver últimas 50 linhas
tail -50 app.log

# Com PM2
pm2 logs flowconnect-portfolio
```

---

## 🔐 Boas Práticas de Segurança

1. **Nunca commitar senhas ou tokens** - Use `.env` (não versionado)
2. **Manter dependências atualizadas:**
   ```bash
   pnpm update
   ```
3. **Usar HTTPS** - Configure SSL no EasyPanel ou Nginx
4. **Fazer backup regular** do repositório GitHub

---

## 📞 Suporte e Recursos

| Recurso | Link |
|---------|------|
| Documentação Vite | https://vitejs.dev |
| Tailwind CSS | https://tailwindcss.com |
| React | https://react.dev |
| EasyPanel Docs | https://easypanel.io/docs |
| GitHub Help | https://docs.github.com |

---

## ✨ Próximas Melhorias Sugeridas

1. **Analytics:** Integrar Google Analytics ou Plausible para rastrear visitantes
2. **Newsletter:** Adicionar formulário de inscrição em newsletter
3. **Blog:** Criar seção de artigos sobre automação e IA
4. **Temas:** Implementar alternância entre tema claro/escuro
5. **Multilíngue:** Adicionar suporte para português e inglês
6. **Otimização SEO:** Adicionar meta tags e sitemap.xml
7. **PWA:** Transformar em Progressive Web App para acesso offline

---

**Última atualização:** Janeiro de 2026  
**Versão:** 1.0.0  
**Autor:** Jéssica Oliveira Meira - FLOWCONNECT DEV
