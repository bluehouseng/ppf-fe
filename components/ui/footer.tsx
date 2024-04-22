import Link from 'next/link'
import Image from 'next/image';
import LogoImage from '@/public/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
   
        <footer>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="py-8 md:py-12">
              {/* Top area */}
              <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between mb-12 md:mb-6">
                <div className="shrink-0 mr-4">
                  {/* Logo */}
                  <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="inline-flex  rounded-md"  href="/" aria-label="Cruip">
      <Image className="max-w-none" src={LogoImage} width={45} height={50} priority alt="Stellar" />
    </Link>
          </div>
                </div>
                <form className="w-full max-w-sm">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none">
                    <input type="email" className="form-input w-full mb-2 sm:mb-0 sm:mr-2" placeholder="Your email" aria-label="Your email" />
                    <button className="btn-sm text-white bg-blue-500 hover:bg-blue-600 shadow-sm whitespace-nowrap" type="submit">
                      Join Newsletter
                    </button>
                  </div>
                  {/* Success message */}
                  {/* <p class="font-medium text-emerald-600 text-center sm:text-left sm:absolute mt-2 opacity-75 text-sm">Thanks for subscribing!</p> */}
                </form>
              </div>
              {/* Bottom area */}
              <div className="text-center md:flex md:items-center md:justify-between mb-8 md:mb-6">
                {/* Social links */}
                <ul className="inline-flex mb-4 md:order-2 md:ml-4 md:mb-0">
                  {/* <li>
                    <a
                      className="flex justify-center items-center text-blue-500 bg-blue-100 hover:text-white hover:bg-blue-500 rounded-full transition duration-150 ease-in-out"
                      href="https://twitter.com/PPMFoundation"
                      aria-label="Twitter"
                    >
                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <path d="m13.063 9 3.495 4.475L20.601 9   sh2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                      </svg>
                    </a>
                  </li> */}
                  {/* <li className="mb-5 font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 ">
                    <span className='text-3xl text-blue-400 mr-3 pt-2 p-1'>
                      <FontAwesomeIcon icon={faLocationDot} className='w-6 h-6' />
                    </span>
                    <p className='pt-2'>Code Plateau Campus adj Peakfield Academy, Rayfield. Jos</p>
                  </li> */}
                  <li className="mb-5 font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800 ">
                   
                    <a target='blank' href="https://www.facebook.com/princepmfoundation"> <span className='text-3xl text-blue-400 mr-2 pt-2 p-3'>
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
                    
                    <p className="text-xl font-bold">
                      07053538137, 08155334722
                    </p>
                  </li>
                </ul>
                {/* Left links */}
                <div className="text-sm font-medium md:order-1 space-x-6 mb-2 md:mb-0">
                  {/* <a className="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">
                    About
                  </a> */}
                  {/* <a className="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">
                    Get in touch
                  </a> */}
                  <a className="text-gray-500 decoration-blue-500 decoration-2 underline-offset-2 hover:underline" href="#0">
                    Privacy &amp; Terms
                  </a>
                </div>
              </div>
              {/* Bottom notes */}
              <div className="text-xs text-gray-400 text-center md:text-left">
                Empowering Youth for Sustainable Development: Transforming Governance from Grassroots to Global. Join us in shaping a better future. © 2024 Prince Ponfa Miri Foundation. All Rights Reserved.{' '}
                <a className="font-medium text-blue-500 decoration-blue-500 underline-offset-2 hover:underline" href="#0">
                  contact us
                </a>
                .
              </div>
            </div>
          </div>
        </footer>
      );
    }
    