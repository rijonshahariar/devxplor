import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Dev Explorer</span>
          </Link>
          <div className="flex gap-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <a href="https://dev.to" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">Dev.to</a>
          </div>
        </div>
      </div>
    </nav>
  );
}