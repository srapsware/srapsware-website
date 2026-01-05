import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function getContentFiles(folder) {
  const contentDirectory = path.join(__dirname, 'content')
  const fullPath = path.join(contentDirectory, folder)
  
  if (!fs.existsSync(fullPath)) {
    return []
  }
  
  return fs.readdirSync(fullPath).filter(file => file.endsWith('.md'))
}

function parseContentFile(folder, filename) {
  const contentDirectory = path.join(__dirname, 'content')
  try {
    const fullPath = path.join(contentDirectory, folder, filename)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    const slug = filename.replace(/\.md$/, '')
    
    return {
      slug,
      ...data,
      content,
    }
  } catch (error) {
    console.error(`Error parsing ${folder}/${filename}:`, error)
    return null
  }
}

function getAllAuthors() {
  const files = getContentFiles('authors')
  console.log('Author files found:', files)
  
  const authors = files
    .map(filename => {
      console.log('Parsing author:', filename)
      const parsed = parseContentFile('authors', filename)
      console.log('Parsed:', parsed ? { name: parsed.name, display_name: parsed.display_name, bio: parsed.bio ? 'YES' : 'NO', content: parsed.content ? parsed.content.substring(0, 30) : 'NO' } : 'NULL')
      if (!parsed) return null
      
      return {
        ...parsed,
        bio: parsed.bio || parsed.content || '',
      }
    })
    .filter((author) => !!(author && author.name && author.display_name))
  
  return authors
}

const authors = getAllAuthors()
console.log('\nFinal Authors:')
authors.forEach(a => {
  console.log(`- ${a.name} (${a.display_name})`)
})
