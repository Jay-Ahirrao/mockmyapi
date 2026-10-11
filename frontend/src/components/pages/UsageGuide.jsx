import { Code, Zap, TestTube, Copy, CheckCircle } from 'lucide-react';

export default function UsageGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Usage Guide</h1>
        <p className="text-gray-400">Learn how to use MockMyAPI to build bulletproof UIs</p>
      </div>

      <div className="space-y-6">
        <section className="bg-neutral-900 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <Code className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold text-white">1. Create a Mock Endpoint</h2>
          </div>
          
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>Navigate to the <span className="font-semibold text-emerald-400">Builder</span> section and configure your endpoint:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span><strong>Path:</strong> Define your endpoint route (e.g., /api/users)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span><strong>Method:</strong> Choose HTTP method (GET, POST, PUT, DELETE, PATCH)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span><strong>Status Code:</strong> Set the HTTP response code (100-599)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span><strong>Response Body:</strong> Write valid JSON that will be returned</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="bg-neutral-900 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
              <Zap className="w-5 h-5 text-amber-400" />
            </div>
            <h2 className="text-xl font-bold text-white">2. Configure Chaos Engineering</h2>
          </div>
          
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>Use the chaos controls to simulate real-world network conditions:</p>
            
            <div className="bg-neutral-800 border border-white/10 rounded-xl p-4">
              <h3 className="font-semibold text-white mb-2">⏱️ Network Latency (0-10000ms)</h3>
              <p className="text-gray-400">
                Inject artificial delay to test loading spinners, skeleton screens, and timeout handling.
                Perfect for testing how your UI behaves with slow connections.
              </p>
            </div>

            <div className="bg-neutral-800 border border-white/10 rounded-xl p-4">
              <h3 className="font-semibold text-white mb-2">⚡ Failure Rate (0-100%)</h3>
              <p className="text-gray-400">
                Set percentage chance the endpoint returns a 500 error. Use this to verify your error 
                boundaries, retry logic, and fallback UI components work correctly.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-neutral-900 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
              <TestTube className="w-5 h-5 text-blue-400" />
            </div>
            <h2 className="text-xl font-bold text-white">3. Use in Your Application</h2>
          </div>
          
          <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>Copy the generated URL and use it in your frontend code:</p>
            
            <div className="bg-black rounded-xl p-4 overflow-x-auto">
              <pre className="font-mono text-xs text-emerald-400">
{`// Example: Fetch from your mock endpoint
fetch('http://localhost:5000/mock/testuser/api/users')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error('Error:', err));

// React example with error handling
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch('http://localhost:5000/mock/testuser/api/users')
    .then(res => {
      if (!res.ok) throw new Error('Failed to fetch');
      return res.json();
    })
    .then(data => {
      setUsers(data);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
}, []);`}
              </pre>
            </div>

            <div className="flex items-start gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
              <Copy className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-emerald-400 mb-1">Pro Tip</p>
                <p className="text-gray-300">
                  Start with 0% failure rate and low latency. Gradually increase to test edge cases 
                  and ensure your UI handles degraded conditions gracefully.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-900 border border-white/10 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
              <Code className="w-5 h-5 text-purple-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Best Practices</h2>
          </div>
          
          <div className="space-y-3 text-sm text-gray-300">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-emerald-400">1</span>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Test Loading States</p>
                <p className="text-gray-400">Use 2-5 second delays to verify spinners and skeleton screens appear correctly</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-emerald-400">2</span>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Test Error Boundaries</p>
                <p className="text-gray-400">Set 50-100% failure rate to ensure error messages display properly</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-emerald-400">3</span>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Test Retry Logic</p>
                <p className="text-gray-400">Use 30% failure rate to verify your retry mechanisms work correctly</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-emerald-400">4</span>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Combine Conditions</p>
                <p className="text-gray-400">Mix high latency (5s+) with failure rates to test worst-case scenarios</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
