import { Server } from 'lucide-react';
import EndpointCard from './EndpointCard.jsx';

export default function EndpointList({ 
  endpoints, 
  onDelete, 
  onTest,
  testResults,
  testingId,
  onCopySuccess
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight text-white">Active Endpoints</h2>
      
      {endpoints.length === 0 ? (
        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center mb-4">
            <Server className="w-8 h-8 text-gray-600" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">No active endpoints</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Configure your first chaos simulation on the left to start testing your UI
          </p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto pr-2 custom-scrollbar">
          {endpoints.map((endpoint) => (
            <EndpointCard
              key={endpoint._id}
              endpoint={endpoint}
              onDelete={onDelete}
              onTest={onTest}
              testResult={testResults[endpoint._id]}
              isTesting={testingId === endpoint._id}
              onCopySuccess={onCopySuccess}
            />
          ))}
        </div>
      )}
    </div>
  );
}
