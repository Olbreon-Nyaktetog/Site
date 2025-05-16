
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LinksSection from '@/components/LinksSection';
import GallerySection from '@/components/GallerySection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [activeTab, setActiveTab] = useState("links");

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="py-6 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="w-full justify-center gap-4">
              <TabsTrigger value="links" className="text-base">Links</TabsTrigger>
              <TabsTrigger value="gallery" className="text-base">Gallery</TabsTrigger>
              <TabsTrigger value="about" className="text-base">About</TabsTrigger>
              <TabsTrigger value="contact" className="text-base">Contact</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeTab === "links" && <LinksSection />}
        {activeTab === "gallery" && <GallerySection />}
        {activeTab === "about" && <AboutSection />}
        {activeTab === "contact" && <ContactSection />}
      </main>

      <footer className="bg-gray-100 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Interactive Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
