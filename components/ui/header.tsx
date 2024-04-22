import Link from 'next/link';
import LogoImage from '@/public/images/logo.png';
import Image from 'next/image';
export default function Header({ nav = true }: {
  nav?: boolean
}) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="inline-flex  rounded-md"  href="/" aria-label="Cruip">
      <Image className="max-w-none" src={LogoImage} width={45} height={50} priority alt="Stellar" />
    </Link>
          </div>
          {/* Desktop navigation */}
          {nav &&
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                {/* <li>
                  <Link
                    className="font-medium text-gray-600 decoration-blue-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    href="/signin"
                  >
                    Sign in
                  </Link>
                </li> */}
                <li className="ml-3">
                  <Link className="btn-sm text-white bg-blue-400 hover:bg-blue-400 w-full shadow-sm" href="/signup">
                    Join The Community
                  </Link>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  )
}
