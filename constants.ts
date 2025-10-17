import type { Project, Service } from './types';
import { ProjectCategory } from './types';
import { Palette, PenTool, Film, Share2, Printer } from 'lucide-react';

export const SKILLS: string[] = [
  'Branding Estratégico', 'Marketing e Comunicação Integrada', 'Gestão de Redes Sociais', 'Direção de Arte', 'Estratégia de Conteúdo Visual'
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Café Aurora',
    category: ProjectCategory.Branding,
    thumbnailUrl: 'https://picsum.photos/seed/aurora/800/600',
    description: 'Desenvolvimento completo da identidade visual para o Café Aurora, uma marca de cafés especiais que valoriza a produção artesanal e a conexão com a natureza.',
    objective: 'Criar uma marca que transmitisse aconchego, qualidade e um toque moderno, atraindo um público jovem e apreciador de cafés de alta qualidade.',
    process: 'O processo incluiu pesquisa de mercado, criação de moodboard, desenvolvimento do logotipo, definição da paleta de cores e tipografia, e design de embalagens e materiais de ponto de venda.',
    gallery: [
      'https://picsum.photos/seed/aurora-1/1200/800',
      'https://picsum.photos/seed/aurora-2/1200/800',
      'https://picsum.photos/seed/aurora-3/1200/800'
    ],
  },
  {
    id: 2,
    title: 'Fintech Neon',
    category: ProjectCategory.WebDesign,
    thumbnailUrl: 'https://picsum.photos/seed/neon/800/600',
    description: 'Redesign da interface do usuário (UI) e experiência do usuário (UX) para o aplicativo de uma fintech inovadora, focando na clareza e facilidade de uso.',
    objective: 'Simplificar o fluxo de navegação, melhorar a acessibilidade e criar um design system coeso para garantir consistência em toda a plataforma.',
    process: 'Iniciamos com wireframes e protótipos de baixa fidelidade, seguidos por testes de usabilidade. A fase final envolveu o design de interfaces de alta fidelidade e a criação de uma biblioteca de componentes em Figma.',
    gallery: [
      'https://picsum.photos/seed/neon-1/1200/800',
      'https://picsum.photos/seed/neon-2/1200/800'
    ],
  },
  {
    id: 3,
    title: 'Flora Ilustrada',
    category: ProjectCategory.Illustration,
    thumbnailUrl: 'https://picsum.photos/seed/flora/800/600',
    description: 'Série de ilustrações botânicas para uma linha de produtos de decoração e papelaria.',
    objective: 'Criar ilustrações detalhadas e elegantes que pudessem ser aplicadas em diversos produtos, como pôsteres, cadernos e tecidos, com um estilo autoral e delicado.',
    process: 'A criação foi feita digitalmente, utilizando técnicas que simulam aquarela e nanquim. Cada ilustração foi pensada para funcionar tanto individualmente quanto em conjunto, formando uma coleção harmoniosa.',
    gallery: [
      'https://picsum.photos/seed/flora-1/1200/800',
      'https://picsum.photos/seed/flora-2/1200/800',
      'https://picsum.photos/seed/flora-3/1200/800'
    ],
  },
  {
    id: 4,
    title: 'Revista Habitat',
    category: ProjectCategory.Editorial,
    thumbnailUrl: 'https://picsum.photos/seed/habitat/800/600',
    description: 'Direção de arte e diagramação para uma revista de arquitetura e design de interiores.',
    objective: 'Desenvolver um layout sofisticado e legível, que valorizasse as fotografias de alta qualidade e proporcionasse uma experiência de leitura agradável e imersiva.',
    process: 'O trabalho envolveu a criação do grid, escolha tipográfica, definição do estilo de paginação e o design de todas as seções da revista, desde a capa até o editorial final.',
    gallery: [
      'https://picsum.photos/seed/habitat-1/1200/800',
      'https://picsum.photos/seed/habitat-2/1200/800'
    ],
  },
  {
    id: 5,
    title: 'Estúdio Criativo',
    category: ProjectCategory.Branding,
    thumbnailUrl: 'https://picsum.photos/seed/studio/800/600',
    description: 'Identidade visual para um estúdio de fotografia, com foco em uma estética minimalista e atemporal.',
    objective: 'Criar uma marca que refletisse profissionalismo e sensibilidade artística, posicionando o estúdio como uma referência no mercado de fotografia de moda e retratos.',
    process: 'O projeto abrangeu a criação do logotipo, sistema de identidade visual, design de papelaria (cartões de visita, papel timbrado) e layout para redes sociais.',
    gallery: [
      'https://picsum.photos/seed/studio-1/1200/800',
      'https://picsum.photos/seed/studio-2/1200/800'
    ],
  },
  {
    id: 6,
    title: 'E-commerce de Luxo',
    category: ProjectCategory.WebDesign,
    thumbnailUrl: 'https://picsum.photos/seed/luxury/800/600',
    description: 'Design de interface para uma plataforma de e-commerce de artigos de luxo.',
    objective: 'Projetar uma experiência de compra online premium, com navegação intuitiva, design clean e foco total nos produtos e na qualidade das imagens.',
    process: 'Foram desenhadas todas as telas chave da jornada do usuário, desde a home page e listagem de produtos até a página de detalhes do produto e o processo de checkout.',
    gallery: [
      'https://picsum.photos/seed/luxury-1/1200/800',
      'https://picsum.photos/seed/luxury-2/1200/800'
    ],
  },
];

export const SERVICES: Service[] = [
  {
    icon: Palette,
    title: 'Identidade Visual',
    description: 'Criação de marcas completas, desde o logotipo até o guia de estilo, garantindo uma presença visual forte e coesa.',
  },
  {
    icon: PenTool,
    title: 'Design Editorial',
    description: 'Diagramação e projeto gráfico para materiais impressos e digitais, como revistas, livros, catálogos e relatórios.',
  },
  {
    icon: Film,
    title: 'Edição de Vídeo',
    description: 'Edição e pós-produção de vídeos para diversas plataformas, criando conteúdo dinâmico e envolvente.',
  },
  {
    icon: Share2,
    title: 'Social Mídia',
    description: 'Criação de conteúdo visual para fortalecer sua presença e engajamento nas redes sociais.',
  },
  {
    icon: Printer,
    title: 'Impressão',
    description: 'Design e preparação de arte final para materiais impressos, como cartões, folders e banners, garantindo qualidade na produção.',
  }
];