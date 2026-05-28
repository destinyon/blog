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
NEXT_PUBLIC_BIO=Life is not out to get you.
NEXT_PUBLIC_AVATAR=/images/celeste-avatar.jpg
NEXT_PUBLIC_LINK=https://www.blog-celeste.top
NEXT_PUBLIC_KEYWORD=Celeste, Notion, 博客, 技术笔记, 项目记录, 课程学习
NEXT_PUBLIC_COMMENT_GISCUS_REPO=destinyon/blog
NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID=R_kgDOSl1FJA
NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID=DIC_kwDOSl1FJM4C-AZM
NEXT_PUBLIC_COMMENT_GISCUS_MAPPING=pathname
NEXT_PUBLIC_COMMENT_GISCUS_STRICT=0
NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED=1
NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA=1
NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION=top
NEXT_PUBLIC_COMMENT_GISCUS_THEME=preferred_color_scheme
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
