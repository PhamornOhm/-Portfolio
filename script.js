/* ===== Portfolio Data & DOM Logic ===== */

// ==========================================
// PORTFOLIO DATA
// ==========================================
const portfolioData = [
  // --- Websites ---
  {
    id: 1,
    category: 'website',
    title: 'Personal Portfolio Website',
    desc: 'เว็บไซต์แสดงผลงานส่วนตัวออกแบบด้วย HTML/CSS/JS พร้อม responsive design และ dark mode theme',
    fullDesc: 'เว็บไซต์แสดงผลงานส่วนตัวที่ออกแบบและพัฒนาด้วย HTML, CSS และ JavaScript ล้วน รองรับ responsive design สำหรับทุกขนาดหน้าจอ พร้อม dark mode theme ที่ดูทันสมัยและเป็นมืออาชีพ',
    tags: ['HTML', 'CSS', 'JavaScript'],
    thumbnail: 'assets/thumbs/portfolio-web.svg',
    link: 'https://kamuibux-5a159.firebaseapp.com/',
    type: 'website'
  },
  {
    id: 2,
    category: 'website',
    title: 'E-Commerce Landing Page',
    desc: 'หน้า Landing Page สำหรับร้านค้าออนไลน์ ออกแบบให้ดึงดูดลูกค้าด้วย UI/UX ที่ทันสมัย',
    fullDesc: 'ออกแบบและพัฒนาหน้า Landing Page สำหรับร้านค้าออนไลน์ เน้น Conversion Rate Optimization พร้อม Call-to-Action ที่ชัดเจน และ responsive design',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    thumbnail: 'assets/thumbs/ecommerce.svg',
    link: '#',
    type: 'website'
  },
  {
    id: 3,
    category: 'website',
    title: 'University Club Website',
    desc: 'เว็บไซต์ชมรมมหาวิทยาลัย รวมข่าวกิจกรรม สมาชิก และระบบลงทะเบียน',
    fullDesc: 'พัฒนาเว็บไซต์สำหรับชมรมมหาวิทยาลัย มีระบบจัดการข่าวกิจกรรม แสดงรายชื่อสมาชิก และระบบลงทะเบียนเข้าร่วมกิจกรรม',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    thumbnail: 'assets/thumbs/club-web.svg',
    link: '#',
    type: 'website'
  },

  // --- Videos ---
  {
    id: 4,
    category: 'video',
    title: 'NSC 2024 Project Showcase',
    desc: 'วิดีโอนำเสนอโปรเจกต์สำหรับการแข่งขัน National Software Contest 2024',
    fullDesc: 'วิดีโอนำเสนอโปรเจกต์สำหรับการแข่งขัน NSC 2024 รวมถึงการอธิบาย concept, architecture และ demo การใช้งานจริง',
    tags: ['Premiere Pro', 'After Effects'],
    thumbnail: 'assets/thumbs/video-nsc.svg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video'
  },
  {
    id: 5,
    category: 'video',
    title: 'AI Research Presentation',
    desc: 'คลิปนำเสนองานวิจัย AI ในหัวข้อ Machine Learning Application',
    fullDesc: 'วิดีโอนำเสนองานวิจัยด้าน AI โดยเน้นการประยุกต์ใช้ Machine Learning เพื่อแก้ปัญหาในชีวิตจริง',
    tags: ['Premiere Pro', 'Canva'],
    thumbnail: 'assets/thumbs/video-ai.svg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video'
  },
  {
    id: 6,
    category: 'video',
    title: 'University Event Highlight',
    desc: 'ไฮไลท์กิจกรรมมหาวิทยาลัย รวมภาพบรรยากาศและสัมภาษณ์ผู้เข้าร่วม',
    fullDesc: 'วิดีโอไฮไลท์กิจกรรมของมหาวิทยาลัย ตัดต่อด้วย Premiere Pro พร้อม motion graphics จาก After Effects',
    tags: ['Premiere Pro', 'After Effects', 'Photoshop'],
    thumbnail: 'assets/thumbs/video-event.svg',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    type: 'video'
  },

  // --- Graphic Design ---
  {
    id: 7,
    category: 'design',
    title: 'Event Poster Collection',
    desc: 'คอลเลกชันโปสเตอร์กิจกรรม ออกแบบด้วย Photoshop และ Illustrator',
    fullDesc: 'ออกแบบโปสเตอร์สำหรับกิจกรรมต่างๆ ของมหาวิทยาลัยและองค์กร ใช้ Adobe Photoshop และ Illustrator ในการสร้างงานที่สื่อสารได้ชัดเจนและดึงดูดสายตา',
    tags: ['Photoshop', 'Illustrator'],
    thumbnail: 'assets/thumbs/design-poster.svg',
    type: 'design'
  },
  {
    id: 8,
    category: 'design',
    title: 'Social Media Content Design',
    desc: 'งานออกแบบคอนเทนต์ Social Media สำหรับแบรนด์และองค์กร',
    fullDesc: 'ออกแบบคอนเทนต์สำหรับ Social Media หลายแพลตฟอร์ม รวมถึง Facebook, Instagram, และ Line ใช้ Canva และ Photoshop',
    tags: ['Canva', 'Photoshop'],
    thumbnail: 'assets/thumbs/design-social.svg',
    type: 'design'
  },
  {
    id: 9,
    category: 'design',
    title: 'Infographic Design',
    desc: 'อินโฟกราฟิกสรุปข้อมูลเชิงสถิติและความรู้ในรูปแบบที่เข้าใจง่าย',
    fullDesc: 'ออกแบบอินโฟกราฟิกเพื่อนำเสนอข้อมูลที่ซับซ้อนในรูปแบบที่เข้าใจง่ายและน่าสนใจ เหมาะสำหรับการเผยแพร่บน Social Media',
    tags: ['Canva', 'Illustrator'],
    thumbnail: 'assets/thumbs/design-infographic.svg',
    type: 'design'
  },

  // --- AI & Software ---
  {
    id: 10,
    category: 'ai',
    title: 'AI Chatbot Assistant',
    desc: 'แชทบอท AI สำหรับตอบคำถามอัตโนมัติ ใช้ NLP ในการประมวลผลภาษาไทย',
    fullDesc: 'พัฒนาแชทบอท AI ที่สามารถเข้าใจและตอบคำถามภาษาไทยได้อย่างแม่นยำ ใช้เทคนิค Natural Language Processing และ Machine Learning',
    tags: ['Python', 'TensorFlow', 'NLP'],
    thumbnail: 'assets/thumbs/ai-chatbot.svg',
    link: '#',
    type: 'ai'
  },
  {
    id: 11,
    category: 'ai',
    title: 'Image Classification Model',
    desc: 'โมเดล AI สำหรับจำแนกรูปภาพ ใช้ Deep Learning (CNN)',
    fullDesc: 'สร้างโมเดล Deep Learning สำหรับจำแนกรูปภาพโดยใช้ Convolutional Neural Network (CNN) ฝึกด้วย dataset ขนาดใหญ่',
    tags: ['Python', 'PyTorch', 'OpenCV'],
    thumbnail: 'assets/thumbs/ai-image.svg',
    link: '#',
    type: 'ai'
  },
  {
    id: 12,
    category: 'ai',
    title: 'Data Analytics Dashboard',
    desc: 'แดชบอร์ดวิเคราะห์ข้อมูลแบบ Real-time พร้อม Visualization ที่สวยงาม',
    fullDesc: 'พัฒนาแดชบอร์ดสำหรับวิเคราะห์ข้อมูลแบบ Real-time โดยมีกราฟและ chart ที่หลากหลาย ช่วยให้เข้าใจข้อมูลได้ง่าย',
    tags: ['Python', 'Pandas', 'Plotly', 'Streamlit'],
    thumbnail: 'assets/thumbs/ai-dashboard.svg',
    link: '#',
    type: 'ai'
  }
];

// ==========================================
// DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  renderPortfolio();
  initPortfolioFilters();
  initModal();
  initContactForm();
  initSmoothScroll();
});

// ==========================================
// NAVBAR
// ==========================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    updateActiveNav();
  });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('active');
  });

  // Close menu on link click
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      toggle.classList.remove('active');
      links.classList.remove('active');
    });
  });
}

function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// ==========================================
// SCROLL REVEAL ANIMATION
// ==========================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));
}

// ==========================================
// PORTFOLIO RENDER
// ==========================================
function renderPortfolio() {
  const grid = document.getElementById('portfolioGrid');
  if (!grid) return;

  grid.innerHTML = portfolioData.map(item => {
    const isVideo = item.category === 'video';
    const categoryLabel = {
      website: '🌐 Website',
      video: '🎬 Video',
      design: '🎨 Design',
      ai: '🤖 AI & Software'
    };

    const mediaHtml = isVideo
      ? `<div class="portfolio-video">
           <iframe src="${item.videoUrl}" title="${item.title}" allowfullscreen loading="lazy"></iframe>
         </div>`
      : `<div class="portfolio-thumb">
           <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'thumb-placeholder\\'><span class=\\'thumb-icon\\'>${item.category === 'website' ? '🌐' : item.category === 'design' ? '🎨' : '🤖'}</span><span class=\\'thumb-label\\'>${item.title}</span></div>'">
           <div class="portfolio-overlay">
             <button class="btn btn-primary btn-sm" onclick="openModal(${item.id})">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
               ดูรายละเอียด
             </button>
           </div>
         </div>`;

    return `
      <div class="portfolio-item reveal" data-category="${item.category}" data-id="${item.id}">
        <span class="portfolio-type-badge">${categoryLabel[item.category]}</span>
        ${mediaHtml}
        <div class="portfolio-info" onclick="openModal(${item.id})">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <div class="portfolio-tags">
            ${item.tags.map(t => `<span class="portfolio-tag">${t}</span>`).join('')}
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Re-observe new elements
  setTimeout(() => initScrollReveal(), 100);
}

// ==========================================
// PORTFOLIO FILTERS
// ==========================================
function initPortfolioFilters() {
  const btns = document.querySelectorAll('.filter-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      const items = document.querySelectorAll('.portfolio-item');

      items.forEach(item => {
        if (filter === 'all' || item.dataset.category === filter) {
          item.classList.remove('hidden');
          item.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
}

// ==========================================
// MODAL
// ==========================================
function initModal() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.querySelector('.modal-close');

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}

function openModal(id) {
  const item = portfolioData.find(p => p.id === id);
  if (!item) return;

  const overlay = document.getElementById('modalOverlay');
  const modal = overlay.querySelector('.modal');

  const isVideo = item.category === 'video';

  const mediaHtml = isVideo
    ? `<iframe class="modal-video" src="${item.videoUrl}?autoplay=1" title="${item.title}" allowfullscreen></iframe>`
    : `<img class="modal-image" src="${item.thumbnail}" alt="${item.title}" onerror="this.style.display='none'">`;

  let actionsHtml = '';
  if (item.link) {
    actionsHtml += `<a href="${item.link}" target="_blank" class="btn btn-primary">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      ${isVideo ? 'ดูวิดีโอเต็ม' : 'ดูเว็บไซต์จริง'}
    </a>`;
  }

  modal.querySelector('.modal-header').innerHTML = mediaHtml;
  modal.querySelector('.modal-body').innerHTML = `
    <h2>${item.title}</h2>
    <p class="modal-desc">${item.fullDesc}</p>
    <div class="portfolio-tags">
      ${item.tags.map(t => `<span class="portfolio-tag">${t}</span>`).join('')}
    </div>
    <div class="modal-actions">${actionsHtml}</div>
  `;

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';

  // Stop video if playing
  const iframe = overlay.querySelector('iframe');
  if (iframe) iframe.src = '';
}

// ==========================================
// CONTACT FORM
// ==========================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');

    // Simple feedback animation
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
      ส่งข้อความสำเร็จ! ขอบคุณครับ ${name}
    `;
    btn.style.background = 'linear-gradient(135deg, #34d399, #10b981)';

    setTimeout(() => {
      btn.innerHTML = originalText;
      btn.style.background = '';
      form.reset();
    }, 3000);
  });
}

// ==========================================
// SMOOTH SCROLL
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ==========================================
// ANIMATION KEYFRAMES (injected via JS)
// ==========================================
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);
