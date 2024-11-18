import React from 'react';
import Feature from './Feature';
import { Building2, Users2, LineChart, Leaf, Camera, Clock, Brain, Shield } from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: "BIM Integration",
    description: "Seamlessly integrate and interact with 3D building models for enhanced project visualization and coordination."
  },
  {
    icon: Users2,
    title: "Team Collaboration",
    description: "Real-time communication and document sharing keeps everyone aligned and informed."
  },
  {
    icon: LineChart,
    title: "Progress Tracking",
    description: "Monitor project milestones, deadlines, and resource allocation with intuitive Gantt charts."
  },
  {
    icon: Camera,
    title: "Site Monitoring",
    description: "Live camera feeds and IoT integration for real-time site supervision and security."
  },
  {
    icon: Clock,
    title: "Resource Management",
    description: "Optimize scheduling and resource allocation for maximum efficiency."
  },
  {
    icon: Brain,
    title: "Smart Analytics",
    description: "Data-driven insights to improve decision-making and project outcomes."
  },
  {
    icon: Shield,
    title: "Safety Compliance",
    description: "Ensure adherence to safety regulations with built-in compliance tools."
  },
  {
    icon: Leaf,
    title: "Sustainability Tracking",
    description: "Monitor and optimize environmental impact throughout the project lifecycle."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Everything You Need in One Platform
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}