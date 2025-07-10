import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Sparkles, Users, Target, ArrowRight, Star, Zap, Globe, Shield, Cpu, TrendingUp, Search, Download, ExternalLink, ChevronDown } from 'lucide-react';

interface Tool {
  title: string;
  description: string;
  link: string;
  category: string;
  external?: boolean;
  externalLink?: string;
  externalText?: string;
  download?: boolean;
}

interface NewsItem {
  badge: string;
  title: string;
  description: string;
  date: string;
  icon: React.ComponentType<any>;
}

interface MainNewsItem {
  title: string;
  description: string;
  badge: string;
  gradient: string;
}

const Index = () => {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const toolsData: Tool[] = [{
    title: "PAMELA",
    description: "PDP Automated Multilingual Easy Localization Api-based. Translate library and catalog xml in a click. Upload and quickly translate products for Launches without worrying about the html. Export XML will give you a fully localized xml ready to import in SFCC",
    link: "https://pamela.robinvb.com/",
    category: "01 Translation"
  }, {
    title: "PaDeL",
    description: "Page Designer Localization. Upload and quickly translate Landing pages without worrying about the html. Export XML will give you a fully localized xml ready to import in SFCC. Now with contextual translations and selective source language. The groups created are visibles in the console of the browser.",
    link: "https://padel.thedec.es/",
    external: true,
    externalLink: "https://padel.robinvb.com/",
    externalText: "-> In case of problem, click here to use the old version",
    category: "01 Translation"
  }, {
    title: "NOVA",
    description: "Alt Text Generator for packshots, <img> html tags in content assets and Page Designer Landing pages.",
    link: "https://nova.thedec.es",
    external: true,
    externalLink: "https://loreal-my.sharepoint.com/:p:/p/robin_edmon/EeMQIG7wO5ZHv5OSDGr0KBkBUCYIVojBKAKakrN1MLbEVQ?e=2hPrt2",
    externalText: "-> Instructions and Presentation PPT",
    category: "01 Translation"
  }, {
    title: "Handlebars Translation",
    description: "Upload and quickly translate library xml files with handlebars element like acordion or carousel with titles",
    link: "https://handel.robinvb.com/",
    category: "01 Translation"
  }, {
    title: "Page Designer Extract",
    description: "Upload a full library, add page-id's and download all pages in a separate xml fil or all in one.",
    link: "tools/PD-downloader/index.html",
    category: "01 Translation"
  }, {
    title: "Promotion Filter",
    description: "Ordenate and filter by date, by discounted product or exclusivity group.",
    link: "https://maya.thedec.es/",
    external: true,
    externalLink: "https://app.powerbi.com/groups/me/apps/3f7ebe31-b5e5-4c1c-8f6d-7deade5a33ed/reports/7ee884bb-e156-47e2-818d-ececa998b18d/ReportSectionb1940416c5bb051977b4?ctid=e4e1abd9-eac7-4a71-ab52-da5c998aa7ba&experience=power-bi",
    externalText: "-> Filter Orders by Promotions or Coupon Code",
    category: "04 Promotions & Campaigns"
  }, {
    title: "PDP CROSS",
    description: "Create some crossed data table from all SFCC data sources in one. Product Data Analysis, Master Catalalog, Navigation Catalog, along with Price and Stock or even breadcrumbs of each product with it's variants. Can help to have a very good overview of what product is visible on the storefront, and extract excel sheet. Add any attribute you want to the table for an easy comparison, and change the locale you want to pull the data from as well.",
    link: "tools/PDP-CROSS.html",
    category: "02 Product"
  }, {
    title: "Master to Variant or variant to master",
    description: "Extract all the master IDs from a list of ean uploading the full master-catalog.xml.",
    link: "tools/master-variants.html",
    category: "02 Product"
  }, {
    title: "Staging Review Link Builder",
    description: "Create multi-links for Markets to review in staging",
    link: "tools/SFCC-link-staging.html",
    category: "03 Link Builder"
  }, {
    title: "FTP Link Builder",
    description: "Create links for webdav FTP",
    link: "tools/ftp-link/index.html",
    category: "03 Link Builder"
  }, {
    title: "Properties: From JSON to Excel Table",
    description: "Paste the JSON and get a table.",
    link: "tools/JSON-Parser/JSON-to-columns.html",
    external: true,
    externalLink: "https://loreal.sharepoint.com/:x:/r/sites/-FR-Changerequest/_layouts/15/Doc.aspx?sourcedoc=%7B402E225D-DB72-47D1-985D-F61685769B51%7D&file=changesInProperties.xlsx&action=default&mobileredirect=true&wdOrigin=TEAMS-MAGLEV.p2p_ns.rwc&wdExp=TEAMS-TREATMENT&wdhostclicktime=1729498738375&web=1",
    externalText: "Changes In Properties Document",
    category: "05 Data Transformation"
  }, {
    title: "Price per Capacity",
    description: "Upload the full master catalog to get the values from the size attribute transformed and pasted in the capacityUnit and capacityValue attributes in ml in default and in L in German.",
    link: "tools/capacity-valuev2.html",
    category: "05 Data Transformation"
  }, {
    title: "KIE PDP Template to XML",
    description: "Copy-paste from Excel and get XML.",
    link: "tools/kie-template-pdp/xml-rectifier-template-kie.html",
    category: "05 Data Transformation"
  }, {
    title: "LAC Dmi-Emea PID Converter",
    description: "As there is a mismatch between DMI and EMEA",
    link: "tools/lac-emea-dmi-id-change.html",
    external: true,
    externalLink: "https://loreal-my.sharepoint.com/:x:/p/robin_edmon/EbY75tCYMrpMioq-_91uUHYBlr_0-SXQq6jBtBLTu868NA?e=UMqnj4",
    externalText: "Excel conversion table",
    category: "02 Product"
  }, {
    title: "Product without tabs finder",
    description: "Find products missing tabs info",
    link: "tools/sfcc-product-tabs.html",
    category: "02 Product"
  }, {
    title: "Extract User Rights",
    description: "Displays all user info and rights on a table",
    link: "tools/extract-user-rights.html",
    category: "04 User Management"
  }, {
    title: "Merge Products",
    description: "Download and launch this script in the folder containing all the subfolders/zipfiles of the XML products. It will automatically unzip and extract all XML files and create a new XML file with all the products merged into one catalog file. Just add the catalog-ID and you're good to go. Very good to use with the PDP Translation App for multiple launche, like holiday sets e.g.",
    link: "https://loreal.sharepoint.com/:u:/r/sites/DEC/Documentos%20compartidos/9.%20Webmastering/Shared-toolbox/tools/py/merge-products.py?csf=1&web=1&e=Qa3NcM",
    category: "06 Python Scripts",
    download: true,
    external: true,
    externalLink: "https://www.python.org/ftp/python/3.13.2/python-3.13.2-amd64.exe",
    externalText: "Install Python"
  }, {
    title: "Merge Asset",
    description: "Download and launch this script in the folder containing all the subfolders/zipfiles of the content assets. It will automatically unzip and extract all XML files and create a new XML file with all the assets merged into one library file (without fodlers). Very good to use with the Page Designer Translation App for multilanguage Landings",
    link: "https://loreal.sharepoint.com/:u:/r/sites/DEC/Documentos%20compartidos/9.%20Webmastering/Shared-toolbox/tools/py/merge-asset.py?csf=1&web=1&e=UmDO3l",
    category: "06 Python Scripts",
    download: true,
    external: true,
    externalLink: "https://www.python.org/ftp/python/3.13.2/python-3.13.2-amd64.exe",
    externalText: "Install Python"
  }, {
    title: "Catalog Namer",
    description: "Download and launch the script in the folder you get when importing all the catalogs from the Site Import/Export (Administration SFCC). It will extract the name of the folders, rename the XML file inside each folder with the catalog name, and create a folder with all the catalogs together.",
    link: "https://loreal.sharepoint.com/:u:/r/sites/DEC/Documentos%20compartidos/9.%20Webmastering/Shared-toolbox/tools/py/rename_catalog.py?csf=1&web=1&e=HUwvKH",
    category: "06 Python Scripts",
    download: true,
    external: true,
    externalLink: "https://www.python.org/ftp/python/3.13.2/python-3.13.2-amd64.exe",
    externalText: "Install Python"
  }, {
    title: "Library Namer",
    description: "Download and launch the script in the folder you get when importing all the libraries from the Site Import/Export (Administration SFCC). It will extract the name of the folders, rename the XML file inside each folder with the library name, and create a folder with all the libraries together.",
    link: "https://loreal.sharepoint.com/:u:/r/sites/DEC/Documentos%20compartidos/9.%20Webmastering/Shared-toolbox/tools/py/rename_library.py?csf=1&web=1&e=bg1nAJ",
    category: "06 Python Scripts",
    download: true,
    external: true,
    externalLink: "https://www.python.org/ftp/python/3.13.2/python-3.13.2-amd64.exe",
    externalText: "Install Python"
  }, {
    title: "Replication Fix",
    description: "This Python script compares two Salesforce B2C Commerce XML product catalogs and identifies discrepancies between them. It extracts all product IDs from each file, regardless of naming, using the Demandware XML namespace. The script then highlights products that are unique to each catalog and outputs the differences in an Excel file. Column headers are automatically named based on the original XML filenames for clarity. Additionally, the script prints a summary showing how many products are shared or exclusive to each file. It's a simple, efficient tool to validate synchronization between staging and production catalogs and catch misrouted product imports.",
    link: "https://loreal.sharepoint.com/:u:/r/sites/DEC/Documentos%20compartidos/9.%20Webmastering/Shared-toolbox/tools/py/catalogCheck.py?csf=1&web=1&e=nbkvkp",
    category: "06 Python Scripts",
    download: true,
    external: true,
    externalLink: "https://www.python.org/ftp/python/3.13.2/python-3.13.2-amd64.exe",
    externalText: "Install Python"
  }];

  // Group tools by category
  const groupedTools = toolsData.reduce((acc: Record<string, Tool[]>, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {});

  // Filter tools based on search term
  const filteredTools = toolsData.filter(tool => tool.title.toLowerCase().includes(searchTerm.toLowerCase()) || tool.description.toLowerCase().includes(searchTerm.toLowerCase()) || tool.category.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredGroupedTools = filteredTools.reduce((acc: Record<string, Tool[]>, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = [];
    }
    acc[tool.category].push(tool);
    return acc;
  }, {});

  // Initialize expanded categories
  useEffect(() => {
    const initialExpandedState: Record<string, boolean> = {};
    Object.keys(groupedTools).forEach(category => {
      initialExpandedState[category] = true;
    });
    setExpandedCategories(initialExpandedState);
  }, []);
  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Auto-rotate main news banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const mainNews: MainNewsItem[] = [{
    title: "PAMELA Translation Tool: Revolutionizing Multilingual Content",
    description: "Automated PDP translation system now supports instant XML localization with one-click deployment to SFCC platforms.",
    badge: "Translation",
    gradient: "from-blue-600 to-purple-600"
  }, {
    title: "PaDeL Landing Page Localization Enhanced",
    description: "New contextual translation features and selective source language support for Page Designer content.",
    badge: "Localization",
    gradient: "from-purple-600 to-blue-700"
  }, {
    title: "NOVA Alt Text Generator: AI-Powered Accessibility",
    description: "Advanced AI generates perfect alt text for packshots and Page Designer assets automatically.",
    badge: "AI Tools",
    gradient: "from-blue-700 to-purple-700"
  }];

  const newsItems: NewsItem[] = [{
    badge: "Translation",
    title: "PAMELA 2.0: Faster XML Processing",
    description: "New update significantly reduces translation processing times for catalog imports.",
    date: "2025-07-01",
    icon: Zap
  }, {
    badge: "Page Designer",
    title: "PaDeL Now Supports Complex Components",
    description: "Enhanced capabilities for translating accordion and carousel elements.",
    date: "2025-06-25",
    icon: Cpu
  }, {
    badge: "Product Tools",
    title: "PDP CROSS: Multi-Source Data Analysis",
    description: "New dashboard combines catalog, pricing, and stock data in one view.",
    date: "2025-06-20",
    icon: Globe
  }, {
    badge: "Automation",
    title: "Python Scripts Collection Expanded",
    description: "New merge tools for products and assets streamline deployment workflows.",
    date: "2025-06-15",
    icon: Shield
  }, {
    badge: "Link Builder",
    title: "Enhanced Staging Review Tools",
    description: "Multi-market review links now generate with improved validation.",
    date: "2025-06-10",
    icon: TrendingUp
  }, {
    badge: "Data Tools",
    title: "JSON to Excel Converter Upgraded",
    description: "Properties parser now handles complex nested structures seamlessly.",
    date: "2025-06-05",
    icon: Star
  }];

  const feedbackSteps = [{
    icon: Target,
    title: "Submit",
    description: "Submit"
  }, {
    icon: Users,
    title: "Review",
    description: "Team evaluates your feedback"
  }, {
    icon: Sparkles,
    title: "Build",
    description: "Solutions are crafted"
  }, {
    icon: Zap,
    title: "Deploy",
    description: "Improvements go live"
  }];

  if (selectedTool) {
    return <div className="flex h-screen bg-gray-900">
        <Sidebar selectedTool={selectedTool} setSelectedTool={setSelectedTool} toolsData={toolsData} groupedTools={groupedTools} searchTerm={searchTerm} setSearchTerm={setSearchTerm} filteredGroupedTools={filteredGroupedTools} expandedCategories={expandedCategories} toggleCategory={toggleCategory} />
        <MainContent selectedTool={selectedTool} />
      </div>;
  }
  return <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-x-hidden">
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
            <button onClick={() => setSelectedTool('tools' as any)} className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
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
              <button onClick={() => setSelectedTool('tools' as any)} className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/30 flex items-center">
                Explore Tools
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
                    {mainNews.map((_, index) => <div key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentNewsIndex ? 'bg-white' : 'bg-white/30'}`} />)}
                  </div>
                </div>
              </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => <div key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10">
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
                </div>)}
            </div>
          </div>
        </section>

        {/* Feedback Process Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Share your feedbacks</h2>
            <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">Our streamlined feedback flow ensures your suggestions are transformed into action. From a simple click, your insights flow into our development pipeline, driving continuous improvements and new solutions for all webmasters.</p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {feedbackSteps.map((step, index) => <div key={index} className="relative group">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm group-hover:transform group-hover:scale-105">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all duration-300">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    {step.title === "Submit" ? (
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                        Submit
                      </button>
                    ) : (
                      <p className="text-gray-400">{step.description}</p>
                    )}
                  </div>
                  {index < feedbackSteps.length - 1 && <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    </div>}
                </div>)}
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
    </div>;
};

// Enhanced Sidebar Component with dynamic toolsData
interface SidebarProps {
  selectedTool: Tool | null;
  setSelectedTool: (tool: Tool | null) => void;
  toolsData: Tool[];
  groupedTools: Record<string, Tool[]>;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  filteredGroupedTools: Record<string, Tool[]>;
  expandedCategories: Record<string, boolean>;
  toggleCategory: (category: string) => void;
}
const Sidebar: React.FC<SidebarProps> = ({
  selectedTool,
  setSelectedTool,
  toolsData,
  groupedTools,
  searchTerm,
  setSearchTerm,
  filteredGroupedTools,
  expandedCategories,
  toggleCategory
}) => {
  return <div className="w-80 bg-gray-800 border-r border-gray-700 flex flex-col">
      <div className="p-6 border-b border-gray-700">
        <button onClick={() => setSelectedTool(null)} className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors mb-4">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold">DEC Toolbox</span>
        </button>
        
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input type="text" placeholder="Search tools..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4">
        {Object.entries(filteredGroupedTools).map(([category, tools]) => <div key={category} className="mb-6">
            <button onClick={() => toggleCategory(category)} className="flex items-center justify-between w-full text-left text-gray-400 text-sm font-semibold mb-3 uppercase tracking-wider hover:text-white transition-colors">
              <span>{category}</span>
              <ChevronDown className={`w-4 h-4 transform transition-transform ${expandedCategories[category] ? 'rotate-180' : ''}`} />
            </button>
            
            {expandedCategories[category] && <div className="space-y-1 pl-2">
                {tools.map(tool => <button key={tool.title} onClick={() => setSelectedTool(tool)} className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between group ${selectedTool?.title === tool.title ? 'bg-blue-600 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>
                    <span className="truncate">{tool.title}</span>
                    <div className="flex items-center space-x-1 ml-2">
                      {tool.download && <Download className="w-3 h-3 opacity-60" />}
                      {tool.external && <ExternalLink className="w-3 h-3 opacity-60" />}
                    </div>
                  </button>)}
              </div>}
          </div>)}
        
        {Object.keys(filteredGroupedTools).length === 0 && searchTerm && <div className="text-center text-gray-400 mt-8">
            <p>No tools found matching "{searchTerm}"</p>
          </div>}
      </div>
    </div>;
};

// Enhanced MainContent Component
interface MainContentProps {
  selectedTool: Tool | null;
}
const MainContent: React.FC<MainContentProps> = ({
  selectedTool
}) => {
  if (!selectedTool || selectedTool === 'tools' as any) {
    return <div className="flex-1 p-6 bg-gray-900 flex items-center justify-center">
        <div className="text-center text-gray-400">
          <Cpu className="w-16 h-16 mx-auto mb-4 text-blue-400" />
          <h2 className="text-2xl font-bold mb-4 text-white">Welcome to The DEC Toolbox</h2>
          <p className="text-lg">Select a tool from the sidebar to get started</p>
        </div>
      </div>;
  }
  const isExternalLink = selectedTool.link?.startsWith('http');
  const shouldShowIframe = isExternalLink || selectedTool.link?.startsWith('tools/');
  return <div className="flex-1 flex flex-col bg-gray-900">
      {/* Tool Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-2xl font-bold text-white">{selectedTool.title}</h1>
              <div className="flex items-center space-x-2">
                {selectedTool.download && <span className="px-2 py-1 bg-green-600 text-white text-xs rounded-full flex items-center">
                    <Download className="w-3 h-3 mr-1" />
                    Download
                  </span>}
                {selectedTool.external && <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full flex items-center">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    External
                  </span>}
              </div>
            </div>
            <p className="text-gray-300 mb-4">{selectedTool.description}</p>
            
            <div className="flex flex-wrap gap-3">
              <a href={selectedTool.link} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center">
                {selectedTool.download ? <>
                    <Download className="w-4 h-4 mr-2" />
                    Download Tool
                  </> : <>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Open Tool
                  </>}
              </a>
              
              {selectedTool.external && selectedTool.externalLink && <a href={selectedTool.externalLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors flex items-center">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {selectedTool.externalText || 'Additional Resource'}
                </a>}
            </div>
          </div>
        </div>
      </div>

      {/* Tool Content */}
      <div className="flex-1 relative">
        {shouldShowIframe && !selectedTool.download ? <iframe src={selectedTool.link} className="w-full h-full border-0" title={selectedTool.title} /> : <div className="flex items-center justify-center h-full">
            <div className="text-center text-gray-400">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                {selectedTool.download ? <Download className="w-12 h-12 text-white" /> : <ExternalLink className="w-12 h-12 text-white" />}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{selectedTool.title}</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                {selectedTool.download ? "Click the download button above to get this tool" : "This tool opens in a new window. Click the button above to access it."}
              </p>
            </div>
          </div>}
      </div>
    </div>;
};
export default Index;
