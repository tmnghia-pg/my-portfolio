// Education & Certifications Component

import { dataService } from '../data-service.js';
import { LanguageService } from '../language-service.js';

export function renderEducation(container) {
  const education = dataService.getEducation();
  const certificates = dataService.getCertificates();

  container.innerHTML = `
    <section id="education" class="section" aria-label="Học vấn và chứng chỉ">
      <div class="container">
        <div class="section-header">
          <div class="section-label">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
            <span>Credentials</span>
          </div>
          <h2 class="section-title">${LanguageService.getUi('sections.education')}</h2>
          <p class="section-subtitle">${LanguageService.getUi('sections.educationSub')}</p>
        </div>

        <div class="edu-cert-grid">
          <!-- Education Column -->
          <div>
            <h3 style="font-size:var(--text-lg);font-weight:700;margin-bottom:var(--space-4);color:var(--text-primary)">
              ${LanguageService.getText({ vi: 'Học vấn chính quy', en: 'Formal Education' })}
            </h3>
            <div style="display:flex;flex-direction:column;gap:var(--space-4)">
              ${education.map(edu => {
                const degree = LanguageService.getText(edu.degree);
                const grade = LanguageService.getText(edu.grade);
                const highlights = LanguageService.getText(edu.highlights);

                return `
                  <div class="card">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:var(--space-2)">
                      <h4 style="font-size:var(--text-base);font-weight:700;color:var(--text-primary)">${edu.institution}</h4>
                      <span class="badge badge-primary">${edu.graduationYear}</span>
                    </div>
                    <div style="font-size:var(--text-sm);color:var(--primary);font-weight:600;margin-bottom:var(--space-2)">
                      ${degree} • ${grade}
                    </div>
                    <p style="font-size:var(--text-xs);color:var(--text-secondary);line-height:1.6">${highlights}</p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Certificates Column -->
          <div>
            <h3 style="font-size:var(--text-lg);font-weight:700;margin-bottom:var(--space-4);color:var(--text-primary)">
              ${LanguageService.getText({ vi: 'Chứng chỉ & Chương trình', en: 'Certificates & Programs' })}
            </h3>
            <div style="display:flex;flex-direction:column;gap:var(--space-4)">
              ${certificates.map(cert => {
                const name = LanguageService.getText(cert.name);
                const description = LanguageService.getText(cert.description);

                return `
                  <div class="card">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:var(--space-2)">
                      <h4 style="font-size:var(--text-base);font-weight:700;color:var(--text-primary)">${name}</h4>
                      ${cert.year ? `<span class="badge badge-primary">${cert.year}</span>` : ''}
                    </div>
                    <div style="font-size:var(--text-sm);color:var(--primary);font-weight:600;margin-bottom:var(--space-2)">
                      ${cert.issuer}
                    </div>
                    <p style="font-size:var(--text-xs);color:var(--text-secondary);line-height:1.6">${description}</p>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
