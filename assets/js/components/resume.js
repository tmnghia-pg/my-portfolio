// Resume View Component (A4 Printable Document Layout)

import { dataService } from '../data-service.js';
import { profileService } from '../profile-service.js';
import { LanguageService } from '../language-service.js';

export function renderResume(container) {
  const profile = dataService.getProfile();
  const experiences = dataService.getExperiences();
  const allProjects = dataService.getProjects();
  const skillsData = dataService.getSkills();
  const education = dataService.getEducation();
  const certificates = dataService.getCertificates();
  const activeProfile = profileService.getActiveProfile();
  const featuredProjectIds = profileService.getFeaturedProjectIds();
  const skillGroupsOrder = profileService.getSkillGroupsOrder();

  const name = LanguageService.getText(profile?.name);
  const headline = LanguageService.getText(activeProfile?.headline || profile?.headline);
  const summary = LanguageService.getText(activeProfile?.summary || profile?.summary);
  const location = LanguageService.getText(profile?.location);
  const phone = profile?.contact?.phone || '';
  const email = profile?.contact?.email || '';

  // Filter projects for resume based on featured ids
  const resumeProjects = allProjects
    .filter(p => featuredProjectIds.includes(p.id) && p.status !== 'archived')
    .slice(0, 4);

  // Skill items map
  const itemsMap = new Map((skillsData?.items || []).map(i => [i.id, i.name]));

  // Skill groups sorted
  const sortedSkillGroups = [...(skillsData?.groups || [])].sort((a, b) => {
    const aIdx = skillGroupsOrder.indexOf(a.id);
    const bIdx = skillGroupsOrder.indexOf(b.id);
    if (aIdx !== -1 && bIdx !== -1) return aIdx - bIdx;
    if (aIdx !== -1) return -1;
    if (bIdx !== -1) return 1;
    return 0;
  });

  container.innerHTML = `
    <article class="resume-view-container" id="resume-document">
      <!-- Resume Header -->
      <header class="resume-header">
        <div class="resume-title-block">
          <h1>${name}</h1>
          <div class="resume-headline">${headline}</div>
        </div>

        <div class="resume-contacts-grid">
          <div><strong>Email:</strong> ${email}</div>
          <div><strong>Điện thoại / Phone:</strong> ${phone}</div>
          <div><strong>Địa điểm / Location:</strong> ${location}</div>
        </div>
      </header>

      <!-- Professional Summary -->
      <section class="resume-section">
        <div class="resume-section-title">
          <span>${LanguageService.getUi('sections.summary')}</span>
        </div>
        <p style="font-size:0.875rem;line-height:1.55;color:#334155">${summary}</p>
      </section>

      <!-- Technical Skills Matrix -->
      <section class="resume-section">
        <div class="resume-section-title">
          <span>${LanguageService.getUi('sections.skills')}</span>
        </div>
        <div class="resume-skills-grid">
          ${sortedSkillGroups.map(grp => {
            const grpName = LanguageService.getText(grp.name);
            const skillNames = (grp.items || []).map(id => itemsMap.get(id)).filter(Boolean).join(', ');
            return `
              <div class="resume-skill-row">
                <span class="resume-skill-label">${grpName}:</span>
                <span class="resume-skill-val">${skillNames}</span>
              </div>
            `;
          }).join('')}
        </div>
      </section>

      <!-- Work Experience -->
      <section class="resume-section">
        <div class="resume-section-title">
          <span>${LanguageService.getUi('sections.experience')}</span>
        </div>

        ${experiences.map(exp => {
          const position = LanguageService.getText(exp.position);
          const period = `${exp.startDate} – ${exp.isCurrent ? (LanguageService.getText({ vi: 'Hiện tại', en: 'Present' })) : exp.endDate}`;

          return `
            <div class="resume-item">
              <div class="resume-item-header">
                <span>${position}</span>
                <span>${period}</span>
              </div>
              <div class="resume-item-sub">
                <span>${exp.company}</span>
                <span>Hà Nội, Việt Nam</span>
              </div>
              <ul class="resume-bullets">
                ${exp.highlights.map(hl => `
                  <li>${LanguageService.getText(hl)}</li>
                `).join('')}
              </ul>
            </div>
          `;
        }).join('')}
      </section>

      <!-- Key Projects -->
      <section class="resume-section">
        <div class="resume-section-title">
          <span>${LanguageService.getUi('sections.projects')}</span>
        </div>

        ${resumeProjects.map(prj => {
          const prjRole = LanguageService.getText(prj.role);
          const prjDesc = LanguageService.getText(prj.description);
          const techList = (prj.technologies || []).join(', ');
          const highlights = prj.highlights ? LanguageService.getText(prj.highlights) : [];

          return `
            <div class="resume-item">
              <div class="resume-item-header">
                <span>${prj.name} <span style="font-weight:400;color:#64748b;font-size:0.8rem">(${LanguageService.getText(prj.tagline)})</span></span>
                <span style="font-size:0.75rem;font-family:var(--font-mono)">${prjRole}</span>
              </div>
              <div style="font-size:0.75rem;color:#0284c7;font-family:var(--font-mono);margin-bottom:3px">
                <strong>Tech Stack:</strong> ${techList}
              </div>
              <p style="font-size:0.8rem;color:#475569;margin-bottom:3px;line-height:1.4">${prjDesc}</p>
              ${highlights && highlights.length ? `
                <ul class="resume-bullets">
                  ${highlights.map(hl => `<li>${hl}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
          `;
        }).join('')}
      </section>

      <!-- Education & Credentials -->
      <section class="resume-section" style="margin-bottom:0">
        <div class="resume-section-title">
          <span>${LanguageService.getUi('sections.education')}</span>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4)">
          <div>
            ${education.map(edu => `
              <div style="font-size:0.85rem;font-weight:700;color:#0f172a">${edu.institution}</div>
              <div style="font-size:0.75rem;color:#0284c7;font-weight:600">
                ${LanguageService.getText(edu.degree)} • ${LanguageService.getText(edu.grade)} (${edu.graduationYear})
              </div>
            `).join('')}
          </div>

          <div>
            ${certificates.map(cert => `
              <div style="font-size:0.85rem;font-weight:700;color:#0f172a">${LanguageService.getText(cert.name)}</div>
              <div style="font-size:0.75rem;color:#0284c7;font-weight:600">
                ${cert.issuer} ${cert.year ? `• ${cert.year}` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </article>
  `;
}
