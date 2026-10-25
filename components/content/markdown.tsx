import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import './markdown.css'

export function Markdown({ children }: { children: string }) {
  return <div className="content-markdown"><ReactMarkdown remarkPlugins={[remarkGfm]} components={{h1:({children})=><h2>{children}</h2>}} skipHtml>{children}</ReactMarkdown></div>
}
