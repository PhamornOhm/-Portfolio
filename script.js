/* ===== Portfolio Data & DOM Logic ===== */

// ==========================================
// PORTFOLIO DATA
// ==========================================
const portfolioData = [
  // --- Websites ---
  {
    id: 1,
    category: 'website',
    title: 'เทมเพลตเว็บเติมเกม',
    desc: 'เว็บเติมเกมหน้าเดียว',
    fullDesc: 'เว็บเติมเกม ออกแบบและพัฒนาด้วย Reactjs, HTML, CSS และ JavaScript ล้วน รองรับ responsive design สำหรับทุกขนาดหน้าจอ พร้อม dark mode theme ที่ดูทันสมัยและเป็นมืออาชีพ',
    tags: ['HTML', 'CSS', 'JavaScript'],
    thumbnail: 'assets/thumbs/KamuiBux.png',
    link: 'https://kamuibux-5a159.firebaseapp.com/',
    type: 'website'
  },
  {
    id: 2,
    category: 'website',
    title: 'เว็บไซต์ร้านค้าขายของชำ',
    desc: 'เว็บไซต์สำหรับร้านค้าขายของชำ กรณีศึกษาร้านน้องออม',
    fullDesc: 'เว็บไซต์สำหรับร้านค้าขายของชำ กรณีศึกษาร้านน้องออม แก้ไขปัญหาร้านชำยอดขายน้อยลง เพราะมีเซเว่นมาเปิดใกล้ๆ หรือร้านคู่แข่งเพิ่มขึ้น',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'php', 'sql'],
    thumbnail: 'assets/thumbs/nongaom.png',
    link: 'http://nongaomshop.42web.io/',
    type: 'website'
  },
  {
    id: 3,
    category: 'website',
    title: 'NoteProject',
    desc: 'เว็บไซต์สำหรับไว้โน้ตสำคัญต่างๆ ',
    fullDesc: 'เว็บไซต์สำหรับไว้โน้ตสำคัญต่างๆ สามารถอัปโหลดไฟล์ได้หลายรูปแบบ มีฟังก์ชั่นหลากหลาย และมี AI Agents สำหรับสรุปบทความ Login ผ่าน github ได้',
    tags: ['HTML', 'CSS', 'JavaScript'],
    thumbnail: 'assets/thumbs/note.png',
    link: 'https://note-v2-git-main-phamornohms-projects.vercel.app/',
    type: 'website'
  },
  {
    id: 14,
    category: 'website',
    title: 'Memories Project',
    desc: 'เว็บไซต์รวมรูปความทรงจำต่างๆ กับเพื่อนๆ ',
    fullDesc: 'เว็บไซต์รวมรูปภาพความทรงจำต่างๆ กับเพื่อนๆ โปรเจคนี้ทำขึ้นเพื่อเก็บความทรงจำดีๆ กับเพื่อนๆ และยังสามารถเก็บรูปภาพที่เกี่ยวกับตนเองได้อีกด้วย',
    tags: ['HTML', 'CSS', 'JavaScript'],
    thumbnail: 'assets/thumbs/memories.png',
    link: 'https://memories-pearl-beta.vercel.app/',
    type: 'website'
  },
  {
    id: 16,
    category: 'website',
    title: 'เทคนิคเว็บแอป',
    desc: 'เว็บไซต์โปรเจคยืมคืนอุปกรณ์ โดยใช้บาร์โค้ด',
    fullDesc: 'เว็บไซต์โปรเจคยืมคืนอุปกรณ์ โดยใช้บาร์โค้ด สารมารถยิงบาร์โค้ดโดยตรงได้และหากไม่มีเครื่องสแกน สามารถพิมเลขบาร์โค้ดกด Enter ยืมได้เหมือนกัน มีหน้า Dashboard สำหรับดูสถิติการยืมและรายชื่อคนที่ยังไม่คืนได้',
    tags: ['HTML', 'CSS', 'JavaScript'],
    thumbnail: 'assets/thumbs/เทคนิคเว็บ.png',
    link: 'https://borrow.infinityfree.io/login.php',
    type: 'website'
  },
  {
    id: 19,
    category: 'website',
    title: 'เว็บโรงแรม บ้านเพื่อนรีสอร์ท (งานฟรีแลนซ์)',
    desc: 'เว็บไซต์จองโรงแรม',
    fullDesc: 'เว็บไซต์จองโรงแรม บ้านเพื่อนรีสอร์ท จังหวัดชลบุรีมีหน้าสำหรับจองห้องพัก และมีหน้าสำหรับผู้ดูแลระบบสำหรับจัดการห้องพักและผู้ใช้',
    tags: ['HTML', 'CSS', 'JavaScript', 'bootstrap', 'php', 'sql'],
    thumbnail: 'assets/thumbs/hotel.png',
    link: 'https://hotel.infinityfree.me/index.php',
    type: 'website'
  },


  // --- Videos ---
  {
    id: 4,
    category: 'video',
    title: 'สอนใช้งาน Microsoft Lists + PowerAutomate เพื่อส่งแจ้งเตือนอัติโนมัติผ่าน Email',
    desc: 'วิดีโอสอนใช้งาน Microsoft Lists + PowerAutomate เพื่อส่งแจ้งเตือนอัติโนมัติผ่าน Email',
    fullDesc: 'วิดีโอสอนใช้งาน Microsoft Lists + PowerAutomate เพื่อส่งแจ้งเตือนอัติโนมัติผ่าน Email สำหรับการศึกษา',
    tags: ['Davinci Resolve', 'Canva'],
    thumbnail: 'assets/thumbs/video-nsc.svg',
    videoUrl: 'https://www.youtube.com/embed/OF1aCJzgy3A',
    type: 'video'
  },
  {
    id: 5,
    category: 'video',
    title: 'การนำเสนอข่าวสารภัยคุกคามและความปลอดภัยต่อการพาณิชย์อิเล็กทรอนิกส์',
    desc: 'วิดีโอนำเสนอข่าวสารภัยคุกคามและความปลอดภัยต่อการพาณิชย์อิเล็กทรอนิกส์',
    fullDesc: 'วิดีโอนำเสนอข่าวสารภัยคุกคามและความปลอดภัยต่อการพาณิชย์อิเล็กทรอนิกส์',
    tags: ['Davinci Resolve', 'Canva'],
    thumbnail: 'assets/thumbs/video-ai.svg',
    videoUrl: 'https://www.youtube.com/embed/Kb6boTzaJJQ',
    type: 'video'
  },
  {
    id: 6,
    category: 'video',
    title: 'Video Demo โปรเจค Automated TikTok Data Extraction and AI Analysis Service',
    desc: 'วิดิโอเดโม่ สาธิตการทำงานของโปรเจค ',
    fullDesc: 'วิดิโอเดโม่ สาธิตการทำงานของโปรเจค กระบวนการทำงานขอ Automation Workflow การเลือกข้อมูลในแต่ละ Node และอธิบายการทำงานในแต่ละส่วนจนจบกระบวนการทำงาน',
    tags: ['Davinci Resolve'],
    thumbnail: 'assets/thumbs/video-event.svg',
    videoUrl: 'https://www.youtube.com/embed/pshUpQ2c1KQ',
    type: 'video'
  },
  {
    id: 13,
    category: 'video',
    title: 'สอนทำ Form',
    desc: 'วิดีสอนพื้นฐานการสร้าง Form สำหรับใช้งาน',
    fullDesc: 'วิดีโอสอนพื้นฐานการสร้าง Form สำหรับผู้เริ่มต้น และนำไปประยุกต์ใช้งานตามต้องการ',
    tags: ['Davinci Resolve'],
    thumbnail: 'assets/thumbs/video-event.svg',
    videoUrl: 'https://www.youtube.com/embed/tP8gXalh9fc',
    type: 'video'
  },

  // --- Graphic Design ---
  {
    id: 7,
    category: 'design',
    title: 'กราฟฟิค Thumbnail Youtube ',
    desc: ' Thumbnail Youtube สำหรับใช้ในวิดีโอ Youtube เรื่องผู้สูงอายุโดนคอลเซ็นเตอร์หลอก',
    fullDesc: ' Thumbnail Youtube สำหรับใช้ในวิดีโอ Youtube',
    tags: ['Photoshop', 'Canva'],
    thumbnail: 'assets/thumbs/โดนหลอก.jpg',
    type: 'design'
  },
  {
    id: 8,
    category: 'design',
    title: 'กราฟฟิค Thumnail สำหรับวิดิโอ สอนใช้งาน Microsoft Lists + PowerAutomate',
    desc: 'Thumbnail สำหรับวิดิโอ สอนใช้งาน Microsoft Lists + PowerAutomate',
    fullDesc: 'Thumbnail สำหรับวิดิโอ สอนใช้งาน Microsoft Lists + PowerAutomate',
    tags: ['Canva', 'Photoshop'],
    thumbnail: 'assets/thumbs/mslist+automate.jpg',
    type: 'design'
  },
  {
    id: 9,
    category: 'design',
    title: 'ภาพฟราฟฟิคขายของ Grow a garden',
    desc: 'ภาพฟราฟฟิคขายของ Grow a garden',
    fullDesc: 'ภาพฟราฟฟิคขายของ Grow a garden',
    tags: ['Canva'],
    thumbnail: 'assets/thumbs/ขายหมึก.jpg',
    type: 'design'
  },
  {
    id: 15,
    category: 'design',
    title: 'ภาพฟราฟฟิค รับซ่อมคอมพิวเตอร์',
    desc: 'ภาพฟราฟฟิค รับซ่อมคอมพิวเตอร์',
    fullDesc: 'ภาพฟราฟฟิค รับซ่อมคอมพิวเตอร์',
    tags: ['Canva'],
    thumbnail: 'assets/thumbs/รับซ่อมคอม.jpg',
    type: 'design'
  },
  {
    id: 17,
    category: 'design',
    title: 'ภาพฟราฟฟิค เมสซี่ GOAT',
    desc: 'ภาพฟราฟฟิค เมสซี่ GOAT',
    fullDesc: 'ภาพฟราฟฟิค เมสซี่ GOAT',
    tags: ['Photoshop'],
    thumbnail: 'assets/thumbs/messi goat.jpg',
    type: 'design'
  },
  {
    id: 18,
    category: 'design',
    title: 'ภาพฟราฟฟิค เมสซี่',
    desc: 'ภาพฟราฟฟิค เมสซี่',
    fullDesc: 'ภาพฟราฟฟิค เมสซี่',
    tags: ['Photoshop'],
    thumbnail: 'assets/thumbs/Leo messi.jpg',
    type: 'design'
  },


  // --- Demo Project ---
  {
    id: 10,
    category: 'ai',
    title: 'Video Demo โปรเจค Automated TikTok Data Extraction and AI Analysis Service',
    desc: 'Video Demo โปรเจค Automated TikTok Data Extraction and AI Analysis Service',
    fullDesc: 'วิดิโอเดโม่ สาธิตการทำงานของโปรเจค กระบวนการทำงานของ Automation Workflow การเลือกข้อมูลในแต่ละ Node และอธิบายการทำงานในแต่ละส่วนจนจบกระบวนการทำงาน',
    tags: ['โปรเจคจบ', 'Python', 'n8n', 'AI'],
    thumbnail: 'assets/thumbs/ai-chatbot.svg',
    videoUrl: 'https://www.youtube.com/embed/pshUpQ2c1KQ',
    type: 'ai'
  },
  {
    id: 11,
    category: 'ai',
    title: 'Video นำเสนอโครงการ SuperAI Engineer ',
    desc: 'วิดินำเสนอและเดโม่ SuperAI Engineer',
    fullDesc: 'รอเพิ่มรายละเอียด',
    tags: ['Demo', 'YOLO', 'Python'],
    thumbnail: 'assets/thumbs/ai-image.svg',
    videoUrl: 'https://www.youtube.com/embed/dYdTguOTX4E',
    type: 'ai'
  },

  {
    id: 15,
    category: 'ai',
    title: 'AUC2 - ระบบร้านขายของชำออนไลน์',
    desc: 'Demo ระบบร้านขายของชำออนไลน์ พัฒนาด้วย Google Apps Script',
    fullDesc: 'ระบบร้านขายของชำออนไลน์ (Online Grocery System) พัฒนาด้วย Google Apps Script โดยใช้ Google Sheets เป็นฐานข้อมูล มีระบบสมัครสมาชิก, ล็อกอิน, แสดงสินค้า, ตะกร้าสินค้า, สั่งซื้อ, ชำระเงิน, ระบบ Admin จัดการสินค้าและคำสั่งซื้อ, แจ้งเตือนทาง Email และรายงานรายได้',
    tags: ['Google Apps Script', 'Google Sheets', 'HTML', 'CSS', 'JavaScript'],
    thumbnail: 'assets/Aucc/3.หน้าสินค้าทั้งหมด.png',
    album: 'aucc',
    type: 'album'
  }
];

// ==========================================
// CERTIFICATE GALLERY DATA
// ==========================================
const certGalleryData = {
  nsc2024: {
    title: 'National Software Contest (NSC 2024)',
    images: [
      { src: 'assets/certs/NSC.png', caption: 'NSC 2024 - ภาพที่ 1' },
      { src: 'assets/certs/nsc2024-2.jpg', caption: 'NSC 2024 - ภาพที่ 2' },
      { src: 'assets/certs/nsc2024-3.jpg', caption: 'NSC 2024 - ภาพที่ 3' },
    ]
  },
  auc2025: {
    title: 'AUC2 2025',
    images: [
      { src: 'assets/certs/AUCC.jpg', caption: 'AUC2 2025 - ภาพที่ 1' },
      { src: 'assets/certs/AUC2 2025-2.jpg', caption: 'AUC2 2025 - ภาพที่ 2' },
      { src: 'assets/certs/AUC2 2025-3.jpg', caption: 'AUC2 2025 - ภาพที่ 3' },
    ]
  },
  superai2025: {
    title: 'SuperAI Engineer Season 5',
    images: [
      { src: 'assets/certs/SUPERAI.png', caption: 'SuperAI Engineer Season 5 - ภาพที่ 1' },
      { src: 'assets/certs/superai2025-2.jpg', caption: 'SuperAI Engineer Season 5 - ภาพที่ 2' },
      { src: 'assets/certs/superai2025-3.jpg', caption: 'SuperAI Engineer Season 5 - ภาพที่ 3' },
    ]
  },
  aucc: {
    title: 'AUC2 - ระบบร้านขายของชำออนไลน์',
    images: [
      { src: 'assets/Aucc/1 .หน้าสมัครสมาชิก.png', caption: 'หน้าสมัครสมาชิก' },
      { src: 'assets/Aucc/2.หน้าของการล็อคอิน.png', caption: 'หน้าของการล็อกอิน' },
      { src: 'assets/Aucc/3.หน้าสินค้าทั้งหมด.png', caption: 'หน้าสินค้าทั้งหมด' },
      { src: 'assets/Aucc/4.แสดงรายระเอียดของสินค้า.png', caption: 'แสดงรายละเอียดของสินค้า' },
      { src: 'assets/Aucc/5.หน้าของการสั่งซื้อสินค้า.png', caption: 'หน้าของการสั่งซื้อสินค้า' },
      { src: 'assets/Aucc/6.หน้าเพิ่มสินค้าลงตะกร้า.png', caption: 'หน้าเพิ่มสินค้าลงตะกร้า' },
      { src: 'assets/Aucc/7.หน้ารายการสั่งซื้อ.png', caption: 'หน้ารายการสั่งซื้อ' },
      { src: 'assets/Aucc/8.หน้ารายระเอียดของการสั่งซื้อและสถานะชำระเงิน.png', caption: 'หน้ารายละเอียดของการสั่งซื้อและสถานะชำระเงิน' },
      { src: 'assets/Aucc/9.หน้าส่วนของ admin.png', caption: 'หน้าส่วนของ Admin' },
      { src: 'assets/Aucc/10.หน้าฟอร์มของการเพิ่มสินค้าของ Admin.png', caption: 'หน้าฟอร์มของการเพิ่มสินค้าของ Admin' },
      { src: 'assets/Aucc/11.หน้าส่วนของการปรับสถานะการสั่งซื้อของ admin.png', caption: 'หน้าส่วนของการปรับสถานะการสั่งซื้อของ Admin' },
      { src: 'assets/Aucc/12.แจ้งเตือนทางอีเมล์เมื่อจัดส่งเรียบร้อยแล้ว.png', caption: 'แจ้งเตือนทางอีเมลเมื่อจัดส่งเรียบร้อยแล้ว' },
      { src: 'assets/Aucc/13.หน้าแสดงผู้ลงทะเบียนเข้าใช้เว็บทั้งหมดโดยแยกจากสถานะ.png', caption: 'หน้าแสดงผู้ลงทะเบียนเข้าใช้เว็บทั้งหมดโดยแยกจากสถานะ' },
      { src: 'assets/Aucc/14.หน้าแสดงรายได้ทั้งหมด ในแต่ละวัน และแยกวันที่.png', caption: 'หน้าแสดงรายได้ทั้งหมด ในแต่ละวัน และแยกวันที่' },
      { src: 'assets/Aucc/15.หน้าของ User หลังจากที่ปรับสถานะแล้ว.png', caption: 'หน้าของ User หลังจากที่ปรับสถานะแล้ว' },
      { src: 'assets/Aucc/16.หน้าของ User หลังจากปรับเป็นจัดส่งแล้ว.png', caption: 'หน้าของ User หลังจากปรับเป็นจัดส่งแล้ว' },
    ]
  }
};

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
  initGallery();
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
    const isVideo = !!item.videoUrl;
    const isAlbum = !!item.album;
    const categoryLabel = {
      website: 'Website',
      video: 'Video',
      design: 'Design',
      ai: 'Demo Project'
    };

    let mediaHtml;

    if (isAlbum) {
      // Album mosaic preview — show first 4 images in a grid
      const albumData = certGalleryData[item.album];
      const previewImages = albumData ? albumData.images.slice(0, 4) : [];
      const totalCount = albumData ? albumData.images.length : 0;
      mediaHtml = `<div class="portfolio-album-preview" onclick="openGallery('${item.album}')">
        <div class="album-mosaic">
          ${previewImages.map((img, i) => `<div class="album-mosaic-cell">
            <img src="${img.src}" alt="${img.caption}" loading="lazy">
          </div>`).join('')}
        </div>
        <div class="album-overlay">
          <div class="album-overlay-content">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <rect x="3" y="3" width="7" height="7" rx="1"/>
              <rect x="14" y="3" width="7" height="7" rx="1"/>
              <rect x="3" y="14" width="7" height="7" rx="1"/>
              <rect x="14" y="14" width="7" height="7" rx="1"/>
            </svg>
            <span class="album-count">${totalCount} รูปภาพ</span>
            <span class="album-cta">คลิกเพื่อดูอัลบั้ม</span>
          </div>
        </div>
      </div>`;
    } else if (isVideo) {
      mediaHtml = `<div class="portfolio-video">
           <iframe src="${item.videoUrl}" title="${item.title}" allowfullscreen loading="lazy"></iframe>
         </div>`;
    } else {
      mediaHtml = `<div class="portfolio-thumb">
           <img src="${item.thumbnail}" alt="${item.title}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'thumb-placeholder\\'><span class=\\'thumb-label\\'>${item.title}</span></div>'">
           <div class="portfolio-overlay">
             <button class="btn btn-primary btn-sm" onclick="openModal(${item.id})">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
               ดูรายละเอียด
             </button>
           </div>
         </div>`;
    }

    const onClickInfo = isAlbum ? `onclick="openGallery('${item.album}')"` : `onclick="openModal(${item.id})"`;

    return `
      <div class="portfolio-item ${isAlbum ? 'portfolio-item--album' : ''} reveal" data-category="${item.category}" data-id="${item.id}">
        <span class="portfolio-type-badge">${isAlbum ? 'Album' : categoryLabel[item.category]}</span>
        ${mediaHtml}
        <div class="portfolio-info" ${onClickInfo}>
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

  // If it's an album, open the gallery instead
  if (item.album) {
    openGallery(item.album);
    return;
  }

  const overlay = document.getElementById('modalOverlay');
  const modal = overlay.querySelector('.modal');

  const isVideo = !!item.videoUrl;

  const mediaHtml = isVideo
    ? `<iframe class="modal-video" src="${item.videoUrl}?autoplay=1" title="${item.title}" allowfullscreen></iframe>`
    : `<div class="modal-image-wrapper" title="คลิกเพื่อดูรูปขนาดเต็ม" onclick="openSingleImage('${item.thumbnail}', '${(item.title || '').replace(/'/g, "\\'")}')">
        <img class="modal-image" src="${item.thumbnail}" alt="${item.title}" onerror="this.style.display='none'">
        <div class="modal-image-hint">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
          คลิกเพื่อดูรูปขนาดเต็ม
        </div>
      </div>`;

  let actionsHtml = '';
  if (item.link) {
    actionsHtml += `<a href="${item.link}" target="_blank" class="btn btn-primary">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      ${isVideo ? 'ดูวิดีโอเต็ม' : 'ดูเว็บไซต์จริง'}
    </a>`;
  }

  // Add full image view action button if image exists
  if (!isVideo && item.thumbnail) {
    actionsHtml += `<button class="btn btn-secondary" onclick="openSingleImage('${item.thumbnail}', '${(item.title || '').replace(/'/g, "\\'")}')">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
      ดูรูปภาพขนาดเต็ม
    </button>`;
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
// CERTIFICATE GALLERY
// ==========================================
let currentGallery = null;
let currentImageIndex = 0;

function initGallery() {
  const overlay = document.getElementById('galleryOverlay');
  if (!overlay) return;

  const closeBtn = overlay.querySelector('.gallery-close');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');

  closeBtn.addEventListener('click', closeGallery);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeGallery();
  });

  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateGallery(-1);
  });

  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateGallery(1);
  });

  document.addEventListener('keydown', (e) => {
    if (!currentGallery) return;
    if (e.key === 'Escape') closeGallery();
    if (e.key === 'ArrowLeft') navigateGallery(-1);
    if (e.key === 'ArrowRight') navigateGallery(1);
  });
}

function openSingleImage(src, caption) {
  if (!src) return;
  currentGallery = {
    title: caption || '',
    images: [{ src: src, caption: caption || '' }]
  };
  currentImageIndex = 0;

  renderGalleryThumbnails();
  updateGalleryImage();

  const overlay = document.getElementById('galleryOverlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function openGallery(certId) {
  const data = typeof certId === 'string' ? certGalleryData[certId] : certId;
  if (!data || !data.images || !data.images.length) return;

  currentGallery = data;
  currentImageIndex = 0;

  renderGalleryThumbnails();
  updateGalleryImage();

  const overlay = document.getElementById('galleryOverlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeGallery() {
  const overlay = document.getElementById('galleryOverlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
  currentGallery = null;
}

function navigateGallery(direction) {
  if (!currentGallery || !currentGallery.images.length) return;
  const total = currentGallery.images.length;
  currentImageIndex = (currentImageIndex + direction + total) % total;
  updateGalleryImage();
}

function updateGalleryImage() {
  if (!currentGallery || !currentGallery.images[currentImageIndex]) return;

  const img = document.getElementById('galleryImage');
  const caption = document.getElementById('galleryCaption');
  const counter = document.getElementById('galleryCounter');
  const current = currentGallery.images[currentImageIndex];

  // Fade transition
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = current.src;
    img.alt = current.caption;
    img.style.opacity = '1';
  }, 150);

  caption.textContent = current.caption || '';

  if (counter) {
    if (currentGallery.images.length > 1) {
      counter.textContent = `${currentImageIndex + 1} / ${currentGallery.images.length}`;
      counter.style.display = 'block';
    } else {
      counter.style.display = 'none';
    }
  }

  // Update active thumbnail
  document.querySelectorAll('.gallery-thumb').forEach((thumb, i) => {
    thumb.classList.toggle('active', i === currentImageIndex);
  });
}

function renderGalleryThumbnails() {
  const container = document.getElementById('galleryThumbnails');
  const prevBtn = document.getElementById('galleryPrev');
  const nextBtn = document.getElementById('galleryNext');
  if (!currentGallery) return;

  const showNav = currentGallery.images.length > 1;
  if (prevBtn) prevBtn.style.display = showNav ? 'flex' : 'none';
  if (nextBtn) nextBtn.style.display = showNav ? 'flex' : 'none';

  if (container) {
    container.style.display = showNav ? 'flex' : 'none';
    if (showNav) {
      container.innerHTML = currentGallery.images.map((img, i) =>
        `<img class="gallery-thumb ${i === currentImageIndex ? 'active' : ''}" 
              src="${img.src}" alt="${img.caption}" 
              onclick="event.stopPropagation(); currentImageIndex = ${i}; updateGalleryImage();">`
      ).join('');
    }
  }
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
