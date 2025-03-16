import React from 'react';

export function AdSpace() {
  return (
    <div className="bg-gray-100 p-6 rounded-lg text-center">
      <p className="text-gray-600 font-medium">Advertisement Space</p>
      <div className="mt-4 bg-gray-200 h-32 rounded flex items-center justify-center">
        <p className="text-gray-500">Ad Content</p>
      </div>
    </div>
  );
}