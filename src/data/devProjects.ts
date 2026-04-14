import { DevProject } from '../types';

export const devProjects: DevProject[] = [
  {
    id: '1',
    name: 'Ilana Sidi - Portfolio',
    descriptionPt:
      'Portfolio profissional desenvolvido para Ilana Sidi, Editora de Vídeo & Creative Specialist no Globoplay. Aplicação React com TypeScript, sistema de vídeos hospedados em CDN, modo bilíngue PT/EN e design editorial.',
    descriptionEn:
      'Professional portfolio built for Ilana Sidi, Video Editor & Creative Specialist at Globoplay. React + TypeScript app with CDN-hosted video system, PT/EN bilingual mode and editorial design.',
    url: 'https://github.com/GuilhermePires1912/ilana-portfolio',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    featured: true,
  },
  {
    id: '2',
    name: 'RBS Page',
    descriptionPt:
      'Landing page institucional desenvolvida em TypeScript. Projeto focado em performance, responsividade e boas práticas de front-end moderno.',
    descriptionEn:
      'Institutional landing page built with TypeScript. Project focused on performance, responsiveness and modern front-end best practices.',
    url: 'https://github.com/GuilhermePires1912/RBS-page',
    tech: ['TypeScript', 'HTML', 'CSS'],
    featured: true,
  },
  {
    id: '3',
    name: 'Parnaioca Hotel - Admin',
    descriptionPt:
      'Página administrativa para o Hotel Parnaioca. Interface de gerenciamento com React, Context API, Material UI e Atomic Design, seguindo metodologia de componentização escalável.',
    descriptionEn:
      'Admin page for Parnaioca Hotel. Management interface using React, Context API, Material UI and Atomic Design, following scalable component architecture.',
    url: 'https://github.com/GuilhermePires1912/parnaiocaHotel',
    tech: ['React', 'TypeScript', 'Material UI', 'Context API'],
    featured: false,
  },
];
