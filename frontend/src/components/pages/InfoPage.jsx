import { Zap, Shield, Rocket, Users, Target, TrendingUp } from 'lucide-react';

export default function InfoPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-xl shadow-emerald-500/20 mb-4">
          <Zap className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-white">MockMyAPI</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          A B2B developer tool for building bulletproof UIs with chaos engineering
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-4">
            <Target className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Mission</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Empower frontend engineers to test their UIs under realistic network conditions without 
            waiting for backend teams.
          </p>
        </div>

        <div className="bg-neutral-900 border border-white/10 rounded-2xl p-6">
          <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
            <Rocket className="w-6 h-6 text-blue-400" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Vision</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Make chaos engineering accessible to every frontend developer, enabling them to ship 
            production-ready UIs faster.
          </p>
        </div>
      </div>

      <section className="bg-neutral-900 border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Why MockMyAPI?</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Test Real-World Conditions</h3>
              <p className="text-gray-400 leading-relaxed">
                Production environments are unpredictable. Network latency, intermittent failures, and 
                slow responses are inevitable. MockMyAPI lets you simulate these conditions during 
                development, not after deployment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Ship with Confidence</h3>
              <p className="text-gray-400 leading-relaxed">
                Know exactly how your UI behaves under stress before your users do. Test loading states, 
                error boundaries, retry logic, and fallback components in a controlled environment.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Independent Development</h3>
              <p className="text-gray-400 leading-relaxed">
                Stop waiting for backend APIs to be ready. Create mock endpoints instantly and start 
                building your frontend immediately. Perfect for parallel development workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">The Killer Feature</h2>
        
        <div className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-emerald-500/30 rounded-xl p-6">
          <h3 className="text-xl font-bold text-emerald-400 mb-3">⚡ Chaos Engineering</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Unlike standard mock APIs, MockMyAPI goes beyond simple data mocking. It's built for 
            <span className="font-semibold text-white"> chaos engineering</span> — the practice of 
            intentionally injecting failures to test system resilience.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-emerald-400">✓</span>
              </div>
              <p className="text-sm text-gray-300">
                <strong className="text-white">Network Latency Simulation:</strong> Test loading 
                spinners and skeleton screens with delays up to 10 seconds
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-emerald-400">✓</span>
              </div>
              <p className="text-sm text-gray-300">
                <strong className="text-white">Failure Rate Injection:</strong> Randomly return 500 
                errors to verify error boundaries and retry logic
              </p>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-bold text-emerald-400">✓</span>
              </div>
              <p className="text-sm text-gray-300">
                <strong className="text-white">Configurable Per Endpoint:</strong> Mix reliable endpoints 
                with flaky ones to test complex scenarios
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-neutral-900 border border-white/10 rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Tech Stack</h2>
        
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Backend</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-sm text-gray-300">Node.js + Express 6</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-sm text-gray-300">MongoDB + Mongoose</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                <span className="text-sm text-gray-300">ES Modules (ESM)</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-3">Frontend</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-sm text-gray-300">React 19 + Vite</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-sm text-gray-300">Tailwind CSS v4</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-sm text-gray-300">Lucide React Icons</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border border-emerald-500/30 rounded-2xl p-8 text-center">
        <p className="text-lg text-gray-300 mb-2">
          Built with ❤️ for developers who care about user experience
        </p>
        <p className="text-sm text-gray-500">
          Version 1.0.0 • Made for the Developer Community
        </p>
      </div>
    </div>
  );
}
