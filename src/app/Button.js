import Link from 'next/link'

const Button = ({ href, onClick, children, className = '' }) => {
  const baseClasses = 'px-4 py-2 flex flex-1 rounded-md font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-orange-400 to-orange-600 hover:from-orange-500 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 shadow-md hover:shadow-lg justify-center items-center'

  const fullClassName = `${baseClasses} ${className}`

  if (href) {
    return (
      <Link href={href} className={fullClassName}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={fullClassName}>
      {children}
    </button>
  )
}

export default Button

