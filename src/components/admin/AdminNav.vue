<template>
  <header class="site-header" id="header">
    <div class="nav-container">
      <a href="#" class="brand-logo" id="brand-logo">
        <img id="hilora-logo" src="../../assets/hilora-logo.png" alt="Hilora">
      </a>

      <div class="nav-menu" id="nav-menu">
        <img src="../../assets/search.svg" alt="">
        <input type="search" name="" placeholder="Search Professionals, Companies, Jobs & Skills..." 
        id="">
      </div>

      <div class="nav-actions">
        <button class="btn-record"><img src="../../assets/add_circle.svg" alt=""> Add Record</button>
        <img src="../../assets/notifications.svg" alt="">
        <router-link to="/register">
          <button type="button" class="btn-primary" id="open-register-btn">
              Logout</button>
        </router-link>
      </div>
    </div>
  </header>

</template>

<script>
export default {
    name: 'AdminNav'
}
</script>

<style scoped>
#hilora-logo{
  width: 130px;
  height: 35px;
}

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: white;
  border-bottom: 1px solid #c1c7d3a8;
  box-shadow: 0px 0px 4px #c1c7d3a8;
  z-index: 1000;
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
  gap: 10px;
  border: 1px solid #6b72809a;
  border-radius: 5px;
  padding: 5px;
  background: #F8FAFC;
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
  gap: 25px;
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
  background-color: #151d2a;
  color: #ffffff;
  border-radius: var(--radius-sm);
  letter-spacing: 0.02em;
  transition: var(--transition);
}

.btn-primary:hover {
  background-color: #2563eb;
  transform: translateY(-1px);
}

.btn-record{
  padding: 8px 20px;
  background: #e8eaec;
  border-radius: 5px;
  color: #6b7280;
  display: flex;
  gap: 5px;
  align-items: center;
}

.btn-record:hover{
  background: #cfd6e2d7;
  transform: translateY(-1px);
}

input[type=search]{
  border: none;
  width: 400px;
  font-size: 15px;
  background: none;
}
input[type=search]:focus{
  border: none;
  outline: none;
}
</style>