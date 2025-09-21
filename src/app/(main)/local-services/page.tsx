'use client';

import { useState } from 'react';
import Image from 'next/image';
import { localServices } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Phone, MessageSquare } from 'lucide-react';

const serviceTypes = ['All', 'Tour Guide', 'Driver', 'Translator'];

export default function LocalServicesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredServices = localServices.filter(service => 
    activeFilter === 'All' || service.type === activeFilter
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Guide & Local Services</h1>
        <p className="mt-4 text-lg text-muted-foreground">Connect instantly with local experts. Hire guides, drivers, and translators on-demand for a seamless travel experience.</p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="bg-muted p-1 rounded-lg flex items-center">
          {serviceTypes.map(type => (
            <Button 
              key={type} 
              variant={activeFilter === type ? 'solid' : 'ghost'}
              onClick={() => setActiveFilter(type)}
              className={`px-6 py-2 rounded-md text-sm font-medium ${activeFilter === type ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground'}`}>
              {type}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredServices.map(service => (
          <Card key={service.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.name}
                  width={400}
                  height={300}
                  className="w-full h-56 object-cover"
                />
                <div className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold ${service.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                  {service.available ? 'Available Now' : 'Unavailable'}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <div className="flex items-center text-sm font-medium">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span>{service.rating.toFixed(1)} / 5</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{service.type}</p>
                <p className="text-sm text-muted-foreground mb-4">Based in {service.location}</p>
                <div className="text-sm text-muted-foreground mb-4">
                  {service.languages.join(', ')}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" /> Chat
                  </Button>
                  <Button variant="default" size="sm" className="w-full flex items-center gap-2" disabled={!service.available}>
                    <Phone className="w-4 h-4" /> Call
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
