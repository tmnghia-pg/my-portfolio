// Projects Component

import { dataService } from '../data-service.js';
import { profileService } from '../profile-service.js';
import { LanguageService } from '../language-service.js';

export function renderProjects(container) {
  const allProjects = dataService.getProjects();
  const featuredIds = profileService.getFeaturedProjectIds();

  // Sort featured projects to the top according to profile config
  const sortedProjects = [...allProjects].sort((a, b) => {
    const aIndex = featuredIds.indexOf(a.id);
    const bIndex = featuredIds.indexOf(b.id);
    if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
    if (aIndex !== -1) return -1;
    if (bIndex !== -1) return 1;
    return 0;
  });

  container.innerHTML = `
    <section id="projects" class="section" aria-label="Dự án tiêu biểu">
      <div class="container">
        <div class="section-header">
          <div class="section-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
              <polyline points="2 17 12 22 22 17"></polyline>
              <polyline points="2 12 12 17 22 12"></polyline>
            </svg>
            <span>Portfolio</span>
          </div>
          <h2 class="section-title">${LanguageService.getUi('sections.projects')}</h2>
          <p class="section-subtitle">${LanguageService.getUi('sections.projectsSub')}</p>
        </div>

        <div class="projects-grid">
          ${sortedProjects.map(prj => {
            const name = prj.name;
            const tagline = LanguageService.getText(prj.tagline);
            const description = LanguageService.getText(prj.description);
            const role = LanguageService.getText(prj.role);
            const highlights = prj.highlights ? LanguageService.getText(prj.highlights) : [];
            const isFeatured = featuredIds.includes(prj.id);
            
            const statusLabel = LanguageService.getUi(`status.${prj.status === 'in-progress' ? 'inProgress' : prj.status}`);
            const statusClass = prj.status === 'active' ? 'badge-success' : (prj.status === 'in-progress' ? 'badge-warning' : '');

            return `
              <div class="card project-card ${isFeatured ? 'project-featured' : ''}">
                <div class="project-header">
                  <div>
                    <h3 class="project-name">${name}</h3>
                    <div class="project-tagline">${tagline}</div>
                  </div>
                  <span class="badge ${statusClass}">${statusLabel}</span>
                </div>

                <p class="project-desc">${description}</p>

                ${highlights && highlights.length ? `
                  <div class="project-highlights">
                    <ul class="bullet-list" style="margin-bottom:0">
                      ${highlights.map(hl => `
                        <li class="bullet-item">
                          <span class="bullet-icon">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span>${hl}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                ` : ''}

                <div class="project-footer">
                  <div class="tag-list">
                    <span class="badge badge-primary">${role}</span>
                    ${(prj.technologies || []).map(t => `<span class="tag">${t}</span>`).join('')}
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    </section>
  `;
}
