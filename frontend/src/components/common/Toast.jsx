import { useEffect } from 'react';
import { CheckCircle2, Copy, X, ArrowRight } from 'lucide-react';

export default function Toast({ message, type = 'success', onClose, action }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    copy: <Copy className="w-5 h-5 text-blue-400" />,
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className="bg-neutral-900 border border-white/10 rounded-xl shadow-2xl shadow-black/50 backdrop-blur-xl min-w-[320px] max-w-md">
        <div className="p-4 pr-12">
          <div className="flex items-center gap-3">
            {icons[type]}
            <p className="text-sm font-medium text-white">{message}</p>
          </div>
          
          {action && (
            <button
              onClick={() => {
                action.onClick();
                onClose();
              }}
              className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg text-sm font-semibold text-emerald-300 transition-all"
            >
              <span>{action.label}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
