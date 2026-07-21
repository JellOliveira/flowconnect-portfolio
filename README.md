# 🚀 FLOWCONNECT DEV - Portfólio Profissional

Portfólio moderno e responsivo para **Jéssica Oliveira Meira**, especialista em automação, desenvolvimento web e inteligência artificial.

![FLOWCONNECT DEV](client/public/images/LOGO%20FLOWCONNECT.png)

---

## 📋 Sobre

**FLOWCONNECT DEV** é um portfólio profissional que apresenta:

- ✨ **Design Minimalista Corporativo** com gradientes azul/ciano
- 🎬 **Projetos em Destaque** com vídeos dos trabalhos realizados
- 💼 **Habilidades Técnicas** organizadas por categoria
- 📜 **Certificados e Cursos** com visualização em modal
- 📧 **Formulário de Contato** funcional
- 📱 **Totalmente Responsivo** para todos os dispositivos
- ⚡ **Performance Otimizada** com Vite e React 19

---

## 🛠️ Stack Tecnológico

| Tecnologia | Versão | Propósito |
|-----------|--------|----------|
| React | 19.2 | Framework UI |
| Tailwind CSS | 4.1 | Styling |
| Vite | 7.1 | Build tool |
| TypeScript | 5.6 | Type safety |
| Lucide React | 0.453 | Ícones |
| Framer Motion | 12.23 | Animações |

---

## 🚀 Quick Start

### Instalação

```bash
# Clonar repositório
git clone https://github.com/SEU_USUARIO/flowconnect-portfolio.git
cd flowconnect-portfolio

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev

# Abrir no navegador
# http://localhost:5173
```

### Build para Produção

```bash
# Compilar projeto
pnpm build

# Testar build localmente
pnpm preview

# Iniciar servidor de produção
pnpm start
```

---

## 📁 Estrutura do Projeto

```
flowconnect-portfolio/
├── client/
│   ├── public/
│   │   ├── images/              # Mídia (vídeos, imagens, certificados)
│   │   └── index.html
│   ├── src/
│   │   ├── components/          # Componentes React
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Certificates.tsx
│   │   │   ├── Contact.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   └── Home.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── package.json
├── server/
│   └── index.ts                 # Express server
├── GUIA_DEPLOY_ATUALIZACAO.md  # Documentação completa
├── README.md                    # Este arquivo
└── package.json
```

---

## 🎨 Design System

### Paleta de Cores

- **Primária:** Azul Profundo (#0a4696) - Confiança e expertise
- **Secundária:** Ciano Vibrante (#00c8ff) - Energia e inovação
- **Neutros:** Branco (#ffffff) e Preto (#0f0f14)

### Tipografia

- **Display:** Poppins (Bold, SemiBold)
- **Body:** Inter (Regular, Medium)

### Animações

- Fade-in ao scroll
- Hover effects em cards
- Underline animado em links
- Pulse suave em elementos destacados

---

## 📝 Seções do Portfólio

### 1. **Header** (Navegação Fixa)
- Logo FLOWCONNECT
- Menu responsivo
- Links para todas as seções
- CTA "Entrar em Contato"

### 2. **Hero** (Apresentação)
- Foto profissional
- Descrição e especialidades
- Links para redes sociais
- Logos das empresas que trabalhou

### 3. **Projetos** (Portfólio)
- Cards com vídeos/imagens
- Modal para visualizar em detalhes
- Tecnologias utilizadas
- Descrições dos projetos

### 4. **Habilidades** (Competências)
- 6 categorias de skills
- Ícones representativos
- Badges com tecnologias
- Seção de cursos em andamento

### 5. **Certificados** (Qualificações)
- Galeria filtrada por categoria
- Preview de PDFs
- Download direto
- Informações de data e emissor

### 6. **Contato** (CTA)
- Formulário funcional
- Informações de contato direto
- Links para redes sociais
- Localização

### 7. **Footer** (Rodapé)
- Links rápidos
- Informações de copyright
- Links para redes sociais

---

## 🔧 Configuração

### Variáveis de Ambiente

Este projeto não requer variáveis de ambiente para funcionar localmente. Para produção, você pode adicionar:

```env
# .env (não versionado)
VITE_APP_TITLE=FLOWCONNECT DEV
VITE_APP_DESCRIPTION=Portfólio de Jéssica Oliveira Meira
```

### Configuração Tailwind

O arquivo `tailwind.config.ts` contém:
- Tema customizado com cores corporativas
- Extensões de animações
- Configuração de spacing

---

## 📱 Responsividade

O portfólio é totalmente responsivo com breakpoints:

- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

Todos os componentes se adaptam automaticamente usando Tailwind CSS.

---

## 🚀 Deploy

### EasyPanel (Recomendado)

1. Fazer push para GitHub
2. Conectar repositório no EasyPanel
3. Configurar build: `pnpm install && pnpm build`
4. Configurar start: `pnpm start`
5. Deploy automático em cada push

**Veja o guia completo em `GUIA_DEPLOY_ATUALIZACAO.md`**

### Outras Plataformas

- **Vercel:** Suporte nativo para Vite + React
- **Netlify:** Drag-and-drop ou GitHub integration
- **Railway:** Deploy simples com GitHub
- **VPS Manual:** Seguir instruções do guia

---

## 📝 Como Atualizar Conteúdo

### Adicionar Novo Projeto

1. Abrir `client/src/components/Projects.tsx`
2. Adicionar objeto ao array `projects`
3. Colocar vídeo/imagem em `client/public/images/`
4. Fazer commit e push

### Adicionar Certificado

1. Abrir `client/src/components/Certificates.tsx`
2. Adicionar objeto ao array `certificates`
3. Colocar PDF em `client/public/images/Certificado/`
4. Fazer commit e push

### Atualizar Informações Pessoais

1. Editar `client/src/components/Hero.tsx`
2. Atualizar descrição, foto, links
3. Fazer commit e push

**Veja instruções detalhadas em `GUIA_DEPLOY_ATUALIZACAO.md`**

---

## 🔍 SEO

O portfólio inclui:

- Meta tags descritivas
- Open Graph tags para compartilhamento
- Favicon
- URLs semânticas
- Estrutura HTML semântica

---

## ⚡ Performance

- **Vite:** Build rápido e HMR (Hot Module Replacement)
- **React 19:** Renderização otimizada
- **Tailwind CSS:** CSS purificado apenas com classes usadas
- **Compressão de vídeos:** Formato web otimizado
- **Lazy loading:** Imagens carregam sob demanda

---

## 🐛 Troubleshooting

### Vídeo não carrega
- Verificar se arquivo está em `client/public/images/`
- Verificar caminho no código
- Testar tamanho do arquivo (máx 50MB)

### Certificados não aparecem
- Verificar se PDF está em `client/public/images/Certificado/`
- Verificar caminho no array
- Verificar categoria

### Build falha
```bash
rm -rf node_modules .next dist
pnpm install
pnpm build
```

---

## 📚 Documentação Adicional

- **[Guia Completo de Deploy e Atualização](./GUIA_DEPLOY_ATUALIZACAO.md)** - Instruções passo-a-passo
- **[Vite Documentation](https://vitejs.dev)** - Build tool
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS
- **[React Documentation](https://react.dev)** - Framework UI

---

## 👤 Autor

**Jéssica Oliveira Meira**

- 📧 Email: jell.meira.30@gmail.com
- 📱 WhatsApp: (77) 99141-0379
- 🔗 LinkedIn: [jessica-oliveira-meira](https://www.linkedin.com/in/jessica-oliveira-meira/)
- 🐙 GitHub: [JellOliveira](https://github.com/JellOliveira)
- 📍 Localização: Vitória da Conquista - Bahia

---

## 📄 Licença

Este projeto é de uso pessoal. Você é livre para usar como base para seu próprio portfólio.

---

## 🙏 Agradecimentos

- Design inspirado em portfólios modernos (Stripe, Apple)
- Componentes de [shadcn/ui](https://ui.shadcn.com)
- Ícones de [Lucide React](https://lucide.dev)
- Tipografia do [Google Fonts](https://fonts.google.com)

---

**Desenvolvido com ❤️ por FLOWCONNECT DEV**

*Última atualização: Janeiro de 2026*
