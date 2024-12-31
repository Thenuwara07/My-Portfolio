import { StaticImageData } from 'next/image';

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export interface Project {
  title: string;
  image: StaticImageData;
  description: string;
  technologies: string[];
}

export interface Contact {
  address: string;
  phoneNo: string;
  email: string;
}

export interface Learning {
  year: string;
  title: string;
  type: string;
  image: StaticImageData;
  description: string;
  technologies: string[];
}

export const HERO_CONTENT: string;
export const ABOUT_TEXT1: string;
export const ABOUT_TEXT2: string;
export const EXPERIENCES: Experience[];
export const LEARNING_EXPERIENCES: Learning[]: 
export const PROJECTS: Project[];
export const CONTACT: Contact;

export const S_HERO_CONTENT: string;
export const S_ABOUT_TEXT: string;

export const SPECIAL_AWARDS: string;
// export const EXPERIENCES: Experience[];
// export const LEARNING_EXPERIENCES: Learning[]: 
// export const PROJECTS: Project[];
// export const CONTACT: Contact;

