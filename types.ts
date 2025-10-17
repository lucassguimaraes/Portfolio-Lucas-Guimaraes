
import type { LucideIcon } from 'lucide-react';

export enum ProjectCategory {
  Branding = 'Branding',
  WebDesign = 'Web Design',
  Illustration = 'Ilustração',
  Editorial = 'Editorial',
}

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  thumbnailUrl: string;
  description: string;
  objective: string;
  process: string;
  gallery: string[];
}

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}
