// Project Data extracted from Django_Projects_Details.txt
// Ordered as requested:
// 1. Tech Glossary Hub -- Django Version
// 2. Smart Quote Generator
// 3. Sambar Handbook
// 4. Translator Web Application
// 5. LinguaFlow | Full-Stack Language Translator
// 6. Developer Productivity Suite -- Django Version
const projects = [
  {
    id: "tech-glossary-hub",
    title: "Tech Glossary Hub -- Django Version",
    series: "Part of TGH series",
    category: "Full-Stack / Reference",
    description: "Tech Glossary Hub is a modern Django-powered learning platform designed to help students, beginners, and developers understand technical concepts through simple definitions, detailed explanations, practical examples, and organized categories. It includes **150+ technical terms across 7 learning categories**, with features such as search, difficulty levels, featured terms, related terms, and pagination. The project demonstrates **Django MVT architecture, Django ORM, REST API development, custom administration, Bootstrap 5, responsive UI design, and SQLite database integration.",
    icon: "bi-journal-code",
    tags: ["Django", "Python", "TGH Series", "Render", "Documentation"],
    liveUrl: "https://tech-glossary-hub.onrender.com/",
    githubUrl: "https://github.com/charanepuri/tech-glossary-hub",
    docUrl: "https://drive.google.com/file/d/1r-Ta72GE2tjw4qrWlLgztVnjFiAabhdE/view",
    linkedinPosts: [
      { label: "Launch Post", url: "https://www.linkedin.com/posts/charan-teja-972aa9231_tech-glossary-hub-is-now-live-activity-7485551744064749568-i__D?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs" },
      { label: "Update 2", url: "https://www.linkedin.com/posts/charan-teja-972aa9231_tech-glossary-hub-progress-update-2-activity-7484464550013067264-lKgf?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs" },
      { label: "Update 1", url: "https://www.linkedin.com/posts/charan-teja-972aa9231_tech-glossary-hub-progress-update-1-activity-7482807386429100034-EJvP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADoBNCYBh01V0moRjH4J7yxRxtf-MNb6vQs" }
    ],
    status: "Active"
  },
  {
    id: "smart-quote-generator",
    title: "Smart Quote Generator",
    category: "Utility",
    description: "Smart Quote Generator is a modern Django web application that generates inspirational quotes through the **DummyJSON Quotes API** with a visually engaging glassmorphism interface. It allows users to generate, copy, and save favorite quotes while providing dark mode, toast notifications, generation tracking, and responsive design. The project demonstrates **Django routing, API integration with JavaScript Fetch API, Local Storage, static file management, responsive UI development, and deployment preparation**.",
    icon: "bi-chat-quote-fill",
    tags: ["Django", "Python", "Generator", "Render"],
    liveUrl: "https://django-smart-quote-generator.onrender.com/",
    githubUrl: "https://github.com/charanepuri/django-smart-quote-generator",
    docUrl: null,
    linkedinPosts: [],
    status: "Active"
  },
  {
    id: "sambar-handbook",
    title: "Sambar Handbook",
    category: "Web Guide",
    description: "A digital handbook and culinary guide web application crafted with Django, providing structured and accessible recipe resources.",
    icon: "bi-book-half",
    tags: ["Django", "Python", "Guide", "Render"],
    liveUrl: "https://sambar-handbook.onrender.com/",
    githubUrl: "https://github.com/charanepuri/sambar-handbook",
    docUrl: null,
    linkedinPosts: [],
    status: "Active"
  },
  {
    id: "translator-app",
    title: "Translator Web Application",
    category: "Web Application",
    description: "Translator Web Application is a modern Django-based multilingual application that enables users to translate text between 100+ world languages with auto-detection and an easy-to-use interface. It includes features such as language swapping, one-click copying, dark/light themes, responsive design, and fast translation powered by the Deep Translator library. The project demonstrates Django views and routing, third-party library integration, form handling, JavaScript DOM manipulation, responsive UI/UX design, and full-stack web development.",
    icon: "bi-globe2",
    tags: ["Django", "Python", "Deep Translator", "Multilingual", "Render"],
    liveUrl: "https://translator-web-application-django.onrender.com/",
    githubUrl: "https://github.com/charanepuri/translator-web-application-django",
    docUrl: "https://translator-web-application-django.onrender.com/static/translator/TranslatorWebApplication.pdf",
    linkedinPosts: [
      { label: "Case Study Post", url: "https://lnkd.in/p/dz-vgKPr" }
    ],
    status: "Active"
  },
  {
    id: "linguaflow",
    title: "LinguaFlow | Full-Stack Language Translator",
    category: "Full-Stack",
    description: "LinguaFlow is a full-stack Django-based language translation application that allows users to translate text across multiple supported languages and listen to translated content using text-to-speech. It integrates GoogleTranslator through Deep Translator and gTTS with a responsive interface, automatic language detection, loading states, validation, and error handling. The project demonstrates Django backend development, JSON-based API communication, third-party service integration, JavaScript Fetch API, browser audio handling, reusable templates, and responsive frontend development.",
    icon: "bi-translate",
    tags: ["Django", "Python", "Full-Stack", "gTTS", "Deep Translator", "Render"],
    liveUrl: "https://linguaflow-django.onrender.com/",
    githubUrl: "https://github.com/charanepuri/linguaflow-django",
    docUrl: "https://linguaflow-django.onrender.com/static/pdf/LinguaFlow_Project_Documentation.1734d718af1d.pdf",
    linkedinPosts: [],
    status: "Active"
  },
  {
    id: "developer-productivity-suite",
    title: "Developer Productivity Suite -- Django Version",
    series: "Part of DPS series",
    category: "Productivity",
    description: "A specialized suite of developer utility tools and workflows engineered using Django to optimize daily programming and development efficiency.",
    icon: "bi-speedometer2",
    tags: ["Django", "Python", "DPS Series", "Productivity"],
    liveUrl: null,
    githubUrl: null,
    docUrl: null,
    linkedinPosts: [],
    status: "In Progress"
  }
];

// Render Project Cards
function renderProjects(filterText = "") {
  const container = document.getElementById("projectsContainer");
  const query = filterText.toLowerCase().trim();

  const filtered = projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(query) ||
      (project.series && project.series.toLowerCase().includes(query)) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some(t => t.toLowerCase().includes(query))
    );
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <i class="bi bi-search display-3 text-muted mb-3 d-block"></i>
        <h4 class="text-white">No projects found matching "${escapeHtml(filterText)}"</h4>
        <p class="text-muted">Try searching with keywords like 'Django', 'Glossary', 'DPS', or 'Translator'.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => {
    // Generate action buttons
    const liveBtn = p.liveUrl 
      ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-live">
           <i class="bi bi-box-arrow-up-right me-1"></i> Live Demo
         </a>` 
      : '';

    const repoBtn = p.githubUrl 
      ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-repo">
           <i class="bi bi-github me-1"></i> Code Repository
         </a>` 
      : '';

    const docBtn = p.docUrl 
      ? `<a href="${p.docUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-doc">
           <i class="bi bi-file-earmark-pdf me-1"></i> Documentation
         </a>` 
      : '';

    // Multiple LinkedIn post buttons support
    const linkedinPostsHtml = (p.linkedinPosts || []).map(post => `
      <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-linkedin-post">
        <i class="bi bi-linkedin me-1"></i> ${escapeHtml(post.label)}
      </a>
    `).join("");

    // Fallback if no actions available yet (e.g. In-Progress project)
    const inProgressBadge = (!p.liveUrl && !p.githubUrl && !p.docUrl && (!p.linkedinPosts || p.linkedinPosts.length === 0))
      ? `<span class="badge bg-warning-subtle text-warning-emphasis border border-warning-subtle px-3 py-2">
           <i class="bi bi-hourglass-split me-1"></i> Upcoming / In Active Development
         </span>`
      : '';

    const seriesBadge = p.series 
      ? `<span class="badge bg-info-subtle text-info-emphasis border border-info-subtle mb-1 ms-1">${escapeHtml(p.series)}</span>` 
      : '';

    const tagsHtml = p.tags
      .map(tag => `<span class="tech-tag">${escapeHtml(tag)}</span>`)
      .join("");

    return `
      <div class="col-12 col-md-6 col-lg-6 mb-4">
        <div class="project-card">
          <div class="project-card-header">
            <div class="project-icon-box">
              <i class="bi ${p.icon}"></i>
            </div>
            <div>
              <div class="d-flex flex-wrap align-items-center gap-1 mb-1">
                <span class="badge project-category-badge">${escapeHtml(p.category)}</span>
                ${seriesBadge}
              </div>
              <h4 class="h5 mb-0 text-white fw-bold">${escapeHtml(p.title)}</h4>
            </div>
          </div>
          
          <div class="project-card-body">
            <p class="project-description">${escapeHtml(p.description)}</p>
            <div class="project-tags">
              ${tagsHtml}
            </div>
          </div>

          <div class="project-card-footer">
            ${liveBtn}
            ${repoBtn}
            ${docBtn}
            ${linkedinPostsHtml}
            ${inProgressBadge}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Utility: HTML escaping
function escapeHtml(text) {
  if (!text) return "";
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Search & setup functionality
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("projectSearch");
  const countBadge = document.getElementById("projectCount");

  if (countBadge) {
    countBadge.textContent = `${projects.length} Django Projects`;
  }

  renderProjects();

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      renderProjects(e.target.value);
    });
  }
});
