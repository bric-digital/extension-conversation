#!/usr/bin/env node

/**
 * Build script to bundle list-utilities.mts for browser testing
 * Uses esbuild to create a single browser-compatible bundle
 */

import * as esbuild from 'esbuild'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const inputFile = join(__dirname, '../../src/browser.mts')
const outputFile = join(__dirname, '../src/build/browser.bundle.js')

try {
  await esbuild.build({
    entryPoints: [inputFile],
    bundle: true,
    format: 'esm',
    platform: 'browser',
    target: 'es2021',
    outfile: outputFile,
    sourcemap: true
  })

  console.log('✅ Bundle created successfully:', outputFile)
  console.log('   You can now run: npm test')
} catch (error) {
  console.error('❌ Build failed:', error)
  process.exit(1)
}
