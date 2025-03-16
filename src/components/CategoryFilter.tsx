import React from 'react';
import { X } from 'lucide-react';

interface CategoryFilterProps {
  selectedTags: string[];
  onTagSelect: (tag: string) => void;
  onTagRemove: (tag: string) => void;
}

const POPULAR_TAGS = [
  'javascript',
  'webdev',
  'programming',
  'react',
  'python',
  'beginners',
  'tutorial',
  'productivity',
];

export function CategoryFilter({
  selectedTags,
  onTagSelect,
  onTagRemove,
}: CategoryFilterProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4">Filter by Category</h3>
      <div className="flex flex-wrap gap-2">
        {POPULAR_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagSelect(tag)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedTags.includes(tag)
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
      {selectedTags.length > 0 && (
        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full"
              >
                {tag}
                <button
                  onClick={() => onTagRemove(tag)}
                  className="hover:text-blue-900"
                >
                  <X size={14} />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}