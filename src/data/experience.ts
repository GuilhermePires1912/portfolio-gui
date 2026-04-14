import { Language } from '../types';

export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  description: string;
  accent: 'yellow' | 'green' | 'muted';
  current?: boolean;
}

export const experiences: Record<Language, ExperienceItem[]> = {
  pt: [
    {
      company: 'Globoplay',
      period: '2022 - Hoje',
      role: 'Gerente de Projetos',
      description:
        'Liderando campanhas 360 para séries e conteúdos originais. Gestão de trailers, social media, ações especiais e OOH - do briefing à entrega final.',
      accent: 'yellow',
      current: true,
    },
    {
      company: 'Meta / Instagram',
      period: '2020 - 2022',
      role: 'Publicidade & Social Media',
      description:
        'Estratégia de campanhas digitais, gestão de mídia paga e produção de conteúdo para marcas no ecossistema Meta.',
      accent: 'green',
    },
    {
      company: 'Agências & Setor de Tecnologia',
      period: '2014 - 2020',
      role: 'Publicidade & Comunicação',
      description:
        'Atuação em agências e empresas de tech com projetos para SporTV, Sócio Torcedor Flamengo (Nação), Sócio Torcedor Vasco (Gigante) e Golden Goal.',
      accent: 'muted',
    },
  ],
  en: [
    {
      company: 'Globoplay',
      period: '2022 - Present',
      role: 'Project Manager',
      description:
        'Leading 360 campaigns for original series and content. Managing trailers, social media, special activations and OOH - from brief to final delivery.',
      accent: 'yellow',
      current: true,
    },
    {
      company: 'Meta / Instagram',
      period: '2020 - 2022',
      role: 'Advertising & Social Media',
      description:
        'Digital campaign strategy, paid media management and content production for brands in the Meta ecosystem.',
      accent: 'green',
    },
    {
      company: 'Agencies & Tech Sector',
      period: '2014 - 2020',
      role: 'Advertising & Communication',
      description:
        'Worked at agencies and tech companies on projects for SporTV, Sócio Torcedor Flamengo (Nação), Sócio Torcedor Vasco (Gigante) and Golden Goal.',
      accent: 'muted',
    },
  ],
};

export const brands = [
  { name: 'Globo',       sub: 'TV & Mídia',     logo: '/logos/globo.png'     },
  { name: 'Globoplay',   sub: 'Streaming',       logo: '/logos/globoplay.png' },
  { name: 'Meta',        sub: 'Tech / Social',   logo: '/logos/meta.png'      },
  { name: 'SporTV',      sub: 'Sports TV',       logo: '/logos/sportv.png'    },
  { name: 'Nação',       sub: 'Sócio Flamengo',  logo: '/logos/flamengo.png'  },
  { name: 'Gigante',     sub: 'Sócio Vasco',     logo: '/logos/vasco.png'     },
  { name: 'Golden Goal', sub: 'Football',        logo: '/logos/goldengol.png' },
];
