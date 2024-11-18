import React from 'react';

export default function Hero() {
  const handleStartFreeTrial = () => {
    // Placeholder for real action (e.g., navigate to sign-up page or show modal)
    alert('Redirecting to Start Free Trial...');
  };

  const handleWatchDemo = () => {
    // Placeholder for real action (e.g., open video modal)
    alert('Playing demo...');
  };

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Transform Your Construction Projects
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Unite your team with SiteSphere's comprehensive construction management platform.
          From BIM integration to real-time collaboration, we've got you covered.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleStartFreeTrial}
            className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors text-lg"
          >
            Start Free Trial
          </button>
          <button
            onClick={handleWatchDemo}
            className="border border-gray-300 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}
