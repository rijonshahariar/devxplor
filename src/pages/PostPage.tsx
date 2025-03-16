import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { format } from 'date-fns';
import { ArrowLeft, Clock, User } from 'lucide-react';
import { fetchPost } from '../api/devto';
import { LoadingSpinner } from '../components/LoadingSpinner';

export function PostPage() {
  const { id } = useParams<{ id: string }>();
  const { data: post, status } = useQuery(['post', id], () => fetchPost(id!));

  if (status === 'loading') {
    return <LoadingSpinner />;
  }

  if (status === 'error') {
    return (
      <div className="text-center text-red-600">
        Error loading post. Please try again later.
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8"
      >
        <ArrowLeft size={20} />
        Back to Posts
      </Link>

      {post.cover_image && (
        <img
          src={post.cover_image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />
      )}

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center gap-6 mb-8 text-gray-600">
        <div className="flex items-center gap-2">
          <img
            src={post.user.profile_image}
            alt={post.user.name}
            className="w-8 h-8 rounded-full"
          />
          <span>{post.user.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={18} />
          <span>{post.reading_time_minutes} min read</span>
        </div>
        <span>{format(new Date(post.published_at), 'MMMM d, yyyy')}</span>
      </div>

      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
      </div>
    </article>
  );
}