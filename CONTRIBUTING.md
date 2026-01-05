# Contributing to Srapsware Website

⚠️ **IMPORTANT NOTICE:** This is Srapsware's proprietary business website.

## Why This Repository is Public

We've made our code visible to **help developers learn** modern web development practices. This is **NOT** an open source project.

### What This Repository IS:
- ✅ A **learning resource** to study Next.js architecture
- ✅ An **educational reference** for understanding patterns
- ✅ An **inspiration** for building your own original projects

### What This Repository is NOT:
- ❌ A **template** or starter kit to copy
- ❌ A **codebase** you can fork and modify
- ❌ **Free code** for your projects
- ❌ Open to **external contributions**

**Build your own website. Learn from ours, but create your own.**

---

## Contribution Policy

**This repository does NOT accept external contributions.**

The code is:
- **© 2011-2026 Srapsware Pvt. Ltd. All Rights Reserved**
- **NOT open source**
- **NOT accepting pull requests from external contributors**
- **FOR VIEWING AND LEARNING ONLY**

---

## 📋 For Internal Team Members Only

If you are a Srapsware employee or authorized contractor, follow these guidelines:

### 🐛 Reporting Bugs

If you find a bug, please create an issue with the following information:

- **Clear title** - Summarize the issue in the title
- **Description** - Detailed description of the bug
- **Steps to reproduce** - How can we reproduce the issue?
- **Expected behavior** - What should happen?
- **Actual behavior** - What actually happens?
- **Screenshots** - If applicable, add screenshots
- **Environment** - Browser, OS, screen size, etc.

### 💡 Suggesting Enhancements

We welcome feature suggestions! Please create an issue with:

- **Clear title** - What's the enhancement?
- **Use case** - Why would this be useful?
- **Proposed solution** - How should it work?
- **Alternatives considered** - Other approaches you've thought about

### 🔧 Code Contributions

#### Prerequisites

- Node.js 18+ installed
- pnpm package manager
- Basic knowledge of Next.js, TypeScript, and React

#### Setup Development Environment

```bash
# Clone the repository
git clone https://github.com/srapsware/srapsware-website.git
cd srapsware-website

# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env.local

# Run development server
pnpm dev
```

Visit `http://localhost:3000` to see your changes.

#### Making Changes

1. **Fork the repository** and create your branch from `main`
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Follow the existing code style
   - Write meaningful commit messages
   - Test your changes thoroughly

3. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

4. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

5. **Open a Pull Request**
   - Describe what your PR does
   - Link any related issues
   - Include screenshots for UI changes

#### Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, missing semicolons, etc.)
- `refactor:` - Code refactoring
- `perf:` - Performance improvements
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add dark mode toggle
fix: resolve mobile menu overflow issue
docs: update README with deployment instructions
```

#### Code Style

- **TypeScript** - Use TypeScript for all new files
- **Formatting** - Run `pnpm lint` before committing
- **Components** - Use functional components with hooks
- **Naming** - Use PascalCase for components, camelCase for functions
- **File structure** - Keep components small and focused

#### Pull Request Process

1. Update the README.md if needed
2. Ensure all tests pass (if applicable)
3. Request review from maintainers
4. Address review feedback
5. Once approved, a maintainer will merge your PR

### 📝 Content Contributions

For blog posts, case studies, or other content:

1. Content must be original or properly attributed
2. Follow the existing frontmatter format
3. Include relevant images (optimized for web)
4. Proofread for grammar and spelling
5. Ensure technical accuracy

### 🚫 What We Don't Accept

- Spam or promotional content
- Content that violates our code of conduct
- Plagiarized content
- Breaking changes without discussion
- Poorly documented code

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inclusive environment for everyone.

### Our Standards

**Positive behavior:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what's best for the community

**Unacceptable behavior:**
- Harassment, trolling, or insulting comments
- Publishing others' private information
- Other conduct that could reasonably be considered inappropriate

### Enforcement

Violations may be reported to [contact@srapsware.com](mailto:contact@srapsware.com). All complaints will be reviewed and investigated promptly and fairly.

## Questions?

Feel free to:
- Open an issue for discussion
- Email us at [contact@srapsware.com](mailto:contact@srapsware.com)
- Reach out on social media [@srapsware](https://twitter.com/srapsware)

## License

All code and contributions are © Srapsware Pvt. Ltd. and remain proprietary.
By contributing (internal team only), you assign all rights to Srapsware Pvt. Ltd.

---

**Thank you for helping make the Srapsware website better!** ❤️
