import { LikeButton } from './[id]/LikeButton'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = (): Promise<Post[]> => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  return fetch(url).then(res => res.json())
}

export default async function PostPage () {
  const posts = await fetchPosts()

  return (
    <section>
      {posts.map(post => (
        <article key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <LikeButton id={post.id} />
        </article>
      ))}
    </section>
  )
}
