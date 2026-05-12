import { Translation } from '../types';

export const translations: Record<'en' | 'az', Translation> = {
  //ENGLISH
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: "Hi, I'm Elvir Mamishov",
      roles: [
      'Senior Front-End Developer',
      'React Specialist',
      'Fintech UI Engineer',
      'TypeScript Architect'],

      cta: {
        viewWork: 'View My Work',
        downloadCV: 'Download CV'
      }
    },
    about: {
      title: 'About Me',
      stats: {
        experience: 'Years Experience',
        projects: 'Projects Completed',
        technologies: 'Technologies',
        banking: 'Banking Products'
      }
    },
    skills: {
      title: 'Skills & Technologies'
    },
    experience: {
      title: 'Professional Experience',
      present: 'Present'
    },
    projects: {
      title: 'Featured Projects',
      filters: {
        all: 'All',
        banking: 'Banking',
        government: 'Government',
        corporate: 'Corporate',
        other: 'Other'
      },
      viewLive: 'View Live',
      viewCode: 'View Code'
    },
    techStack: {
      title: 'Technology Orbit'
    },
    contact: {
      title: 'Get In Touch',
      form: {
        name: 'Your Name',
        email: 'Your Email',
        message: 'Your Message',
        send: 'Send Message',
        success: 'Message sent successfully!'
      },
      downloadCV: 'Download CV'
    },
    footer: {
      rights: '© 2024 Elvir Mamishov. All rights reserved.',
      backToTop: 'Back to Top'
    },
    command: {
      placeholder: 'Type a command or search...',
      sections: 'Sections',
      actions: 'Actions'
    }
  },
//AZERBAIJANI
  az: {
    nav: {
      home: 'Ana Səhifə',
      about: 'Haqqımda',
      skills: 'Bacarıqlar',
      experience: 'Təcrübə',
      projects: 'Layihələr',
      contact: 'Əlaqə'
    },
    hero: {
      greeting: 'Salam, mən Elvir Mamışovam',
      roles: [
      'Senior Front-End Developer',
      'React Mütəxəssisi',
      'Fintech UI Mühəndisi',
      'TypeScript Arxitekti'],

      cta: {
        viewWork: 'İşlərimə Bax',
        downloadCV: 'CV Yüklə'
      }
    },
    about: {
      title: 'Haqqımda',
      stats: {
        experience: 'İl Təcrübə',
        projects: 'Tamamlanmış Layihə',
        technologies: 'Texnologiya',
        banking: 'Bank Məhsulu'
      }
    },
    skills: {
      title: 'Bacarıqlar və Texnologiyalar'
    },
    experience: {
      title: 'Peşəkar Təcrübə',
      present: 'İndiki'
    },
    projects: {
      title: 'Seçilmiş Layihələr',
      filters: {
        all: 'Hamısı',
        banking: 'Bank',
        government: 'Dövlət',
        corporate: 'Korporativ',
        other: 'Digər'
      },
      viewLive: 'Canlı Bax',
      viewCode: 'Koda Bax'
    },
    techStack: {
      title: 'Texnologiya Orbiti'
    },
    contact: {
      title: 'Əlaqə Saxlayın',
      form: {
        name: 'Adınız',
        email: 'E-poçtunuz',
        message: 'Mesajınız',
        send: 'Göndər',
        success: 'Mesaj uğurla göndərildi!'
      },
      downloadCV: 'CV Yüklə'
    },
    footer: {
      rights: '© 2024 Elvir Mamishov. Bütün hüquqlar qorunur.',
      backToTop: 'Yuxarı Qayıt'
    },
    command: {
      placeholder: 'Əmr yazın və ya axtarın...',
      sections: 'Bölmələr',
      actions: 'Əməliyyatlar'
    }
  }
};