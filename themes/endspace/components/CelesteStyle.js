/**
 * Celeste warm visual layer for the Endspace theme.
 *
 * Keep this file separate from style.js so the upstream theme remains easy to
 * compare and the personal visual direction can be tuned independently.
 */
export const CelesteStyle = () => {
  return (
    <style jsx global>{`
      #theme-endspace.celeste-theme {
        --celeste-bg-image: url('/images/celeste-mountain-bg.jpg');
        --endspace-bg-base: #fff7ee;
        --endspace-bg-primary: rgba(255, 255, 255, 0.82);
        --endspace-bg-secondary: rgba(255, 242, 229, 0.76);
        --endspace-bg-tertiary: rgba(250, 219, 202, 0.72);
        --endspace-text-primary: #332019;
        --endspace-text-secondary: #6b5148;
        --endspace-text-muted: #a98c80;
        --endspace-accent-yellow: #d9a441;
        --endspace-accent-yellow-dim: rgba(217, 164, 65, 0.18);
        --endspace-accent-cyan: #e88e95;
        --endspace-accent-cyan-dim: rgba(232, 142, 149, 0.18);
        --endspace-border-base: rgba(185, 129, 88, 0.22);
        --endspace-border-active: #d9a441;
        --endspace-grid-color: rgba(255, 190, 137, 0.12);
        --celeste-panel-bg: rgba(255, 255, 255, 0.74);
        --celeste-panel-strong: rgba(255, 251, 247, 0.9);
        --celeste-panel-soft: rgba(255, 245, 239, 0.66);
        --celeste-panel-border: rgba(216, 164, 105, 0.32);
        --celeste-shadow: 0 24px 60px rgba(132, 75, 50, 0.16),
          0 8px 24px rgba(217, 164, 65, 0.12);
        --celeste-shadow-hover: 0 30px 78px rgba(132, 75, 50, 0.22),
          0 12px 36px rgba(232, 142, 149, 0.18),
          inset 0 1px 0 rgba(255, 255, 255, 0.74);
        --celeste-chip-bg: rgba(255, 246, 236, 0.82);
        --celeste-chip-text: #9a6f47;
        --celeste-card-hover: rgba(255, 238, 216, 0.92);
        --celeste-frost-blur: 24px;
        --celeste-bg-position: center top;
        --celeste-bg-opacity: 0.72;
        --celeste-bg-saturate: 1.08;
        --celeste-bg-brightness: 1.03;
        --celeste-bg-left-mask: rgba(255, 250, 244, 0.72);
        --celeste-bg-right-mask: rgba(255, 246, 237, 0.18);
        --celeste-bg-bottom-mask: rgba(255, 250, 244, 0.84);
        --celeste-title-tint: rgba(255, 250, 244, 0.52);
        --celeste-title-accent: rgba(255, 202, 125, 0.34);
        --endspace-shadow-base: var(--celeste-shadow);
        --endspace-shadow-hover: var(--celeste-shadow-hover);
        background-color: #fff7ee;
        background-image:
          linear-gradient(90deg, var(--celeste-bg-left-mask) 0%, rgba(255, 250, 244, 0.46) 38%, var(--celeste-bg-right-mask) 100%),
          linear-gradient(180deg, rgba(255, 250, 244, 0.08) 0%, rgba(255, 250, 244, 0.52) 68%, var(--celeste-bg-bottom-mask) 100%),
          var(--celeste-bg-image);
        background-size: 100% 100%, 100% 100%, cover;
        background-position: center, center, var(--celeste-bg-position);
        background-repeat: no-repeat;
        background-attachment: fixed;
        isolation: isolate;
      }

      #theme-endspace.celeste-pearl {
        --endspace-bg-base: #fffaf6;
        --endspace-bg-primary: rgba(255, 255, 255, 0.9);
        --endspace-bg-secondary: rgba(255, 250, 244, 0.84);
        --endspace-text-primary: #2f2520;
        --endspace-text-secondary: #6c5b53;
        --endspace-text-muted: #a18d82;
        --endspace-accent-yellow: #c9953d;
        --endspace-accent-cyan: #e2a7a0;
        --endspace-border-base: rgba(186, 145, 103, 0.2);
        --celeste-bg-opacity: 0.28;
        --celeste-bg-position: 46% top;
        --celeste-bg-left-mask: rgba(255, 252, 248, 0.88);
        --celeste-bg-right-mask: rgba(255, 250, 246, 0.52);
        --celeste-bg-bottom-mask: rgba(255, 252, 248, 0.96);
        --celeste-panel-bg: rgba(255, 255, 255, 0.86);
        --celeste-panel-strong: rgba(255, 255, 255, 0.96);
        --celeste-panel-soft: rgba(255, 252, 248, 0.78);
        --celeste-card-hover: rgba(255, 250, 244, 0.98);
        --celeste-shadow: 0 22px 60px rgba(154, 108, 76, 0.11),
          0 8px 24px rgba(201, 149, 61, 0.08);
      }

      #theme-endspace.celeste-rose {
        --endspace-bg-base: #fff1f2;
        --endspace-bg-primary: rgba(255, 244, 247, 0.76);
        --endspace-bg-secondary: rgba(255, 228, 235, 0.72);
        --endspace-text-primary: #3b2024;
        --endspace-text-secondary: #744b50;
        --endspace-text-muted: #b28186;
        --endspace-accent-yellow: #e1ad55;
        --endspace-accent-cyan: #e77187;
        --endspace-border-base: rgba(218, 132, 145, 0.25);
        --celeste-bg-opacity: 0.62;
        --celeste-bg-position: 42% top;
        --celeste-bg-left-mask: rgba(255, 238, 242, 0.62);
        --celeste-bg-right-mask: rgba(255, 224, 231, 0.12);
        --celeste-bg-bottom-mask: rgba(255, 242, 244, 0.86);
        --celeste-panel-bg: rgba(255, 241, 246, 0.74);
        --celeste-panel-strong: rgba(255, 248, 250, 0.9);
        --celeste-panel-soft: rgba(255, 232, 238, 0.62);
        --celeste-card-hover: rgba(255, 234, 239, 0.94);
        --celeste-title-accent: rgba(244, 161, 169, 0.32);
        --celeste-shadow: 0 24px 64px rgba(117, 54, 67, 0.18),
          0 8px 28px rgba(231, 113, 135, 0.12);
      }

      .dark #theme-endspace.celeste-theme,
      #theme-endspace.celeste-theme.dark {
        --endspace-bg-base: #1f171b;
        --endspace-bg-primary: rgba(50, 36, 37, 0.82);
        --endspace-bg-secondary: rgba(70, 48, 48, 0.68);
        --endspace-bg-tertiary: rgba(92, 62, 57, 0.68);
        --endspace-text-primary: #fff4ea;
        --endspace-text-secondary: #ead2c5;
        --endspace-text-muted: #c59c90;
        --endspace-accent-yellow: #f1c96b;
        --endspace-accent-cyan: #ff9ca7;
        --endspace-border-base: rgba(255, 208, 148, 0.22);
        --celeste-panel-bg: rgba(48, 34, 36, 0.72);
        --celeste-panel-strong: rgba(61, 42, 40, 0.88);
        --celeste-panel-soft: rgba(75, 46, 48, 0.58);
        --celeste-chip-bg: rgba(70, 44, 47, 0.82);
        --celeste-chip-text: #f2cfa4;
        --celeste-card-hover: rgba(84, 50, 49, 0.88);
        --celeste-bg-opacity: 0.34;
        --celeste-bg-saturate: 0.98;
        --celeste-bg-brightness: 0.8;
        --celeste-bg-left-mask: rgba(31, 23, 27, 0.82);
        --celeste-bg-right-mask: rgba(31, 23, 27, 0.22);
        --celeste-bg-bottom-mask: rgba(31, 23, 27, 0.92);
        --celeste-title-tint: rgba(45, 30, 32, 0.42);
        --celeste-title-accent: rgba(241, 201, 107, 0.22);
      }

      #theme-endspace.celeste-theme::before {
        background-image:
          linear-gradient(var(--endspace-grid-color) 1px, transparent 1px),
          linear-gradient(90deg, var(--endspace-grid-color) 1px, transparent 1px);
        background-size: 48px 48px;
        background-attachment: fixed;
        opacity: 1;
        filter: none;
        z-index: -1;
      }

      #theme-endspace.celeste-theme::after {
        content: '';
        position: fixed;
        inset: 0;
        z-index: -2;
        pointer-events: none;
        background:
          radial-gradient(circle at 18% 8%, rgba(255, 238, 203, 0.72), transparent 28%),
          radial-gradient(circle at 82% 22%, rgba(255, 195, 158, 0.34), transparent 24%),
          linear-gradient(90deg, rgba(255, 250, 244, 0.58) 0%, rgba(255, 247, 239, 0.34) 36%, rgba(255, 246, 237, 0.08) 100%),
          linear-gradient(180deg, rgba(255, 250, 244, 0.06) 0%, rgba(255, 250, 244, 0.34) 76%, rgba(255, 250, 244, 0.64) 100%);
      }

      .dark #theme-endspace.celeste-theme::after,
      #theme-endspace.celeste-theme.dark::after {
        background:
          radial-gradient(circle at 16% 6%, rgba(241, 201, 107, 0.3), transparent 27%),
          linear-gradient(90deg, rgba(22, 16, 18, 0.58) 0%, rgba(31, 23, 27, 0.36) 38%, rgba(31, 23, 27, 0.14) 100%),
          linear-gradient(180deg, rgba(31, 23, 27, 0.12) 0%, rgba(31, 23, 27, 0.54) 80%, rgba(31, 23, 27, 0.76) 100%);
      }

      #theme-endspace.celeste-theme .md\\:ml-\\[5rem\\] {
        position: relative;
        z-index: 1;
      }

      #theme-endspace.celeste-theme .md\\:ml-\\[5rem\\]::before {
        content: none;
      }

      #theme-endspace.celeste-theme .endspace-frame,
      #theme-endspace.celeste-theme .endspace-card,
      #theme-endspace.celeste-theme .ef-card {
        background: linear-gradient(145deg, var(--celeste-panel-bg), var(--celeste-panel-soft));
        border-color: var(--celeste-panel-border);
        border-radius: 18px;
        box-shadow: var(--celeste-shadow);
        backdrop-filter: blur(var(--celeste-frost-blur)) saturate(1.18);
        -webkit-backdrop-filter: blur(var(--celeste-frost-blur)) saturate(1.18);
        overflow: hidden;
      }

      #theme-endspace.celeste-theme .endspace-frame::before,
      #theme-endspace.celeste-theme .endspace-card::before,
      #theme-endspace.celeste-theme .ef-card::before {
        border: 0;
        width: auto;
        height: auto;
        inset: 0;
        opacity: 1;
        z-index: 0;
        background:
          linear-gradient(135deg, rgba(255, 255, 255, 0.68), transparent 34%),
          linear-gradient(90deg, rgba(217, 164, 65, 0.14), transparent 48%);
        pointer-events: none;
      }

      #theme-endspace.celeste-theme .endspace-frame::after,
      #theme-endspace.celeste-theme .endspace-card::after,
      #theme-endspace.celeste-theme .ef-card::after {
        border: 0;
        width: 120px;
        height: 120px;
        right: -54px;
        bottom: -54px;
        opacity: 0.55;
        background: radial-gradient(circle, rgba(232, 142, 149, 0.26), transparent 64%);
        pointer-events: none;
      }

      #theme-endspace.celeste-theme .endspace-frame > *,
      #theme-endspace.celeste-theme .endspace-card > *,
      #theme-endspace.celeste-theme .ef-card > * {
        position: relative;
        z-index: 1;
      }

      #theme-endspace.celeste-theme .endspace-frame:hover,
      #theme-endspace.celeste-theme .endspace-card:hover,
      #theme-endspace.celeste-theme .ef-card:hover {
        background: linear-gradient(145deg, var(--celeste-panel-strong), var(--celeste-card-hover));
        border-color: rgba(217, 164, 65, 0.58);
        box-shadow: var(--celeste-shadow-hover);
        transform: translateY(-5px);
      }

      #theme-endspace.celeste-theme #container-wrapper {
        padding-top: 3rem;
        padding-bottom: 4.5rem;
      }

      #theme-endspace.celeste-theme .relative.py-20.md\\:py-28 {
        min-height: 13rem;
        background:
          linear-gradient(90deg, var(--celeste-title-tint), rgba(255, 255, 255, 0.12)),
          radial-gradient(circle at 24% 48%, var(--celeste-title-accent), transparent 42%) !important;
        border-bottom-color: rgba(217, 164, 65, 0.24);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
      }

      #theme-endspace.celeste-theme .bg-watermark-scroll {
        animation-duration: 44s !important;
      }

      #theme-endspace.celeste-theme .bg-watermark-scroll span {
        color: rgba(112, 70, 47, 0.4);
        font-family: Georgia, 'Times New Roman', serif;
        font-style: italic;
        letter-spacing: 0;
        text-transform: none;
      }

      #theme-endspace.celeste-theme .tech-text,
      #theme-endspace.celeste-theme .tech-num {
        letter-spacing: 0;
      }

      #theme-endspace.celeste-theme .nier-title,
      #theme-endspace.celeste-theme #notion-article h1,
      #theme-endspace.celeste-theme #notion-article h2,
      #theme-endspace.celeste-theme #notion-article h3 {
        text-shadow: 0 14px 34px rgba(109, 60, 40, 0.14);
        letter-spacing: 0;
      }

      #theme-endspace.celeste-theme #notion-article h1::before,
      #theme-endspace.celeste-theme #notion-article h2::before,
      #theme-endspace.celeste-theme #notion-article h3::before {
        width: 4px;
        border-radius: 99px;
        background: linear-gradient(180deg, var(--endspace-accent-yellow), var(--endspace-accent-cyan));
        box-shadow: none;
      }

      #theme-endspace.celeste-theme #notion-article blockquote {
        background: rgba(255, 247, 237, 0.72);
        border-left-color: var(--endspace-accent-yellow);
        border-radius: 14px;
      }

      #theme-endspace.celeste-theme .sideLeft,
      #theme-endspace.celeste-theme .bg-\\[var\\(--endspace-bg-base\\)\\] {
        background: var(--celeste-panel-bg);
      }

      #theme-endspace.celeste-theme .fixed.left-0.top-0.bottom-0 {
        background:
          linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(255, 242, 232, 0.74));
        border-right-color: rgba(217, 164, 65, 0.22);
        box-shadow: 8px 0 30px rgba(132, 75, 50, 0.08);
        backdrop-filter: blur(22px);
        -webkit-backdrop-filter: blur(22px);
      }

      #theme-endspace.celeste-theme .fixed.left-0.top-0.bottom-0 img[alt='Avatar'] {
        border: 2px solid rgba(255, 255, 255, 0.88);
        box-shadow: 0 10px 26px rgba(132, 75, 50, 0.2);
      }

      #theme-endspace.celeste-theme .nier-nav-item::before {
        background: linear-gradient(90deg, rgba(255, 231, 201, 0.84), rgba(255, 241, 230, 0.38));
        border-radius: 999px 0 0 999px;
      }

      #theme-endspace.celeste-theme .nier-nav-item.active::before {
        background: linear-gradient(90deg, rgba(217, 164, 65, 0.26), rgba(255, 234, 219, 0.58));
      }

      #theme-endspace.celeste-theme .nier-nav-item:hover,
      #theme-endspace.celeste-theme .nier-nav-item.active {
        color: #7a4a2b !important;
      }

      #theme-endspace.celeste-theme .absolute.left-0.w-1\\.5 {
        width: 3px;
        background: linear-gradient(180deg, var(--endspace-accent-yellow), var(--endspace-accent-cyan));
        border-radius: 999px;
        left: 0.65rem;
      }

      #theme-endspace.celeste-theme article.endspace-frame {
        border-radius: 20px;
      }

      #theme-endspace.celeste-theme article.endspace-frame .absolute.inset-0.bg-\\[\\#FBFB45\\] {
        background: linear-gradient(110deg, rgba(255, 226, 177, 0.8), rgba(255, 213, 218, 0.72));
      }

      #theme-endspace.celeste-theme article.endspace-frame .absolute.top-0.left-0.right-0.h-1\\.5.bg-black {
        background: linear-gradient(90deg, var(--endspace-accent-yellow), var(--endspace-accent-cyan));
      }

      #theme-endspace.celeste-theme article.endspace-frame h2 {
        letter-spacing: 0;
        color: var(--endspace-text-primary);
      }

      #theme-endspace.celeste-theme article.endspace-frame:hover h2,
      #theme-endspace.celeste-theme article.endspace-frame:hover p,
      #theme-endspace.celeste-theme article.endspace-frame:hover .group-hover\\:text-black {
        color: #4a2c21 !important;
      }

      #theme-endspace.celeste-theme article.endspace-frame span.rounded,
      #theme-endspace.celeste-theme .rounded-full,
      #theme-endspace.celeste-theme .ef-btn {
        background-color: var(--celeste-chip-bg) !important;
        color: var(--celeste-chip-text) !important;
      }

      #theme-endspace.celeste-theme .ef-btn {
        border-color: rgba(217, 164, 65, 0.24);
        border-radius: 999px;
      }

      #theme-endspace.celeste-theme .ef-btn:hover {
        background-color: rgba(217, 164, 65, 0.2) !important;
        box-shadow: 0 12px 24px rgba(132, 75, 50, 0.14);
      }

      #theme-endspace.celeste-theme .ef-btn-indicator {
        background-color: var(--endspace-accent-cyan);
        border-radius: 999px;
      }

      #theme-endspace.celeste-theme .ef-btn-text {
        color: var(--endspace-text-primary) !important;
        letter-spacing: 0;
      }

      #theme-endspace.celeste-theme .endspace-btn,
      #theme-endspace.celeste-theme .endspace-button-primary,
      #theme-endspace.celeste-theme .endspace-btn-3d,
      #theme-endspace.celeste-theme .ef-button {
        border-radius: 999px;
        background: linear-gradient(135deg, var(--endspace-accent-yellow), var(--endspace-accent-cyan));
        color: #fffaf5;
        border-color: transparent;
        box-shadow: 0 14px 30px rgba(132, 75, 50, 0.16);
      }

      #theme-endspace.celeste-theme .endspace-button-primary:hover,
      #theme-endspace.celeste-theme .endspace-btn:hover,
      #theme-endspace.celeste-theme .ef-button:hover {
        color: #fff;
        background: linear-gradient(135deg, #c7892f, #df6f83);
        transform: translateY(-2px);
      }

      #theme-endspace.celeste-theme .spectrum-bar {
        height: 1px;
        background: linear-gradient(90deg, transparent, var(--endspace-accent-yellow), var(--endspace-accent-cyan), transparent);
      }

      #theme-endspace.celeste-theme footer {
        background: linear-gradient(180deg, rgba(72, 46, 39, 0.92), rgba(42, 29, 30, 0.96));
        color: #f7dfd0;
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
      }

      #theme-endspace.celeste-theme .fixed.right-4.bottom-8 > div {
        background: rgba(255, 245, 239, 0.68);
        border: 1px solid rgba(217, 164, 65, 0.28);
        box-shadow: 0 18px 42px rgba(132, 75, 50, 0.18);
        backdrop-filter: blur(18px);
        -webkit-backdrop-filter: blur(18px);
      }

      #theme-endspace.celeste-theme .fixed.right-4.bottom-8 button {
        background: rgba(255, 255, 255, 0.78);
        box-shadow: 0 8px 18px rgba(132, 75, 50, 0.12);
      }

      #theme-endspace.celeste-theme .fixed.right-4.bottom-8 button div {
        color: var(--endspace-text-primary);
      }

      #theme-endspace.celeste-theme .lg\\:fixed.lg\\:bottom-8.lg\\:right-20 {
        background: var(--celeste-panel-strong);
        border-color: var(--celeste-panel-border);
        border-radius: 20px;
      }

      #theme-endspace.celeste-theme nav.fixed.top-0.left-0.right-0 {
        background: rgba(255, 250, 247, 0.82);
        border-bottom-color: rgba(217, 164, 65, 0.22);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
      }

      #theme-endspace.celeste-theme .fixed.top-20.left-0.right-0.bottom-0 {
        background: rgba(255, 250, 247, 0.92);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
      }

      #theme-endspace.celeste-theme .loading-cover {
        background:
          linear-gradient(90deg, rgba(45, 26, 25, 0.9), rgba(68, 39, 42, 0.68)),
          var(--celeste-bg-image) center / cover;
      }

      #theme-endspace.celeste-theme .loading-cover .progress-fill,
      #theme-endspace.celeste-theme .loading-cover .sweep-overlay,
      #theme-endspace.celeste-theme .loading-cover .status-dot {
        background: linear-gradient(180deg, var(--endspace-accent-yellow), var(--endspace-accent-cyan));
      }

      #theme-endspace.celeste-theme .loading-cover .progress-percent {
        color: #ffd990;
      }

      #theme-endspace.celeste-theme .loading-cover .status-text {
        color: rgba(255, 217, 144, 0.86);
        letter-spacing: 0.12em;
      }

      @keyframes celeste-card-rise {
        from {
          opacity: 0;
          transform: translateY(18px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      #theme-endspace.celeste-theme article.endspace-frame {
        animation: celeste-card-rise 720ms ease both;
      }

      #theme-endspace.celeste-theme article.endspace-frame:nth-of-type(2) {
        animation-delay: 90ms;
      }

      #theme-endspace.celeste-theme article.endspace-frame:nth-of-type(3) {
        animation-delay: 180ms;
      }

      #theme-endspace.celeste-theme article.endspace-frame:nth-of-type(4) {
        animation-delay: 270ms;
      }

      @media (max-width: 767px) {
        #theme-endspace.celeste-theme {
          --celeste-bg-opacity: 0.34;
          --celeste-bg-position: 40% top;
        }

        #theme-endspace.celeste-theme::after {
          background:
            linear-gradient(180deg, rgba(255, 248, 244, 0.76), rgba(255, 248, 244, 0.9)),
            linear-gradient(90deg, rgba(255, 248, 244, 0.54), rgba(255, 248, 244, 0.18));
        }

        #theme-endspace.celeste-theme .relative.py-20.md\\:py-28 {
          min-height: 9rem;
          padding-top: 3rem;
          padding-bottom: 3rem;
        }

        #theme-endspace.celeste-theme .bg-watermark-scroll span {
          font-size: 6rem;
        }

        #theme-endspace.celeste-theme #container-wrapper {
          padding-top: 1.5rem;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        #theme-endspace.celeste-theme .endspace-frame,
        #theme-endspace.celeste-theme .endspace-card {
          border-radius: 16px;
        }

        body:has(#theme-endspace.celeste-theme) #draggableBox {
          left: 0.75rem !important;
          top: calc(env(safe-area-inset-top) + 5.75rem) !important;
          bottom: auto !important;
          max-width: 3.75rem !important;
          border-radius: 999px !important;
          padding: 0.35rem !important;
        }

        body:has(#theme-endspace.celeste-theme) #draggableBox .min-w-0 {
          display: none !important;
        }

        body:has(#theme-endspace.celeste-theme) #draggableBox .flex.min-h-\\[3rem\\] {
          min-height: 0;
          padding: 0;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        #theme-endspace.celeste-theme *,
        #theme-endspace.celeste-theme *::before,
        #theme-endspace.celeste-theme *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          scroll-behavior: auto !important;
          transition-duration: 0.01ms !important;
        }
      }
    `}</style>
  )
}

export default CelesteStyle
