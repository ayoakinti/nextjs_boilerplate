import Link from 'next/link'

interface LogoProps {
  className?: string
  href?: string
}

export default function Logo({ className = '', href = '/' }: LogoProps) {
  return (
    <Link
      href={href}
      aria-label='Home'
      className={className}
    >
      {/* Replace with your real SVG or image */}
      <svg
        width='32'
        height='32'
        viewBox='0 0 100 100'
        fill='currentColor'
      >
        <circle
          cx='50'
          cy='50'
          r='50'
        />
        <text
          x='50%'
          y='55%'
          textAnchor='middle'
          fill='#fff'
          fontSize='50'
          fontFamily='Arial, sans-serif'
          dy='.3em'
        >
          M
        </text>
      </svg>
    </Link>
  )
}
