import { useEffect, useState } from 'react'
import { sanity } from '../lib/sanity'
import  groq from 'groq'

const query = groq`*[_type=="post"]|order(publishedAt desc)[0...20]{
  _id, title, "slug": slug.current, excerpt, publishedAt,
  "imageUrl": mainImage.asset->url
}`

export default function BlogList() {
  const [posts, setPosts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    sanity.fetch(query)
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <p style={{textAlign:'center'}}>Loading…</p>
  if (error) return <p style={{color:'red'}}>{error}</p>

  return (
    <div style={{maxWidth:960,margin:'0 auto',padding:16,display:'grid',gap:16,gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
      {posts.map(p=>(
        <article key={p._id} style={{border:'1px solid #e5e7eb',borderRadius:16,padding:16}}>
          {p.imageUrl && <img src={p.imageUrl} alt={p.title} style={{width:'100%',borderRadius:12,marginBottom:12}}/>}
          <h2 style={{fontSize:18,fontWeight:700}}>{p.title}</h2>
          <p style={{opacity:.7,fontSize:12}}>{p.publishedAt ? new Date(p.publishedAt).toLocaleDateString() : ''}</p>
          {p.excerpt && <p style={{marginTop:8}}>{p.excerpt}</p>}
          {p.slug && <a href={`/blog/${p.slug}`} style={{display:'inline-block',marginTop:8,textDecoration:'underline'}}>Read more</a>}
        </article>
      ))}
    </div>
  )
}
