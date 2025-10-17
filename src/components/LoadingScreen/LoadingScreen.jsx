import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Stitching your vibe...",
    "Printing dreams...",
    "Loading fresh designs...",
    "Preparing your canvas...",
    "Almost ready..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => onLoadingComplete(), 300);
          return 100;
        }
        
        // Update message based on progress
        if (newProgress >= 20 && messageIndex === 0) setMessageIndex(1);
        if (newProgress >= 40 && messageIndex === 1) setMessageIndex(2);
        if (newProgress >= 60 && messageIndex === 2) setMessageIndex(3);
        if (newProgress >= 80 && messageIndex === 3) setMessageIndex(4);
        
        return newProgress;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [onLoadingComplete, messageIndex]);

  return (
    <div className="fixed inset-0 bg-black z-[100] flex items-center justify-center overflow-hidden">
      {/* Animated background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-red-500 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-red-500 rounded-full blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="text-center relative z-10 px-4">
        {/* Animated Logo */}
        <div className="mb-8 md:mb-12 animate-pulse">
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4 leading-tight">
            STREET<span className="text-red-500">MONARCH</span>
          </h1>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>

        {/* Dynamic Message */}
        <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 md:mb-8 font-semibold animate-pulse">
          {messages[messageIndex]}
        </p>

        {/* Creative Progress Bar */}
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
          <div className="h-1 bg-gray-800 rounded-full overflow-hidden relative">
            <div 
              className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-300 relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute right-0 top-0 w-20 h-full bg-white opacity-50 blur-sm"></div>
            </div>
          </div>
          <p className="text-red-500 mt-3 text-base md:text-lg font-bold">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
