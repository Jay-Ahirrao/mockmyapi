import { useState } from 'react';
import { Copy, Loader2, Trash2 } from 'lucide-react';

const BACKEND_URL = 'http://localhost:5000';
const USERNAME = 'testuser';

export default function EndpointCard({ 
  endpoint, 
  onDelete, 
  onTest,
  testResult,
  isTesting,
  onCopySuccess
}) {
  const [copying, setCopying] = useState(false);
  
  const mockUrl = `${BACKEND_URL}/mock/${USERNAME}${endpoint.path}`;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(mockUrl);
    setCopying(true);
    onCopySuccess?.();
    setTimeout(() => setCopying(false), 2000);
  };

  const methodColors = {
    GET: 'bg-blue-500/20 text-blue-300 border border-blue-500/30',
    POST: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    PUT: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
    DELETE: 'bg-red-500/20 text-red-300 border border-red-500/30',
    PATCH: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
  };

  return (
    <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all">
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 truncate">{endpoint.method}</p>
            <p className="text-sm font-semibold text-white truncate">{endpoint.path}</p>
          </div>
          <span className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap ${methodColors[endpoint.method]}`}>
            {endpoint.method}
          </span>
        </div>

        <div className="flex gap-2 flex-wrap">
          <span className="px-2 py-1 bg-neutral-800 border border-white/10 rounded-full text-xs text-gray-400">
            {endpoint.statusCode}
          </span>
          {endpoint.delayMs > 0 && (
            <span className="px-2 py-1 bg-neutral-800 border border-white/10 rounded-full text-xs text-gray-400">
              ⏱️ {endpoint.delayMs}ms
            </span>
          )}
          {endpoint.failureRate > 0 && (
            <span className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-xs text-red-300">
              ⚡ {endpoint.failureRate}%
            </span>
          )}
        </div>

        <div className="space-y-2 pt-2 border-t border-white/5">
          <button
            onClick={copyToClipboard}
            disabled={copying}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-neutral-800 hover:bg-neutral-700 border border-white/10 rounded-lg text-xs font-semibold text-gray-300 transition-all disabled:opacity-50"
          >
            {copying ? (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                Copy URL
              </>
            )}
          </button>

          <button
            onClick={() => onTest(endpoint)}
            disabled={isTesting}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 rounded-lg text-xs font-semibold text-emerald-300 transition-all disabled:opacity-50"
          >
            {isTesting ? (
              <>
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
                Testing...
              </>
            ) : (
              <>
                <Loader2 className="w-3.5 h-3.5" />
                Test API
              </>
            )}
          </button>

          <button
            onClick={() => onDelete(endpoint._id)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg text-xs font-semibold text-red-300 transition-all"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Delete
          </button>
        </div>

        {testResult && (
          <div className="pt-3 border-t border-white/5 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">Response</span>
              <span className={`text-xs font-semibold ${
                testResult.status === 'ERROR' || testResult.status >= 400
                  ? 'text-red-400'
                  : 'text-emerald-400'
              }`}>
                {testResult.status}
              </span>
            </div>
            <div className="bg-black rounded-lg p-3 overflow-x-auto max-h-48 overflow-y-auto">
              <pre className="font-mono text-xs text-emerald-400 whitespace-pre-wrap break-words">
                {testResult.body}
              </pre>
            </div>
            <p className="text-xs text-gray-500 text-right">{testResult.timestamp}</p>
          </div>
        )}
      </div>
    </div>
  );
}
