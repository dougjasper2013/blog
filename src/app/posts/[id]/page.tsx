import { posts } from '@/data/posts';
import { notFound } from 'next/navigation';
import { getPost } from '@/data/queries';


export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = Number((await params).id);
  if (!Number.isInteger(id)) {
    notFound();
  }
  const post = await getPost(id);
  if (!post) {
    notFound();
  }

  return (
    <main>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
    </main>
  );
}
