
import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Sparkles, Users, Target, ArrowRight, Star, Zap, Globe, Shield, Cpu, TrendingUp } from 'lucide-react';

const Index = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  // Auto-rotate main news banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const mainNews = [
    {
      title: "DEC Toolbox Integrates AI: Revolutionizing Content Creation",
      description: "Explore the new GenAI Content Creator, designed to simplify and accelerate your digital asset production.",
      badge: "AI Integration",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Global Deployment Speed Increased by 300%",
      description: "Our latest infrastructure updates deliver unprecedented performance across all L'Oréal platforms.",
      badge: "Performance",
      gradient: "from-green-600 to-teal-600"
    },
    {
      title: "New Security Framework: Enterprise-Grade Protection",
      description: "Advanced security measures now protect all toolbox operations with military-grade encryption.",
      badge: "Security",
      gradient: "from-red-600 to-orange-600"
    }
  ];

  const newsItems = [
    {
      badge: "ContentFlow",
      title: "ContentFlow 2.0 Released: Faster Deployments",
      description: "New update significantly reduces content deployment times for global campaigns.",
      date: "2025-07-01",
      icon: Zap
    },
    {
      badge: "AssetLink",
      title: "AssetLink Now Supports 3D Assets",
      description: "Expanded capabilities for rich media management across all platforms.",
      date: "2025-06-25",
      icon: Cpu
    },
    {
      badge: "GlobalSync",
      title: "Multi-Region Synchronization Enhanced",
      description: "Seamless data consistency across all international markets.",
      date: "2025-06-20",
      icon: Globe
    },
    {
      badge: "SecureFlow",
      title: "Advanced Security Protocols Implemented",
      description: "Enterprise-level security now protects all data transactions.",
      date: "2025-06-15",
      icon: Shield
    },
    {
      badge: "Analytics+",
      title: "Real-Time Performance Insights",
      description: "New dashboard provides instant visibility into system performance.",
      date: "2025-06-10",
      icon: TrendingUp
    },
    {
      badge: "AutoDeploy",
      title: "Zero-Downtime Deployment System",
      description: "Continuous deployment without service interruption.",
      date: "2025-06-05",
      icon: Star
    }
  ];

  const feedbackSteps = [
    { icon: Target, title: "Submit", description: "Click to share your insights" },
    { icon: Users, title: "Review", description: "Team evaluates your feedback" },
    { icon: Sparkles, title: "Build", description: "Solutions are crafted" },
    { icon: Zap, title: "Deploy", description: "Improvements go live" }
  ];

  const tools = [
    "ContentFlow", "AssetLink", "GlobalSync", "SecureFlow", "Analytics+", 
    "AutoDeploy", "MediaHub", "CampaignManager", "DataBridge", "WorkflowPro"
  ];

  if (selectedTool) {
    return (
      <div className="flex h-screen bg-gray-900">
        <Sidebar selectedTool={selectedTool} setSelectedTool={setSelectedTool} tools={tools} />
        <MainContent selectedTool={selectedTool} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-transparent via-cyan-500/5 to-transparent rounded-full animate-spin-slow"></div>
      </div>

      {/* Navigation Header */}
      <header className="relative z-50 border-b border-gray-800/50 backdrop-blur-xl bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                The DEC Toolbox
              </h1>
            </div>
            <button 
              onClick={() => setSelectedTool('tools')}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Open Toolbox
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-32 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Powered by Advanced Automation</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-fade-in delay-200">
              <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                Unlock Efficiency
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                The DEC Toolbox
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-400">
              Transforming operational challenges into streamlined workflows with cutting-edge automation and centralized tools for webmasters.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in delay-600">
              <button 
                onClick={() => setSelectedTool('tools')}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/30 flex items-center"
              >
                Explore Tools
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border border-gray-600 rounded-xl font-semibold text-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* News Feed Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Latest Updates
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Stay informed about the latest features, improvements, and innovations in The DEC Toolbox
              </p>
            </div>

            {/* Main News Banner */}
            <div className="mb-16 relative overflow-hidden rounded-2xl">
              <div className={`bg-gradient-to-r ${mainNews[currentNewsIndex].gradient} p-1 rounded-2xl`}>
                <div className="bg-gray-900/90 rounded-xl p-8 md:p-12 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div className="flex-1">
                      <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-full mb-4">
                        <span className="text-sm font-semibold">{mainNews[currentNewsIndex].badge}</span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        {mainNews[currentNewsIndex].title}
                      </h3>
                      <p className="text-xl text-gray-200 max-w-2xl">
                        {mainNews[currentNewsIndex].description}
                      </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                      <button className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  {/* Progress indicators */}
                  <div className="flex space-x-2 mt-8">
                    {mainNews.map((_, index) => (
                      <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentNewsIndex ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-sm font-semibold text-blue-300 border border-blue-500/30">
                      {item.badge}
                    </span>
                    <item.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What is The DEC Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-slate-900/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  What is The DEC & Its Toolbox?
                </h2>
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    The <strong className="text-white">Digital Experience Central (DEC)</strong> team at L'Oréal D2C is the strategic force behind our global web presence. We centralize and optimize operational systems for all L'Oréal group websites.
                  </p>
                  <p>
                    The <strong className="text-blue-400">DEC Toolbox</strong> is our flagship platform, empowering webmasters with advanced automation tools to achieve unparalleled efficiency and precision in every task.
                  </p>
                  <p>
                    From content management to deployment automation, our integrated suite transforms complex workflows into streamlined processes, enabling teams worldwide to focus on innovation rather than repetitive tasks.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Globe, title: "Global Reach", desc: "Worldwide Operations" },
                    { icon: Zap, title: "Lightning Fast", desc: "Instant Deployment" },
                    { icon: Shield, title: "Enterprise Security", desc: "Military-Grade Protection" },
                    { icon: Users, title: "Team Collaboration", desc: "Unified Workflows" }
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group backdrop-blur-sm"
                    >
                      <feature.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feedback Process Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Your Voice Shapes Our Future
            </h2>
            <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">
              Our streamlined feedback mechanism ensures your suggestions are transformed into action. From a simple click, your insights flow into our development pipeline, driving continuous improvements and new solutions for all webmasters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {feedbackSteps.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group-hover:transform group-hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  {index < feedbackSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Creator's Message Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl">
                <span className="text-2xl font-bold text-white">RVB</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Robin Vanden Berghe</h3>
              <p className="text-blue-400 font-semibold">Creator & Lead Architect</p>
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-200 leading-relaxed italic mb-8">
              "As the creator of this toolbox, I am driven by a singular vision: to empower every webmaster to reach new heights of productivity and creativity. My profound hope is that these tools will not only streamline your work but ignite a passion for innovation, helping you achieve true excellence and unprecedented speed in every digital endeavor."
            </blockquote>
            
            <div className="flex justify-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 py-12 px-6 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              The DEC Toolbox
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            Empowering L'Oréal webmasters with cutting-edge automation and centralized tools
          </p>
          <div className="text-sm text-gray-500">
            © 2025 L'Oréal Digital Experience Central. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sidebar Component (preserved functionality)
const Sidebar = ({ selectedTool, setSelectedTool, tools }) => {
  return (
    <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <button 
          onClick={() => setSelectedTool(null)}
          className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold">DEC Toolbox</span>
        </button>
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-gray-400 text-sm font-semibold mb-4 uppercase tracking-wider">Tools</h3>
        <div className="space-y-1">
          {tools.map((tool) => (
            <button
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedTool === tool
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              {tool}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// MainContent Component (preserved functionality)
const MainContent = ({ selectedTool }) => {
  return (
    <div className="flex-1 p-6 bg-gray-900">
      <div className="bg-gray-800 rounded-lg h-full flex items-center justify-center">
        <div className="text-center text-gray-400">
          <h2 className="text-2xl font-bold mb-4">{selectedTool}</h2>
          <p>Tool interface would be loaded here</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
