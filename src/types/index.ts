export interface Post {
  id: number;
  title: string;
  description: string;
  cover_image: string;
  published_at: string;
  reading_time_minutes: number;
  tags: string[] | string;
  user: {
    name: string;
    profile_image: string;
  };
  url: string;
}