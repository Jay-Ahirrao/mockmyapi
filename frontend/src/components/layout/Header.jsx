import { Zap } from 'lucide-react';

export default function Header({ endpointCount }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-neutral-900/95 backdrop-blur-xl">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-white">MockMyAPI</h1>
              <p className="text-xs text-gray-400">Chaos Engineering for Frontend</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-emerald-400">
                  {endpointCount} Active
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-neutral-800 border border-white/10 rounded-xl">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-xs text-gray-400">Connected</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
