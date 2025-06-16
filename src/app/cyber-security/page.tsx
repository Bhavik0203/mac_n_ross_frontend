"use client";
import React, { useState, useEffect } from 'react';
import { Shield, Lock, Users, Zap, ArrowRight, CheckCircle, AlertTriangle, Server, Globe, Phone, Mail, MapPin, Network, Smartphone, Database, RotateCcw, GraduationCap, Settings } from 'lucide-react';
import banner2 from '@/app/images/b1.png';
import banner3 from '@/app/images/b.png';
const CybersecurityPage = () => {
  const [isVisible, setIsVisible] = useState<{
    hero?: boolean;
    about?: boolean;
    categories?: boolean;
    services?: boolean;
    capabilities?: boolean;
    benefits?: boolean;
    contact?: boolean;
  }>({});
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const cybersecurityCategories = [
    {
      icon: Network,
      title: "Network Security",
      description: "Securing computer networks from intruders, targeted attackers and opportunistic malware.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Smartphone,
      title: "Application Security",
      description: "Keeping software and devices free of threats. Security begins in the design stage.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Database,
      title: "Information Security",
      description: "Protecting integrity and privacy of data, both in storage and in transit.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: RotateCcw,
      title: "Disaster Recovery",
      description: "Business continuity plans for cyber incidents and operational loss recovery.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: GraduationCap,
      title: "End-user Education",
      description: "Teaching users security practices to prevent human error vulnerabilities.",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Settings,
      title: "Operational Security",
      description: "Processes for handling data assets, user permissions and access controls.",
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const macRossServices = [
    {
      title: "Assessing Risk and Resilience",
      description: "Holistic, risk-based approach using existing capabilities to prioritize threats and design effective cyber programs.",
      icon: Shield,
      features: ["Risk assessment", "Threat analysis", "Strategic planning"]
    },
    {
      title: "Securing Digital Transformation",
      description: "Implement security strategies and establish digital resilience with security by design approach.",
      icon: Globe,
      features: ["Platform security", "Value chain protection", "Digital resilience"]
    },
    {
      title: "Crisis Response & Preparedness",
      description: "Minimize business impact through faster response, better coordination and executive preparedness.",
      icon: AlertTriangle,
      features: ["Crisis playbook", "Response training", "Governance setup"]
    },
    {
      title: "Long-term Cyber Capabilities",
      description: "Transform culture and embed cyber capabilities into every aspect of your business operations.",
      icon: Zap,
      features: ["Cultural transformation", "Agile approaches", "Talent retention"]
    }
  ];

  // Capabilities array definition
  const capabilities = [
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify, assess, and mitigate risks to protect your business from evolving cyber threats.",
      color: "from-gray-900/80 to-gray-900/40"
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Safeguard sensitive data with encryption, access controls, and compliance best practices.",
      color: "from-gray-900/80 to-gray-900/40"
    },
    {
      icon: Users,
      title: "User Awareness",
      description: "Empower your team with security training and awareness programs to reduce human error.",
      color: "from-gray-900/80 to-gray-900/40"
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Secure your IT infrastructure, servers, and cloud environments against unauthorized access.",
      color: "from-gray-900/80 to-gray-900/40"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
        </div>
        
        <div className={`relative z-10 text-center max-w-4xl mx-auto px-6 transform transition-all duration-1000 ${
          isVisible.hero ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <div className="mb-8">
            <Shield className="w-20 h-20 mx-auto mb-6 text-blue-400 animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Cyber Security
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed">
            Protecting critical systems and sensitive information from digital attacks
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <span className="flex items-center justify-center">
                Get Protected
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button className="border-2 border-purple-400 hover:bg-purple-400 hover:text-gray-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* What is Cybersecurity Section */}
      {/* <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              What is Cyber Security?
            </h2>
            <div className="text-center max-w-4xl mx-auto mb-16">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Cybersecurity is the practice of protecting critical systems and sensitive information from digital attacks. 
                Cybersecurity measures are designed to combat threats against networked systems and applications, whether 
                those threats originate from inside or outside of an organization.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The term applies in a variety of contexts, from business to mobile computing, and can be divided into 
                common categories:
              </p>
            </div>
          </div>
        </div>
      </section> */}
       <section id="about" className="bg-gray-50  py-20 bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: `url('${banner3.src}')` }}>
      
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.about ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900/80 to-gray-900/40 bg-clip-text text-transparent">
              What is Cyber Security?
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-900 leading-relaxed mb-6">
                  Cybersecurity is the practice of protecting critical systems and sensitive information from digital attacks. 
                  Cybersecurity measures are designed to combat threats against networked systems and applications, whether 
                  those threats originate from inside or outside of an organization.
                </p>
                <p className="text-lg text-gray-900 leading-relaxed">
                  The term applies in a variety of contexts, from business to mobile computing, and can be divided into 
                  a few common categories that form the foundation of a comprehensive security strategy.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/20">
                  <Lock className="w-16 h-16 text-white mb-4 animate-pulse" />
                  <h3 className="text-2xl font-bold mb-4 text-white">Comprehensive Protection</h3>
                  <p className="text-gray-300">
                    Our security solutions cover all aspects of digital protection, from network security to data encryption and user awareness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Cybersecurity Categories */}
      <section id="categories" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.categories ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Cybersecurity Categories
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cybersecurityCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl border border-gray-600 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer"
                    onMouseEnter={() => setActiveCategory(index)}
                  >
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                      {category.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How Mac N Ross Can Help */}
      {/* <section id="services" className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.services ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              How Mac N Ross Can Help?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {macRossServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-gray-800/80 to-gray-700/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-600 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                  >
                    <div className="flex items-start mb-6">
                      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}
      <section id="capabilities" className="bg-gray-50  py-20 bg-cover bg-center bg-no-repeat bg-fixed"
  style={{ backgroundImage: `url('${banner2.src}')` }}>
       
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.capabilities ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900/80 to-gray-900/40 bg-clip-text text-transparent">
              How Mac N Ross Can Help?
            </h2>
            <div className="space-y-12">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div
                    key={index}
                    className="group grid md:grid-cols-2 gap-8 items-center"
                  >
                    <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className={`bg-gradient-to-r ${capability.color} p-8 rounded-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-1`}>
                        <Icon className="w-16 h-16 text-white mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-4">
                          {capability.title}
                        </h3>
                        <div className="w-20 h-1 bg-white/30 rounded"></div>
                      </div>
                    </div>
                    <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                      <p className="text-lg text-gray-900 leading-relaxed">
                        {capability.description}
                      </p>
                      <button className="mt-6 flex items-center text-gray-900 hover:text-gray-600 transition-colors group">
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section id="benefits" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`transform transition-all duration-1000 ${
            isVisible.benefits ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Why Choose Our Approach?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">
                  Comprehensive Protection
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Complete security coverage across all business operations and digital assets.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                  Expert Team
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Experienced cybersecurity professionals with deep industry knowledge.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-r from-cyan-600 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                  Rapid Response
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Quick incident response and recovery to minimize business impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800">
       <div className="max-w-4xl mx-auto px-6">
  <div className={`transform transition-all duration-1000 ${
    isVisible.contact ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
  }`}>
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
      Secure Your Business Today
    </h2>
    <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl p-8 border border-gray-600">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-6 text-blue-400">Ready to Get Protected?</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Our cybersecurity experts will assess your current security posture and design 
            a comprehensive protection strategy for your organization.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">Call us for consultation</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">security@macnross.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-blue-400 mr-3" />
              <span className="text-gray-300">Expert Security Services</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 backdrop-blur-sm">
          <form className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              maxLength={10}
              pattern="[0-9]{10}"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>

      {/* Footer */}
      {/* <footer className="py-12 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-blue-400 mr-3" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Mac N Ross
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            Comprehensive cybersecurity solutions for modern businesses
          </p>
          <div className="flex justify-center space-x-6">
            <button className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</button>
            <button className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</button>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default CybersecurityPage;