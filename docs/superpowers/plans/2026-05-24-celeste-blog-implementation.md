# Celeste Blog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Customize the current NotionNext fork into `Celeste's Blog` on the existing `endspace` theme, with a homepage hero image, Giscus comments, and deployment documentation.

**Architecture:** Keep the NotionNext fork intact and make focused changes to public config, the active `endspace` theme, static assets, and docs. Do not rebuild the content pipeline or change shared Notion rendering internals. The homepage gets a custom hero before the existing post list; article and list pages keep the current clean Endspace reading experience.

**Tech Stack:** Next.js 14, React 18, NotionNext, Vercel, Notion public page, Giscus, Yarn 1.

---

## File Structure

- Modify `blog.config.js`: set safe public defaults for Celeste metadata, active theme, site URL, Notion page ID fallback, and Giscus values.
- Modify `.env.example`: add a concise Celeste deployment block with the confirmed Vercel environment variables.
- Create `public/images/celeste-hero.jpg`: static homepage hero image copied from the user-provided local image.
- Create `themes/endspace/components/HomeHero.js`: focused homepage hero component for the active Endspace theme.
- Modify `themes/endspace/index.js`: render `HomeHero` above the post list on the homepage only.
- Modify `themes/endspace/style.js`: add small CSS utilities for the hero, keeping list and article surfaces readable.
- Modify `docs/superpowers/specs/2026-05-24-celeste-blog-design.md`: update only if implementation discoveries require narrowing or correcting the design.
- Create `docs/deployment/celeste-blog.md`: operational setup and validation guide for Notion, Vercel, domain, and comments.

---

### Task 1: Baseline And Asset Setup

**Files:**
- Create: `public/images/celeste-hero.jpg`
- Verify only: `package.json`

- [ ] **Step 1: Copy the hero asset into the public directory**

Run:

```powershell
New-Item -ItemType Directory -Force -Path public\images | Out-Null
Copy-Item -LiteralPath 'C:\Users\why20\Pictures\头像\16732017E40DE39A34173CDF75A85AB5.jpg' -Destination 'public\images\celeste-hero.jpg' -Force
Get-Item public\images\celeste-hero.jpg | Select-Object FullName,Length
```

Expected: `public\images\celeste-hero.jpg` exists and has nonzero length.

- [ ] **Step 2: Install dependencies if missing**

Run:

```powershell
if (-not (Test-Path node_modules)) { yarn install --frozen-lockfile }
```

Expected: exit code 0. If `node_modules` already exists, no install is needed.

- [ ] **Step 3: Run a no-change baseline static check**

Run:

```powershell
yarn type-check
```

Expected: exit code 0, or document pre-existing failures before implementation continues.

---

### Task 2: Site And Comment Configuration

**Files:**
- Modify: `blog.config.js`
- Modify: `.env.example`

- [ ] **Step 1: Update `blog.config.js` public defaults**

Set the relevant defaults in `blog.config.js` to:

```js
NOTION_PAGE_ID:
  process.env.NOTION_PAGE_ID ||
  'fcf799be702d82f9a779813a1eee30b3',
THEME: process.env.NEXT_PUBLIC_THEME || 'endspace',
LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN',
AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Celeste',
BIO:
  process.env.NEXT_PUBLIC_BIO ||
  '学习记录、项目实践、技术笔记与生活片段。',
LINK: process.env.NEXT_PUBLIC_LINK || 'https://www.blog-celeste.top',
KEYWORDS:
  process.env.NEXT_PUBLIC_KEYWORD ||
  'Celeste, Notion, 博客, 技术笔记, 项目记录, 课程学习',
```

Expected: environment variables still override committed defaults.

- [ ] **Step 2: Update `conf/comment.config.js` Giscus defaults**

Set Giscus fallback values to:

```js
COMMENT_GISCUS_REPO:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || 'destinyon/blog',
COMMENT_GISCUS_REPO_ID:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || 'R_kgDOSltz-w',
COMMENT_GISCUS_CATEGORY:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY || 'Announcements',
COMMENT_GISCUS_CATEGORY_ID:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID ||
  'DIC_kwDOSltz-84C9rmm',
COMMENT_GISCUS_MAPPING:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname',
COMMENT_GISCUS_STRICT:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_STRICT || '0',
COMMENT_GISCUS_REACTIONS_ENABLED:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1',
COMMENT_GISCUS_EMIT_METADATA:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0',
COMMENT_GISCUS_INPUT_POSITION:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom',
COMMENT_GISCUS_LANG:
  process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN',
```

Expected: Giscus loads without requiring local `.env`, while Vercel values can still override defaults.

- [ ] **Step 3: Add a Celeste deployment block to `.env.example`**

Add this block near the top, below the Notion comments:

```dotenv
# Celeste's Blog production values
# NOTION_PAGE_ID=fcf799be702d82f9a779813a1eee30b3
# NEXT_PUBLIC_THEME=endspace
# NEXT_PUBLIC_LANG=zh-CN
# NEXT_PUBLIC_AUTHOR=Celeste
# NEXT_PUBLIC_BIO=学习记录、项目实践、技术笔记与生活片段。
# NEXT_PUBLIC_LINK=https://www.blog-celeste.top
# NEXT_PUBLIC_KEYWORD=Celeste, Notion, 博客, 技术笔记, 项目记录, 课程学习
# NEXT_PUBLIC_COMMENT_GISCUS_REPO=destinyon/blog
# NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID=R_kgDOSltz-w
# NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY=Announcements
# NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID=DIC_kwDOSltz-84C9rmm
# NEXT_PUBLIC_COMMENT_GISCUS_MAPPING=pathname
# NEXT_PUBLIC_COMMENT_GISCUS_STRICT=0
# NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED=1
# NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA=0
# NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION=bottom
# NEXT_PUBLIC_COMMENT_GISCUS_LANG=zh-CN
```

Expected: docs expose required deployment keys without committing `.env`.

- [ ] **Step 4: Run config-focused checks**

Run:

```powershell
yarn type-check
```

Expected: exit code 0.

---

### Task 3: Endspace Homepage Hero

**Files:**
- Create: `themes/endspace/components/HomeHero.js`
- Modify: `themes/endspace/index.js`
- Modify: `themes/endspace/style.js`

- [ ] **Step 1: Create `HomeHero.js`**

Create `themes/endspace/components/HomeHero.js`:

```jsx
import SmartLink from '@/components/SmartLink'
import { siteConfig } from '@/lib/config'

const CATEGORY_LINKS = [
  { label: '课程学习', href: '/category/课程学习', code: 'COURSES' },
  { label: '项目记录', href: '/category/项目记录', code: 'PROJECTS' },
  { label: '技术笔记', href: '/category/技术笔记', code: 'TECH' },
  { label: '生活随笔', href: '/category/生活随笔', code: 'LIFE' }
]

export const HomeHero = () => {
  return (
    <section className="celeste-hero endspace-frame mb-10 overflow-hidden">
      <div className="celeste-hero__image" aria-hidden="true" />
      <div className="celeste-hero__overlay" aria-hidden="true" />
      <div className="celeste-hero__content">
        <p className="celeste-hero__eyebrow tech-text">PERSONAL ARCHIVE</p>
        <h1 className="celeste-hero__title">{siteConfig('TITLE')}</h1>
        <p className="celeste-hero__description">
          {siteConfig('DESCRIPTION')}
        </p>
        <nav className="celeste-hero__links" aria-label="Celeste blog categories">
          {CATEGORY_LINKS.map((item) => (
            <SmartLink key={item.href} href={item.href} className="celeste-hero__link">
              <span>{item.code}</span>
              <strong>{item.label}</strong>
            </SmartLink>
          ))}
        </nav>
      </div>
    </section>
  )
}
```

Expected: component has no data fetching and depends only on site config and static category links.

- [ ] **Step 2: Render the hero on the homepage**

In `themes/endspace/index.js`, add:

```js
import { HomeHero } from './components/HomeHero'
```

Change `LayoutIndex` from:

```jsx
const LayoutIndex = (props) => {
  return <LayoutPostList {...props} />
}
```

to:

```jsx
const LayoutIndex = (props) => {
  return (
    <>
      <HomeHero />
      <LayoutPostList {...props} />
    </>
  )
}
```

Expected: only the root homepage renders the hero. Category, tag, archive, and article pages remain unchanged.

- [ ] **Step 3: Add hero styles**

Append to `themes/endspace/style.js` before the closing template literal:

```css
.celeste-hero {
  min-height: clamp(520px, 72vh, 780px);
  display: flex;
  align-items: flex-end;
  padding: clamp(1.25rem, 4vw, 3.5rem);
  border-color: rgba(24, 24, 27, 0.22);
}

.celeste-hero__image,
.celeste-hero__overlay {
  position: absolute;
  inset: 0;
}

.celeste-hero__image {
  background-image: url('/images/celeste-hero.jpg');
  background-size: cover;
  background-position: center;
  transform: scale(1.01);
}

.celeste-hero__overlay {
  background:
    linear-gradient(90deg, rgba(9, 9, 11, 0.78), rgba(9, 9, 11, 0.36) 48%, rgba(9, 9, 11, 0.12)),
    linear-gradient(0deg, rgba(9, 9, 11, 0.72), rgba(9, 9, 11, 0.04) 45%);
}

.celeste-hero__content {
  position: relative;
  z-index: 1;
  max-width: 760px;
  color: #fffaf2;
}

.celeste-hero__eyebrow {
  margin-bottom: 0.75rem;
  color: #fbfb45;
}

.celeste-hero__title {
  font-size: clamp(3.5rem, 10vw, 8rem);
  line-height: 0.88;
  font-weight: 900;
  letter-spacing: 0;
  margin-bottom: 1.25rem;
  text-wrap: balance;
}

.celeste-hero__description {
  max-width: 36rem;
  font-size: clamp(1rem, 2vw, 1.35rem);
  line-height: 1.7;
  color: rgba(255, 250, 242, 0.88);
}

.celeste-hero__links {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;
  margin-top: 2rem;
}

.celeste-hero__link {
  min-height: 5.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(255, 250, 242, 0.34);
  background: rgba(255, 250, 242, 0.12);
  color: #fffaf2 !important;
  padding: 0.9rem;
  text-decoration: none !important;
  backdrop-filter: blur(10px);
  transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
}

.celeste-hero__link:hover {
  transform: translateY(-3px);
  background: rgba(255, 250, 242, 0.2);
  border-color: #fbfb45;
}

.celeste-hero__link span {
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.72rem;
  color: #fbfb45;
}

.celeste-hero__link strong {
  font-size: 1.05rem;
}

@media (max-width: 767px) {
  .celeste-hero {
    min-height: 620px;
    align-items: flex-end;
  }

  .celeste-hero__overlay {
    background:
      linear-gradient(0deg, rgba(9, 9, 11, 0.86), rgba(9, 9, 11, 0.38) 65%, rgba(9, 9, 11, 0.18));
  }

  .celeste-hero__links {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
```

Expected: hero text remains readable on desktop and mobile. No viewport-width font scaling is introduced beyond bounded `clamp`.

- [ ] **Step 4: Run static checks**

Run:

```powershell
yarn type-check
```

Expected: exit code 0.

---

### Task 4: Deployment Documentation

**Files:**
- Create: `docs/deployment/celeste-blog.md`

- [ ] **Step 1: Create deployment guide**

Create `docs/deployment/celeste-blog.md`:

```markdown
# Celeste's Blog Deployment

## Production

- Domain: `https://blog-celeste.top`
- Canonical host: `https://www.blog-celeste.top/`
- Platform: Vercel
- Repository: `destinyon/blog`
- Content source: Notion
- Comments: Giscus / GitHub Discussions

## Vercel Environment Variables

```text
NOTION_PAGE_ID=fcf799be702d82f9a779813a1eee30b3
NEXT_PUBLIC_THEME=endspace
NEXT_PUBLIC_LANG=zh-CN
NEXT_PUBLIC_AUTHOR=Celeste
NEXT_PUBLIC_BIO=学习记录、项目实践、技术笔记与生活片段。
NEXT_PUBLIC_LINK=https://www.blog-celeste.top
NEXT_PUBLIC_KEYWORD=Celeste, Notion, 博客, 技术笔记, 项目记录, 课程学习
NEXT_PUBLIC_COMMENT_GISCUS_REPO=destinyon/blog
NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID=R_kgDOSltz-w
NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID=DIC_kwDOSltz-84C9rmm
NEXT_PUBLIC_COMMENT_GISCUS_MAPPING=pathname
NEXT_PUBLIC_COMMENT_GISCUS_STRICT=0
NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED=1
NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA=0
NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION=bottom
NEXT_PUBLIC_COMMENT_GISCUS_LANG=zh-CN
```

## Notion Checklist

- Keep the Notion page public.
- Use `Published` for visible posts and `Draft` for hidden drafts.
- Use these categories consistently: `课程学习`, `项目记录`, `技术笔记`, `生活随笔`.
- Keep `Slug` values readable and stable after publishing.

## Giscus Checklist

- Repository `destinyon/blog` is public.
- GitHub Discussions is enabled.
- Giscus app is installed for the repository.
- Category is `Announcements`.
- Mapping is `pathname`.

## Validation

After every deployment:

1. Open `https://blog-celeste.top` and verify it redirects to `https://www.blog-celeste.top/`.
2. Confirm homepage title, description, and hero image render.
3. Open one category page.
4. Open one article page.
5. Scroll to comments and confirm Giscus loads.
6. Check mobile width around 390px for overlapping text.
```

Expected: guide gives concrete values and validation steps without passwords or private keys.

- [ ] **Step 2: Run Markdown spot check**

Run:

```powershell
Get-Content -Raw -Encoding UTF8 docs\deployment\celeste-blog.md
```

Expected: Chinese text is readable when decoded as UTF-8.

---

### Task 5: Build And Browser Verification

**Files:**
- Verify all changed files.

- [ ] **Step 1: Run type check**

Run:

```powershell
yarn type-check
```

Expected: exit code 0.

- [ ] **Step 2: Run production build**

Run:

```powershell
yarn build
```

Expected: exit code 0. If Notion or network access fails, record the exact error and retry once after confirming the Notion page is reachable.

- [ ] **Step 3: Start local development server**

Run:

```powershell
yarn dev
```

Expected: Next.js dev server starts on `http://localhost:3000` or another printed port.

- [ ] **Step 4: Browser smoke test with agent-browser**

Run:

```powershell
agent-browser open http://localhost:3000
agent-browser snapshot -i
agent-browser screenshot D:\blog\celeste-home-local.png --full
```

Expected:

- page title includes `Celeste`;
- homepage hero is visible;
- category links are visible;
- no obvious text overlap in the screenshot.

- [ ] **Step 5: Mobile screenshot check**

Run:

```powershell
agent-browser viewport 390 844
agent-browser open http://localhost:3000
agent-browser screenshot D:\blog\celeste-home-mobile-local.png --full
```

Expected: hero text and category links fit without overlap.

- [ ] **Step 6: Article/comment check**

Use the snapshot to open a visible article, then scroll to comments:

```powershell
agent-browser snapshot -i -u
agent-browser scroll down 2000
agent-browser wait --text "Giscus"
agent-browser screenshot D:\blog\celeste-article-comments-local.png --full
```

Expected: article content renders and the comment area attempts to load Giscus.

---

### Task 6: Commit And Push

**Files:**
- All files changed by Tasks 1-5.

- [ ] **Step 1: Review diff**

Run:

```powershell
git diff --stat
git diff --check
```

Expected: no whitespace errors from `git diff --check`.

- [ ] **Step 2: Stage focused changes**

Run:

```powershell
git add blog.config.js conf/comment.config.js .env.example public/images/celeste-hero.jpg themes/endspace/components/HomeHero.js themes/endspace/index.js themes/endspace/style.js docs/superpowers/specs/2026-05-24-celeste-blog-design.md docs/superpowers/plans/2026-05-24-celeste-blog-implementation.md docs/deployment/celeste-blog.md
```

Expected: only intended files are staged.

- [ ] **Step 3: Commit**

Run:

```powershell
git commit -m "feat: customize Celeste blog"
```

Expected: commit succeeds.

- [ ] **Step 4: Push branch**

Run:

```powershell
git push -u origin codex/celeste-blog
```

Expected: branch is available on GitHub for PR or merge.
