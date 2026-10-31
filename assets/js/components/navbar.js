// Navbar Component

import { LanguageService } from '../language-service.js';
import { state } from '../state.js';
import { dataService } from '../data-service.js';

export function renderNavbar(container) {
  const profile = dataService.getProfile();
  const name = LanguageService.getText(profile?.name);
  const initials = name ? name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase() : 'MN';

  container.innerHTML = `
    <header class="site-header" role="banner">
      <div class="container">
        <a href="#hero" class="nav-brand" aria-label="Trang chủ">
          <div class="brand-avatar">${initials}</div>
          <div class="brand-text">
            <span class="brand-name">${name}</span>
            <span class="brand-role">Senior .NET</span>
          </div>
        </a>

        <nav class="nav-links" aria-label="Điều hướng chính">
          <a href="#about" class="nav-link">${LanguageService.getUi('nav.about')}</a>
          <a href="#experience" class="nav-link">${LanguageService.getUi('nav.experience')}</a>
          <a href="#projects" class="nav-link">${LanguageService.getUi('nav.projects')}</a>
          <a href="#skills" class="nav-link">${LanguageService.getUi('nav.skills')}</a>
          <a href="#education" class="nav-link">${LanguageService.getUi('nav.education')}</a>
        </nav>
      </div>
    </header>
  `;
}
