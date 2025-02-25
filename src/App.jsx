import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram, FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

function TextScramble({ text }) {
  const [displayText, setDisplayText] = useState(text);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(text.split('')
        .map((char, index) => {
          if (index < iteration) return text[index];
          return characters[Math.floor(Math.random() * characters.length)];
        })
        .join(''));
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1/3;
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <span className="text-scramble">{displayText}</span>;
}

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal, .timeline-item, .slide-reveal').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();
  const [registrationUrl] = useState('https://forms.gle/your-registration-form-url');

  const handleRegister = () => {
    window.open(registrationUrl, '_blank');
  };

  const themes = [
    {
      title: 'Sustainable Innovation',
      description: 'Develop solutions that address environmental challenges and promote sustainability.',
      icon: '🌱'
    },
    {
      title: 'Healthcare Technology',
      description: 'Create innovative solutions for healthcare delivery and patient care.',
      icon: '🏥'
    },
    {
      title: 'Smart Cities',
      description: 'Design technologies that make urban living more efficient and sustainable.',
      icon: '🏙️'
    },
    {
      title: 'Digital Security',
      description: 'Develop solutions for cybersecurity and data protection.',
      icon: '🔒'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to solve complex problems.',
      icon: '🤖'
    },
    {
      title: 'Blockchain Technology',
      description: 'Explore decentralized solutions and secure transactions.',
      icon: '⛓️'
    },
    {
      title: 'AR/VR Innovation',
      description: 'Create immersive experiences and virtual solutions.',
      icon: '👓'
    },
    {
      title: 'Clean Energy',
      description: 'Develop renewable energy solutions for a sustainable future.',
      icon: '⚡'
    },
    {
      title: 'Education Tech',
      description: 'Transform learning through innovative technology solutions.',
      icon: '📚'
    },
    {
      title: 'Fintech Solutions',
      description: 'Revolutionize financial services through technology.',
      icon: '💰'
    },
    {
      title: 'Space Technology',
      description: 'Innovate for space exploration and satellite technology.',
      icon: '🚀'
    },
    {
      title: 'Quantum Computing',
      description: 'Explore the future of computing with quantum solutions.',
      icon: '💻'
    }
  ];

  const domains = [
    {
      title: 'Hardware',
      description: 'Dive into the world of IoT, embedded systems, and robotics. Showcase your skills in circuit design, PCB fabrication, and hardware prototyping.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
      prizes: ['₹15,000 First Prize', '₹10,000 Second Prize', '₹5,000 Third Prize']
    },
    {
      title: 'Software',
      description: 'From web applications to machine learning models, demonstrate your coding prowess. Build innovative solutions using cutting-edge technologies.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800',
      prizes: ['₹15,000 First Prize', '₹10,000 Second Prize', '₹5,000 Third Prize']
    },
    {
      title: 'Paper Presentation',
      description: 'Present your research papers on emerging technologies, sustainable solutions, and innovative concepts in engineering.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
      prizes: ['₹10,000 First Prize', '₹7,000 Second Prize', '₹3,000 Third Prize']
    }
  ];

  const timeline = [
    {
      date: 'March 15, 2025',
      event: 'Registration Opens',
      description: 'Early bird registrations begin with special discounts'
    },
    {
      date: 'March 30, 2025',
      event: 'Abstract Submission',
      description: 'Last date for submitting project abstracts'
    },
    {
      date: 'April 4, 2025',
      event: 'Prakalpa Day',
      description: 'Opening ceremony, competitions, and prize distribution'
    }
  ];

  return (
    <div className="min-h-screen space-background text-white">
      <div className="parallax-layer parallax-layer-1"></div>
      <div className="parallax-layer parallax-layer-2"></div>

      {/* Navigation */}
      <nav className="fixed w-full bg-black bg-opacity-50 backdrop-blur-md z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="text-cyan-400">ISTE</span>
              <span className="text-purple-400">KJSCE</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link to="home" smooth={true} className="cursor-pointer hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="about" smooth={true} className="cursor-pointer hover:text-cyan-400 transition-colors">About</Link>
              <Link to="themes" smooth={true} className="cursor-pointer hover:text-cyan-400 transition-colors">Themes</Link>
              <Link to="domains" smooth={true} className="cursor-pointer hover:text-cyan-400 transition-colors">Domains</Link>
              <Link to="timeline" smooth={true} className="cursor-pointer hover:text-cyan-400 transition-colors">Timeline</Link>
              <button className="cyber-button" onClick={handleRegister}>
                Register Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto text-center px-6">
          <div className="floating">
            <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              <TextScramble text="PRAKALPA '25" />
            </h1>
            <p className="text-2xl text-cyan-200 mb-8">
              Innovate to Elevate
            </p>
            <div className="flex justify-center gap-8 mb-12">
              <div className="flex items-center">
                <FaCalendar className="text-cyan-400 mr-2" />
                <span>April 4, 2025</span>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-cyan-400 mr-2" />
                <span>KJSCE, Mumbai</span>
              </div>
            </div>
            <div className="globe mx-auto mb-12"></div>
            <button className="cyber-button" onClick={handleRegister}>
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 scroll-reveal">
            <TextScramble text="ABOUT PRAKALPA" />
          </h2>
          <div className="glowing-card p-8 slide-reveal">
            <p className="text-xl leading-relaxed text-gray-300">
              Prakalpa is KJSCE's premier technical symposium that brings together the brightest minds in engineering. 
              With a legacy of fostering innovation and technical excellence, Prakalpa '25 promises to be bigger and better 
              than ever before. Join us for an intense day of competition, learning, and networking opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 scroll-reveal">
            <TextScramble text="THEMES" />
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
            {themes.map((theme, index) => (
              <div 
                key={index} 
                className="theme-card p-6 scroll-reveal hover-float" 
                style={{
                  animationDelay: `${index * 0.1}s`,
                  transform: `rotate(${Math.random() * 2 - 1}deg)`
                }}
              >
                <div className="text-4xl mb-4 rotating-icon">{theme.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-cyan-300">{theme.title}</h3>
                <p className="text-gray-300">{theme.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains Section */}
      <section id="domains" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 scroll-reveal">
            <TextScramble text="COMPETITION DOMAINS" />
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {domains.map((domain, index) => (
              <div key={index} className="glowing-card floating scroll-reveal" style={{animationDelay: `${index * 0.2}s`}}>
                <img src={domain.image} alt={domain.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 text-cyan-300">{domain.title}</h3>
                  <p className="text-gray-300 mb-4">{domain.description}</p>
                  <div className="space-y-2">
                    {domain.prizes.map((prize, i) => (
                      <div key={i} className="text-purple-400">{prize}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 scroll-reveal">
            <TextScramble text="EVENT TIMELINE" />
          </h2>
          <div className="timeline">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className="glowing-card p-6 max-w-md">
                    <h3 className="text-xl font-bold text-cyan-300">{item.event}</h3>
                    <div className="flex items-center text-purple-400 my-2">
                      <FaCalendar className="mr-2" />
                      {item.date}
                    </div>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black bg-opacity-50 backdrop-blur-md py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-6 md:mb-0">
              <span className="text-cyan-400">PRAKALPA</span>
              <span className="text-purple-400">'25</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400">© 2025 ISTE KJSCE. All rights reserved.</p>
            <p className="text-gray-500 mt-2">For queries: prakalpa@kjsce.somaiya.edu</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;