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
    <section className='celeste-hero endspace-frame mb-10 overflow-hidden'>
      <div className='celeste-hero__image' aria-hidden='true' />
      <div className='celeste-hero__overlay' aria-hidden='true' />
      <div className='celeste-hero__content'>
        <p className='celeste-hero__eyebrow tech-text'>PERSONAL ARCHIVE</p>
        <h1 className='celeste-hero__title'>{siteConfig('TITLE')}</h1>
        <p className='celeste-hero__description'>
          {siteConfig('DESCRIPTION')}
        </p>
        <nav className='celeste-hero__links' aria-label='Celeste blog categories'>
          {CATEGORY_LINKS.map(item => (
            <SmartLink
              key={item.href}
              href={item.href}
              className='celeste-hero__link'>
              <span>{item.code}</span>
              <strong>{item.label}</strong>
            </SmartLink>
          ))}
        </nav>
      </div>
    </section>
  )
}
