# 📸 Guia: Como Adicionar PDFs de Certificados e Vídeos de Projetos

Este guia ensina passo-a-passo como adicionar novos certificados (PDFs) e vídeos de produtos ao seu portfólio.

---

## 📄 PARTE 1: Adicionar Certificados (PDFs)

### Passo 1: Preparar o Arquivo PDF

Antes de adicionar ao portfólio, certifique-se de que:
- ✅ O arquivo está em formato **PDF**
- ✅ O arquivo tem um nome descritivo (ex: `Certificado-Python-2024.pdf`)
- ✅ O tamanho é menor que 10MB (PDFs geralmente são pequenos)

### Passo 2: Copiar o PDF para a Pasta Correta

**Caminho:** `client/public/images/Certificado/`

**Opção A: Via Terminal (Linux/Mac)**
```bash
# Copiar arquivo para a pasta de certificados
cp /caminho/do/seu/certificado.pdf /home/ubuntu/flowconnect-portfolio/client/public/images/Certificado/

# Verificar se foi copiado
ls -lh /home/ubuntu/flowconnect-portfolio/client/public/images/Certificado/
```

**Opção B: Via Explorador de Arquivos (Windows/Mac)**
1. Abra o Explorador de Arquivos
2. Navegue até: `flowconnect-portfolio/client/public/images/Certificado/`
3. Arraste e solte o PDF nesta pasta

### Passo 3: Adicionar ao Código

**Arquivo:** `client/src/components/Certificates.tsx`

Procure por:
```typescript
const certificates: Certificate[] = [
  // ... certificados existentes
];
```

Adicione um novo objeto **no final do array**, antes do fechamento `]`:

```typescript
{
  id: "10",
  title: "Nome do Certificado",
  issuer: "Instituição que emitiu",
  date: "2024",
  path: "/images/Certificado/seu-certificado.pdf",
  category: "Categoria",
}
```

**Exemplo Completo:**
```typescript
{
  id: "10",
  title: "Certificado de JavaScript Avançado",
  issuer: "Udemy",
  date: "2024",
  path: "/images/Certificado/Certificado-JavaScript-Avancado.pdf",
  category: "JavaScript",
}
```

### Passo 4: Entender os Campos

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| `id` | Identificador único | "10", "11", "12" |
| `title` | Nome do certificado | "Certificado de Python" |
| `issuer` | Instituição emissora | "Udemy", "Alura", "Google" |
| `date` | Ano de conclusão | "2024", "2023" |
| `path` | Caminho do arquivo | "/images/Certificado/arquivo.pdf" |
| `category` | Categoria para filtro | "Python", "IA", "JavaScript" |

### Passo 5: Fazer Commit e Push

```bash
# Adicionar alterações
git add .

# Fazer commit
git commit -m "Adicionar certificado: Nome do Certificado"

# Fazer push
git push origin main
```

### Categorias Disponíveis

Use uma destas categorias ou crie uma nova:
- `Python`
- `IA`
- `JavaScript`
- `Banco de Dados`
- `Informática`
- `Desenvolvimento Web`
- `Automação`

---

## 🎬 PARTE 2: Adicionar Vídeos de Projetos

### Passo 1: Preparar o Vídeo

**Requisitos:**
- ✅ Formato: **MP4, WebM ou MOV**
- ✅ Tamanho: **Máximo 50MB** (comprimir se necessário)
- ✅ Resolução: Mínimo 720p (recomendado 1080p)
- ✅ Nome descritivo: `projeto-automacao-2024.mp4`

### Passo 2: Comprimir o Vídeo (Se Necessário)

Se o vídeo for maior que 20MB, comprima:

**Via Terminal (Linux/Mac):**
```bash
ffmpeg -i video-original.mp4 -vcodec libx264 -crf 28 -preset fast \
-acodec aac -b:a 128k video-comprimido.mp4
```

**Explicação dos parâmetros:**
- `-crf 28` - Qualidade (18-28, menor = melhor qualidade)
- `-preset fast` - Velocidade de compressão
- `-b:a 128k` - Bitrate de áudio

**Resultado esperado:**
- Vídeo original: 100MB → Comprimido: 15-20MB
- Qualidade: Mantém boa qualidade para web

### Passo 3: Copiar o Vídeo para a Pasta Correta

**Caminho:** `client/public/images/`

**Via Terminal:**
```bash
cp video-comprimido.mp4 /home/ubuntu/flowconnect-portfolio/client/public/images/

# Verificar
ls -lh /home/ubuntu/flowconnect-portfolio/client/public/images/*.mp4
```

### Passo 4: Adicionar ao Código

**Arquivo:** `client/src/components/Projects.tsx`

Procure por:
```typescript
const projects: Project[] = [
  // ... projetos existentes
];
```

Adicione um novo objeto:

```typescript
{
  id: "4",
  title: "Nome do Projeto",
  company: "Empresa ou Pessoal",
  description: "Descrição do que foi desenvolvido",
  technologies: ["Tech1", "Tech2", "Tech3"],
  videoPath: "/images/seu-video.mp4",
}
```

**Exemplo Completo:**
```typescript
{
  id: "4",
  title: "Sistema de Agendamento Automático",
  company: "Projeto Pessoal",
  description: "Plataforma de agendamento com confirmação automática via WhatsApp e integração com Google Calendar.",
  technologies: ["N8N", "WhatsApp API", "Google Calendar", "Python"],
  videoPath: "/images/sistema-agendamento-2024.mp4",
}
```

### Passo 5: Entender os Campos

| Campo | Descrição | Exemplo |
|-------|-----------|---------|
| `id` | Identificador único | "4", "5", "6" |
| `title` | Nome do projeto | "Sistema de Agendamento" |
| `company` | Empresa ou "Projeto Pessoal" | "CDE Digital", "Projeto Pessoal" |
| `description` | Descrição detalhada | "Sistema que automatiza..." |
| `technologies` | Array de tecnologias | ["N8N", "Python", "WhatsApp"] |
| `videoPath` | Caminho do vídeo | "/images/video.mp4" |

### Passo 6: Fazer Commit e Push

```bash
git add .
git commit -m "Adicionar projeto: Nome do Projeto"
git push origin main
```

---

## 🎥 PARTE 3: Adicionar Foto de Produto

Se quiser adicionar uma foto de um produto em vez de vídeo:

### Passo 1: Preparar a Imagem

- ✅ Formato: **JPG, PNG ou WebP**
- ✅ Tamanho: **Máximo 5MB**
- ✅ Resolução: **1920x1080 ou maior**

### Passo 2: Otimizar a Imagem (Opcional)

```bash
# Redimensionar para 1920x1080
convert imagem-original.jpg -resize 1920x1080 imagem-otimizada.jpg

# Copiar para pasta
cp imagem-otimizada.jpg /home/ubuntu/flowconnect-portfolio/client/public/images/
```

### Passo 3: Adicionar ao Código

No array `projects`, use o mesmo formato mas com extensão `.jpg`:

```typescript
{
  id: "4",
  title: "Dashboard de Vendas",
  company: "Projeto Pessoal",
  description: "Dashboard interativo com gráficos em tempo real",
  technologies: ["React", "Chart.js", "Node.js"],
  videoPath: "/images/dashboard-vendas.jpg", // Imagem em vez de vídeo
}
```

---

## ✅ Checklist Completo

### Para Adicionar Certificado:
- [ ] PDF está em `client/public/images/Certificado/`?
- [ ] Nome do arquivo está descritivo?
- [ ] Adicionei o objeto no array `certificates`?
- [ ] Todos os campos estão preenchidos?
- [ ] Fiz `git add .`?
- [ ] Fiz `git commit -m "..."`?
- [ ] Fiz `git push origin main`?

### Para Adicionar Vídeo:
- [ ] Vídeo está em `client/public/images/`?
- [ ] Tamanho é menor que 50MB?
- [ ] Formato é MP4, WebM ou MOV?
- [ ] Adicionei o objeto no array `projects`?
- [ ] Caminho está correto no `videoPath`?
- [ ] Todos os campos estão preenchidos?
- [ ] Fiz `git add .`?
- [ ] Fiz `git commit -m "..."`?
- [ ] Fiz `git push origin main`?

---

## 🐛 Troubleshooting

### ❌ "Vídeo não carrega"

**Verificar:**
1. Arquivo está em `client/public/images/`?
2. Caminho no código está correto? (ex: `/images/video.mp4`)
3. Tamanho do arquivo < 50MB?
4. Formato é MP4, WebM ou MOV?
5. Fez `git push`?

**Solução:**
```bash
# Verificar se arquivo existe
ls -lh /home/ubuntu/flowconnect-portfolio/client/public/images/seu-video.mp4

# Verificar caminho no código
grep -r "seu-video.mp4" client/src/
```

### ❌ "Certificado não aparece"

**Verificar:**
1. PDF está em `client/public/images/Certificado/`?
2. Caminho no código está correto?
3. Categoria está correta?
4. Fez `git push`?

**Solução:**
```bash
# Verificar se arquivo existe
ls -lh /home/ubuntu/flowconnect-portfolio/client/public/images/Certificado/

# Verificar se está no array
grep -A 5 "seu-certificado" client/src/components/Certificates.tsx
```

### ❌ "Build falha após adicionar arquivo"

**Solução:**
```bash
# Limpar cache
rm -rf node_modules .next dist

# Reinstalar
pnpm install

# Tentar build novamente
pnpm build
```

---

## 📞 Dúvidas Frequentes

**P: Posso adicionar vários vídeos?**  
R: Sim! Adicione quantos quiser no array `projects`. Cada um aparecerá como um card.

**P: Qual é o tamanho máximo de arquivo?**  
R: PDFs até 10MB, vídeos até 50MB. Comprima se necessário.

**P: Como comprimir um vídeo no Windows?**  
R: Use [HandBrake](https://handbrake.fr/) ou [VidCoder](https://www.vidcoder.net/).

**P: Posso usar YouTube em vez de upload local?**  
R: Sim, mas recomendamos upload local para melhor controle. Se quiser YouTube, altere `videoPath` para a URL do YouTube.

**P: Quanto tempo leva para aparecer?**  
R: Após fazer `git push`, o deploy automático leva 2-5 minutos no EasyPanel.

---

## 🎯 Próximas Melhorias

1. **Galeria de Imagens:** Adicionar seção com screenshots dos projetos
2. **Vídeos do YouTube:** Integrar vídeos do seu canal YouTube
3. **Portfólio Dinâmico:** Buscar projetos do GitHub automaticamente
4. **Comentários:** Permitir feedback nos projetos

---

**Última atualização:** Janeiro de 2026  
**Versão:** 1.0.0
