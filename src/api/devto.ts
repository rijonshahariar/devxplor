const API_URL = 'https://dev.to/api';

export async function fetchPosts(page = 1, tag?: string) {
  const params = new URLSearchParams({
    page: page.toString(),
    per_page: '12',
    ...(tag && { tag }),
  });

  const response = await fetch(`${API_URL}/articles?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
}

export async function fetchPost(id: string) {
  const response = await fetch(`${API_URL}/articles/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return response.json();
}