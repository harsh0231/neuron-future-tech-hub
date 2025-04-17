
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings } from 'lucide-react';

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { colorTheme, setColorTheme } = useTheme();

  const themes = [
    { id: 'red', name: 'Red & Black', color: '#ea384c' },
    { id: 'yellow', name: 'Yellow & Black', color: '#ffd700' },
    { id: 'violet', name: 'Electric Violet', color: '#9b87f5' }
  ];

  return (
    <div className="fixed right-4 top-20 z-50">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-black/30 backdrop-blur-md p-3 rounded-full"
      >
        <Settings className="w-6 h-6 text-white" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute right-0 mt-2 bg-black/80 backdrop-blur-md rounded-lg p-4 w-48"
          >
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => {
                  setColorTheme(theme.id as any);
                  setIsOpen(false);
                }}
                className={`flex items-center w-full p-2 rounded-md transition-colors ${
                  colorTheme === theme.id ? 'bg-white/10' : 'hover:bg-white/5'
                }`}
              >
                <div
                  className="w-4 h-4 rounded-full mr-2"
                  style={{ backgroundColor: theme.color }}
                />
                <span className="text-white text-sm">{theme.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
