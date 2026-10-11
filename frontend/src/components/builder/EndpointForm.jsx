import { useState } from 'react';
import { AlertCircle, Info, Loader2 } from 'lucide-react';

export default function EndpointForm({ 
  loading, 
  onSubmit, 
  initialFormData = {
    path: '/api/users',
    method: 'GET',
    statusCode: 200,
    responseBody: '{"success": true, "data": []}',
    delayMs: 0,
    failureRate: 0,
    isActive: true,
  }
}) {
  const [formData, setFormData] = useState(initialFormData);
  const [jsonError, setJsonError] = useState('');

  const validateJSON = (jsonString) => {
    try {
      JSON.parse(jsonString);
      setJsonError('');
      return true;
    } catch {
      setJsonError('Invalid JSON');
      return false;
    }
  };

  const handleResponseBodyChange = (value) => {
    setFormData((prev) => ({ ...prev, responseBody: value }));
    validateJSON(value);
  };

  const handleDelayChange = (value) => {
    const numValue = parseInt(value) || 0;
    const clampedValue = Math.max(0, Math.min(10000, numValue));
    setFormData((prev) => ({ ...prev, delayMs: clampedValue }));
  };

  const handleFailureRateChange = (value) => {
    const numValue = parseInt(value) || 0;
    const clampedValue = Math.max(0, Math.min(100, numValue));
    setFormData((prev) => ({ ...prev, failureRate: clampedValue }));
  };

  const handleSubmit = () => {
    if (isFormValid) {
      onSubmit(formData);
    }
  };

  const isFormValid = formData.path.trim() && jsonError === '';

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold tracking-tight text-white">The Builder</h2>
      
      <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6 space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-300 mb-3">Routing</label>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-gray-400 mb-2 block">Path</label>
              <input
                type="text"
                placeholder="/api/users"
                value={formData.path}
                onChange={(e) => setFormData((prev) => ({ ...prev, path: e.target.value }))}
                className="w-full px-4 py-2.5 bg-neutral-800 border border-white/10 rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-emerald-500/50 focus:bg-neutral-800/80 transition-all"
              />
              <p className="text-xs text-gray-500 mt-1.5 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Example: /api/v1/products or /users/123
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 mb-2 block">Method</label>
                <select
                  value={formData.method}
                  onChange={(e) => setFormData((prev) => ({ ...prev, method: e.target.value }))}
                  className="w-full px-4 py-2.5 bg-neutral-800 border border-white/10 rounded-lg text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                >
                  {['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-400 mb-2 block">Status Code</label>
                <input
                  type="number"
                  min="100"
                  max="599"
                  value={formData.statusCode}
                  onChange={(e) => setFormData((prev) => ({ ...prev, statusCode: parseInt(e.target.value) }))}
                  className="w-full px-4 py-2.5 bg-neutral-800 border border-white/10 rounded-lg text-white focus:outline-none focus:border-emerald-500/50 transition-all"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6">
          <label className="block text-sm font-semibold text-gray-300 mb-3">Response Payload</label>
          <div className="relative">
            <textarea
              value={formData.responseBody}
              onChange={(e) => handleResponseBodyChange(e.target.value)}
              placeholder='{"success": true}'
              rows={4}
              className={`w-full min-h-[128px] max-h-[70vh] px-4 py-3 bg-neutral-800 border rounded-lg font-mono text-sm resize-y focus:outline-none transition-all overflow-y-auto ${
                jsonError
                  ? 'border-red-500/50 focus:border-red-500/70'
                  : 'border-white/10 focus:border-emerald-500/50'
              }`}
              style={{
                height: 'auto',
                minHeight: '128px',
                maxHeight: '70vh'
              }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = Math.min(e.target.scrollHeight, window.innerHeight * 0.7) + 'px';
              }}
            />
            {jsonError && (
              <div className="absolute top-2 right-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400" />
                <span className="text-xs text-red-400">{jsonError}</span>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1.5">Must be valid JSON format</p>
        </div>

        <div className="border-t border-white/5 pt-6">
          <div className="flex items-start gap-2 mb-4">
            <label className="block text-sm font-semibold text-gray-300">Chaos Engineering</label>
            <div className="group relative">
              <Info className="w-4 h-4 text-gray-500 cursor-help" />
              <div className="invisible group-hover:visible absolute left-0 top-6 w-72 bg-neutral-800 border border-white/10 rounded-lg p-3 shadow-xl z-10">
                <p className="text-xs text-gray-300 leading-relaxed">
                  Test your UI under realistic network conditions. Simulate degraded networks with artificial delays 
                  and intermittent server failures to verify your error boundaries and loading states.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Network Latency</span>
                  <div className="group relative">
                    <Info className="w-3 h-3 text-gray-600 cursor-help" />
                    <div className="invisible group-hover:visible absolute left-0 top-5 w-64 bg-neutral-800 border border-white/10 rounded-lg p-2 shadow-xl z-10">
                      <p className="text-xs text-gray-400">
                        Inject artificial delay (0-10s) to test loading spinners and timeouts
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    max="10000"
                    step="100"
                    value={formData.delayMs}
                    onChange={(e) => handleDelayChange(e.target.value)}
                    className="w-20 px-2 py-1 bg-neutral-800 border border-white/10 rounded text-emerald-400 text-sm font-semibold text-right focus:outline-none focus:border-emerald-500/50"
                  />
                  <span className="text-sm font-semibold text-emerald-400">ms</span>
                </div>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={formData.delayMs}
                  onChange={(e) => handleDelayChange(e.target.value)}
                  className="slider-emerald w-full h-3 bg-neutral-800 border border-white/10 rounded-lg appearance-none cursor-grab active:cursor-grabbing"
                  style={{
                    background: `linear-gradient(to right, rgb(16 185 129) 0%, rgb(16 185 129) ${(formData.delayMs / 10000) * 100}%, rgb(38 38 38) ${(formData.delayMs / 10000) * 100}%, rgb(38 38 38) 100%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Instant</span>
                <span>10 seconds</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Failure Rate</span>
                  <div className="group relative">
                    <Info className="w-3 h-3 text-gray-600 cursor-help" />
                    <div className="invisible group-hover:visible absolute left-0 top-5 w-64 bg-neutral-800 border border-white/10 rounded-lg p-2 shadow-xl z-10">
                      <p className="text-xs text-gray-400">
                        Percentage chance the endpoint returns 500 error to test error handling
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="5"
                    value={formData.failureRate}
                    onChange={(e) => handleFailureRateChange(e.target.value)}
                    className="w-16 px-2 py-1 bg-neutral-800 border border-white/10 rounded text-red-400 text-sm font-semibold text-right focus:outline-none focus:border-red-500/50"
                  />
                  <span className="text-sm font-semibold text-red-400">%</span>
                </div>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={formData.failureRate}
                  onChange={(e) => handleFailureRateChange(e.target.value)}
                  className="slider-red w-full h-3 bg-neutral-800 border border-white/10 rounded-lg appearance-none cursor-grab active:cursor-grabbing"
                  style={{
                    background: `linear-gradient(to right, rgb(239 68 68) 0%, rgb(239 68 68) ${formData.failureRate}%, rgb(38 38 38) ${formData.failureRate}%, rgb(38 38 38) 100%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-2">
                <span>Reliable</span>
                <span>Always fails</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!isFormValid || loading}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 tracking-tight flex items-center justify-center gap-2 ${
            isFormValid && !loading
              ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
              : 'bg-neutral-700 text-gray-500 cursor-not-allowed opacity-50'
          }`}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Creating...
            </>
          ) : (
            'Create Mock Endpoint'
          )}
        </button>
      </div>
    </div>
  );
}
