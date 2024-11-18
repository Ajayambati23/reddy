import React from 'react';
import { TrendingUp, Clock, DollarSign, Shield } from 'lucide-react';

const benefits = [
  {
    title: "30% Faster Project Completion",
    description: "Streamlined workflows and real-time collaboration accelerate project timelines significantly.",
    icon: TrendingUp
  },
  {
    title: "25% Cost Reduction",
    description: "Optimize resource allocation and reduce waste through intelligent management.",
    icon: DollarSign
  },
  {
    title: "50% Less Downtime",
    description: "Proactive issue detection and quick resolution minimize project delays.",
    icon: Clock
  },
  {
    title: "100% Safety Compliance",
    description: "Automated safety checks and real-time monitoring ensure complete regulatory compliance.",
    icon: Shield
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Proven Results That Speak Volumes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our clients consistently report significant improvements in project efficiency, cost savings, and safety metrics after implementing SiteSphere.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex p-3 bg-blue-50 rounded-full mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}