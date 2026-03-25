'use client';

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import TechStack from "@/components/TechStack";
import Pricing from "@/components/Pricing";
import CTABanner from "@/components/CTABanner";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import QuoteModal from "@/components/QuoteModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Get a Quote");

  const openModal = (title: string) => {
    setModalTitle(title);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Add WATI and ionicons
    const scriptWati = document.createElement("script");
    scriptWati.src = "https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?73246";
    scriptWati.async = true;
    scriptWati.onload = () => {
      const options = {
        enabled: true,
        chatButtonSetting: {
          backgroundColor: '#00e785',
          ctaText: 'Chat with us',
          borderRadius: '25',
          marginLeft: '0',
          marginRight: '20',
          marginBottom: '20',
          ctaIconWATI: false,
          position: 'right'
        },
        brandSetting: {
          brandName: 'Clever Crow Strategies LLP',
          brandImg: 'https://clevercrow.in/smm-packages/favicon.png',
          welcomeText: 'Hi there!\nHow can I help you?',
          messageText: 'Hello, I have a question about {{page_link}}',
          backgroundColor: '#00e785',
          ctaText: 'Chat with us',
          borderRadius: '25',
          autoShow: false,
          phoneNumber: '919986389444'
        }
      };
      // @ts-ignore
      if (typeof CreateWhatsappChatWidget === 'function') {
        // @ts-ignore
        CreateWhatsappChatWidget(options);
      }
    };
    document.body.appendChild(scriptWati);

    return () => {
      if (scriptWati.parentNode) {
        document.body.removeChild(scriptWati);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-brand-night text-white">
        <Header />
        <Hero />
      </div>
      <LogoTicker />
      <TechStack />
      <Pricing />
      <CTABanner />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Footer />
      <StickyCTA onOpenModal={openModal} />
      <QuoteModal isOpen={modalOpen} title={modalTitle} onClose={closeModal} />
    </>
  );
}
