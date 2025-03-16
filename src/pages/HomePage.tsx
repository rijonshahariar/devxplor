import React, { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';
import { BookOpen } from 'lucide-react';
import { fetchPosts } from '../api/devto';
import { PostCard } from '../components/PostCard';
import { CategoryFilter } from '../components/CategoryFilter';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Footer } from '../components/Footer';
import { AdSpace } from '../components/AdSpace';

export function HomePage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    ['posts', selectedTags],
    ({ pageParam = 1 }) => fetchPosts(pageParam, selectedTags.join(',')),
    {
      getNextPageParam: (lastPage, pages) =>
        lastPage.length === 0 ? undefined : pages.length + 1,
    }
  );

  React.useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const handleTagSelect = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleTagRemove = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <CategoryFilter
            selectedTags={selectedTags}
            onTagSelect={handleTagSelect}
            onTagRemove={handleTagRemove}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {status === 'loading' ? (
                  <LoadingSpinner />
                ) : status === 'error' ? (
                  <div className="text-center text-red-600">
                    Error loading posts. Please try again later.
                  </div>
                ) : (
                  data?.pages.map((page, i) => (
                    <React.Fragment key={i}>
                      {page.map((post: any) => (
                        <PostCard key={post.id} post={post} />
                      ))}
                    </React.Fragment>
                  ))
                )}
              </div>

              <div ref={ref} className="mt-8 text-center">
                {isFetchingNextPage && <LoadingSpinner />}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}