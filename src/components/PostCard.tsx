import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { Clock, User } from 'lucide-react';
import type { Post } from '../types';

interface PostCardProps {
  post: Post;
}

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&auto=format&fit=crop&q=60";

export function PostCard({ post }: PostCardProps) {
  const tags = Array.isArray(post.tags) ? post.tags : post.tags?.split(',') || [];

  return (
    <Link to={`/post/${post.id}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 h-full flex flex-col">
        <div className="h-48 overflow-hidden">
          <img
            src={post.cover_image || DEFAULT_IMAGE}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex gap-2 mb-3 flex-wrap">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4 flex-1 line-clamp-2">{post.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
            <div className="flex items-center gap-2">
              <img
                src={post.user.profile_image}
                alt={post.user.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="truncate">{post.user.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Clock size={16} />
                <span>{post.reading_time_minutes} min</span>
              </div>
              <span>{format(new Date(post.published_at), 'MMM d, yyyy')}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}