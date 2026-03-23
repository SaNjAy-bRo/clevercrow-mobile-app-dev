'use client';

import { useState } from 'react';

const portfolioData = {
  ecommerce: [
    { name: 'Baatu', url: 'https://www.baatu.in/', img: '/images/baatu.webp' },
    { name: 'Gatodates', url: 'https://gatodates.com/', img: '/images/gatodates.webp' },
    { name: 'Artebella', url: 'https://artebella.in/', img: '/images/artebella.webp' },
    { name: 'Bella Lash', url: 'https://bellalash.com/', img: '/images/bellalash.webp' },
    { name: 'British Darts', url: 'https://britishdarts.com/', img: '/images/britishdarts.webp' },
    { name: 'Anatomy Fitness', url: 'https://anatomyfitness.co/', img: '/images/anatomyfitness.webp' },
  ],
  healthcare: [
    { name: 'Alchemist Pharmarx', url: 'https://alchemistpharmarx.com/', img: '/images/alchemistpharmarx.webp' },
    { name: 'Better Tomorrow', url: 'https://bettertomorrowtc.com/', img: '/images/bettertomorrowtc.webp' },
    { name: 'DDC Smiles', url: 'https://ddcsmiles.in/', img: '/images/ddcsmiles.webp' },
    { name: 'Gateway Foundation', url: 'https://www.gatewayfoundation.org', img: '/images/gatewayfoundation.webp' },
    { name: 'Lakeview Health', url: 'https://www.lakeviewhealth.com', img: '/images/lakeviewhealth.webp' },
    { name: 'SL Compounding', url: 'https://slcompounding.com', img: '/images/slcompounding.webp' },
  ],
  education: [
    { name: 'Ad Critter', url: 'https://adcritter.ai/', img: '/images/adcritter.webp' },
    { name: 'Carver Aviation', url: 'https://carveraviation.com/', img: '/images/carveraviation.webp' },
    { name: 'Intryc', url: 'https://www.intryc.com', img: '/images/intryc.webp' },
    { name: 'People Manager', url: 'https://peoplemanager.co/', img: '/images/peoplemanager.webp' },
    { name: 'Rollins', url: 'https://www.rollins.edu', img: '/images/rollins.webp' },
    { name: 'WGU', url: 'https://www.wgu.edu', img: '/images/wgu.webp' },
  ],
};

type TabType = keyof typeof portfolioData;

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<TabType>('ecommerce');

  return (
    <section id="portfolio" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-3xl font-extrabold text-brand-night sm:text-4xl">Our Mobile App Portfolio</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-600">Live projects across e-commerce, healthcare, education, and fast-growing startup segments.</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button 
            className={`tab-btn ${activeTab === 'ecommerce' ? 'active' : ''}`}
            onClick={() => setActiveTab('ecommerce')}
          >
            E-commerce
          </button>
          <button 
            className={`tab-btn ${activeTab === 'healthcare' ? 'active' : ''}`}
            onClick={() => setActiveTab('healthcare')}
          >
            Healthcare
          </button>
          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education & Tech
          </button>
        </div>

        <div className="mt-8">
          <div className="portfolio-grid fade-in">
            {portfolioData[activeTab].map((item, idx) => (
              <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="portfolio-item">
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
