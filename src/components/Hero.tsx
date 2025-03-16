import React from 'react';
import { BookOpen, Code, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Tech Articles
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore the latest insights, tutorials, and stories from the developer community
          </p>
          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center">
              <Code className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-semibold">Technical Posts</h3>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-semibold">Community Driven</h3>
            </div>
            <div className="flex flex-col items-center">
              <BookOpen className="w-8 h-8 text-blue-600 mb-2" />
              <h3 className="font-semibold">Rich Content</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}