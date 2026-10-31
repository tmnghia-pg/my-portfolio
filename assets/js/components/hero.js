// Hero Component

import { dataService } from '../data-service.js';
import { profileService } from '../profile-service.js';
import { LanguageService } from '../language-service.js';
import { viewService } from '../view-service.js';
import { ExportService } from '../export-service.js';
import { copyToClipboard } from '../utils/toast.js';

export function renderHero(container) {
  const profile = dataService.getProfile();
  const activeProfileConfig = profileService.getActiveProfile();

  const name = LanguageService.getText(profile?.name);
  const headline = LanguageService.getText(activeProfileConfig?.headline || profile?.headline);
  const summary = LanguageService.getText(activeProfileConfig?.summary || profile?.summary);
  const location = LanguageService.getText(profile?.location);
  const phone = profile?.contact?.phone || '';
  const email = profile?.contact?.email || '';

  container.innerHTML = `
    <section id="hero" class="hero-section" aria-label="Giới thiệu bản thân">
      <div class="container">
        <div class="hero-grid">
          <!-- Left Column -->
          <div class="hero-main">
            <div class="hero-status-pill">
              <span class="status-dot"></span>
              <span>${LanguageService.getUi('status.available')}</span>
            </div>

            <h1 class="hero-name">${name}</h1>
            <div class="hero-headline">${headline}</div>
            <div class="hero-summary">
              ${(summary || '').split('\n\n').filter(Boolean).map(p => `<p style="margin-bottom:0.75rem">${p}</p>`).join('')}
            </div>

            <div class="hero-contacts">
              <div class="contact-chip" id="chip-email" title="Click để sao chép Email" role="button" tabindex="0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>${email}</span>
              </div>

              <div class="contact-chip" id="chip-phone" title="Click để sao chép Số điện thoại" role="button" tabindex="0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>${phone}</span>
              </div>

              <div class="contact-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${location}</span>
              </div>
            </div>

            <div class="hero-actions">
              <button id="hero-btn-resume" class="btn btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
                <span>${LanguageService.getUi('actions.viewResume')}</span>
              </button>

              <button id="hero-btn-print" class="btn btn-outline">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                <span>${LanguageService.getUi('actions.printPdf')}</span>
              </button>
            </div>
          </div>

          <!-- Right Column / Technical Highlights -->
          <div class="hero-sidebar">
            <div class="hero-card">
              <div class="hero-card-header">
                <span class="hero-card-title">${LanguageService.getUi('technicalHighlights.title')}</span>
                <span class="badge badge-primary">${LanguageService.getUi('technicalHighlights.badge')}</span>
              </div>

              <div class="metrics-list">
                <div class="metric-item">
                  <div class="metric-icon">🚀</div>
                  <div class="metric-details">
                    <span class="metric-value">${LanguageService.getUi('technicalHighlights.independent.title')}</span>
                    <span class="metric-label">${LanguageService.getUi('technicalHighlights.independent.desc')}</span>
                  </div>
                </div>

                <div class="metric-item">
                  <div class="metric-icon">⚡</div>
                  <div class="metric-details">
                    <span class="metric-value">${LanguageService.getUi('technicalHighlights.aiFirst.title')}</span>
                    <span class="metric-label">${LanguageService.getUi('technicalHighlights.aiFirst.desc')}</span>
                  </div>
                </div>

                <div class="metric-item">
                  <div class="metric-icon">👥</div>
                  <div class="metric-details">
                    <span class="metric-value">${LanguageService.getUi('technicalHighlights.advisor.title')}</span>
                    <span class="metric-label">${LanguageService.getUi('technicalHighlights.advisor.desc')}</span>
                  </div>
                </div>

                <div class="metric-item">
                  <div class="metric-icon">🤝</div>
                  <div class="metric-details">
                    <span class="metric-value">${LanguageService.getUi('technicalHighlights.leadership.title')}</span>
                    <span class="metric-label">${LanguageService.getUi('technicalHighlights.leadership.desc')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Attach Event Handlers
  const chipEmail = container.querySelector('#chip-email');
  if (chipEmail) {
    chipEmail.onclick = () => copyToClipboard(email, `${LanguageService.getUi('actions.copyDone')} (${email})`);
  }

  const chipPhone = container.querySelector('#chip-phone');
  if (chipPhone) {
    chipPhone.onclick = () => copyToClipboard(phone, `${LanguageService.getUi('actions.copyDone')} (${phone})`);
  }

  const btnResume = container.querySelector('#hero-btn-resume');
  if (btnResume) {
    btnResume.onclick = () => viewService.toggle();
  }

  const btnPrint = container.querySelector('#hero-btn-print');
  if (btnPrint) {
    btnPrint.onclick = () => ExportService.printPdf();
  }
}
