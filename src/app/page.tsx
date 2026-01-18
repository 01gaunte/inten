export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="max-w-4xl mx-auto text-center space-y-8">
        {/* Logo/Brand */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            InTen
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
            Expert advice in just 10 minutes
          </p>
        </div>

        {/* Value Proposition */}
        <div className="space-y-6 py-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            Connect with experts.<br />Get answers fast.
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            InTen is a revolutionary marketplace connecting people who need quick expert advice
            with consultants who can provide real value in focused 10-minute sessions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 py-8">
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Quick Sessions</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              10-minute focused consultations designed for maximum value
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Expert Network</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Verified consultants across business, tech, creative, and lifestyle
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Secure Payments</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Safe, fast transactions with instant booking confirmation
            </p>
          </div>
        </div>

        {/* Coming Soon Badge */}
        <div className="py-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-300 dark:border-primary-700">
            <div className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></div>
            <span className="text-primary-700 dark:text-primary-300 font-semibold">
              Launching Soon
            </span>
          </div>
        </div>

        {/* Email Signup (placeholder for now) */}
        <div className="space-y-4 py-4">
          <p className="text-gray-600 dark:text-gray-400">
            Want to be notified when we launch?
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              disabled
            />
            <button
              className="px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled
            >
              Notify Me
            </button>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Email signup coming soon
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-500">
        <p>&copy; 2026 InTen Platform. Built with modern web technologies.</p>
        <p className="mt-2">
          <a
            href="https://github.com/01gaunte/inten"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
