# Ilana Sidi — Portfolio

## Stack
- React 18 + TypeScript (TSX)
- Vite
- CSS Variables (sem dependências de UI)

## Estrutura
```
src/
├── components/
│   ├── Header.tsx        # Navegação fixa com toggle de tema e idioma
│   ├── Hero.tsx          # Seção principal com nome e estatísticas
│   ├── WorkSection.tsx   # Grid de vídeos com filtros
│   ├── VideoCard.tsx     # Card individual com preview GIF no hover
│   ├── AboutSection.tsx  # Bio, skills, formação e idiomas
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── hooks/
│   ├── useTranslation.ts # Gerencia PT/EN com localStorage
│   ├── useTheme.ts       # Gerencia dark/light com localStorage
│   └── useScrollSpy.ts   # Detecta seção ativa para nav
├── data/
│   ├── translations.ts   # Todos os textos em PT e EN
│   └── videos.ts         # ← EDITE AQUI para adicionar seus vídeos
├── types/
│   └── index.ts
├── styles.css            # Design system completo
└── App.tsx
```

## Instalação

```bash
npm install
npm run dev
```

## Como adicionar seus vídeos

Edite o arquivo `src/data/videos.ts`. Para cada vídeo, preencha:

```typescript
{
  id: '1',                          // ID único
  titleEn: 'Title in English',
  titlePt: 'Título em Português',
  categoryEn: 'trailer',            // 'tv' | 'social' | 'institutional' | 'trailer'
  categoryPt: 'trailer',
  thumbnail: 'https://...',         // URL pública da thumbnail (ex: Cloudinary, Drive)
  gifUrl: 'https://...',            // URL do GIF de preview (opcional)
  videoUrl: 'https://...',          // Link para o vídeo completo (Vimeo, Drive, etc.)
  year: 2024,
  client: 'Globoplay',
  descriptionEn: 'Short description.',
  descriptionPt: 'Descrição curta.',
  featured: true,                   // true = ocupa 2 colunas no grid
}
```

### Opções de hospedagem de thumbnails e GIFs
- **Cloudinary** (recomendado) — grátis, CDN global, aceita conversão de vídeo para GIF
- **Google Drive** — use o link direto de visualização
- **Vimeo** — a API do Vimeo retorna thumbnails automaticamente

### Converter clipes para GIF (para preview no hover)
Use [ezgif.com](https://ezgif.com) ou [Cloudinary](https://cloudinary.com) para converter pequenos clipes em GIF otimizado de 3-5 segundos.

## Deploy
```bash
npm run build
```
A pasta `dist/` pode ser publicada em Vercel, Netlify ou GitHub Pages.
