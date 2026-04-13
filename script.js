// ── Project data ──
const projects = {
  bilt: {
    title: 'BILT Promotional Website Design',
    tags: ['Web Design', 'Visual Design', 'Figma', 'Prototyping'],
    img: '/assets/BILT-Home-Page.png',
    imgAlt: 'BILT Promotional Website',
    figmaUrl: 'https://www.figma.com/proto/wXwps6STZ5bed9gXga2lVU/BILT-Credit-Card-Promotional-Website?node-id=1-4&starting-point-node-id=1%3A4&t=QeEZfL0Bp3maje2d-1',
    body: `
      <h4>Overview</h4>
      <p>I was tasked with designing a promotional website for any product of my choosing. I picked the BILT Credit Card because it's the only credit card that lets you earn points on rent payments, which felt like a genuinely interesting design challenge. Most people pay rent every month and get nothing for it, so the product has a real hook worth communicating well.</p>
      <hr class="modal-divider" />
      <h4>The Challenge</h4>
      <p>The assignment required applying specific design principles throughout the work, things like Fitts' Law, the Multimedia Principle, and others. The tricky part was making those decisions feel purposeful in context, not just tacked on to meet a rubric. I also had to think about how to explain a slightly unfamiliar product concept without losing people in the first few seconds.</p>
      <hr class="modal-divider" />
      <h4>Process</h4>
      <ul>
        <li>Started with a proposal document laying out the product, the audience, and which principles I planned to use</li>
        <li>Moved into Figma and built out the design across multiple pages</li>
        <li>Presented at several points during the semester and revised based on feedback each time</li>
      </ul>
      <hr class="modal-divider" />
      <h4>Outcome</h4>
      <p>The final prototype came together as a clean, focused promotional site that I was happy with. Going through multiple rounds of feedback pushed me to justify my decisions more clearly and catch things I had stopped noticing. It also made me more comfortable presenting work in progress, not just finished designs.</p>
    `
  },
  travelfy: {
    title: 'Travel Website Design',
    tags: ['UI Design', 'UX Research', 'Figma', 'Prototyping'],
    img: '/assets/Travelfy-Home.png',
    imgAlt: 'Travelfy Travel Website',
    figmaUrl: 'https://www.figma.com/proto/BUnaqfhfazK8bj9XJCO91U/COPY---4200---Variables-2-Assignment--Community---Copy-?node-id=12005-196&t=IYZw9FqpJCyTz7pX-1&scaling=scale-down&content-scaling=fixed&page-id=12005%3A192&starting-point-node-id=12005%3A196&show-proto-sidebar=1',
    body: `
      <h4>Overview</h4>
      <p>This was an assignment focused on Figma variables and auto layout, using a travel website as the design context. The goal wasn't just to make something that looked good, but to build it in a way that was technically sound and scalable.</p>
      <hr class="modal-divider" />
      <h4>The Challenge</h4>
      <p>The assignment required designing across mobile, tablet, and desktop viewports while keeping the layout consistent and readable at every size. On top of that, I had to use variables and modes to handle things like the header nav adapting between breakpoints, rather than rebuilding each version by hand. I also needed to prototype a working light and dark mode toggle using variable modes.</p>
      <hr class="modal-divider" />
      <h4>Process</h4>
      <ul>
        <li>Set up a variable system to manage color tokens across light and dark modes</li>
        <li>Used auto layout throughout so components could flex and reflow across screen sizes without breaking</li>
        <li>Built the nav bar using variables so it could adapt automatically rather than being duplicated for each viewport</li>
        <li>Wired up a mode toggle button in the prototype to simulate switching between light and dark mode</li>
      </ul>
      <hr class="modal-divider" />
      <h4>Outcome</h4>
      <p>Working with variables made a real difference in how the prototype held together across viewports. Having a light and dark mode that actually switched in the prototype made it feel much closer to a real product. These are techniques I want to keep using because they make designs easier to maintain and hand off, not just easier to present.</p>
    `
  },
  recipe: {
    title: 'Recipe Website Design',
    tags: ['UI Design', 'Design Systems', 'Figma', 'Components'],
    img: 'assets/Recipe-Website.png',
    imgAlt: 'Recipe Website Design',
    figmaUrl: 'https://www.figma.com/design/aLrKkLLcnT18jK0TCs1FND/4200---Final-Project--Community-?node-id=14013-97&t=JYJN6vnekbRiIohX-1',
    body: `
      <h4>Overview</h4>
      <p>This was the final project for the semester, bringing together everything covered in the course. The brief was to design a recipe website, but the real focus was on building it properly using components, auto layout, variables, and variants rather than just making it look good on the surface.</p>
      <hr class="modal-divider" />
      <h4>What Went Into It</h4>
      <ul>
        <li>Built a component system to keep the design consistent and avoid repeating work across screens</li>
        <li>Used interactive states and variants to show how things like filtering and favoriting would actually feel, not just what they looked like at rest</li>
        <li>Auto layout handled spacing and reflow, which made adjusting layouts much less tedious</li>
        <li>Variables for colors and type made light and dark mode switching straightforward to manage</li>
      </ul>
      <hr class="modal-divider" />
      <h4>Takeaway</h4>
      <p>The biggest shift for me was learning to think in systems instead of designing screen by screen. I had to consider what the user would do next, not just how a single state looked in isolation. By the end I felt noticeably better at planning designs upfront, keeping files organized, and building things that could actually flex instead of breaking every time something changed.</p>
    `
  }
};

// ── Modal logic ──
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalTags = document.getElementById('modal-tags');
const modalImg = document.getElementById('modal-img');
const modalBody = document.getElementById('modal-body');
const modalFigmaLink = document.getElementById('modal-figma-link');
const modalClose = document.querySelector('.modal-close');

function openProject(key) {
  const p = projects[key];
  if (!p) return;
  modalTitle.textContent = p.title;
  modalImg.src = p.img;
  modalImg.alt = p.imgAlt;
  modalBody.innerHTML = p.body;
  modalFigmaLink.href = p.figmaUrl;
  modalTags.innerHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-panel').scrollTop = 0;
}

function closeModal() {
  modal.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ── Hamburger menu ──
const hamburger = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── Nav shadow on scroll ──
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// ── Fade-in on scroll ──
const fadeEls = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeEls.forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Add fade-in styles dynamically
const style = document.createElement('style');
style.textContent = `
  .fade-in { opacity: 0; transform: translateY(24px); transition: opacity .6s ease, transform .6s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);

// ── Smooth active nav link highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav ul a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}` ? 'var(--accent2)' : '';
  });
});