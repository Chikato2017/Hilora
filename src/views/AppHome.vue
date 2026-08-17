<template>
    <AppNav />
    <main>
        <!-- SECTION 1: HERO SECTION -->
        <section class="hero-section" id="hero">
            <div class="hero-bg-crosses" aria-hidden="true"></div>
            <div class="hero-glow-overlay" aria-hidden="true"></div>

            <div class="container hero-content">
                <div class="hero-tagline">
                    <span class="tag-dash">—</span> HR SOLUTIONS &amp; VETTED RECRUITMENT NETWORK
                </div>

                <h1 class="hero-title">
                WE CONNECT THE<br>
                <span >RIGHT TALENT</span> AND COMPANY<br>
                </h1>

                <p class="hero-description">
                From role scoping to executive placement, Hilora delivers high-precision recruitment with strict 
                admin-level vetting. No candidate profile or employer job is published until certified by our talent directors.
                </p>

                <!-- Two Primary CTAs -->
                <div class="hero-dual-cta">
                <div class="cta-card cta-card-light" id="cta-employer-card">
                    <div class="cta-card-header">
                    <span class="cta-badge-light">FOR EMPLOYERS</span>
                    <span class="cta-status-badge">100% Pre-Screened</span>
                    </div>
                    <h3 class="cta-card-title-light">POST A ROLE</h3>
                    <p class="cta-card-body-light">
                    Hire vetted specialists through our rigorous admin screening process. Your listing goes live upon Hilora Admin audit.
                    </p>
                    <router-link to="/register">
                    <button type="button" class="cta-arrow-btn" id="hero-post-role-btn">
                    <span>REGISTER COMPANY</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    </button>
                    </router-link>
                </div>

                <div class="cta-card cta-card-dark" id="cta-candidate-card">
                    <div class="cta-card-header">
                    <span class="cta-badge">FOR PROFESSIONALS</span>
                    <span class="cta-status-badge">Private &amp; Verified</span>
                    </div>
                    <h3 class="cta-card-title">BROWSE JOBS</h3>
                    <p class="cta-card-body">
                    Access unlisted executive and technical opportunities. Your talent profile remains private until verified and approved.
                    </p>
                    <router-link to="/register">
                    <button type="button" class="cta-arrow-btn" id="hero-browse-jobs-btn">
                    <span>REGISTER AS TALENT</span>
                    <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                    </button>
                    </router-link>
                </div>
                </div>
            </div>
        </section>

        <!-- SECTION 2: STATS SECTION -->
        <section class="stats-section">
            <div class="metric-item">
                <div class="metric-num">15K<span class="metric-plus">+</span></div>
                <div class="metric-label">CANDIDATES SCREENED<br>&amp; VETTED</div>
            </div>
            <div class="metric-item">
                <div class="metric-num">12 <span class="metric-unit">YEARS</span></div>
                <div class="metric-label">RECRUITMENT<br>EXCELLENCE</div>
            </div>
            <div class="metric-item">
                <div class="metric-num">150<span class="metric-plus">+</span></div>
                <div class="metric-label">APPROVED GLOBAL<br>PARTNERS</div>
            </div>
            <div class="metric-item">
                <div class="metric-num">98.4<span class="metric-unit">%</span></div>
                <div class="metric-label">ADMIN-APPROVED<br>MATCH ACCURACY</div>
            </div>
        </section>

        <!-- SECTION 3: REGISTERED COMPANY SECTION (FOR EMPLOYERS) -->
        <section class="section section-light" id="companies">
            <div class="container">
                <div class="section-header">
                <h2 class="section-title">WHY TOP BRANDS RECRUIT THROUGH HILORA</h2>
                <p class="section-subtitle">
                    Companies register to access premier human capital. Every employer goes through strict compliance screening before job listings are broadcasted.
                </p>
                </div>

                <!-- Corporate Brand Grid -->
                <div class="brands-showcase">
                    <div class="brand-item brand-box-dark">
                        <span class="brand-logotype">MILK</span>
                        <span class="brand-tag">Global Studio</span>
                    </div>
                    <div class="brand-item brand-box-red">
                        <span class="brand-logotype">TIROLEZ</span>
                        <span class="brand-tag">Enterprise FMCG</span>
                    </div>
                    <div class="brand-item brand-box-blue">
                        <span class="brand-logotype">COOL CATS</span>
                        <span class="brand-tag">Tech &amp; Media</span>
                    </div>
                    <div class="brand-item brand-box-gold">
                        <span class="brand-logotype">NEXUS AI</span>
                        <span class="brand-tag">Autonomous Systems</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- SECTION 4: REGISTERED PROFESSIONAL SECTION -->
        <section class="section section-dark" id="professionals">
            <div class="hero-bg-crosses opacity-low" aria-hidden="true"></div>
            <div class="container">
                <div class="section-header text-center">
                <div class="section-tag section-tag-light">— REGISTERED PROFESSIONAL SECTION</div>
                <h2 class="section-title text-white">THE TALENT BENCH FOR ELITE PROFESSIONALS</h2>
                <p class="section-subtitle text-muted">
                    Register your profile with complete privacy. Your professional dossier remains invisible until reviewed, background-checked, and approved by Hilora Admins.
                </p>
                </div>

                <!-- Vetting Pipeline Highlights -->
                <div class="vetting-cards-grid" id="vetting">
                <div class="vetting-card">
                    <div class="vetting-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    </div>
                    <h4 class="vetting-card-title">Identity &amp; Skill Verification</h4>
                    <p class="vetting-card-text">
                    Our technical evaluators review your portfolio, code repositories, past impact metrics, and domain mastery.
                    </p>
                    <div class="vetting-tag">STAGE 01 — AUDIT</div>
                </div>

                <div class="vetting-card">
                    <div class="vetting-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    </div>
                    <h4 class="vetting-card-title">Admin Review &amp; Approval</h4>
                    <p class="vetting-card-text">
                    Hilora administrators verify background references and certification before granting public or private searchable badge status.
                    </p>
                    <div class="vetting-tag">STAGE 02 — ADMIN GATE</div>
                </div>

                <div class="vetting-card">
                    <div class="vetting-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    </div>
                    <h4 class="vetting-card-title">Curated Direct Matches</h4>
                    <p class="vetting-card-text">
                    Gain direct introductions to pre-approved venture-backed startups and Fortune 500 hiring managers with verified salaries.
                    </p>
                    <div class="vetting-tag">STAGE 03 — ACTIVE BENCH</div>
                </div>
                </div>

                <!-- Featured Vetted Candidate Profiles -->
                <div class="profiles-section-wrapper">
                <div class="profiles-heading-row">
                    <div>
                    <h3 class="subheading-white">Recently Approved Talent</h3>
                    <p class="subheading-note">Only profiles with confirmed Hilora Admin clearance are showcased.</p>
                    </div>
                    <button type="button" class="btn-outline-white" id="register-talent-cta">Apply for Talent Bench</button>
                </div>

                <div class="talent-profiles-grid">
                    <!-- Candidate 1 -->
                    <div class="talent-card">
                    <div class="talent-card-header">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&q=80" alt="Sarah Jenkins" class="talent-avatar">
                        <div class="talent-info">
                        <h4 class="talent-name">Sarah Jenkins</h4>
                        <span class="talent-role">Principal Systems Architect</span>
                        <span class="badge-approved">
                            <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Hilora Admin Approved
                        </span>
                        </div>
                    </div>
                    <div class="talent-skills">
                        <span class="skill-pill">Distributed Systems</span>
                        <span class="skill-pill">Rust</span>
                        <span class="skill-pill">Kubernetes</span>
                        <span class="skill-pill">AWS Core</span>
                    </div>
                    <div class="talent-footer">
                        <span class="talent-experience">10+ Yrs Exp</span>
                        <span class="talent-availability">Available in 2 Weeks</span>
                    </div>
                    </div>

                    <!-- Candidate 2 -->
                    <div class="talent-card">
                    <div class="talent-card-header">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80" alt="Marcus Chen" class="talent-avatar">
                        <div class="talent-info">
                        <h4 class="talent-name">Marcus Chen</h4>
                        <span class="talent-role">Head of Product Design</span>
                        <span class="badge-approved">
                            <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Hilora Admin Approved
                        </span>
                        </div>
                    </div>
                    <div class="talent-skills">
                        <span class="skill-pill">Design Systems</span>
                        <span class="skill-pill">User Research</span>
                        <span class="skill-pill">Figma Pro</span>
                        <span class="skill-pill">B2B SaaS</span>
                    </div>
                    <div class="talent-footer">
                        <span class="talent-experience">8+ Yrs Exp</span>
                        <span class="talent-availability">Immediate Availability</span>
                    </div>
                    </div>

                    <!-- Candidate 3 -->
                    <div class="talent-card">
                    <div class="talent-card-header">
                        <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=240&q=80" alt="Elena Rostova" class="talent-avatar">
                        <div class="talent-info">
                        <h4 class="talent-name">Elena Rostova</h4>
                        <span class="talent-role">VP of People &amp; Talent</span>
                        <span class="badge-approved">
                            <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            Hilora Admin Approved
                        </span>
                        </div>
                    </div>
                    <div class="talent-skills">
                        <span class="skill-pill">Org Design</span>
                        <span class="skill-pill">Executive Hiring</span>
                        <span class="skill-pill">Global Payroll</span>
                        <span class="skill-pill">Culture Scale</span>
                    </div>
                    <div class="talent-footer">
                        <span class="talent-experience">12+ Yrs Exp</span>
                        <span class="talent-availability">Selective Remote</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <!-- SECTION 5: FIND THE BEST JOBS SECTION -->
        <section class="section section-light" id="jobs">
            <div class="container">
                <div class="section-header">
                <h2 class="section-title">CURATED ROLES AT VERIFIED COMPANIES</h2>
                <p class="section-subtitle">
                    All listings are certified by Hilora administrators. Guaranteed legitimate salary brackets, equity disclosures, and active hiring budgets.
                </p>
                </div>

                <!-- Filter & Search Bar -->
                <div class="job-search-toolbar">
                <div class="search-input-wrap">
                    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" id="job-search-input" placeholder="Search roles, skills, or companies...">
                </div>

                <div class="filter-group">
                    <select id="department-filter" class="filter-select" aria-label="Filter by department">
                    <option value="all">All Departments</option>
                    <option value="engineering">Engineering &amp; AI</option>
                    <option value="product">Product &amp; Design</option>
                    <option value="executive">Leadership &amp; HR</option>
                    <option value="finance">Finance &amp; Strategy</option>
                    </select>

                    <select id="location-filter" class="filter-select" aria-label="Filter by location">
                    <option value="all">All Locations</option>
                    <option value="remote">Global Remote</option>
                    <option value="london">London, UK</option>
                    <option value="newyork">New York, USA</option>
                    <option value="berlin">Berlin, DE</option>
                    </select>
                </div>
                </div>

                <!-- Job Cards List -->
                <div class="jobs-list-container" id="jobs-list">
                <!-- Job 1 -->
                <article class="job-card" data-department="engineering" data-location="remote" data-keywords="lead backend engineer distributed systems go rust remote">
                    <div class="job-card-main">
                    <div class="job-company-row">
                        <span class="job-company-name">Nexus Cloud Labs</span>
                        <span class="job-verified-pill">
                        <svg class="tiny-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Admin Approved Job
                        </span>
                        <span class="job-date">Posted 2 days ago</span>
                    </div>
                    <h3 class="job-role-title">Lead Distributed Systems Engineer</h3>
                    <div class="job-tags">
                        <span class="tag-pill">Go</span>
                        <span class="tag-pill">Distributed Protocols</span>
                        <span class="tag-pill">Remote (Global)</span>
                        <span class="tag-pill">Full Time</span>
                    </div>
                    </div>
                    <div class="job-card-side">
                    <div class="job-salary">$175,000 — $210,000</div>
                    <button type="button" class="btn-apply-job" data-job="Lead Distributed Systems Engineer (Nexus Cloud Labs)">Apply Now</button>
                    </div>
                </article>

                <!-- Job 2 -->
                <article class="job-card" data-department="product" data-location="london" data-keywords="principal product designer design systems london b2b">
                    <div class="job-card-main">
                    <div class="job-company-row">
                        <span class="job-company-name">Milk Creative Group</span>
                        <span class="job-verified-pill">
                        <svg class="tiny-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Admin Approved Job
                        </span>
                        <span class="job-date">Posted 3 days ago</span>
                    </div>
                    <h3 class="job-role-title">Principal Product Designer (Design Systems)</h3>
                    <div class="job-tags">
                        <span class="tag-pill">Figma Systems</span>
                        <span class="tag-pill">Design Strategy</span>
                        <span class="tag-pill">London (Hybrid)</span>
                        <span class="tag-pill">Full Time</span>
                    </div>
                    </div>
                    <div class="job-card-side">
                    <div class="job-salary">£110,000 — £135,000</div>
                    <button type="button" class="btn-apply-job" data-job="Principal Product Designer (Milk Creative Group)">Apply Now</button>
                    </div>
                </article>

                <!-- Job 3 -->
                <article class="job-card" data-department="executive" data-location="newyork" data-keywords="director of people operations talent acquisition new york hr">
                    <div class="job-card-main">
                    <div class="job-company-row">
                        <span class="job-company-name">Tirolez Global Ventures</span>
                        <span class="job-verified-pill">
                        <svg class="tiny-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Admin Approved Job
                        </span>
                        <span class="job-date">Posted 5 days ago</span>
                    </div>
                    <h3 class="job-role-title">Director of People &amp; Strategic Operations</h3>
                    <div class="job-tags">
                        <span class="tag-pill">HR Strategy</span>
                        <span class="tag-pill">Exec Compensation</span>
                        <span class="tag-pill">New York, NY</span>
                        <span class="tag-pill">Full Time</span>
                    </div>
                    </div>
                    <div class="job-card-side">
                    <div class="job-salary">$190,000 — $230,000</div>
                    <button type="button" class="btn-apply-job" data-job="Director of People & Strategic Operations (Tirolez Global Ventures)">Apply Now</button>
                    </div>
                </article>
                </div>

                <div id="no-jobs-found" class="no-jobs-message" style="display: none;">
                <p>No verified jobs match your filter criteria. Try adjusting your search query.</p>
                </div>

                <!-- Post a Job Direct Banner -->
                <div class="job-post-banner">
                <div class="banner-text">
                    <h4>Hiring for an unlisted role?</h4>
                    <p>Employers can submit role requirements directly to Hilora Admin for prioritized screening.</p>
                </div>
                <button type="button" class="btn-dark" id="banner-post-job-btn">Submit Job For Admin Review</button>
                </div>
            </div>
        </section>

        <!-- SECTION 6: FOOTER -->
        <footer class="site-footer" id="footer">
            <div class="footer-bg-crosses" aria-hidden="true"></div>
            <div class="container footer-container">
            <div class="footer-top">
                <div class="footer-brand-column">
                <a href="#" class="brand-logo footer-logo">
                    <span class="logo-text">HILORA</span>
                    <span class="logo-dot"></span>
                </a>
                <p class="footer-mission">
                    The premier talent recruitment network built on trust, confidentiality, and mandatory admin-verified validation.
                </p>
                <div class="admin-shield-notice">
                    <svg class="shield-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <polyline points="9 12 11 14 15 10"></polyline>
                    </svg>
                    <span>All profiles &amp; vacancies subject to Hilora Admin Approval.</span>
                </div>
                </div>

                <div class="footer-links-column">
                <h5 class="footer-title">For Employers</h5>
                <ul class="footer-links">
                    <li><a href="#companies" class="footer-link-action" data-modal="company">Register Company</a></li>
                    <li><a href="#companies">Employer Standards</a></li>
                    <li><a href="#vetting">Compliance Review</a></li>
                    <li><a href="#jobs">Role Scoping</a></li>
                </ul>
                </div>

                <div class="footer-links-column">
                <h5 class="footer-title">For Professionals</h5>
                <ul class="footer-links">
                    <li><a href="#professionals" class="footer-link-action" data-modal="professional">Register as Candidate</a></li>
                    <li><a href="#jobs">Browse Approved Jobs</a></li>
                    <li><a href="#vetting">Vetting Standards</a></li>
                    <li><a href="#professionals">Confidentiality Guarantee</a></li>
                </ul>
                </div>

                <div class="footer-newsletter-column">
                <h5 class="footer-title">Hilora Talent Intelligence</h5>
                <p class="footer-news-text">Receive monthly reports on executive compensation benchmarks and industry hiring trends.</p>
                <form class="newsletter-form" id="newsletter-form" onsubmit="return false;">
                    <input type="email" placeholder="Your work email" required class="news-input" id="news-email">
                    <button type="submit" class="btn-news-submit">Subscribe</button>
                </form>
                <div id="newsletter-status" class="form-status-msg"></div>
                </div>
            </div>

            <div class="footer-watermark">
                HILORA
            </div>

            <div class="footer-bottom">
                <div class="copyright">
                &copy; <span id="year-label">2026</span> Hilora Recruitment Group Ltd. All rights reserved.
                </div>
                <div class="footer-legal">
                <a href="#">Privacy Policy</a>
                <span class="divider">|</span>
                <a href="#">Terms of Service</a>
                <span class="divider">|</span>
                <a href="#">Admin Vetting Charter</a>
                </div>
            </div>
            </div>
        </footer>
    </main>
</template>

<script>
import AppNav from '../components/AppNav.vue'

export default {
  name: 'AppHome',
  components: {
    AppNav,
  }
}
</script>

<style scoped>
/* HERO SECTION */
.hero-section {
  position: relative;
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 60px);
  padding-bottom: 60px;
  background: radial-gradient(circle at 80% 20%, #111a2e 0%, #06090e 65%);
  color: #ffffff;
  overflow: hidden;
}

/* Cross pattern design with subtle opacity */
.hero-bg-crosses {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image: 
    radial-gradient(rgba(255, 255, 255, 0.09) 1px, transparent 1px),
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px, 40px 40px, 40px 40px;
  opacity: 0.65;
}

.hero-bg-crosses.opacity-low {
  opacity: 0.35;
}

.hero-glow-overlay {
  position: absolute;
  top: 15%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, rgba(255, 85, 36, 0.04) 40%, transparent 70%);
  pointer-events: none;
  filter: blur(60px);
}

.hero-content {
  position: relative;
  z-index: 1;
}

.hero-tagline {
  display: inline-block;
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  color: var(--color-text-light-muted);
  margin-bottom: 24px;
  text-transform: uppercase;
}

.hero-tagline .tag-dash {
  color: var(--color-accent-orange);
  margin-right: 6px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: 50px;
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 28px;
  max-width: 960px;
}

.hero-title-accent {
  color: #ffffff;
  text-decoration: underline;
  text-decoration-color: var(--color-accent-orange);
  text-underline-offset: 8px;
  text-decoration-thickness: 3px;
}

.hero-description {
  font-size: 0.9rem;
  line-height: 1.7;
  color: var(--color-text-light-muted);
  max-width: 680px;
  margin-bottom: 48px;
}

/* Dual CTAs */
.hero-dual-cta {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
  margin-bottom: 48px;
  max-width: 900px;
}

.cta-card {
  padding: 32px;
  border-radius: var(--radius-md);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.cta-card-dark {
  background-color: rgba(14, 19, 27, 0.85);
  border: 1px solid var(--color-border-dark);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
}

.cta-card-light{
    background-color: white;
  border: 1px solid var(--color-border-dark);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.45);
}

.cta-card-dark:hover, .cta-card-light:hover {
  border-color: rgba(255, 255, 255, 0.28);
  transform: translateY(-3px);
}

.cta-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}

.cta-badge {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-text-light-muted);
  text-transform: uppercase;
}

.cta-badge-light{
    font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #151d2a;
  text-transform: uppercase;
}

.cta-status-badge {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-accent-green);
  background: rgba(16, 185, 129, 0.12);
  padding: 4px 10px;
  border-radius: var(--radius-full);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.cta-card-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 12px;
}

.cta-card-title-light {
  font-family: var(--font-display);
  color: #151d2a;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  margin-bottom: 12px;
}

.cta-card-body {
  font-size: 0.9375rem;
  color: var(--color-text-light-muted);
  line-height: 1.6;
  margin-bottom: 24px;
}

.cta-card-body-light {
  font-size: 0.9375rem;
  color: #151d2a;
  line-height: 1.6;
  margin-bottom: 24px;
}

.cta-arrow-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 20px;
  background-color: #ffffff;
  color: #06090e;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.cta-arrow-btn .arrow-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.2s ease;
}

.cta-arrow-btn:hover, #hero-post-role-btn:hover {
  background-color: var(--color-accent-orange);
  color: #ffffff;
}

.cta-arrow-btn:hover .arrow-icon {
  transform: translateX(4px);
}

#hero-post-role-btn{
    background: #111a2e;
    color: white;
}
/* Hero Bottom Bar with Preview & Gatekeeping Pill */

@keyframes pulse-ring {
  0% { box-shadow: 0 0 0 0 rgba(255, 85, 36, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(255, 85, 36, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 85, 36, 0); }
}

/*STATS SECTION */
.stats-section{
    display: flex;
    justify-content: space-between;
    padding: 60px;
    background: var(--color-bg-light);
}
/* Metric Strip (Clean reference styling) */
.metric-item {
  border-left: 2px solid rgba(255, 255, 255, 0.1);
}

.metric-num {
  font-family: var(--font-display);
  font-size: 2.8rem;
  font-weight: 800;
  color: var(--color-accent-orange);
  line-height: 1;
}

.metric-plus {
  font-size: 1.8rem;
}

.metric-unit {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-accent-orange);
}

.metric-label {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: #151d2a;
  line-height: 1.4;
}

/* ==========================================================================
   GENERIC SECTION WRAPPERS
   ========================================================================== */
.section {
  padding: 100px 0;
  position: relative;
}

.section-light {
  background-color: var(--color-bg-light);
  color: var(--color-text-dark);
}

.section-dark {
  background-color: var(--color-bg-dark);
  color: #ffffff;
}

.section-header {
  margin-bottom: 56px;
}

.section-header.text-center {
  text-align: center;
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}

.section-tag {
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--color-text-muted);
  text-transform: uppercase;
  margin-bottom: 14px;
}

.section-tag-light {
  color: var(--color-accent-orange);
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 3.8vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.section-subtitle {
  font-size: 1.0625rem;
  color: #4b5563;
  max-width: 680px;
  line-height: 1.65;
}

.text-white { color: #ffffff !important; }
.text-muted { color: var(--color-text-light-muted) !important; }

/* COMPANY SECTION */
.brands-showcase {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

.brand-item {
  padding: 36px 24px;
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 8px;
  transition: var(--transition);
}

.brand-item:hover {
  transform: translateY(-4px);
}

.brand-box-dark {
  background-color: #121824;
  color: #ffffff;
}

.brand-box-red {
  background-color: #c92a2a;
  color: #ffffff;
}

.brand-box-blue {
  background-color: #1e3a8a;
  color: #ffffff;
}

.brand-box-gold {
  background-color: #27272a;
  color: #f59e0b;
}

.brand-logotype {
  font-family: var(--font-display);
  font-size: 1.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
}

.brand-tag {
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  opacity: 0.85;
}

.employer-content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

/* PROFESSIONAL SECTION */
.vetting-cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 64px;
}

.vetting-card {
  background-color: var(--color-bg-dark-surface);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: var(--transition);
}

.vetting-card:hover {
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-4px);
}

.vetting-card-icon {
  width: 48px;
  height: 48px;
  color: var(--color-accent-orange);
  margin-bottom: 24px;
}

.vetting-card-title {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
}

.vetting-card-text {
  font-size: 0.9375rem;
  color: var(--color-text-light-muted);
  line-height: 1.6;
  margin-bottom: 24px;
}

.vetting-tag {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-accent-orange);
}

/* Profiles Section */
.profiles-section-wrapper {
  background: rgba(14, 19, 27, 0.5);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-lg);
  padding: 40px;
}

.profiles-heading-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid var(--color-border-dark);
}

.subheading-white {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
}

.subheading-note {
  font-size: 0.875rem;
  color: var(--color-text-light-muted);
}

.btn-outline-white {
  padding: 10px 22px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.btn-outline-white:hover {
  background-color: #ffffff;
  color: #06090e;
}

.talent-profiles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.talent-card {
  background-color: var(--color-bg-dark-elevated);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-md);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: var(--transition);
}

.talent-card:hover {
  border-color: rgba(255, 255, 255, 0.35);
}

.talent-card-header {
  display: flex;
  align-items: center;
  gap: 16px;
}

.talent-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--color-border-dark);
}

.talent-info {
  display: flex;
  flex-direction: column;
}

.talent-name {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 700;
  color: #ffffff;
}

.talent-role {
  font-size: 0.8125rem;
  color: var(--color-text-light-muted);
  margin-bottom: 6px;
}

.badge-approved {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.7rem;
  font-weight: 700;
  color: var(--color-accent-green);
  background: rgba(16, 185, 129, 0.12);
  padding: 2px 8px;
  border-radius: var(--radius-full);
}

.check-icon {
  width: 12px;
  height: 12px;
}

.talent-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-pill {
  font-size: 0.75rem;
  padding: 4px 10px;
  background-color: rgba(255, 255, 255, 0.07);
  border-radius: var(--radius-full);
  color: #d1d5db;
}

.talent-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.75rem;
  color: var(--color-text-light-muted);
}

/* FIND A JOB SECTION */
.job-search-toolbar {
  display: flex;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.search-input-wrap {
  flex-grow: 1;
  min-width: 280px;
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 16px;
  width: 18px;
  height: 18px;
  color: var(--color-text-muted);
  pointer-events: none;
}

.search-input-wrap input {
  width: 100%;
  padding: 14px 16px 14px 44px;
  font-family: inherit;
  font-size: 0.9375rem;
  background-color: #ffffff;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-sm);
  color: var(--color-text-dark);
  outline: none;
  transition: var(--transition);
}

.search-input-wrap input:focus {
  border-color: #06090e;
  box-shadow: 0 0 0 3px rgba(6, 9, 14, 0.08);
}

.filter-group {
  display: flex;
  gap: 12px;
}

.filter-select {
  padding: 14px 18px;
  font-family: inherit;
  font-size: 0.875rem;
  background-color: #ffffff;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-sm);
  color: var(--color-text-dark);
  outline: none;
  cursor: pointer;
  transition: var(--transition);
}

.filter-select:focus {
  border-color: #06090e;
}

.jobs-list-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 48px;
}

.job-card {
  background-color: #ffffff;
  border: 1px solid var(--color-border-light);
  border-radius: var(--radius-md);
  padding: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  transition: var(--transition);
}

.job-card:hover {
  border-color: #06090e;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
}

.job-card-main {
  flex-grow: 1;
}

.job-company-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.job-company-name {
  font-size: 0.875rem;
  font-weight: 700;
  color: #374151;
}

.job-verified-pill {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  background-color: #e6f4ea;
  color: #137333;
  padding: 2px 8px;
  border-radius: var(--radius-full);
}

.tiny-check {
  width: 10px;
  height: 10px;
}

.job-date {
  font-size: 0.75rem;
  color: var(--color-text-muted);
}

.job-role-title {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--color-text-dark);
  margin-bottom: 12px;
}

.job-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-pill {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 10px;
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: var(--radius-sm);
  color: #4b5563;
}

.job-card-side {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 14px;
  min-width: 180px;
}

.job-salary {
  font-family: var(--font-display);
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--color-accent-orange);
}

.btn-apply-job {
  padding: 10px 20px;
  background-color: #06090e;
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.btn-apply-job:hover {
  background-color: var(--color-accent-orange);
}

.no-jobs-message {
  text-align: center;
  padding: 48px;
  background-color: #ffffff;
  border: 1px dashed var(--color-border-light);
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
}

.job-post-banner {
  background-color: #111827;
  color: #ffffff;
  border-radius: var(--radius-md);
  padding: 36px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.banner-text h4 {
  font-family: var(--font-display);
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 6px;
}

.banner-text p {
  font-size: 0.9375rem;
  color: var(--color-text-light-muted);
}

.btn-dark {
  padding: 12px 24px;
  background-color: #ffffff;
  color: #06090e;
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.btn-dark:hover {
  background-color: var(--color-accent-orange);
  color: #ffffff;
}

/* FOOTER SECTION */
.site-footer {
  position: relative;
  background-color: #030508;
  color: #ffffff;
  padding: 90px 0 40px;
  border-top: 1px solid var(--color-border-dark);
  overflow: hidden;
}

.footer-bg-crosses {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.5;
}

.footer-container {
  position: relative;
  z-index: 1;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
  gap: 48px;
  margin-bottom: 72px;
}

.footer-brand-column {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.footer-mission {
  font-size: 0.9375rem;
  color: var(--color-text-light-muted);
  line-height: 1.6;
}

.admin-shield-notice {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8125rem;
  color: #94a3b8;
  background-color: rgba(255, 255, 255, 0.04);
  padding: 10px 14px;
  border-radius: var(--radius-sm);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.shield-icon {
  width: 20px;
  height: 20px;
  color: var(--color-accent-green);
  flex-shrink: 0;
}

.footer-title {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 20px;
  color: #ffffff;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-links a {
  font-size: 0.875rem;
  color: var(--color-text-light-muted);
  transition: var(--transition);
}

.footer-links a:hover {
  color: #ffffff;
  padding-left: 4px;
}

.footer-news-text {
  font-size: 0.875rem;
  color: var(--color-text-light-muted);
  margin-bottom: 16px;
  line-height: 1.5;
}

.newsletter-form {
  display: flex;
  gap: 8px;
}

.news-input {
  flex-grow: 1;
  padding: 10px 14px;
  background-color: rgba(255, 255, 255, 0.07);
  border: 1px solid var(--color-border-dark);
  border-radius: var(--radius-sm);
  color: #ffffff;
  font-size: 0.875rem;
  outline: none;
}

.news-input:focus {
  border-color: #ffffff;
}

.btn-news-submit {
  padding: 10px 16px;
  background-color: #ffffff;
  color: #06090e;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: var(--radius-sm);
  transition: var(--transition);
}

.btn-news-submit:hover {
  background-color: var(--color-accent-orange);
  color: #ffffff;
}

.form-status-msg {
  font-size: 0.8125rem;
  margin-top: 8px;
  min-height: 20px;
}

/* Watermark as shown in reference design bottom */
.footer-watermark {
  font-family: var(--font-display);
  font-size: clamp(4rem, 14vw, 12rem);
  font-weight: 800;
  letter-spacing: 0.05em;
  color: rgba(255, 255, 255, 0.03);
  text-align: center;
  line-height: 0.9;
  user-select: none;
  pointer-events: none;
  margin-bottom: 32px;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.8125rem;
  color: var(--color-text-light-muted);
  flex-wrap: wrap;
  gap: 16px;
}

.footer-legal {
  display: flex;
  align-items: center;
  gap: 14px;
}

.footer-legal a:hover {
  color: #ffffff;
}

.divider {
  color: rgba(255, 255, 255, 0.2);
}

</style>
