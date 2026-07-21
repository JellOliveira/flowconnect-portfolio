# ⚡ Guia Rápido de Atualizações

Este arquivo contém instruções rápidas para as atualizações mais comuns no portfólio.

---

## 🎯 Tarefas Comuns

### 1️⃣ Adicionar um Novo Vídeo de Projeto

**Arquivo a editar:** `client/src/components/Projects.tsx`

**Passo 1:** Comprimir o vídeo (se > 20MB)
```bash
ffmpeg -i video-original.mp4 -vcodec libx264 -crf 28 -preset fast \
-acodec aac -b:a 128k video-novo.mp4
```

**Passo 2:** Copiar para a pasta de imagens
```bash
cp video-novo.mp4 client/public/images/
```

**Passo 3:** Adicionar ao código
```typescript
// Procure por: const projects: Project[] = [
// Adicione um novo objeto:

{
  id: "4",
  title: "Nome do Projeto",
  company: "Nome da Empresa",
  description: "Descrição do que foi desenvolvido",
  technologies: ["Tech1", "Tech2", "Tech3"],
  videoPath: "/images/video-novo.mp4",
}
```

**Passo 4:** Fazer commit e push
```bash
git add .
git commit -m "Adicionar novo projeto: Nome do Projeto"
git push origin main
```

---

### 2️⃣ Adicionar um Certificado

**Arquivo a editar:** `client/src/components/Certificates.tsx`

**Passo 1:** Copiar o PDF
```bash
cp certificado.pdf client/public/images/Certificado/
```

**Passo 2:** Adicionar ao código
```typescript
// Procure por: const certificates: Certificate[] = [
// Adicione um novo objeto:

{
  id: "10",
  title: "Nome do Certificado",
  issuer: "Instituição que emitiu",
  date: "2024",
  path: "/images/Certificado/certificado.pdf",
  category: "Python", // ou outra categoria
}
```

**Passo 3:** Fazer commit e push
```bash
git add .
git commit -m "Adicionar certificado: Nome do Certificado"
git push origin main
```

---

### 3️⃣ Atualizar Descrição Pessoal

**Arquivo a editar:** `client/src/components/Hero.tsx`

**Procure por:**
```typescript
<p className="text-xl text-gray-600 mb-6 leading-relaxed">
  Especialista em automação com N8N, desenvolvimento web e criação de agentes de IA com Gemini. 
  Transformo processos manuais em soluções inteligentes e escaláveis.
</p>
```

**Altere para sua descrição:**
```typescript
<p className="text-xl text-gray-600 mb-6 leading-relaxed">
  Sua nova descrição aqui...
</p>
```

**Fazer commit e push:**
```bash
git add client/src/components/Hero.tsx
git commit -m "Atualizar descrição pessoal"
git push origin main
```

---

### 4️⃣ Adicionar Nova Habilidade

**Arquivo a editar:** `client/src/components/Skills.tsx`

**Procure por:** `const skillCategories: SkillCategory[] = [`

**Adicione uma nova categoria:**
```typescript
{
  title: "Nome da Categoria",
  icon: <NomeDoIcone className="w-6 h-6" />,
  skills: ["Skill1", "Skill2", "Skill3"],
  color: "from-blue-500 to-blue-600", // Escolha uma cor
}
```

**Ícones disponíveis:** Code2, Zap, Database, Brain, MessageSquare, Workflow, etc.

**Cores disponíveis:**
- `from-blue-500 to-blue-600`
- `from-cyan-500 to-cyan-600`
- `from-indigo-500 to-indigo-600`
- `from-purple-500 to-purple-600`
- `from-pink-500 to-pink-600`
- `from-orange-500 to-orange-600`

---

### 5️⃣ Atualizar Informações de Contato

**Arquivo a editar:** `client/src/components/Contact.tsx`

**Email:**
```typescript
<a href="mailto:novo@email.com">novo@email.com</a>
```

**Telefone:**
```typescript
<a href="tel:+5577991410379">(77) 99141-0379</a>
```

**Localização:**
```typescript
<p className="text-gray-600">Sua Cidade - Seu Estado</p>
```

---

### 6️⃣ Atualizar Redes Sociais

**Arquivo a editar:** `client/src/components/Hero.tsx` e `client/src/components/Contact.tsx`

**GitHub:**
```typescript
<a href="https://github.com/seu-usuario" target="_blank">
  <Github className="w-5 h-5 text-blue-700" />
</a>
```

**LinkedIn:**
```typescript
<a href="https://www.linkedin.com/in/seu-perfil/" target="_blank">
  <Linkedin className="w-5 h-5 text-blue-700" />
</a>
```

---

### 7️⃣ Mudar Foto de Perfil

**Arquivo a editar:** `client/src/components/Hero.tsx`

**Procure por:**
```typescript
<img
  src="/images/MINHA FOTO PARA UTLIZAR NO INICIO DO PORTIFOLIO.jpg"
  alt="Jéssica Oliveira"
/>
```

**Passo 1:** Copiar nova foto
```bash
cp nova-foto.jpg client/public/images/
```

**Passo 2:** Atualizar caminho
```typescript
<img
  src="/images/nova-foto.jpg"
  alt="Seu Nome"
/>
```

---

### 8️⃣ Atualizar Semestre/Curso

**Arquivo a editar:** `client/src/components/Hero.tsx`

**Procure por:**
```typescript
<p className="text-2xl font-bold text-blue-700">Formada em</p>
<p className="text-sm text-gray-600">Análise e Desenvolvimento</p>
```

**Altere para:**
```typescript
<p className="text-2xl font-bold text-blue-700">Seu Semestre</p>
<p className="text-sm text-gray-600">Seu Curso</p>
```

---

## 📋 Checklist de Atualização

Depois de fazer qualquer alteração:

- [ ] Arquivo foi editado corretamente?
- [ ] Arquivo de mídia (vídeo/imagem/PDF) está em `client/public/images/`?
- [ ] Caminho no código está correto?
- [ ] Testou localmente com `pnpm dev`?
- [ ] Fez `git add .`?
- [ ] Fez `git commit -m "mensagem descritiva"`?
- [ ] Fez `git push origin main`?
- [ ] Deploy automático iniciou no EasyPanel?

---

## 🔍 Verificar Alterações Localmente

Antes de fazer push, sempre teste:

```bash
# Instalar dependências (primeira vez)
pnpm install

# Iniciar servidor local
pnpm dev

# Abrir no navegador
# http://localhost:5173

# Verificar se as alterações aparecem
```

---

## 🆘 Erros Comuns

### ❌ "Arquivo não encontrado"
**Solução:** Verificar se o arquivo está em `client/public/images/` e o caminho está correto

### ❌ "Vídeo não carrega"
**Solução:** Verificar se o arquivo é MP4, WebM ou MOV. Se > 50MB, comprimir.

### ❌ "Certificado não aparece"
**Solução:** Verificar se está em `client/public/images/Certificado/` e o caminho está correto

### ❌ "Build falha"
**Solução:** 
```bash
rm -rf node_modules
pnpm install
pnpm build
```

---

## 📞 Dúvidas?

Consulte o **`GUIA_DEPLOY_ATUALIZACAO.md`** para instruções mais detalhadas.

---

**Última atualização:** Janeiro de 2026
