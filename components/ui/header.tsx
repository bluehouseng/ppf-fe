import Link from 'next/link';
import LogoImage from '@/public/images/logo.png';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import HeroImage from '@/public/images/ppf 1.jpg'
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
                <ul className="inline-flex mb-4 md:order-2 md:ml-4 md:mb-0">
                {/* <li className="mb-5 font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 "> */}
                   
                   {/* <a target='blank' href="https://www.facebook.com/princepmfoundation"> <span className='text-3xl text-blue-400 mr-2 pt-2 p-3'>
                     <FontAwesomeIcon icon={faFacebook} className='w-8 h-8' />
                   </span></a>
                 </li>
                 <li className="mb-5 font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 ">
                 
                   <a target='blank' href="https://twitter.com/PPMFoundation">  <span className='text-3xl text-blue-400 mr-2 pt-1 p-3'>
                     <FontAwesomeIcon icon={faTwitter} className='w-6 h-6' />
                   </span></a>
                 </li> 
                 <li className="mb-4 font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
                   <span className='text-3xl text-blue-400 mr-2 pt-2 p-3'>
                     <FontAwesomeIcon icon={faPhone} className='w-6 h-6' />
                   </span>
                   
                   
                 </li> */}
               </ul>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  )
}
