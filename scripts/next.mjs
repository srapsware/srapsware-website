import { realpathSync } from 'node:fs'
import { spawn } from 'node:child_process'
import { createRequire } from 'node:module'
const root = realpathSync(process.cwd())
process.chdir(root)
const require = createRequire(import.meta.url)
const child = spawn(process.execPath, [require.resolve('next/dist/bin/next'), ...process.argv.slice(2)], {
  cwd: root, stdio: 'inherit', env: process.env,
})
child.on('exit', code => process.exit(code ?? 1))
child.on('error', error => { console.error(error.message); process.exit(1) })
