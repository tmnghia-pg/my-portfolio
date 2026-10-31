// Language & Localization Service

import { state } from './state.js';

const UI_DICTIONARY = {
  vi: {
    nav: {
      about: 'Giới thiệu',
      experience: 'Kinh nghiệm',
      projects: 'Dự án',
      skills: 'Kỹ năng',
      education: 'Học vấn',
      contact: 'Liên hệ'
    },
    status: {
      available: 'Sẵn sàng cho cơ hội Senior .NET Developer',
      active: 'Đang hoạt động',
      inProgress: 'Đang phát triển',
      archived: 'Đã lưu trữ',
      featured: 'Tiêu biểu'
    },
    projectTypes: {
      professional: 'Doanh nghiệp (MISA)',
      personal: 'Dự án cá nhân'
    },
    sections: {
      summary: 'Tóm tắt nghề nghiệp',
      experience: 'Kinh nghiệm làm việc',
      experienceSub: 'Hành trình phát triển và đóng góp kỹ thuật tại doanh nghiệp',
      projects: 'Dự án tiêu biểu',
      projectsSub: 'Các hệ thống và giải pháp kỹ thuật đã trực tiếp tham gia xây dựng',
      skills: 'Kỹ năng chuyên môn',
      skillsSub: 'Nền tảng công nghệ, kiến trúc và công cụ hỗ trợ công việc',
      education: 'Học vấn & Chứng chỉ',
      educationSub: 'Bằng cấp kỹ sư chính quy và các chương trình đào tạo',
      interests: 'Sở thích & Hoạt động phong trào',
      interestsSub: 'Thể thao, âm nhạc, tinh thần tự học công nghệ và hoạt động phong trào đội nhóm'
    },
    actions: {
      viewResume: 'Chế độ CV A4',
      viewPortfolio: 'Chế độ Portfolio',
      printPdf: 'Tải / In PDF',
      copyEmail: 'Sao chép Email',
      copyPhone: 'Sao chép Điện thoại',
      copyDone: 'Đã sao chép vào bộ nhớ tạm!',
      contactMe: 'Liên hệ ngay',
      viewAllProjects: 'Xem tất cả dự án'
    },
    metrics: {
      reportMetric: 'Đáp ứng ~90% mẫu báo cáo thực tế qua module tùy chỉnh',
      advisorMetric: 'Đào tạo và hỗ trợ 3 nhân sự Fresher vượt qua thử việc',
      architectureMetric: 'Thiết kế theo Clean Architecture & .NET 8 chuẩn mực'
    },
    technicalHighlights: {
      title: 'Highlights & Leadership',
      badge: 'Core Competencies',
      independent: {
        title: 'Independent Product Development',
        desc: 'Độc lập nghiên cứu, thiết kế và phát triển SnapFox Print LLC từ đầu đến khi vận hành thực tế. Xây dựng storefront bán hàng kết hợp hệ thống SnapFoxFactory điều phối xưởng in khép kín.'
      },
      aiFirst: {
        title: 'AI-First Software Engineering',
        desc: 'Ứng dụng AI Coding xuyên suốt quá trình phát triển TORVEN nhằm tối ưu tiến độ và chất lượng mã nguồn. Triển khai hoàn chỉnh CMS quản trị, tích hợp Zalo OA, cổng thanh toán và vận chuyển.'
      },
      advisor: {
        title: 'Technical Advisor & Mentorship',
        desc: 'Đảm nhận vai trò Technical Advisor (hoàn thành chương trình Cán bộ nguồn MISA). Trực tiếp đào tạo, giải đáp kỹ thuật và đồng hành giúp 3 Fresher vượt qua thử việc, tự tin đảm nhận dự án.'
      },
      leadership: {
        title: 'Team Leadership & Organization',
        desc: 'Từng đảm nhiệm vai trò thủ quỹ và trưởng ban phong trào, chủ động tổ chức các hoạt động và giải đấu thể thao nội bộ. Khéo léo kết nối các thành viên, xây dựng tinh thần đồng đội tích cực và gắn kết.'
      }
    },
    footer: {
      role: 'Kỹ sư phần mềm .NET & Giải pháp kỹ thuật',
      builtWith: 'Xây dựng với Vanilla HTML, CSS & JavaScript ES Modules • Dữ liệu thuần JSON',
      rights: 'Bản quyền nội dung thuộc về Trần Minh Nghĩa'
    }
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact'
    },
    status: {
      available: 'Open for Senior .NET Developer Opportunities',
      active: 'Active Production',
      inProgress: 'In Development',
      archived: 'Archived',
      featured: 'Featured'
    },
    projectTypes: {
      professional: 'Enterprise (MISA)',
      personal: 'Personal Project'
    },
    sections: {
      summary: 'Professional Summary',
      experience: 'Work Experience',
      experienceSub: 'Career journey and enterprise technical contributions',
      projects: 'Featured Projects',
      projectsSub: 'Enterprise and independent systems built with modern architectures',
      skills: 'Technical Skills',
      skillsSub: 'Technology stack, software architecture, and development tooling',
      education: 'Education & Certifications',
      educationSub: 'Formal engineering degree and leadership development programs',
      interests: 'Interests & Activities',
      interestsSub: 'Sports, music, self-driven continuous learning, and team bonding'
    },
    actions: {
      viewResume: 'Resume A4 View',
      viewPortfolio: 'Portfolio View',
      printPdf: 'Export / Print PDF',
      copyEmail: 'Copy Email',
      copyPhone: 'Copy Phone',
      copyDone: 'Copied to clipboard!',
      contactMe: 'Get in Touch',
      viewAllProjects: 'View All Projects'
    },
    metrics: {
      reportMetric: 'Fulfills ~90% of dynamic report formats via custom engine',
      advisorMetric: 'Mentored & guided 3 Fresher engineers through onboarding',
      architectureMetric: 'Robust Clean Architecture & .NET 8 implementation'
    },
    technicalHighlights: {
      title: 'Highlights & Leadership',
      badge: 'Core Competencies',
      independent: {
        title: 'Independent Product Development',
        desc: 'Independently architected and built SnapFox Print LLC from ground up to live production. Delivered an e-commerce storefront alongside SnapFoxFactory to orchestrate automated factory fulfillment.'
      },
      aiFirst: {
        title: 'AI-First Software Engineering',
        desc: 'Applied AI Coding across the TORVEN lifecycle to maximize delivery speed and code quality. Shipped a dynamic headless CMS integrated with Zalo OA, banking payments, and logistics services.'
      },
      advisor: {
        title: 'Technical Advisor & Mentorship',
        desc: 'Served as Technical Advisor (completed MISA Future Leader program). Coached and unblocked 3 Fresher developers through probation to become confident project contributors.'
      },
      leadership: {
        title: 'Team Leadership & Organization',
        desc: 'Served as team treasurer and movement lead, organizing athletic tournaments and team-building events. Strengthened workplace camaraderie and cultivated an active, collaborative team spirit.'
      }
    },
    footer: {
      role: '.NET Software Engineer & Technical Solutions',
      builtWith: 'Built with Vanilla HTML, CSS & JavaScript ES Modules • Pure JSON data source',
      rights: 'All profile content copyright Tran Minh Nghia'
    }
  }
};

export class LanguageService {
  static getText(field) {
    if (!field) return '';
    if (typeof field === 'string') return field;
    const currentLang = state.lang || 'vi';
    return field[currentLang] || field['vi'] || field['en'] || '';
  }

  static getUi(path) {
    const lang = state.lang || 'vi';
    const dict = UI_DICTIONARY[lang] || UI_DICTIONARY['vi'];
    const parts = path.split('.');
    let current = dict;
    for (const part of parts) {
      if (current && current[part] !== undefined) {
        current = current[part];
      } else {
        return path;
      }
    }
    return current;
  }
}
