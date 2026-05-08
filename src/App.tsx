import React, { useEffect, useState } from 'react';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { CommandPalette } from './components/CommandPalette';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { TechStack } from './components/sections/TechStack';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { useTheme } from './hooks/useTheme';
import { useLanguage } from './hooks/useLanguage';
import { projects } from './data/projects';
import { experience } from './data/experience';
import { skills } from './data/skills';
export function App() {
  const [loading, setLoading] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, t, toggleLanguage } = useLanguage();
  useEffect(() => {
    document.title = 'Elvir Mamishov - Senior Front-End Developer';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Senior Front-End Developer specializing in React, Angular, Vue.js, and TypeScript. Building scalable, high-performance web applications with modern technologies.'
      );
    }
  }, []);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  const navItems = [
  {
    label: t.nav.home,
    href: '#home'
  },
  {
    label: t.nav.about,
    href: '#about'
  },
  {
    label: t.nav.skills,
    href: '#skills'
  },
  {
    label: t.nav.experience,
    href: '#experience'
  },
  {
    label: t.nav.projects,
    href: '#projects'
  },
  {
    label: t.nav.contact,
    href: '#contact'
  }];

  const commands = [
  ...navItems.map((item) => ({
    id: item.href,
    label: item.label,
    category: 'sections' as const,
    action: () => {
      document.querySelector(item.href)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
  })),
  {
    id: 'toggle-theme',
    label: `Toggle ${theme === 'dark' ? 'Light' : 'Dark'} Mode`,
    category: 'actions' as const,
    action: toggleTheme
  },
  {
    id: 'toggle-language',
    label: `Switch to ${language === 'en' ? 'Azerbaijani' : 'English'}`,
    category: 'actions' as const,
    action: toggleLanguage
  },
  {
    id: 'download-cv',
    label: 'Download CV',
    category: 'actions' as const,
    action: () => {
      window.open("/ELVIR-MAMISHOV-CV.jpg",

      '_blank'
      );
    }
  },
  {
    id: 'copy-email',
    label: 'Copy Email Address',
    category: 'actions' as const,
    action: () => {
      navigator.clipboard.writeText('elvir.mamishov@gmail.com');
    }
  }];

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }
  return (
    <div className="min-h-screen w-full bg-dark-bg dark:bg-dark-bg text-white">
      <CustomCursor />
      <ScrollProgress />

      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
        navItems={navItems} />
      

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        commands={commands}
        placeholder={t.command.placeholder}
        sectionsLabel={t.command.sections}
        actionsLabel={t.command.actions} />
      

      <main>
        <Hero
          greeting={t.hero.greeting}
          roles={t.hero.roles}
          cta={t.hero.cta} />
        

        <About title={t.about.title} stats={t.about.stats} />

        <Skills title={t.skills.title} skills={skills} />

        <Experience
          title={t.experience.title}
          experience={experience}
          presentLabel={t.experience.present} />
        

        <Projects
          title={t.projects.title}
          projects={projects}
          filters={t.projects.filters}
          viewLive={t.projects.viewLive}
          viewCode={t.projects.viewCode} />
        

        <TechStack title={t.techStack.title} />

        <Contact
          title={t.contact.title}
          form={t.contact.form}
          downloadCV={t.contact.downloadCV} />
        

        <Footer rights={t.footer.rights} backToTop={t.footer.backToTop} />
      </main>
    </div>);

}