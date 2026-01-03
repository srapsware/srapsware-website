import { Metadata } from 'next'
import Link from 'next/link'
import { Code, Terminal, Copy, CheckCircle, ArrowRight, Book, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'API Documentation | REST & GraphQL API Reference',
  description: 'Complete API documentation with authentication, endpoints, request/response examples, and code samples in multiple languages.',
  keywords: 'API documentation, REST API, GraphQL API, API reference, developer docs, API endpoints',
}

export default function APIDocumentationPage() {
  const endpoints = [
    {
      method: 'GET',
      path: '/api/users',
      description: 'Retrieve a list of all users',
      auth: 'Required',
      params: [
        { name: 'page', type: 'integer', required: false, description: 'Page number (default: 1)' },
        { name: 'limit', type: 'integer', required: false, description: 'Items per page (default: 20)' },
        { name: 'search', type: 'string', required: false, description: 'Search query' },
      ],
      response: `{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}`
    },
    {
      method: 'POST',
      path: '/api/users',
      description: 'Create a new user',
      auth: 'Required',
      body: [
        { name: 'name', type: 'string', required: true, description: 'User\'s full name' },
        { name: 'email', type: 'string', required: true, description: 'User\'s email address' },
        { name: 'password', type: 'string', required: true, description: 'User\'s password (min 8 characters)' },
      ],
      response: `{
  "id": 101,
  "name": "John Doe",
  "email": "john@example.com",
  "createdAt": "2024-01-15T10:30:00Z",
  "message": "User created successfully"
}`
    },
    {
      method: 'GET',
      path: '/api/users/:id',
      description: 'Get a specific user by ID',
      auth: 'Required',
      params: [
        { name: 'id', type: 'integer', required: true, description: 'User ID' },
      ],
      response: `{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "role": "admin",
  "createdAt": "2024-01-15T10:30:00Z",
  "updatedAt": "2024-01-20T14:20:00Z"
}`
    },
    {
      method: 'PUT',
      path: '/api/users/:id',
      description: 'Update an existing user',
      auth: 'Required',
      body: [
        { name: 'name', type: 'string', required: false, description: 'User\'s full name' },
        { name: 'email', type: 'string', required: false, description: 'User\'s email address' },
      ],
      response: `{
  "id": 1,
  "name": "John Smith",
  "email": "johnsmith@example.com",
  "updatedAt": "2024-01-22T16:45:00Z",
  "message": "User updated successfully"
}`
    },
    {
      method: 'DELETE',
      path: '/api/users/:id',
      description: 'Delete a user',
      auth: 'Required (Admin only)',
      params: [
        { name: 'id', type: 'integer', required: true, description: 'User ID' },
      ],
      response: `{
  "message": "User deleted successfully",
  "deletedAt": "2024-01-22T17:00:00Z"
}`
    },
  ]

  const authExample = `// Authentication using JWT Token
const response = await fetch('https://api.srapsware.com/api/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
console.log(data);`

  const codeExamples = {
    javascript: `// JavaScript/Node.js Example
const fetch = require('node-fetch');

async function getUsers() {
  const response = await fetch('https://api.srapsware.com/api/users', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
      'Content-Type': 'application/json'
    }
  });
  
  const data = await response.json();
  console.log(data);
}

getUsers();`,
    
    python: `# Python Example
import requests

url = "https://api.srapsware.com/api/users"
headers = {
    "Authorization": "Bearer YOUR_ACCESS_TOKEN",
    "Content-Type": "application/json"
}

response = requests.get(url, headers=headers)
data = response.json()
print(data)`,

    curl: `# cURL Example
curl -X GET "https://api.srapsware.com/api/users" \\
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \\
  -H "Content-Type: application/json"`,
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
      case 'POST': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
      case 'PUT': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
      case 'DELETE': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="border-b border-border bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link>
            <span>/</span>
            <span className="text-foreground font-medium">API Documentation</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50 dark:from-green-950/20 dark:via-cyan-950/20 dark:to-blue-950/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-1.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full text-sm font-medium">
              🔌 API Reference
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
              API Documentation
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Complete REST API reference with authentication, endpoints, and code examples in multiple languages
            </p>

            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-green-600 mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Endpoints</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-cyan-600 mb-1">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                <div className="text-3xl font-bold text-blue-600 mb-1">&lt;100ms</div>
                <div className="text-sm text-muted-foreground">Response</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Zap className="w-8 h-8 mr-3 text-green-600" />
              <h2 className="text-3xl font-bold">Quick Start</h2>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">1. Get Your API Key</h3>
              <p className="text-muted-foreground mb-4">
                Sign up for a free account to get your API key. You can find it in your dashboard under Settings → API Keys.
              </p>
              <Link href="/contact" className="inline-flex items-center text-green-600 font-semibold hover:gap-2 transition-all">
                Get API Key
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">2. Authentication</h3>
              <p className="text-muted-foreground mb-4">
                All API requests require authentication using Bearer tokens. Include your API key in the Authorization header:
              </p>
              <div className="relative">
                <pre className="bg-gray-100 dark:bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{authExample}</code>
                </pre>
                <button className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-900 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8">
              <h3 className="text-xl font-bold mb-4">3. Make Your First Request</h3>
              <p className="text-muted-foreground mb-4">
                Try fetching the list of users with the example below:
              </p>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <button className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded text-sm font-medium">
                      JavaScript
                    </button>
                    <button className="px-3 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm">
                      Python
                    </button>
                    <button className="px-3 py-1 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-sm">
                      cURL
                    </button>
                  </div>
                  <div className="relative">
                    <pre className="bg-gray-100 dark:bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{codeExamples.javascript}</code>
                    </pre>
                    <button className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-900 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Endpoints */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <Terminal className="w-8 h-8 mr-3 text-cyan-600" />
              <h2 className="text-3xl font-bold">API Endpoints</h2>
            </div>

            <div className="space-y-8">
              {endpoints.map((endpoint, index) => (
                <article key={index} className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                  <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className={`px-3 py-1 rounded font-bold text-sm ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-lg font-mono">{endpoint.path}</code>
                    </div>
                    <p className="text-muted-foreground">{endpoint.description}</p>
                    <div className="mt-2 text-sm">
                      <span className="text-muted-foreground">Auth: </span>
                      <span className="font-medium">{endpoint.auth}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {endpoint.params && endpoint.params.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-bold mb-3">Parameters</h4>
                        <div className="space-y-3">
                          {endpoint.params.map((param, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <code className="text-sm font-mono bg-gray-100 dark:bg-gray-950 px-2 py-1 rounded">{param.name}</code>
                                  <span className="text-xs text-muted-foreground">{param.type}</span>
                                  {param.required && (
                                    <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-0.5 rounded">Required</span>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground">{param.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {endpoint.body && endpoint.body.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-bold mb-3">Request Body</h4>
                        <div className="space-y-3">
                          {endpoint.body.map((field, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-1">
                                  <code className="text-sm font-mono bg-gray-100 dark:bg-gray-950 px-2 py-1 rounded">{field.name}</code>
                                  <span className="text-xs text-muted-foreground">{field.type}</span>
                                  {field.required && (
                                    <span className="text-xs bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-2 py-0.5 rounded">Required</span>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground">{field.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h4 className="font-bold mb-3">Response</h4>
                      <div className="relative">
                        <pre className="bg-gray-100 dark:bg-gray-950 p-4 rounded-lg overflow-x-auto text-sm">
                          <code>{endpoint.response}</code>
                        </pre>
                        <button className="absolute top-2 right-2 p-2 bg-white dark:bg-gray-900 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Error Codes */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Error Codes</h2>

            <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-950">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-bold">Code</th>
                    <th className="px-6 py-3 text-left text-sm font-bold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-6 py-4"><code className="text-green-600">200</code></td>
                    <td className="px-6 py-4 text-muted-foreground">OK - Request successful</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4"><code className="text-green-600">201</code></td>
                    <td className="px-6 py-4 text-muted-foreground">Created - Resource created successfully</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4"><code className="text-yellow-600">400</code></td>
                    <td className="px-6 py-4 text-muted-foreground">Bad Request - Invalid request parameters</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4"><code className="text-red-600">401</code></td>
                    <td className="px-6 py-4 text-muted-foreground">Unauthorized - Invalid or missing API key</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4"><code className="text-red-600">403</code></td>
                    <td className="px-6 py-4 text-muted-foreground">Forbidden - Insufficient permissions</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4"><code className="text-red-600">404</code></td>
                    <td className="px-6 py-4 text-muted-foreground">Not Found - Resource does not exist</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4"><code className="text-red-600">429</code></td>
                    <td className="px-6 py-4 text-muted-foreground">Too Many Requests - Rate limit exceeded</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4"><code className="text-red-600">500</code></td>
                    <td className="px-6 py-4 text-muted-foreground">Internal Server Error - Something went wrong</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-border bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-600 via-cyan-600 to-blue-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-green-100 mb-8 text-lg">
              Get your API key and start building amazing applications today
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all"
            >
              Get API Key
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
