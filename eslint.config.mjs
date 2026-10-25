import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)
const nextRequire = createRequire(require.resolve('eslint-config-next'))
const { FlatCompat } = nextRequire('@eslint/eslintrc')
const compat = new FlatCompat({ baseDirectory: process.cwd() })
const config = [
  { ignores: ['.next/**', '.next-*/**', 'node_modules/**', 'public/**', '**/*.backup*', 'scripts/**', 'next-env.d.ts'] },
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  { rules: {
    '@next/next/no-img-element': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    '@typescript-eslint/no-explicit-any': 'warn',
  } },
]

export default config
