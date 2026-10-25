import Link from 'next/link'

/** Real HTML links keep the complete catalogue usable without loading more cards. */
export function ContentDirectory({title,items}:{title:string;items:{title:string;href:string}[]}) {
  return <div className="site-container pb-12"><details className="rounded-xl border border-border bg-card px-5 py-4">
    <summary className="cursor-pointer font-medium">{title} <span className="text-sm text-muted-foreground">({items.length})</span></summary>
    <ul className="mt-6 grid gap-x-8 gap-y-3 text-sm sm:grid-cols-2 lg:grid-cols-3">{[...items].sort((a,b)=>a.title.localeCompare(b.title)).map(item=><li key={item.href}><Link href={item.href} className="inline-block py-1 text-brand underline-offset-4 hover:underline">{item.title}</Link></li>)}</ul>
  </details></div>
}
