import { Hammer, Server, BookOpen, Info } from 'lucide-react';

export default function Sidebar({ currentView, onViewChange }) {
  const menuItems = [
    { id: 'builder', icon: Hammer, label: 'Builder', description: 'Create endpoints' },
    { id: 'endpoints', icon: Server, label: 'Endpoints', description: 'Active mocks' },
    { id: 'usage', icon: BookOpen, label: 'Usage Guide', description: 'How to use' },
    { id: 'info', icon: Info, label: 'About', description: 'Project info' },
  ];

  return (
    <aside className="fixed left-0 top-[73px] bottom-0 w-64 bg-neutral-900 border-r border-white/10 overflow-y-auto custom-scrollbar">
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'text-gray-400 hover:bg-neutral-800 hover:text-white'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <div className="flex-1 text-left">
                <div className={`text-sm font-semibold ${isActive ? 'text-emerald-300' : 'text-white'}`}>
                  {item.label}
                </div>
                <div className="text-xs text-gray-500">{item.description}</div>
              </div>
            </button>
          );
        })}
      </nav>

      <div className="p-4 mt-8 border-t border-white/10">
        <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-xl p-4">
          <h3 className="text-sm font-bold text-white mb-2">💡 Pro Tip</h3>
          <p className="text-xs text-gray-400 leading-relaxed">
            Use chaos engineering to test your UI under realistic network conditions before production.
          </p>
        </div>
      </div>
    </aside>
  );
}
