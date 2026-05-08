import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon, HashIcon, ZapIcon } from 'lucide-react';
interface Command {
  id: string;
  label: string;
  category: 'sections' | 'actions';
  action: () => void;
}
interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  commands: Command[];
  placeholder: string;
  sectionsLabel: string;
  actionsLabel: string;
}
export function CommandPalette({
  isOpen,
  onClose,
  commands,
  placeholder,
  sectionsLabel,
  actionsLabel
}: CommandPaletteProps) {
  const [search, setSearch] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const filteredCommands = commands.filter((cmd) =>
  cmd.label.toLowerCase().includes(search.toLowerCase())
  );
  const sections = filteredCommands.filter((cmd) => cmd.category === 'sections');
  const actions = filteredCommands.filter((cmd) => cmd.category === 'actions');
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setSearch('');
      setSelectedIndex(0);
    }
  }, [isOpen]);
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) =>
        Math.min(prev + 1, filteredCommands.length - 1)
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands, onClose]);
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={onClose} />
        
          <motion.div
          className="fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-2xl z-50 px-4"
          initial={{
            opacity: 0,
            y: -20,
            scale: 0.95
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1
          }}
          exit={{
            opacity: 0,
            y: -20,
            scale: 0.95
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30
          }}>
          
            <div className="glass-effect rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center px-6 py-4 border-b border-white/10">
                <SearchIcon className="w-5 h-5 text-zinc-400 mr-3" />
                <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={placeholder}
                className="flex-1 bg-transparent border-none outline-none text-white placeholder-zinc-500 font-body" />
              
              </div>

              <div className="max-h-96 overflow-y-auto p-2">
                {sections.length > 0 &&
              <div className="mb-4">
                    <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider flex items-center">
                      <HashIcon className="w-3 h-3 mr-2" />
                      {sectionsLabel}
                    </div>
                    {sections.map((cmd, index) =>
                <CommandItem
                  key={cmd.id}
                  command={cmd}
                  isSelected={
                  filteredCommands.indexOf(cmd) === selectedIndex
                  }
                  onClick={() => {
                    cmd.action();
                    onClose();
                  }} />

                )}
                  </div>
              }

                {actions.length > 0 &&
              <div>
                    <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider flex items-center">
                      <ZapIcon className="w-3 h-3 mr-2" />
                      {actionsLabel}
                    </div>
                    {actions.map((cmd) =>
                <CommandItem
                  key={cmd.id}
                  command={cmd}
                  isSelected={
                  filteredCommands.indexOf(cmd) === selectedIndex
                  }
                  onClick={() => {
                    cmd.action();
                    onClose();
                  }} />

                )}
                  </div>
              }

                {filteredCommands.length === 0 &&
              <div className="px-4 py-8 text-center text-zinc-500">
                    No results found
                  </div>
              }
              </div>
            </div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}
function CommandItem({
  command,
  isSelected,
  onClick




}: {command: Command;isSelected: boolean;onClick: () => void;}) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full px-4 py-3 rounded-lg text-left transition-colors ${isSelected ? 'bg-accent-violet/20 text-white' : 'text-zinc-300 hover:bg-white/5'}`}
      whileHover={{
        x: 4
      }}>
      
      {command.label}
    </motion.button>);

}