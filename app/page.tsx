"use client";

import { useState } from "react";

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">("monthly");

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-lime-400">StepInWeb</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-zinc-300 hover:text-lime-400 transition-colors duration-200">Features</a>
              <a href="#pricing" className="text-zinc-300 hover:text-lime-400 transition-colors duration-200">Pricing</a>
              <a href="#testimonials" className="text-zinc-300 hover:text-lime-400 transition-colors duration-200">Testimonials</a>
              <a href="#faq" className="text-zinc-300 hover:text-lime-400 transition-colors duration-200">FAQ</a>
              <a href="#cta" className="px-5 py-2 bg-lime-400 text-zinc-950 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-200 hover:scale-105">Get Started</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-lime-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-lime-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Business Online,
              <span className="block text-lime-400 mt-2">Launch in Minutes</span>
            </h1>
            <p className="text-xl sm:text-2xl text-zinc-400 mb-10 leading-relaxed">
              Professional websites for trades and small businesses. No setup fees, no contracts, no hassle. Track your marketing, understand your customers, and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#pricing" className="px-8 py-4 bg-lime-400 text-zinc-950 rounded-lg font-bold text-lg hover:bg-lime-300 transition-all duration-200 hover:scale-105 shadow-lg shadow-lime-400/20">
                Start Your Free Trial
              </a>
              <a href="#how-it-works" className="px-8 py-4 border-2 border-lime-400 text-lime-400 rounded-lg font-bold text-lg hover:bg-lime-400 hover:text-zinc-950 transition-all duration-200">
                See How It Works
              </a>
            </div>
            <p className="mt-6 text-zinc-500">No credit card required • Cancel anytime • 14-day free trial</p>
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
            <div className="rounded-xl overflow-hidden border-4 border-lime-400/30 shadow-2xl shadow-lime-400/10">
              <div className="bg-zinc-900 p-3 border-b border-zinc-800 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-8 sm:p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-zinc-950 p-6 rounded-lg border border-lime-400/20">
                    <div className="text-4xl mb-3">📊</div>
                    <h3 className="text-lg font-bold mb-2">Live Analytics</h3>
                    <p className="text-zinc-400 text-sm">Real-time visitor tracking and insights</p>
                  </div>
                  <div className="bg-zinc-950 p-6 rounded-lg border border-lime-400/20">
                    <div className="text-4xl mb-3">🚀</div>
                    <h3 className="text-lg font-bold mb-2">Instant Launch</h3>
                    <p className="text-zinc-400 text-sm">Go live in under 10 minutes</p>
                  </div>
                  <div className="bg-zinc-950 p-6 rounded-lg border border-lime-400/20">
                    <div className="text-4xl mb-3">💰</div>
                    <h3 className="text-lg font-bold mb-2">Affordable</h3>
                    <p className="text-zinc-400 text-sm">Simple monthly pricing, no surprises</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get Online in <span className="text-lime-400">Three Simple Steps</span>
            </h2>
            <p className="text-xl text-zinc-400">No technical skills needed. We handle everything.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center text-3xl font-bold mb-6">1</div>
                <h3 className="text-2xl font-bold mb-4">Tell Us About Your Business</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Answer a few quick questions about your trade or small business. What you do, where you operate, and what makes you special.
                </p>
              </div>
              <div className="hidden md:block absolute top-10 -right-6 w-12 h-1 bg-gradient-to-r from-lime-400 to-transparent"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center text-3xl font-bold mb-6">2</div>
                <h3 className="text-2xl font-bold mb-4">We Build Your Site</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Our system creates a professional website tailored to your industry. Add your logo, photos, and services. Preview everything before going live.
                </p>
              </div>
              <div className="hidden md:block absolute top-10 -right-6 w-12 h-1 bg-gradient-to-r from-lime-400 to-transparent"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-lime-400 text-zinc-950 flex items-center justify-center text-3xl font-bold mb-6">3</div>
                <h3 className="text-2xl font-bold mb-4">Launch & Grow</h3>
                <p className="text-zinc-400 leading-relaxed">
                  Go live instantly with a custom domain. Track visitors, measure marketing ROI, and watch your business grow with built-in analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything You Need to <span className="text-lime-400">Succeed Online</span>
            </h2>
            <p className="text-xl text-zinc-400">Built specifically for trades and small businesses</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-3">Marketing Tracking</h3>
              <p className="text-zinc-400 leading-relaxed">
                See which marketing channels bring customers. Track Google Ads, Facebook campaigns, and organic search performance in real-time.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3">Customer Analytics</h3>
              <p className="text-zinc-400 leading-relaxed">
                Understand your visitors. See what pages they view, how long they stay, and what services interest them most.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="text-2xl font-bold mb-3">Mobile Optimized</h3>
              <p className="text-zinc-400 leading-relaxed">
                Your site looks perfect on every device. More than 60% of your customers browse on mobile—we make sure you don't lose them.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-3">SEO Built-In</h3>
              <p className="text-zinc-400 leading-relaxed">
                Rank higher on Google with automatic SEO optimization. We handle the technical stuff so customers can find you easily.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-3">Contact Forms</h3>
              <p className="text-zinc-400 leading-relaxed">
                Never miss a lead. Get instant email notifications when customers reach out. Includes spam protection and auto-responses.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-3">Lightning Fast</h3>
              <p className="text-zinc-400 leading-relaxed">
                Sites load in under 2 seconds. Fast sites rank better and convert more visitors into customers. Speed matters.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-3">Secure & Reliable</h3>
              <p className="text-zinc-400 leading-relaxed">
                Free SSL certificates, automatic backups, and 99.9% uptime. Your site stays safe and online 24/7.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">🗓️</div>
              <h3 className="text-2xl font-bold mb-3">Booking Integration</h3>
              <p className="text-zinc-400 leading-relaxed">
                Let customers book appointments directly. Syncs with your calendar and sends automatic reminders to reduce no-shows.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300 hover:scale-105">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold mb-3">Live Chat Support</h3>
              <p className="text-zinc-400 leading-relaxed">
                Questions? Our team is here to help. Real humans, fast responses, no runaround. We're invested in your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Simple, <span className="text-lime-400">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8">No setup fees. No hidden costs. Cancel anytime.</p>
            
            <div className="inline-flex items-center bg-zinc-900 rounded-lg p-1 border border-zinc-800">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                  billingCycle === "monthly" ? "bg-lime-400 text-zinc-950" : "text-zinc-400"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("annually")}
                className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                  billingCycle === "annually" ? "bg-lime-400 text-zinc-950" : "text-zinc-400"
                }`}
              >
                Annually
                <span className="ml-2 text-xs bg-lime-400 text-zinc-950 px-2 py-1 rounded-full">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-zinc-400 mb-6">Perfect for getting started</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">
                  ${billingCycle === "monthly" ? "49" : "39"}
                </span>
                <span className="text-zinc-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">5-page professional website</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Custom domain included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Basic analytics dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Contact form</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Mobile optimized</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">SSL security</span>
                </li>
              </ul>
              <a href="#cta" className="block w-full text-center px-6 py-3 border-2 border-lime-400 text-lime-400 rounded-lg font-semibold hover:bg-lime-400 hover:text-zinc-950 transition-all duration-200">
                Start Free Trial
              </a>
            </div>

            <div className="bg-zinc-900 border-2 border-lime-400 rounded-xl p-8 relative transform md:scale-105 shadow-2xl shadow-lime-400/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-lime-400 text-zinc-950 px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-2">Professional</h3>
              <p className="text-zinc-400 mb-6">For growing businesses</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">
                  ${billingCycle === "monthly" ? "99" : "79"}
                </span>
                <span className="text-zinc-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Unlimited pages</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Advanced analytics & tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Marketing campaign tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Booking system integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Priority email support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">SEO optimization tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Blog functionality</span>
                </li>
              </ul>
              <a href="#cta" className="block w-full text-center px-6 py-3 bg-lime-400 text-zinc-950 rounded-lg font-semibold hover:bg-lime-300 transition-all duration-200 hover:scale-105">
                Start Free Trial
              </a>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-lime-400 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-zinc-400 mb-6">For established businesses</p>
              <div className="mb-6">
                <span className="text-5xl font-bold">
                  ${billingCycle === "monthly" ? "199" : "159"}
                </span>
                <span className="text-zinc-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Everything in Professional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Custom design & branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">E-commerce capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Advanced integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Phone support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lime-400 text-xl">✓</span>
                  <span className="text-zinc-300">Multi-location support</span>
                </li>
              </ul>
              <a href="#cta" className="block w-full text-center px-6 py-3 border-2 border-lime-400 text-lime-400 rounded-lg font-semibold hover:bg-lime-400 hover:text-zinc-950 transition-all duration-200">
                Start Free Trial
              </a>
            </div>
          </div>

          <p className="text-center text-zinc-500 mt-12">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Trusted by <span className="text-lime-400">Thousands of Businesses</span>
            </h2>
            <p className="text-xl text-zinc-400">See what our customers have to say</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-lime-400 text-xl">★★★★★</span>
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                "StepInWeb transformed my plumbing business. I went from no online presence to ranking on Google's first page in 3 months. The analytics show exactly where my leads come from."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-zinc-950 font-bold text-lg">
                  MR
                </div>
                <div>
                  <div className="font-bold">Marcus Rodriguez</div>
                  <div className="text-zinc-500 text-sm">Rodriguez Plumbing, Austin TX</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-lime-400 text-xl">★★★★★</span>
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                "The booking system is a game-changer. Customers book appointments 24/7, and I've cut admin time in half. Plus, the automatic reminders mean way fewer no-shows."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-zinc-950 font-bold text-lg">
                  JC
                </div>
                <div>
                  <div className="font-bold">Jennifer Chen</div>
                  <div className="text-zinc-500 text-sm">Precision HVAC, Seattle WA</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-lime-400 text-xl">★★★★★</span>
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                "Finally, a website platform that makes sense for contractors. No tech jargon, just results. My phone rings more, and I can track which ads actually work."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-zinc-950 font-bold text-lg">
                  DM
                </div>
                <div>
                  <div className="font-bold">David Mitchell</div>
                  <div className="text-zinc-500 text-sm">Mitchell Electrical, Denver CO</div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 p-8 rounded-xl border border-zinc-800 hover:border-lime-400 transition-all duration-300">
              <div className="flex items-center gap-1 mb-4">
                <span className="text-lime-400 text-xl">★★★★★</span>
              </div>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                "I was skeptical about needing a website, but StepInWeb proved me wrong. I get 4-5 quality leads per week now, and the site basically pays for itself ten times over."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-zinc-950 font-bold text-lg">
                  SK
                </div>
                <div>
                  <div className="font-bold">Sarah Kowalski</div>
                  <div className="text-zinc-500 text-sm">Kowalski Landscaping, Portland OR</div>
                </div>
              </div>