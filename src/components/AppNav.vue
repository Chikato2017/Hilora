<template>
    <header class="site-header" id="header">
    <div class="nav-container">
      <a href="#" class="brand-logo" id="brand-logo">
        <img id="hilora-logo" src="../assets/hilora-logo.png" alt="Hilora">
      </a>

      <nav class="nav-menu" id="nav-menu">
        <a href="#companies" class="nav-link">For Employers</a>
        <a href="#professionals" class="nav-link">For Professionals</a>
        <a href="#jobs" class="nav-link">Find Jobs</a>
      </nav>

      <div class="nav-actions">
        <router-link to="/login">
          <button type="button" class="btn-ghost" id="open-login-btn">
             Sign In </button> 
        </router-link>
        <router-link to="/register">
          <button type="button" class="btn-primary" id="open-register-btn">
              Register</button>
        </router-link>
        <button type="button" class="mobile-toggle" id="mobile-toggle" aria-label="Toggle navigation menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'AppNav',
}
</script>

<style scoped>
#hilora-logo{
  width: 140px;
  height: 40px;
  background: white;
  padding: 8px;
}

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background-color: rgba(6, 9, 14, 0.568);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--color-border-dark);
  z-index: 1000;
  transition: var(--transition);
}

.nav-container {
  max-width: var(--max-width);
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

.brand-logo {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 1.35rem;
  letter-spacing: 0.12em;
  color: #ffffff;
}

.logo-dot {
  width: 7px;
  height: 7px;
  background-color: var(--color-accent-orange);
  border-radius: 50%;
  display: inline-block;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-link {
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: 0.03em;
  color: var(--color-text-light-muted);
  transition: var(--transition);
}

.nav-link:hover {
  color: #ffffff;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.btn-ghost {
  padding: 8px 18px;
  font-size: 0.875rem;
  font-weight: 600;
  color: #ffffff;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.btn-ghost:hover {
  background-color: rgba(255, 255, 255, 0.08);
}

.btn-primary {
  padding: 10px 22px;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: #ffffff;
  color: #06090e;
  border-radius: var(--radius-sm);
  letter-spacing: 0.02em;
  transition: var(--transition);
}

.btn-primary:hover {
  background-color: #e2e8f0;
  transform: translateY(-1px);
}

.mobile-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
}

.mobile-toggle .bar {
  width: 100%;
  height: 2px;
  background-color: #ffffff;
  transition: var(--transition);
}
</style>
