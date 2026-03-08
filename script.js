/* ================================================================
   SCRIPT.JS — Portfolio JavaScript
   ================================================================
   
   This file handles:
   1. Rendering all content from data.js into the HTML
   2. Navigation (scroll, hamburger menu, active states)
   3. Smooth scroll reveal animations
   4. Skill bar fill animations
   5. Project tab switching (Graphic / Data)
   6. Project card 3D tilt hover effect
   7. Modal open/close and content rendering
   8. Hero 3D card mouse tracking
   9. Cursor glow follower
   
   ────────────────────────────────────────────────────────────────
   YOU SHOULD NOT NEED TO EDIT THIS FILE
   All content lives in data.js
   All styles live in style.css
   ────────────────────────────────────────────────────────────────
================================================================ */

/* ================================================================
   WAIT FOR DOM + DATA TO BE READY
================================================================ */
document.addEventListener('DOMContentLoaded', () => {

  // Pull in all data from data.js (loaded before this script)
  const { PERSONAL_INFO, SOCIAL_LINKS, SKILLS, SERVICES, PROJECTS } = window.PORTFOLIO_DATA;

  // ================================================================
  // 1. RENDER PERSONAL INFO INTO THE PAGE
  // ================================================================

  // --- Navbar Logo ---
  document.getElementById('navLogo').textContent = PERSONAL_INFO.initials;
  document.title = `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`;

  // --- Hero Badge ---
  document.getElementById('heroBadgeText').textContent = PERSONAL_INFO.availabilityText;

  // --- Hero Title ---
  // Splits the name into parts so we can add the gradient class
  const heroTitle = document.getElementById('heroTitle');
  const nameParts = PERSONAL_INFO.name.split(' ');
  heroTitle.innerHTML = nameParts.map((part, i) =>
    i === nameParts.length - 1
      ? `<span class="name-accent">${part}</span>`
      : `${part} `
  ).join('');

  // --- Hero Role ---
  const heroRole = document.getElementById('heroRole');
  const parts = PERSONAL_INFO.title.split(' & ');
  if (parts.length === 2) {
    heroRole.innerHTML = `<span class="role-data">${parts[0]}</span><span class="role-sep">&</span><span class="role-design">${parts[1]}</span>`;
  } else {
    heroRole.textContent = PERSONAL_INFO.title;
  }

  // --- Hero Intro ---
  document.getElementById('heroIntro').textContent = PERSONAL_INFO.intro;

  // --- Hero Social Icons (small icon row in hero) ---
  const heroSocials = document.getElementById('heroSocials');
  SOCIAL_LINKS.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'social-icon-link';
    a.title = link.label;
    a.innerHTML = `<i class="ph ${link.icon}"></i>`;
    heroSocials.appendChild(a);
  });

  // --- About Section ---
  document.getElementById('aboutTitle').textContent = PERSONAL_INFO.aboutTitle;
  document.getElementById('roleDataDesc').textContent = PERSONAL_INFO.roleDataDesc;
  document.getElementById('roleDesignDesc').textContent = PERSONAL_INFO.roleDesignDesc;

  // About paragraphs
  const aboutParagraphs = document.getElementById('aboutParagraphs');
  PERSONAL_INFO.aboutParagraphs.forEach(text => {
    const p = document.createElement('p');
    p.className = 'about-paragraph';
    p.textContent = text;
    aboutParagraphs.appendChild(p);
  });

  // About stats chips
  const aboutStats = document.getElementById('aboutStats');
  PERSONAL_INFO.stats.forEach(stat => {
    const div = document.createElement('div');
    div.className = 'stat-chip';
    div.innerHTML = `<span class="stat-number">${stat.number}</span><span class="stat-label">${stat.label}</span>`;
    aboutStats.appendChild(div);
  });

  // --- Contact Section ---
  document.getElementById('contactTitle').textContent = PERSONAL_INFO.contactTitle;
  document.getElementById('contactSub').textContent = PERSONAL_INFO.contactSubtitle;

  // --- Footer ---
  document.getElementById('footerName').textContent = PERSONAL_INFO.name;
  document.getElementById('footerCopy').textContent = PERSONAL_INFO.footerCopy;

  // Footer social icons
  const footerSocials = document.getElementById('footerSocials');
  SOCIAL_LINKS.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'social-icon-link';
    a.title = link.label;
    a.innerHTML = `<i class="ph ${link.icon}"></i>`;
    footerSocials.appendChild(a);
  });

  // ================================================================
  // 2. RENDER SKILLS
  // ================================================================
  function renderSkills(listEl, skills) {
    listEl.innerHTML = '';
    skills.forEach(skill => {
      const div = document.createElement('div');
      div.className = 'skill-item';
      div.innerHTML = `
        <div class="skill-info">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-pct">${skill.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-fill" data-level="${skill.level}"></div>
        </div>
      `;
      listEl.appendChild(div);
    });
  }

  renderSkills(document.getElementById('dataSkillsList'), SKILLS.data);
  renderSkills(document.getElementById('designSkillsList'), SKILLS.design);

  // ================================================================
  // 3. RENDER SERVICES
  // ================================================================
  const servicesGrid = document.getElementById('servicesGrid');
  SERVICES.forEach(service => {
    const card = document.createElement('div');
    card.className = 'service-card reveal';
    card.innerHTML = `
      <div class="service-icon">
        <i class="ph ${service.icon}"></i>
      </div>
      <div class="service-title">${service.title}</div>
      <div class="service-desc">${service.description}</div>
    `;
    servicesGrid.appendChild(card);
  });

  // ================================================================
  // 4. RENDER CONTACT CARDS
  // ================================================================
  const contactGrid = document.getElementById('contactGrid');
  SOCIAL_LINKS.forEach(link => {
    const a = document.createElement('a');
    a.href = link.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'contact-card reveal';
    a.dataset.platform = link.platform;
    a.innerHTML = `
      <div class="contact-card-icon">
        <i class="ph ${link.icon}"></i>
      </div>
      <div class="contact-card-label">${link.label}</div>
      <div class="contact-card-value">${link.value}</div>
    `;
    contactGrid.appendChild(a);
  });

  // ================================================================
  // 5. RENDER PROJECTS
  // Current active tab
  // ================================================================
  let activeTab = 'graphic';

  function renderProjects(category) {
    const grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';

    const filtered = PROJECTS.filter(p => p.category === category);

    if (filtered.length === 0) {
      grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:60px 0;font-family:var(--font-mono)">No projects yet. Add some in data.js!</div>`;
      return;
    }

    filtered.forEach((project, index) => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.style.animationDelay = `${index * 0.1}s`;
      card.dataset.id = project.id;

      // Cover image or placeholder
      let coverHTML;
      if (project.cover && project.cover !== '') {
        coverHTML = `
          <div class="project-cover">
            <img src="${project.cover}" alt="${project.title}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'project-cover-placeholder\\'><i class=\\'ph ph-image\\'></i><span>Image not found</span></div>'">
            <div class="project-cover-overlay">
              <span class="project-view-btn"><i class="ph ph-eye"></i> View Details</span>
            </div>
          </div>`;
      } else {
        const icon = category === 'graphic' ? 'ph-pen-nib' : 'ph-chart-bar';
        coverHTML = `
          <div class="project-cover">
            <div class="project-cover-placeholder">
              <i class="ph ${icon}"></i>
              <span>Add cover image</span>
            </div>
            <div class="project-cover-overlay">
              <span class="project-view-btn"><i class="ph ph-eye"></i> View Details</span>
            </div>
          </div>`;
      }

      const badgeClass = category === 'graphic' ? 'badge-graphic' : 'badge-data';
      const badgeIcon  = category === 'graphic' ? 'ph-pen-nib' : 'ph-chart-bar';
      const badgeLabel = category === 'graphic' ? 'Graphic Design' : 'Data Analysis';

      // Show first 3 tools
      const toolsHTML = (project.tools || []).slice(0, 4).map(t =>
        `<span class="tool-tag">${t}</span>`
      ).join('');

      card.innerHTML = `
        ${coverHTML}
        <div class="project-info">
          <div class="project-cat-badge ${badgeClass}">
            <i class="ph ${badgeIcon}"></i>
            ${badgeLabel}
          </div>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-short-desc">${project.shortDescription}</p>
          <div class="project-tools">${toolsHTML}</div>
        </div>
      `;

      // Click opens modal
      card.addEventListener('click', () => openModal(project));

      // 3D tilt effect on hover
      applyTiltEffect(card);

      grid.appendChild(card);
    });
  }

  // Initial render
  renderProjects('graphic');

  // Tab button logic
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTab = btn.dataset.tab;
      renderProjects(activeTab);
    });
  });

  // ================================================================
  // 6. MODAL — OPEN & CLOSE
  // This handles rendering the detail view for each project type
  // ================================================================
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose   = document.getElementById('modalClose');
  const modalBody    = document.getElementById('modalBody');

  function openModal(project) {
    modalBody.innerHTML = buildModalContent(project);
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  /* ──────────────────────────────────────────────────────────────
     BUILD MODAL CONTENT
     This function generates different HTML depending on whether
     the project is a "graphic" or "data" type.
  ────────────────────────────────────────────────────────────── */
  function buildModalContent(project) {
    const isGraphic = project.category === 'graphic';
    const badgeClass = isGraphic ? 'badge-graphic' : 'badge-data';
    const badgeIcon  = isGraphic ? 'ph-pen-nib' : 'ph-chart-bar';
    const badgeLabel = isGraphic ? 'Graphic Design' : 'Data Analysis';

    // Cover image section
    let coverSection = '';
    if (project.cover && project.cover !== '') {
      coverSection = `<img src="${project.cover}" alt="${project.title}" class="modal-cover-img" onerror="this.outerHTML='<div class=\\'modal-cover-placeholder\\'><i class=\\'ph ph-image\\'></i></div>'">`;
    } else {
      const icon = isGraphic ? 'ph-pen-nib' : 'ph-chart-bar';
      coverSection = `<div class="modal-cover-placeholder"><i class="ph ${icon}"></i></div>`;
    }

    // Tools list
    const toolsHTML = (project.tools || []).map(t =>
      `<span class="modal-tool-tag">${t}</span>`
    ).join('');

    // Gallery section
    let galleryHTML = '';
    const gallery = (project.gallery || []).filter(g => g && g !== '');
    const galleryPlaceholders = (project.gallery || []).filter(g => !g || g === '');
    
    if (gallery.length > 0 || galleryPlaceholders.length > 0) {
      galleryHTML = `
        <div class="modal-section">
          <div class="modal-section-title">Gallery</div>
          <div class="modal-gallery">
            ${gallery.map(src => `<img src="${src}" class="gallery-img" loading="lazy" onerror="this.outerHTML='<div class=\\'gallery-placeholder\\'><i class=\\'ph ph-image\\'></i><span>Image</span></div>'">`).join('')}
            ${galleryPlaceholders.map(() => `<div class="gallery-placeholder"><i class="ph ph-image"></i><span>Add image in data.js</span></div>`).join('')}
          </div>
        </div>
      `;
    }

    /* ──────────────────────────────────────────────────────────
       GRAPHIC DESIGN SPECIFIC FIELDS
    ────────────────────────────────────────────────────────── */
    let specificFields = '';

    if (isGraphic) {
      // Color palette
      let paletteHTML = '';
      if (project.colors && project.colors.length > 0) {
        paletteHTML = `
          <div class="modal-section">
            <div class="modal-section-title">Color Palette</div>
            <div class="modal-palette">
              ${project.colors.map(hex => `
                <div class="palette-swatch">
                  <div class="swatch-color" style="background:${hex}"></div>
                  <span class="swatch-hex">${hex}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // Typography
      let typographyHTML = '';
      if (project.typography && project.typography.length > 0) {
        typographyHTML = `
          <div class="modal-section">
            <div class="modal-section-title">Typography</div>
            <div class="modal-typography">
              ${project.typography.map(font => `<span class="font-tag">${font}</span>`).join('')}
            </div>
          </div>
        `;
      }

      // Brand overview
      let brandHTML = '';
      if (project.brandOverview) {
        brandHTML = `
          <div class="modal-section">
            <div class="modal-section-title">Brand Overview</div>
            <p style="color:var(--text-secondary);font-size:0.9rem;line-height:1.75">${project.brandOverview}</p>
          </div>
        `;
      }

      specificFields = brandHTML + paletteHTML + typographyHTML;

    /* ──────────────────────────────────────────────────────────
       DATA ANALYSIS SPECIFIC FIELDS
    ────────────────────────────────────────────────────────── */
    } else {
      // Problem statement + dataset info grid
      let infoGridHTML = '';
      if (project.problemStatement || project.datasetInfo) {
        infoGridHTML = `
          <div class="modal-section">
            <div class="modal-info-grid">
              ${project.problemStatement ? `
                <div class="modal-info-item">
                  <strong>Problem Statement</strong>
                  <span>${project.problemStatement}</span>
                </div>` : ''}
              ${project.datasetInfo ? `
                <div class="modal-info-item">
                  <strong>Dataset Info</strong>
                  <span>${project.datasetInfo}</span>
                </div>` : ''}
            </div>
          </div>
        `;
      }

      // Key insights
      let insightsHTML = '';
      if (project.insights && project.insights.length > 0) {
        insightsHTML = `
          <div class="modal-section">
            <div class="modal-section-title">Key Insights</div>
            <ul class="modal-insights">
              ${project.insights.map(i => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        `;
      }

      // Results
      let resultsHTML = '';
      if (project.results) {
        resultsHTML = `
          <div class="modal-section">
            <div class="modal-section-title">Results & Outcomes</div>
            <div class="modal-results-box">${project.results}</div>
          </div>
        `;
      }

      specificFields = infoGridHTML + insightsHTML + resultsHTML;
    }

    // Final assembled HTML
    return `
      ${coverSection}
      <div class="modal-meta">
        <div class="project-cat-badge ${badgeClass}">
          <i class="ph ${badgeIcon}"></i> ${badgeLabel}
        </div>
      </div>
      <h2 class="modal-title">${project.title}</h2>
      <p class="modal-description">${project.fullDescription}</p>

      <div class="modal-section">
        <div class="modal-section-title">Tools Used</div>
        <div class="modal-tools">${toolsHTML}</div>
      </div>

      ${specificFields}
      ${galleryHTML}
    `;
  }

  // ================================================================
  // 7. NAVBAR — SCROLL EFFECT + HAMBURGER
  // ================================================================
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Highlight active nav link based on scroll position
    updateActiveNavLink();
  }, { passive: true });

  const hamburger = document.getElementById('navHamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
    });
  });

  // Active nav link highlighting
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const top    = section.offsetTop;
      const bottom = top + section.offsetHeight;
      const id     = section.getAttribute('id');
      const link   = document.querySelector(`.nav-link[href="#${id}"]`);

      if (link) {
        if (scrollPos >= top && scrollPos < bottom) {
          document.querySelectorAll('.nav-link').forEach(l => l.style.color = '');
          link.style.color = 'var(--text-primary)';
        }
      }
    });
  }

  // ================================================================
  // 8. SCROLL REVEAL ANIMATIONS
  // Elements with class "reveal" fade in when scrolled into view
  // ================================================================
  function addRevealClass() {
    // Add reveal class to key elements if not already there
    document.querySelectorAll('.project-card, .stat-chip, .about-paragraph, .role-card').forEach(el => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
      }
    });
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Staggered delay based on position among siblings
        const siblings = Array.from(entry.target.parentElement.children);
        const index = siblings.indexOf(entry.target);
        entry.target.style.transitionDelay = `${index * 0.08}s`;
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  function observeRevealElements() {
    document.querySelectorAll('.reveal').forEach(el => {
      revealObserver.observe(el);
    });
  }

  // Call once on load
  addRevealClass();
  observeRevealElements();

  // Call again after project tab switches (new cards need observing)
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Small delay to let new cards render
      setTimeout(() => {
        addRevealClass();
        observeRevealElements();
      }, 50);
    });
  });

  // ================================================================
  // 9. SKILL BAR ANIMATION
  // Fills skill bars when they scroll into view
  // ================================================================
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fills = entry.target.querySelectorAll('.skill-fill');
        fills.forEach(fill => {
          const level = fill.dataset.level;
          fill.style.width = level + '%';
        });
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skills-column').forEach(col => {
    skillObserver.observe(col);
  });

  // ================================================================
  // 10. 3D CARD TILT EFFECT
  // Applied to project cards on hover
  // ================================================================
  function applyTiltEffect(card) {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;
      card.style.transform = `translateY(-12px) scale(1.01) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });
  }

  // ================================================================
  // 11. HERO SPHERE — Animated 3D Planet with Orbital Skill Tags
  // ================================================================
  (function initHeroSphere() {
    if (!window.THREE) return;
    const canvas = document.getElementById('heroSphereCanvas');
    if (!canvas) return;

    const wrapper = document.getElementById('heroSphereWrapper');
    const W = wrapper.offsetWidth  || 420;
    const H = wrapper.offsetHeight || 420;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.z = 5.5;

    // ── Main wireframe sphere ──
    const geo = new THREE.SphereGeometry(1.05, 13, 9);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8, wireframe: true, transparent: true, opacity: 0.30,
    });
    const sphere = new THREE.Mesh(geo, mat);
    scene.add(sphere);

    // ── Glowing solid core ──
    const coreGeo = new THREE.SphereGeometry(0.28, 20, 20);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.55 });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // ── 3 Orbital ring GROUPS — ring mesh + spinners share the same group tilt ──
    const ringDefs = [
      { radius: 1.55, tube: 0.007, tiltX: Math.PI * 0.18, tiltZ: 0,              color: 0x38bdf8, opacity: 0.35, speed:  0.0065 },
      { radius: 1.95, tube: 0.006, tiltX: Math.PI * 0.50, tiltZ: Math.PI * 0.20, color: 0x818cf8, opacity: 0.30, speed: -0.0050 },
      { radius: 2.35, tube: 0.005, tiltX: Math.PI * 0.30, tiltZ: Math.PI * 0.44, color: 0x34d399, opacity: 0.25, speed:  0.0055 },
    ];

    const ringGroups = ringDefs.map(def => {
      const group = new THREE.Object3D();
      group.rotation.x = def.tiltX;
      group.rotation.z = def.tiltZ;
      scene.add(group);
      // Ring torus lives inside the group
      const rGeo = new THREE.TorusGeometry(def.radius, def.tube, 6, 120);
      const rMat = new THREE.MeshBasicMaterial({ color: def.color, transparent: true, opacity: def.opacity });
      group.add(new THREE.Mesh(rGeo, rMat));
      return { group, radius: def.radius, speed: def.speed };
    });

    // ── 12 Skills — 4 per ring ──
    const skillDefs = [
      { label: 'Power BI',      icon: '📊', ring: 0, angle: 0 },
      { label: 'SQL',           icon: '🗄',  ring: 0, angle: Math.PI * 0.5 },
      { label: 'Python',        icon: '🐍',  ring: 0, angle: Math.PI },
      { label: 'Excel',         icon: '📈',  ring: 0, angle: Math.PI * 1.5 },
      { label: 'Photoshop',     icon: '🖌',  ring: 1, angle: 0 },
      { label: 'Illustrator',   icon: '✏️',  ring: 1, angle: Math.PI * 0.5 },
      { label: 'Arduino',      icon: '📐',  ring: 1, angle: Math.PI * 1.5 },
      { label: 'Tableau',       icon: '📉',  ring: 2, angle: 0 },
      { label: 'Canva',         icon: '🖼',  ring: 2, angle: Math.PI * 1.33 },
    ];

    const borderCols = ['rgba(56,189,248,0.7)',  'rgba(129,140,248,0.7)', 'rgba(52,211,153,0.7)'];
    const textCols   = ['#7dd3fc',                '#c4b5fd',               '#6ee7b7'];

    wrapper.querySelectorAll('.sphere-skill-label').forEach(el => el.remove());

    const orbiters = skillDefs.map(def => {
      // HTML pill
      const labelEl = document.createElement('div');
      labelEl.className = 'sphere-skill-label';
      labelEl.style.borderColor = borderCols[def.ring];
      labelEl.innerHTML = `<span class="ssl-icon">${def.icon}</span><span class="ssl-text" style="color:${textCols[def.ring]}">${def.label}</span>`;
      wrapper.appendChild(labelEl);

      // Spinner lives INSIDE the ring group → inherits group tilt automatically
      const spinner = new THREE.Object3D();
      spinner.rotation.y = def.angle;
      ringGroups[def.ring].group.add(spinner);

      // Marker at orbit radius
      const marker = new THREE.Object3D();
      marker.position.set(ringGroups[def.ring].radius, 0, 0);
      spinner.add(marker);

      return { spinner, marker, ringIdx: def.ring, labelEl };
    });

    // ── Mouse influence ──
    let mx = 0, my = 0, tiltX = 0, tiltY = 0;
    document.addEventListener('mousemove', e => {
      mx = (e.clientX / window.innerWidth  - 0.5) * 2;
      my = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    window.addEventListener('resize', () => {
      const nW = wrapper.offsetWidth;
      const nH = wrapper.offsetHeight;
      renderer.setSize(nW, nH);
      camera.aspect = nW / nH;
      camera.updateProjectionMatrix();
    });

    // ── Project 3D → 2D ──
    const projVec = new THREE.Vector3();
    function toScreen(obj) {
      obj.getWorldPosition(projVec);
      projVec.project(camera);
      const hw = wrapper.offsetWidth  / 2;
      const hh = wrapper.offsetHeight / 2;
      return { x: projVec.x * hw + hw, y: projVec.y * -hh + hh, z: projVec.z };
    }

    let t = 0;
    function animateSphere() {
      requestAnimationFrame(animateSphere);
      t += 0.01;

      sphere.rotation.y += 0.004;
      sphere.rotation.x  = Math.sin(t * 0.28) * 0.07;

      // Mouse tilt on whole scene
      tiltX += (my * 0.22 - tiltX) * 0.05;
      tiltY += (mx * 0.22 - tiltY) * 0.05;
      scene.rotation.x = tiltX;
      scene.rotation.y = tiltY;

      // Core pulse
      coreMat.opacity = 0.45 + Math.sin(t * 1.6) * 0.18;

      // Rotate each ring GROUP around its own Y — skills follow automatically
      ringGroups.forEach(rg => {
        rg.group.rotation.y += rg.speed;
      });

      // Project each marker to screen and position its label
      orbiters.forEach(orb => {
        const sc = toScreen(orb.marker);

        // NDC z: values closer to 1 are further from camera / behind sphere
        const behind = sc.z > 0.91;
        const lw = orb.labelEl.offsetWidth  || 110;
        const lh = orb.labelEl.offsetHeight || 30;
        const scale = behind ? 0.82 : 1.0;

        orb.labelEl.style.transform = `translate(${sc.x - lw / 2}px, ${sc.y - lh / 2}px) scale(${scale})`;
        orb.labelEl.style.opacity   = behind ? '0.18' : '1';
        orb.labelEl.style.zIndex    = behind ? '1'    : '20';
      });

      renderer.render(scene, camera);
    }
    animateSphere();
  })();

  // ================================================================
  // 12. CURSOR GLOW FOLLOWER
  // The purple glow follows the mouse cursor
  // ================================================================
  const cursorGlow = document.getElementById('cursorGlow');
  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Smooth follow using lerp (linear interpolation)
  function lerpGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    if (cursorGlow) {
      cursorGlow.style.left = glowX + 'px';
      cursorGlow.style.top  = glowY + 'px';
    }
    requestAnimationFrame(lerpGlow);
  }
  lerpGlow();

  // ================================================================
  // 13. SMOOTH SCROLL for anchor links
  // ================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navH = navbar.offsetHeight;
        const top  = target.getBoundingClientRect().top + window.scrollY - navH - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ================================================================
  // 14. SERVICE CARDS — stagger reveal
  // ================================================================
  document.querySelectorAll('.service-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.07}s`;
  });

  // ================================================================
  // 15. SCROLL PROGRESS BAR
  // ================================================================
  const scrollProgress = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    const pct   = (window.scrollY / total) * 100;
    if (scrollProgress) scrollProgress.style.width = pct + '%';
  }, { passive: true });

  // ================================================================
  // 16. MAGNETIC BUTTONS
  // Buttons slightly follow the mouse on hover
  // ================================================================
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width  / 2;
      const y = e.clientY - rect.top  - rect.height / 2;
      btn.style.transform = `translate(${x * 0.22}px, ${y * 0.22}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
    });
  });

  // ================================================================
  // 17. ANIMATED NUMBER COUNTERS for stats
  // ================================================================
  function animateCounter(el, target, suffix) {
    const num = parseInt(target);
    if (isNaN(num)) { el.textContent = target + suffix; return; }
    let current = 0;
    const step  = Math.ceil(num / 40);
    const timer = setInterval(() => {
      current += step;
      if (current >= num) { current = num; clearInterval(timer); }
      el.textContent = current + suffix;
    }, 35);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.stat-number').forEach(el => {
          const raw    = el.textContent;
          const suffix = raw.replace(/[0-9]/g, '');
          animateCounter(el, raw, '');
        });
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.about-stats').forEach(el => counterObserver.observe(el));

  // ================================================================
  // 18. TYPING EFFECT on hero role
  // ================================================================
  const heroRoleEl = document.getElementById('heroRole');
  if (heroRoleEl) {
    const originalHTML = heroRoleEl.innerHTML;
    heroRoleEl.innerHTML = '';
    let i = 0;
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    heroRoleEl.appendChild(cursor);

    // Delay start to let hero animate in first
    setTimeout(() => {
      const temp = document.createElement('div');
      temp.innerHTML = originalHTML;
      const fullText = temp.textContent;

      function typeChar() {
        if (i < fullText.length) {
          cursor.insertAdjacentText('beforebegin', fullText[i]);
          i++;
          setTimeout(typeChar, 55 + Math.random() * 30);
        } else {
          // Restore colored spans after typing
          cursor.remove();
          const parts = PERSONAL_INFO.title.split(' & ');
          if (parts.length === 2) {
            heroRoleEl.innerHTML = `<span class="role-data">${parts[0]}</span><span class="role-sep"> & </span><span class="role-design">${parts[1]}</span>`;
          }
        }
      }
      typeChar();
    }, 1200);
  }

  // ================================================================
  // 19. SECTION 3D MINI SHAPES (small Three.js per-section decos)
  // Each section has a small rotating 3D object
  // ================================================================
  function initSectionShape(canvas, shapeType) {
    if (!window.THREE) return;
    const W = canvas.parentElement.offsetWidth  || 200;
    const H = canvas.parentElement.offsetHeight || 200;
    canvas.width  = W;
    canvas.height = H;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    camera.position.z = 3;

    // Wireframe material — glowing blue
    const mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });

    let geo;
    if (shapeType === 'torus')        geo = new THREE.TorusGeometry(0.9, 0.3, 16, 60);
    else if (shapeType === 'icosahedron') geo = new THREE.IcosahedronGeometry(1, 1);
    else if (shapeType === 'octahedron')  geo = new THREE.OctahedronGeometry(1, 0);
    else                              geo = new THREE.SphereGeometry(1, 16, 16);

    const mesh = new THREE.Mesh(geo, mat);
    scene.add(mesh);

    // Ambient point light
    const light = new THREE.PointLight(0x38bdf8, 2, 10);
    light.position.set(2, 2, 2);
    scene.add(light);

    let animId;
    function animate() {
      animId = requestAnimationFrame(animate);
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.008;
      renderer.render(scene, camera);
    }
    animate();

    // Pause when out of view to save performance
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (!animId) animate();
      } else {
        cancelAnimationFrame(animId);
        animId = null;
      }
    });
    obs.observe(canvas);
  }

  // Init all section shape canvases
  document.querySelectorAll('.section-shape-canvas').forEach(canvas => {
    initSectionShape(canvas, canvas.dataset.shape);
  });

  // ================================================================
  // INITIALIZATION COMPLETE
  // ================================================================
  console.log(
    '%c Portfolio 3D loaded ✦ ',
    'background: linear-gradient(135deg, #0ea5e9, #818cf8); color: white; padding: 6px 14px; border-radius: 6px; font-family: monospace;'
  );
});

/* ================================================================
   THREE.JS MAIN BACKGROUND ENGINE
   Runs outside DOMContentLoaded so it starts immediately
   Renders: floating 3D geometric shapes in the background
================================================================ */
(function initThreeBackground() {
  if (!window.THREE) return;

  const canvas   = document.getElementById('threeCanvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene  = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.z = 30;

  // ── Materials ──────────────────────────────────────────────────
  const wireMat = (color, opacity = 0.18) => new THREE.MeshBasicMaterial({
    color, wireframe: true, transparent: true, opacity
  });

  const edgeMat = (color, opacity = 0.25) => new THREE.LineBasicMaterial({
    color, transparent: true, opacity
  });

  // ── Floating 3D Object Definitions ───────────────────────────
  const objectDefs = [
    // [geometry, material, x, y, z, scale, speedX, speedY]
    { geo: new THREE.IcosahedronGeometry(3, 1),   mat: wireMat(0x38bdf8, 0.20), x: -20, y:  10, z: -10, sx: 0.003, sy: 0.005 },
    { geo: new THREE.OctahedronGeometry(2.5, 0),  mat: wireMat(0x818cf8, 0.18), x:  22, y:  -8, z:  -5, sx: 0.004, sy: 0.003 },
    { geo: new THREE.TorusGeometry(3, 0.6, 12, 40), mat: wireMat(0x38bdf8, 0.15), x:  10, y:  15, z: -20, sx: 0.002, sy: 0.006 },
    { geo: new THREE.TetrahedronGeometry(2, 0),   mat: wireMat(0x34d399, 0.18), x: -25, y: -12, z: -15, sx: 0.005, sy: 0.002 },
    { geo: new THREE.IcosahedronGeometry(1.5, 0), mat: wireMat(0x818cf8, 0.22), x:   5, y: -18, z:   0, sx: 0.006, sy: 0.004 },
    { geo: new THREE.OctahedronGeometry(1.8, 0),  mat: wireMat(0x38bdf8, 0.16), x: -10, y:  20, z: -25, sx: 0.003, sy: 0.007 },
    { geo: new THREE.TorusGeometry(2, 0.5, 10, 30), mat: wireMat(0x34d399, 0.12), x:  28, y:  12, z: -18, sx: 0.004, sy: 0.003 },
    { geo: new THREE.TetrahedronGeometry(2.5, 0), mat: wireMat(0x818cf8, 0.14), x: -18, y:  -5, z:   5, sx: 0.002, sy: 0.005 },
  ];

  const meshes = objectDefs.map(def => {
    const mesh = new THREE.Mesh(def.geo, def.mat);
    mesh.position.set(def.x, def.y, def.z);
    mesh.userData = { sx: def.sx, sy: def.sy };
    scene.add(mesh);
    return mesh;
  });

  // ── Large bg torus (very faint, huge) ─────────────────────────
  const bgTorus = new THREE.Mesh(
    new THREE.TorusGeometry(18, 0.5, 8, 80),
    wireMat(0x0ea5e9, 0.07)
  );
  bgTorus.rotation.x = Math.PI / 3;
  scene.add(bgTorus);

  // ── Mouse influence ───────────────────────────────────────────
  let mouseNX = 0, mouseNY = 0;
  document.addEventListener('mousemove', e => {
    mouseNX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseNY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // ── Resize handler ────────────────────────────────────────────
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ── Scroll parallax ──────────────────────────────────────────
  let scrollY = 0;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  // ── Render loop ───────────────────────────────────────────────
  let t = 0;
  function animate() {
    requestAnimationFrame(animate);
    t += 0.008;

    // Rotate each object
    meshes.forEach((mesh, i) => {
      mesh.rotation.x += mesh.userData.sx;
      mesh.rotation.y += mesh.userData.sy;
      // Gentle float up/down
      mesh.position.y += Math.sin(t + i * 1.3) * 0.008;
    });

    // Big bg torus slow spin
    bgTorus.rotation.z += 0.001;

    // Camera follows mouse slightly
    camera.position.x += (mouseNX * 3 - camera.position.x) * 0.02;
    camera.position.y += (-mouseNY * 2 - camera.position.y) * 0.02;
    // Scroll parallax
    camera.position.z = 30 - scrollY * 0.008;

    renderer.render(scene, camera);
  }
  animate();
})();

/* ================================================================
   2D PARTICLE SYSTEM (star field / floating dots)
   Pure canvas 2D for performance — no Three.js needed here
================================================================ */
(function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W = window.innerWidth;
  let H = window.innerHeight;
  canvas.width  = W;
  canvas.height = H;

  window.addEventListener('resize', () => {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width  = W;
    canvas.height = H;
    initParticleList();
  });

  // Particle definition
  const COLORS = ['rgba(56,189,248,', 'rgba(129,140,248,', 'rgba(52,211,153,'];
  let particles = [];

  function initParticleList() {
    particles = [];
    const count = Math.floor((W * H) / 14000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x:    Math.random() * W,
        y:    Math.random() * H,
        r:    Math.random() * 1.5 + 0.3,
        vx:   (Math.random() - 0.5) * 0.18,
        vy:   (Math.random() - 0.5) * 0.18,
        a:    Math.random() * 0.6 + 0.2,
        da:   (Math.random() - 0.5) * 0.004,
        col:  COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
  }

  initParticleList();

  // Draw connection lines between nearby particles
  function drawConnections() {
    const maxDist = 100;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx   = particles[i].x - particles[j].x;
        const dy   = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.12;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(56,189,248,${alpha})`;
          ctx.lineWidth   = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function render() {
    ctx.clearRect(0, 0, W, H);

    // Draw connections
    drawConnections();

    // Draw each particle
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.a += p.da;

      // Bounce off edges
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      // Fade in/out
      if (p.a <= 0.1 || p.a >= 0.9) p.da *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.col + p.a.toFixed(2) + ')';
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
})();