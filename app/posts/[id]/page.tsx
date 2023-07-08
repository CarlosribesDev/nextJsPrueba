interface ParamsType {
  id: string;
}

export default function PostPage ({ params }: { params: ParamsType }) {
  const { id } = params
  return (
    <h1>lista de post {id}</h1>
  )
}
