
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';

const LinksSection = () => {
  // Example links - will be replaced manually later
  const links = [
    { id: 1, title: "Link One", url: "#" },
    { id: 2, title: "Link Two", url: "#" },
    { id: 3, title: "Link Three", url: "#" },
    { id: 4, title: "Link Four", url: "#" },
    { id: 5, title: "Link Five", url: "#" },
  ];

  return (
    <div className="max-w-3xl mx-auto py-10 animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left side - Empty space for a future image */}
        <div className="hidden md:block md:col-span-1">
          {/* This space is reserved for an image that will be added later */}
        </div>
        
        {/* Right side - Links in a single column */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold mb-6">Important Links</h2>
          
          <div className="flex flex-col space-y-3">
            {links.map((link) => (
              <Button
                key={link.id}
                variant="outline"
                className="h-16 text-lg justify-between px-6 hover:bg-blue-50 transition-colors border-2 w-full"
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
          
          <div className="mt-6 text-gray-500">
            <p>These links can be manually updated later.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinksSection;
