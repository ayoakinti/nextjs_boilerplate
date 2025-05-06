import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='bg-gray-100 dark:bg-zinc-800 border-t dark:border-zinc-700'>
      <div className='mx-auto max-w-6xl px-6 py-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400'>
        <p>© {new Date().getFullYear()} MySite. All rights reserved.</p>
        <ul className='flex space-x-4 mt-3 md:mt-0'>
          <li>
            <Link
              href='/privacy'
              className='hover:text-primary-500'
            >
              Privacy
            </Link>
          </li>
          <li>
            <Link
              href='/terms'
              className='hover:text-primary-500'
            >
              Terms
            </Link>
          </li>
          <li>
            <Link
              href='/imprint'
              className='hover:text-primary-500'
            >
              Imprint
            </Link>
          </li>
          <li>
            <Link
              href='https://twitter.com/yourhandle'
              className='hover:text-primary-500'
            >
              Twitter
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
