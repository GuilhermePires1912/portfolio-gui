import { AdvertisingProject } from '../types';

// Video hosting:
// - litter.catbox.moe = Litterbox (72h temp) - uploaded 2026-04-14, renew via UPLOAD_VIDEOS.sh
// - files.catbox.moe  = Catbox permanent (reused from previous work)
// Principals >200MB were excluded (Catbox limit). Run UPLOAD_VIDEOS.sh when Catbox is back.

export const advertisingProjects: AdvertisingProject[] = [
  {
    id: '1',
    slug: 'os-outros',
    titlePt: 'Os Outros - T3',
    titleEn: 'Os Outros - Season 3',
    client: 'Globoplay',
    year: 2025,
    categoryPt: 'Trailer & Campanha',
    categoryEn: 'Trailer & Campaign',
    descriptionPt:
      'Campanha completa da terceira temporada de Os Outros - série original Globoplay. Foram desenvolvidos trailers, cortes para social e uma ação especial com os ex-BBBs Jonas e Maxiane.',
    descriptionEn:
      'Full campaign for the third season of Os Outros - Globoplay original series. We delivered trailers, social cuts and a special activation with ex-BBBs Jonas and Maxiane.',
    thumbnail: '/images/osoutros-kv.jpg',
    thumbnailPosition: 'center 30%',
    kvImages: [
      '/images/osoutros-kv.jpg',
      '/images/osoutros-dupla-01_120x68cm.png',
      '/images/osoutros-dupla-02_120x68cm.jpg',
      '/images/osoutros-trio-03_120x68cm.jpg',
      '/images/osoutros-grupo-04_120x68cm.jpg',
      '/images/osoutros-grupo-05_120x68cm.jpg',
      '/images/osoutros-grupo-06_120x68cm.jpg',
    ],
    principalVideos: ['https://litter.catbox.moe/8joq9h.mp4'], // OS OUTROS T3 TRAILER 120s
    socialVideos: [
      'https://litter.catbox.moe/1xd7pq.mp4', // Salutos Esteves TikTok 15s
      'https://litter.catbox.moe/sgn06g.mp4', // TikTok POV 9x16
      'https://litter.catbox.moe/jfre0l.mp4', // Teaser 1 Social 9x16
      'https://litter.catbox.moe/qxf63k.mp4', // OOT3 Portrait
    ],
    featured: true,
    specialAction: {
      titlePt: 'Ação Especial - Jonas & Mariane',
      titleEn: 'Special Activation - Jonas & Mariane',
      descriptionPt:
        'Ação especial com os ex-BBBs para ativação segmentada em TV e redes. A ação gerou mais de 7M de views orgânicos.',
      descriptionEn:
        'Special campaign featuring former Big Brother Brazil contestants for targeted TV and social media activation. The initiative generated over 7M organic views.',
      images: ['/images/osoutros-jonas.jpg'],
      videos: ['https://litter.catbox.moe/b9jwf1.mp4'], // Ação especial Jonas & Mariane
    },
  },
  {
    id: '2',
    slug: 'turma-da-monica',
    titlePt: 'Turma da Monica - Origens',
    titleEn: 'Turma da Monica - Origins',
    client: 'Globoplay',
    year: 2024,
    categoryPt: 'Trailer & Ativação',
    categoryEn: 'Trailer & Activation',
    descriptionPt:
      'Campanha da série original Globoplay Turma da Monica Origens, incluindo trailers, cortes sociais e o projeto especial de ativação no VLT do Rio de Janeiro - tematizado com os personagens da série.',
    descriptionEn:
      'Campaign for the Globoplay original series Turma da Monica Origens, including trailers, social cuts and the special VLT Rio de Janeiro activation project - themed with the series characters.',
    thumbnail: '/images/monica-kv.avif',
    kvImages: [
      '/images/monica-kv.avif',
      '/images/monica-vlt1.jpg',
      '/images/monica-vlt2.jpg',
    ],
    principalVideos: ['https://litter.catbox.moe/1gs4yf.mp4'], // TURMA DA MONICA ORIGENS 120
    socialVideos: [
      'https://litter.catbox.moe/27j8qm.mp4', // Turma da Monica 7
      'https://litter.catbox.moe/gmvzu8.mp4', // Turma da Monica 70
      'https://litter.catbox.moe/89thtm.mp4', // Trilha Fun social 16x9
      'https://litter.catbox.moe/goaj9f.mp4', // Trilha Fun 9x16
    ],
    featured: true,
    vltProject: {
      titlePt: 'Projeto Especial - VLT Turma da Monica',
      titleEn: 'Special Project - VLT Turma da Monica',
      descriptionPt:
        'O VLT do Rio de Janeiro foi completamente tematizado com a Turma da Monica Origens, com orelhas do Sanção nas composições do trem. Uma ativação OOH que se tornou notícia e gerou enorme engajamento orgânico nas redes sociais.',
      descriptionEn:
        "Rio de Janeiro's VLT train was fully wrapped in Turma da Monica Origens branding, featuring Sanção's iconic ears on the train cars. An OOH activation that made news and generated massive organic social media engagement.",
      images: ['/images/monica-vlt1.jpg', '/images/monica-vlt2.jpg'],
    },
  },
  {
    id: '3',
    slug: 'vermelho-sangue',
    titlePt: 'Vermelho Sangue',
    titleEn: 'Vermelho Sangue',
    client: 'Globoplay',
    year: 2025,
    categoryPt: 'Trailer & Social',
    categoryEn: 'Trailer & Social',
    descriptionPt:
      'Campanha da série original Globoplay Vermelho Sangue - thriller de suspense com trailers de impacto e cortes verticais para redes sociais.',
    descriptionEn:
      'Campaign for the Globoplay original thriller series Vermelho Sangue - high-impact trailers and vertical social cuts.',
    thumbnail: '/images/vs-kv-horiz.jpg',
    kvImages: ['/images/vs-kv-horiz.jpg', '/images/vs-kv-vert.jpg'],
    principalVideos: ['https://files.catbox.moe/b4655l.mp4'], // 60s promo (permanente)
    socialVideos: [
      'https://litter.catbox.moe/6czger.mp4', // VS_JANELA OP2
      'https://litter.catbox.moe/3yv6jj.mp4', // VS_QUEDA
      'https://litter.catbox.moe/buy83t.mp4', // VS_BANHEIRO OP2
      null,
    ],
    featured: false,
  },
  {
    id: '4',
    slug: 'minha-mae-com-seu-pai',
    titlePt: 'Minha Mãe com Seu Pai - T2',
    titleEn: 'Minha Mãe com Seu Pai - S2',
    client: 'Globoplay',
    year: 2025,
    categoryPt: 'Trailer & Social',
    categoryEn: 'Trailer & Social',
    descriptionPt:
      'Segunda temporada do reality original Globoplay. Trailers de lançamento, cortes performance e social media - incluindo o formato vertical de maior impacto da temporada.',
    descriptionEn:
      'Second season of the Globoplay Original reality. Launch trailers, performance cuts and social media - including the most impactful vertical format of the season.',
    thumbnail: '/images/minhamae-kv3.jpg',
    kvImages: [
      '/images/minhamae-kv3.jpg',
      '/images/minhamae-kv.jpg',
      '/images/minhamae-kv2.jpg',
    ],
    principalVideos: ['https://litter.catbox.moe/mlznxa.mp4'], // GPLAY MMCSP T2 30s
    socialVideos: [
      'https://litter.catbox.moe/nq68bk.mp4', // MMCSP 9x16 vertical
      'https://files.catbox.moe/2rrrol.mp4', // social (permanente)
    ],
    featured: false,
  },
  {
    id: '5',
    slug: 'a-divisao',
    titlePt: 'A Divisão - T4',
    titleEn: 'A Divisão - Season 4',
    client: 'Globoplay',
    year: 2024,
    categoryPt: 'Trailer & Teaser',
    categoryEn: 'Trailer & Teaser',
    descriptionPt:
      'Campanha da quarta temporada de A Divisão - série policial original Globoplay. Teasers com conceitos matemáticos para redes sociais e trailer de lançamento.',
    descriptionEn:
      'Campaign for the fourth season of A Divisão - Globoplay original police drama. Conceptual math-themed social teasers and launch trailer.',
    thumbnail: '/images/a-divisao-kv-horiz.jpg',
    kvImages: [
      '/images/a-divisao-kv-horiz.jpg',
      '/images/a-divisao-kv-vert.png',
    ],
    principalVideos: ['https://litter.catbox.moe/i543bh.mp4'], // A DIVISAO 120
    socialVideos: [
      'https://litter.catbox.moe/7jsdsc.mp4', // MULT 9x16
      'https://litter.catbox.moe/3k7red.mp4', // SUBT 9x16
      'https://litter.catbox.moe/3j1jqw.mp4', // SOMA 9x16
    ],
    featured: false,
  },
  {
    id: '6',
    slug: 'cilada',
    titlePt: 'Cilada - T1',
    titleEn: 'Cilada - Season 1',
    client: 'Globoplay',
    year: 2024,
    categoryPt: 'Trailer & Social',
    categoryEn: 'Trailer & Social',
    descriptionPt:
      'Lançamento da primeira temporada de Cilada - série original Globoplay. Trailers de 90s e 60s, além de pacote completo de social media com formatos variados.',
    descriptionEn:
      'Launch of the first season of Cilada - Globoplay original series. 90s and 60s trailers, plus a full social media package with varied formats.',
    thumbnail: '/images/cilada-kv.png',
    kvImages: [
      '/images/cilada-kv.png',
      '/images/cilada-kv2.png',
      '/images/cilada-poster.png',
    ],
    principalVideos: ['https://litter.catbox.moe/c2e24i.mp4'], // GPLAY CILADA T1 60s
    socialVideos: [
      'https://litter.catbox.moe/miypa9.mp4', // Bruno Cenas 9x16
      'https://litter.catbox.moe/vp1ehq.mp4', // Bruno YouTube Bumper
      'https://litter.catbox.moe/b0fjq0.mp4', // Bruno Pai Feed 9x16
      null,
    ],
    featured: false,
  },
  {
    id: '7',
    slug: 'raul-seixas',
    titlePt: 'Raul Seixas - Eu Sou',
    titleEn: 'Raul Seixas - Eu Sou',
    client: 'Globoplay',
    year: 2025,
    categoryPt: 'Trailer & Musical',
    categoryEn: 'Trailer & Music',
    descriptionPt:
      'Campanha do especial musical Raul Seixas - conteúdo original Globoplay. Trailer épico, versões longas para TV e social, além de cortes verticais para redes.',
    descriptionEn:
      'Campaign for the Raul Seixas musical special - Globoplay original content. Epic widescreen trailer, 60s TV and social versions, plus vertical cuts for social media.',
    thumbnail: '/images/raul-kv.jpg',
    kvImages: [
      '/images/raul-kv.jpg',
      '/images/raul-kv-noite.jpg',
      '/images/raul-kv-dia.jpg',
    ],
    principalVideos: ['https://litter.catbox.moe/t3tqsb.mp4'], // TRAILER RAUL 3MIN TELÃO
    socialVideos: [
      'https://litter.catbox.moe/qn9gak.mp4', // Raul Reacts 60s
      'https://files.catbox.moe/ftybzt.mp4', // Raul social (permanente)
      'https://litter.catbox.moe/gt5kdm.mp4', // 30s 9x16
    ],
    featured: false,
  },
];
