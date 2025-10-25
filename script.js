// Basic interactivity for the portfolio page
// Update these entries to reflect your actual project details and links
const projectData = [
  {
    id: 'risk-model',
    title: 'Traffic Risk Classifier',
    desc: 'Lightweight classifier that predicts short-term collision risk from telemetry and historic crash patterns.',
    repo: 'https://github.com/your-username/traffic-risk-classifier',
    demo: '#',
    tags: ['ML', 'Edge', 'Telemetry']
  },
  {
    id: 'edge-alert',
    title: 'Edge Alert Demo',
    desc: 'Prototype that simulates vehicle-to-infrastructure alerts for dangerous intersections.',
    repo: 'https://github.com/your-username/edge-alert-demo',
    demo: '#',
    tags: ['Sensors', 'Prototype']
  },
  {
    id: 'policy-note',
    title: 'Policy & Human Factors',
    desc: 'Short study on human factors and how AI recommendations should be presented to drivers responsibly.',
    repo: 'https://github.com/your-username/policy-note',
    demo: '#',
    tags: ['Policy', 'HCI']
  }
];

function el(q){return document.querySelector(q)}
function elAll(q){return Array.from(document.querySelectorAll(q))}

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  el('#footerYear').textContent = new Date().getFullYear();

  // Toggle nav for mobile
  const navToggle = el('#navToggle');
  navToggle && navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
    navToggle.classList.toggle('active');
  });

  // Populate project cards
  const cardsRoot = el('#projectCards');
  if (cardsRoot) {
    projectData.forEach(p => {
      const card = document.createElement('article');
      card.className = 'card';
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="meta-row">
          <small>${p.tags.join(' • ')}</small>
          <span>
            <a href="${p.repo}" target="_blank" rel="noopener">repo</a>
            <button class="btn-mini" data-id="${p.id}" aria-label="open">open</button>
          </span>
        </div>
      `;
      cardsRoot.appendChild(card);
    });
  }

  // Click handlers for each open button to show modal with more info
  document.body.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.btn-mini');
    if (btn) {
      const id = btn.dataset.id;
      openProjectModal(id);
    }
  });

  // Demo open
  el('#openDemo') && el('#openDemo').addEventListener('click', () => {
    openProjectModal(projectData[0].id);
  });

  // Modal close
  const modal = el('#modal');
  const modalClose = el('#modalClose');
  modalClose && modalClose.addEventListener('click', closeModal);
  modal && modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Contact form
  const contactForm = el('#contactForm');
  const formNote = el('#formNote');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = el('#name').value.trim();
      const email = el('#email').value.trim();
      const message = el('#message').value.trim();
      if (!name || !email || !message) {
        formNote.textContent = 'Please fill all fields before sending.';
        return;
      }
      // Simulate sending and reset
      formNote.textContent = 'Message ready to send. Add your own backend to actually submit.';
      contactForm.reset();
    });
    el('#resetBtn') && el('#resetBtn').addEventListener('click', () => {
      contactForm.reset();
      formNote.textContent = '';
    });
  }

  // Download CV button - placeholder action
  el('#download-btn') && el('#download-btn').addEventListener('click', (e) => {
    e.preventDefault();
    alert('Drop your CV file into the repo and update the href of this button to enable downloads.');
  });

  // Keyboard: close modal on Esc
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.style.display === 'flex') closeModal();
  });
});

function openProjectModal(id) {
  const project = projectData.find(p => p.id === id);
  if (!project) return;
  const modal = el('#modal');
  const modalBody = el('#modalBody');
  modalBody.innerHTML = `
    <h2>${project.title}</h2>
    <p>${project.desc}</p>
    <p><strong>Tags:</strong> ${project.tags.join(', ')}</p>
    <p>
      <a href="${project.repo}" target="_blank" rel="noopener">Open repo</a>
      ${project.demo ? ` • <a href="${project.demo}" target="_blank" rel="noopener">Open demo</a>` : ''}
    </p>
    <div style="margin-top:12px">
      <img src="https://placehold.co/820x320?text=${encodeURIComponent(project.title)}" alt="${project.title}" style="width:100%;border-radius:8px" />
    </div>
  `;
  modal.style.display = 'flex';
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal(){
  const modal = el('#modal');
  if (!modal) return;
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden', 'true');
}
