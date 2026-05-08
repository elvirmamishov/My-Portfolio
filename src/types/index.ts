export interface Project {
  id: string;
  name: string;
  category: 'Banking' | 'Government' | 'Corporate' | 'Other';
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  gradient: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  current: boolean;
  projects: string[];
  description?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Frameworks' | 'Styling' | 'Tools' | 'Other';
  proficiency: number;
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    roles: string[];
    cta: {
      viewWork: string;
      downloadCV: string;
    };
  };
  about: {
    title: string;
    stats: {
      experience: string;
      projects: string;
      technologies: string;
      banking: string;
    };
  };
  skills: {
    title: string;
  };
  experience: {
    title: string;
    present: string;
  };
  projects: {
    title: string;
    filters: {
      all: string;
      banking: string;
      government: string;
      corporate: string;
      other: string;
    };
    viewLive: string;
    viewCode: string;
  };
  techStack: {
    title: string;
  };
  contact: {
    title: string;
    form: {
      name: string;
      email: string;
      message: string;
      send: string;
      success: string;
    };
    downloadCV: string;
  };
  footer: {
    rights: string;
    backToTop: string;
  };
  command: {
    placeholder: string;
    sections: string;
    actions: string;
  };
}

export type Theme = 'dark' | 'light';
export type Language = 'en' | 'az';