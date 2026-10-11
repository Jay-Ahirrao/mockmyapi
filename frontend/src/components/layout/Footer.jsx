import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-64 right-0 border-t border-white/10 bg-neutral-900/95 backdrop-blur-xl">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
            <span>for developers</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Jay-Ahirrao" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                onClick={(e) => e.preventDefault()}
              >
                GitHub
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                onClick={(e) => e.preventDefault()}
              >
                Twitter
              </a>
              <a 
                href="https://www.linkedin.com/in/jay-ahirrao" 
                className="text-gray-400 hover:text-white transition-colors text-sm"
                onClick={(e) => e.preventDefault()}
              >
                LinkedIn
              </a>
            </div>
            
            <div className="text-xs text-gray-500">
              © 2024 MockMyAPI • v1.0.0
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
