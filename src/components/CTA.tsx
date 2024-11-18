import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-blue-600">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Transform Your Construction Projects?
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of construction professionals who are already using SiteSphere to improve efficiency, 
          reduce costs, and deliver projects on time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-blue-50 transition-colors text-lg inline-flex items-center gap-2">
            Start Free Trial <ArrowRight className="h-5 w-5" />
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}