import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
})


// This file controls how vite behaves
// during development and build

// 🔍 1. Imports

// ✔ defineConfig

// Helps Vite understand your config with auto-suggestions and type-checking.

// ✔ react

// This is the official React plugin for Vite.
// It adds:

// Fast Refresh

// JSX support

// React compiler integration

// Transform optimization


// 🔍 2. plugins Section

// This is where the interesting part happens 👇

// ✔ react({ ... })

// You’re customizing the React plugin.

// ✔ babel: { plugins: [...] }

// This tells Vite’s React plugin to use a custom Babel plugin.

// ✔ babel-plugin-react-compiler

// This enables the React Compiler (previously known as “React Forget” or “Automatic Memoization”).

// This plugin:

// Makes components faster by reducing unnecessary re-renders

// Optimizes state reading

// Improves performance automatically

// Works with new React 19 patterns

// You don’t need to modify it. This config is correct and modern.
