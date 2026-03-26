'use client';

import { useState } from 'react';

const portfolioData = {
  travel: [
    { name: 'Traveloka', img: '/mobile apps/traveloka.jpg', tech: 'Flutter, Node.js', url: 'https://play.google.com/store/apps/details?id=com.traveloka.android' },
    { name: 'Hotel Tonight', img: '/mobile apps/hotel tonight.jpg', tech: 'React Native, Elixir', url: 'https://play.google.com/store/apps/details?id=com.hoteltonight.android.prod' },
    { name: 'RateHawk', img: '/mobile apps/RateHawk for Professionals.jpg', tech: 'React Native, Python', url: 'https://play.google.com/store/apps/details?id=com.ratehawk.android' },
    { name: 'ZenHotels', img: '/mobile apps/ZenHotels.jpg', tech: 'Flutter, Ruby on Rails', url: 'https://play.google.com/store/apps/details?id=com.zenhotels.android' },
    { name: 'Treebo', img: '/mobile apps/treebo.jpg', tech: 'React Native, Spring', url: 'https://play.google.com/store/apps/details?id=com.treebo.starscream' },
    { name: 'Stayflexi', img: '/mobile apps/Stayflexi.jpg', tech: 'Kotlin, Firebase', url: 'https://play.google.com/store/apps/details?id=com.stayflexi.platform' },
    { name: 'FabHotels', img: '/mobile apps/FabHotels .jpg', tech: 'Kotlin, Swift', url: 'https://play.google.com/store/apps/details?id=com.fabhotels.guests' },
    { name: 'Dayuse', img: '/mobile apps/Dayuse.jpg', tech: 'React Native, Node.js', url: 'https://play.google.com/store/apps/details?id=com.dayuse_hotels.dayuseus' },
    { name: 'ResortPass', img: '/mobile apps/ResortPass.jpg', tech: 'Flutter, Go', url: 'https://play.google.com/store/apps/details?id=com.resortpass.app' },
    { name: 'Jumeirah', img: '/mobile apps/Jumeirah .jpg', tech: 'Flutter, PHP', url: 'https://play.google.com/store/apps/details?id=com.jumeirah' },
    { name: 'Cheap Hotels', img: '/mobile apps/Cheap Hotels.jpg', tech: 'Flutter, Firebase', url: 'https://play.google.com/store/apps/details?id=com.hotels70.hotelbooking' },
    { name: 'Tripmasters', img: '/mobile apps/tripmasters .jpg', tech: 'Kotlin, PostgreSQL', url: 'https://apps.apple.com/in/app/tripmasters/id1178125920' },
    { name: 'Roomsy', img: '/mobile apps/Roomsy.jpg', tech: 'React Native, AWS', url: 'https://play.google.com/store/apps/details?id=com.ekinsdrow.roomsy' },
  ],
  education: [
    { name: 'ClassDojo', img: '/mobile apps/ClassDojo.jpg', tech: 'Flutter, Firebase', url: 'https://play.google.com/store/apps/details?id=com.classdojo.android' },
    { name: 'Elevate', img: '/mobile apps/Elevate.jpg', tech: 'React Native, Node.js', url: 'https://play.google.com/store/apps/details?id=com.wonder' },
    { name: 'Epic', img: '/mobile apps/Epic.jpg', tech: 'Kotlin, Swift', url: 'https://play.google.com/store/apps/details?id=com.getepic.Epic' },
    { name: 'Mathway', img: '/mobile apps/Mathway.jpg', tech: 'Flutter, Python', url: 'https://play.google.com/store/apps/details?id=com.bagatrix.mathway.android' },
    { name: 'ParentSquare', img: '/mobile apps/ParentSquare.jpg', tech: 'React Native, Ruby', url: 'https://play.google.com/store/apps/details?id=com.parentsquare.psapp' },
    { name: 'Remind', img: '/mobile apps/Remind.jpg', tech: 'Flutter, Go', url: 'https://play.google.com/store/apps/details?id=com.remind101' },
    { name: 'Seesaw', img: '/mobile apps/seesaw.jpg', tech: 'React Native, AWS', url: 'https://play.google.com/store/apps/details?id=com.seesaw' },
    { name: 'StudyDrive', img: '/mobile apps/StudyDrive.jpg', tech: 'Kotlin, Firebase', url: 'https://play.google.com/store/apps/details?id=me.drashti.studydrive' },
    { name: 'StudySmarter', img: '/mobile apps/StudySmarter.jpg', tech: 'Flutter, Node.js', url: 'https://play.google.com/store/apps/details?id=com.studysmarter' },
    { name: 'Top Hat', img: '/mobile apps/top hat better learning.jpg', tech: 'React Native, Spring', url: 'https://apps.apple.com/to/app/top-hat-better-learning/id674069291' },
    { name: 'UPSC Exam Prep', img: '/mobile apps/UPSC.jpg', tech: 'Kotlin, PostgreSQL', url: 'https://play.google.com/store/apps/details?id=com.crackittoday.upsc' },
    { name: 'Zutobi', img: '/mobile apps/Zutobi.jpg', tech: 'Flutter, Ruby', url: 'https://play.google.com/store/apps/details?id=com.driverlicenseapp' },
    { name: 'PictureThis', img: '/mobile apps/PictureThis.jpg', tech: 'Kotlin, Firebase', url: 'https://play.google.com/store/apps/details?id=cn.danatech.xingseus' },
  ],
  food: [
    { name: 'Grubhub', img: '/mobile apps/Grubhub .jpg', tech: 'React Native, Node.js', url: 'https://play.google.com/store/apps/details?id=com.grubhub.android' },
    { name: 'Just Eat', img: '/mobile apps/just eat.jpg', tech: 'Flutter, Python', url: 'https://play.google.com/store/apps/details?id=com.justeat.app.uk' },
    { name: 'Bolt Food', img: '/mobile apps/bolt food.jpg', tech: 'Kotlin, Swift', url: 'https://play.google.com/store/apps/details?id=com.bolt.deliveryclient' },
    { name: 'Cookr', img: '/mobile apps/Cookr.jpg', tech: 'Flutter, Firebase', url: 'https://play.google.com/store/apps/details?id=com.cookr.customer' },
  ],
  ecommerce: [
    { name: 'Krave Mart', img: '/mobile apps/krave mart.jpg', tech: 'React Native, Ruby', url: 'https://play.google.com/store/apps/details?id=com.krrave.customer' },
    { name: 'Banggood', img: '/mobile apps/Banggod.jpg', tech: 'React Native, AWS', url: 'https://play.google.com/store/apps/details?id=com.banggood.client' },
    { name: 'MaviGadget', img: '/mobile apps/mavigadget.jpg', tech: 'React Native, Ruby', url: 'https://play.google.com/store/apps/details?id=co.tapcart.app.id_Klb0b0VCJq' },
    { name: 'Alpaka', img: '/mobile apps/alpaka.jpg', tech: 'Flutter, Python', url: 'https://play.google.com/store/apps/details?id=co.tapcart.app.id_3pZUUpeL9G' },
  ],
  realestate: [
    { name: 'Propin', img: '/mobile apps/Propin.jpg', tech: 'Flutter, Firebase', url: 'https://play.google.com/store/apps/details?id=com.frontfootlabs.propin' },
    { name: 'Redfin', img: '/mobile apps/redfine 2.jpg', tech: 'Kotlin, Swift', url: 'https://play.google.com/store/apps/details?id=com.redfin.android' },
    { name: 'ACN', img: '/mobile apps/ACN.jpg', tech: 'Flutter, Go', url: 'https://play.google.com/store/apps/details?id=com.acnonline.in' },
    { name: 'Trulia', img: '/mobile apps/Trulia.jpg', tech: 'React Native, Node.js', url: 'https://play.google.com/store/apps/details?id=com.trulia.android' },
  ],
  saas: [
    { name: 'Calendly', img: '/mobile apps/Calendly Mobile.jpg', tech: 'React Native, Node.js', url: 'https://play.google.com/store/apps/details?id=com.calendly.app' },
    { name: 'Expensify', img: '/mobile apps/Expensify .jpg', tech: 'React Native, Python', url: 'https://play.google.com/store/apps/details?id=org.me.mobiexpensifyg' },
    { name: 'Fabulous', img: '/mobile apps/Fabulous Daily Routine Planner.jpg', tech: 'Flutter, Firebase', url: 'https://play.google.com/store/apps/details?id=co.thefabulous.app' },
    { name: 'OpenTable', img: '/mobile apps/OpenTable.jpg', tech: 'Kotlin, Swift', url: 'https://play.google.com/store/apps/details?id=com.opentable' },
    { name: 'Procore', img: '/mobile apps/Procore.jpg', tech: 'React Native, Ruby', url: 'https://play.google.com/store/apps/details?id=com.procore.activities' },
    { name: 'ServiceTitan', img: '/mobile apps/ServiceTitan Mobile .jpg', tech: 'Flutter, Go', url: 'https://play.google.com/store/apps/details?id=com.servicetitan.mobile' },
    { name: 'Square POS', img: '/mobile apps/Square Point of Sale.jpg', tech: 'Kotlin, Node.js', url: 'https://play.google.com/store/apps/details?id=com.squareup' },
    { name: 'Stripe Dashboard', img: '/mobile apps/Stripe Dashboard.jpg', tech: 'React Native, Ruby', url: 'https://play.google.com/store/apps/details?id=com.stripe.android.dashboard' },
    { name: 'Taskade', img: '/mobile apps/Taskade.jpg', tech: 'Flutter, Node.js', url: 'https://play.google.com/store/apps/details?id=com.taskade.mobile' },
    { name: 'Toggl Track', img: '/mobile apps/Toggl Track.jpg', tech: 'Kotlin, PostgreSQL', url: 'https://play.google.com/store/apps/details?id=com.toggl.giskard' },
    { name: 'Veracross', img: '/mobile apps/Veracross .jpg', tech: 'React Native, AWS', url: 'https://play.google.com/store/apps/details?id=com.veracross.veracross' },
  ],
};

type CategoryType = keyof typeof portfolioData | 'all';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<CategoryType>('ecommerce');

  const getPortfolioItems = () => {
    if (activeTab === 'all') {
      return [...portfolioData.travel, ...portfolioData.education, ...portfolioData.food, ...portfolioData.ecommerce, ...portfolioData.realestate, ...portfolioData.saas];
    }
    return portfolioData[activeTab];
  };

  const displayItems = getPortfolioItems();

  return (
    <section id="portfolio" className="bg-[#F9FAFB] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-extrabold text-brand-night sm:text-5xl mb-6">Our Mobile App Portfolio</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">Explore our extensive portfolio of mobile applications across various industries, from global travel leaders to innovative educational platforms.</p>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {['all', 'travel', 'education', 'food', 'ecommerce', 'realestate', 'saas'].map((tab) => (
            <button 
              key={tab}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-brand-night text-white shadow-lg' 
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              }`}
              onClick={() => setActiveTab(tab as CategoryType)}
            >
              {tab === 'all' ? 'All' : 
               tab === 'travel' ? 'Travel & Hospitality' : 
               tab === 'education' ? 'Education & Learning' : 
               tab === 'food' ? 'Food & Delivery' : 
               tab === 'ecommerce' ? 'E-Commerce' : 
               tab === 'realestate' ? 'Real Estate' : 'SaaS & Productivity'}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item, idx) => (
            <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl overflow-hidden shadow-[0_12px_40px_-4px_rgba(0,0,0,0.2)] border border-slate-100 flex flex-col group transition-all duration-500 hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.35)] hover:-translate-y-3">
              {/* Image */}
              <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100" style={{ aspectRatio: '1021/650' }}>
                <img src={item.img} alt={item.name} className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Title */}
              <div className="px-6 pt-5 pb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-night group-hover:text-amber-500 transition-colors">{item.name} App Design</h3>
              </div>

              {/* Bottom Info Strip — 2x2 grid */}
              <div className="grid grid-cols-2 border-t border-slate-200 mt-auto">
                <div className="px-5 py-3.5 border-r border-b border-slate-200">
                  <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Client</span>
                  <span className="block text-sm sm:text-base font-bold text-brand-night">{item.name}</span>
                </div>
                <div className="px-5 py-3.5 border-b border-slate-200">
                  <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Platform</span>
                  <span className="block text-sm sm:text-base font-bold text-brand-night">Android & iOS</span>
                </div>
                <div className="px-5 py-3.5 border-r border-slate-200">
                  <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Timeline</span>
                  <span className="block text-sm sm:text-base font-bold text-brand-night">45 Days</span>
                </div>
                <div className="px-5 py-3.5">
                  <span className="block text-[10px] sm:text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Tech</span>
                  <span className="block text-sm sm:text-base font-bold text-brand-night">{item.tech}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
