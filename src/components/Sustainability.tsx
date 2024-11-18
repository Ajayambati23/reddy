import React from 'react';
import { Leaf, Recycle, TreePine, Wind } from 'lucide-react';

const initiatives = [
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Track and optimize the use of sustainable building materials."
  },
  {
    icon: Recycle,
    title: "Waste Management",
    description: "Minimize construction waste through efficient resource planning."
  },
  {
    icon: TreePine,
    title: "Carbon Footprint",
    description: "Monitor and reduce carbon emissions throughout the project."
  },
  {
    icon: Wind,
    title: "Energy Efficiency",
    description: "Optimize energy usage during construction and operation."
  }
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Building a Sustainable Future
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              SiteSphere helps construction teams meet modern environmental standards while optimizing resource usage. 
              Our platform provides comprehensive sustainability tracking, helping you make eco-conscious decisions 
              throughout your project lifecycle.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {initiatives.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 bg-green-50 rounded-lg">
                      <Icon className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&q=80&w=1000" 
              alt="Sustainable construction"
              className="rounded-xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}