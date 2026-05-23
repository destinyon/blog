# Celeste's Blog Design

## Context

This repository is the `destinyon/blog` fork of NotionNext. The production site is deployed on Vercel and is reachable at `https://blog-celeste.top`, which redirects to `https://www.blog-celeste.top/`.

The first version should stay close to NotionNext instead of rebuilding a custom blog engine. The goal is a personal blog named `Celeste's Blog` with a magazine-like homepage, Notion as the writing backend, Vercel as the deployment platform, and Giscus as the comment system.

## Confirmed Decisions

- Content source: Notion.
- Framework: NotionNext.
- Repository: `https://github.com/destinyon/blog.git`.
- Deployment: Vercel.
- Domain: `blog-celeste.top` with `www.blog-celeste.top` as the active canonical host.
- Site name: `Celeste's Blog`.
- Author: `Celeste`.
- Description: `学习记录、项目实践、技术笔记与生活片段。`
- Visual direction: personal editorial / magazine style.
- Navigation categories: `课程学习`, `项目记录`, `技术笔记`, `生活随笔`, plus `关于` and RSS.
- Homepage image: use `C:\Users\why20\Pictures\头像\16732017E40DE39A34173CDF75A85AB5.jpg` as a homepage hero image only.
- Article and list pages: keep clean paper-like reading surfaces without the strong hero background.
- Comments: Giscus with GitHub Discussions on `destinyon/blog`.

## Configuration Values

The Notion page is public and resolves successfully.

```text
NOTION_PAGE_ID=fcf799be702d82f9a779813a1eee30b3
```

Giscus configuration:

```text
repo=destinyon/blog
repoId=R_kgDOSltz-w
category=Announcements
categoryId=DIC_kwDOSltz-84C9rmm
mapping=pathname
strict=0
reactionsEnabled=1
emitMetadata=0
inputPosition=bottom
theme=preferred_color_scheme
lang=zh-CN
```

These values are public client-side configuration values for Giscus. The real Vercel environment should still own environment-specific values such as `NOTION_PAGE_ID` and the canonical domain.

## Architecture

Use the existing NotionNext application and modify configuration, assets, and the selected theme rather than introducing a new backend or CMS. The work should remain scoped to:

- site metadata and public configuration;
- comment configuration;
- homepage hero image and homepage visual styling;
- navigation/category presentation;
- documentation for deployment and future content operations.

Avoid broad rewrites of NotionNext internals. If a theme needs custom visual treatment, prefer creating small, focused theme components or CSS overrides under the active theme instead of changing shared rendering logic.

## Content Model

The Notion database should keep the standard NotionNext-compatible fields and use these values consistently:

- `Title`: article title.
- `Slug`: readable URL slug.
- `Date`: publish date.
- `Category`: one of `课程学习`, `项目记录`, `技术笔记`, `生活随笔`.
- `Tags`: multiple topic labels.
- `Status`: at least `Published` and `Draft`.
- `Summary`: list-page summary.
- `Cover`: optional article cover.

Initial validation content should include at least three published posts across at least two categories so that homepage, category pages, tag pages, archive, article page, RSS, and comments can all be tested.

## User Experience

Homepage:

- Use a strong first-viewport hero using the supplied mountain illustration.
- Overlay the image with a readable dark or warm translucent layer.
- Show `Celeste's Blog` and a short description.
- Expose the four main content categories as primary entry points.
- Show recent posts below or beside the hero depending on the active theme layout.

Lists:

- Prioritize scanning: title, date, category, tags, and summary.
- Keep visual density moderate.
- Do not use the hero image as a heavy background on list pages.

Articles:

- Preserve NotionNext's long-form reading features: table of contents, code highlighting, images, article metadata, related posts, and previous/next navigation where supported.
- Show Giscus after the article content.
- Keep the reading area plain and high contrast.

Responsive behavior:

- Desktop can show richer navigation and table of contents.
- Mobile should prioritize readable body text, stable navigation, and non-overlapping controls.

## Deployment And Operations

Vercel should deploy from `destinyon/blog` and read environment variables from the Vercel project settings. Required or expected values:

```text
NOTION_PAGE_ID=fcf799be702d82f9a779813a1eee30b3
NEXT_PUBLIC_LINK=https://www.blog-celeste.top
NEXT_PUBLIC_AUTHOR=Celeste
NEXT_PUBLIC_BIO=学习记录、项目实践、技术笔记与生活片段。
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

If local defaults are committed, they must not include secrets. Giscus values are acceptable as public defaults, but environment variables should still override them.

## Validation

Local validation should include:

- install dependencies with the repository's package manager;
- run the smallest relevant static checks available;
- run a production build if feasible;
- run the app locally and inspect the homepage, at least one category page, one article page, RSS, and comments.

Browser validation should include:

- `https://blog-celeste.top` redirects to `https://www.blog-celeste.top/`;
- the homepage title and description are correct;
- the homepage hero image renders and text remains readable;
- article pages render Notion content;
- Giscus loads on article pages;
- mobile viewport has no obvious text overlap or navigation breakage.

## Risks

- Notion database fields may drift from NotionNext expectations and break categories or lists.
- Notion public sharing must remain enabled for builds and runtime revalidation.
- Giscus requires the repository to stay public, Discussions enabled, and the Giscus app authorized.
- NotionNext upstream changes can affect theme configuration names; inspect actual theme code before editing.
- The supplied hero image should be copied into `public/images/` and compressed or converted if it hurts first-load performance.
- The current repository contains upstream NotionNext docs and workflows; keep edits scoped to the blog customization to avoid noisy divergence.
