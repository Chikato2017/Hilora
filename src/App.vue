<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
:root {
  /* Colors */
  --color-bg-dark: #06090e;
  --color-bg-dark-surface: #0e131b;
  --color-bg-dark-elevated: #151d2a;
  --color-bg-light: #F8FAFC;
  --color-bg-card: #ffffff;
  --color-border-dark: rgba(255, 255, 255, 0.12);
  --color-border-light: #e5e4de;
  --color-text-dark: #0d0f12;
  --color-text-muted: #6b7280;
  --color-text-light: #f3f4f6;
  --color-text-light-muted: #9ca3af;
  
  /* Brand Accents */
  --color-accent-orange: #ff5524;
  --color-accent-blue: #2563eb;
  --color-accent-green: #10b981;
  --color-accent-yellow: #f59e0b;

  /* Typography */
  --font-display: 'Syne', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-body: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  /* Layout & Transitions */
  --max-width: 1240px;
  --header-height: 76px;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  --transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

*, html, body, p, h1, div{
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-body);
  background-color: white;
  color: var(--color-text-dark);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Container */
.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

</style>
