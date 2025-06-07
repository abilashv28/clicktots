import React from 'react';

const Hero = () => {
    return (<div className="relative bg-gradient-to-r from-blue-50 to-indigo-100 min-h-screen">
        <div className="relative max-w-7xl mx-auto py-12 px-4 sm:py-24 sm:px-6 lg:px-8 h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left Column - Text Content */}
                <div className="text-left">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                        <span className="block text-blue-900">Ignite Your Brand's</span>
                        <span className="block text-red-600 mt-2">Potential with Clicktots</span>
                        <span className="block text-red-600 mt-2">Expert Online Marketing in Chennai</span>
                    </h1>
                    <p className="mt-6 text-lg text-gray-700 max-w-2xl">
                        Empowering your Online Marketing Services, Clicktots Technologies has been an industry leader for the past 15 years,
                        specializing in digital marketing, web development, web design, app development, and social media strategies.
                    </p>


                </div>

                {/* Right Column - Image */}
                <div className="relative h-full hidden lg:block">
                    <img
                        src="/images/Homepage-banner.webp"
                        alt="Digital Marketing Services"
                        className="w-full h-auto object-contain"
                    />
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <div className="text-2xl font-bold">
                            <span className="text-pink-500">BOLD</span>
                            <span className="text-purple-500 ml-2">BEAUTIFUL</span>
                            <span className="text-orange-500 ml-2">BRAVE</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Hero;
