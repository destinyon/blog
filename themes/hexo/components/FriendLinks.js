const links = [
  {
    title: 'tangly',
    description: 'NotionNext 官方博客',
    href: 'https://blog.tangly1024.com'
  }
]

export default function FriendLinks() {
  return (
    <section className='px-5 py-8'>
      <div className='mx-auto max-w-2xl'>
        <h1 className='mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100'>
          友情链接
        </h1>
        <div className='grid gap-4 sm:grid-cols-2'>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='group block rounded-lg border border-gray-200 bg-white/75 p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900/60 dark:hover:border-indigo-500'
            >
              <div className='flex items-start gap-3'>
                <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-300'>
                  <i className='fas fa-link' aria-hidden />
                </span>
                <span className='min-w-0'>
                  <span className='block truncate text-base font-semibold text-gray-900 group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-indigo-300'>
                    {link.title}
                  </span>
                  <span className='mt-1 block text-sm leading-6 text-gray-600 dark:text-gray-400'>
                    {link.description}
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
