import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import Button from "./Button"

/**
 * Footer component for the application.
 */
const Footer = () => {
    return (
        <footer className="text-white py-20 bg_gradient ">
            {/* Top Section */}
            <div className="container mx-auto px-20 lg:px-20 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
                {/* Branding */}
                <div className="flex">
                    <p className="font-bold text-center">
                        Cook<span className="text-orange-500 text-xl">Therapy</span>
                    </p>
                </div>

                {/* Quick Links Section */}
                <div className="">
                    <p>QUICK LINKS</p>

                    <div className="flex flex-col text-start mb-4 md:mb-0">
                        {/* Quick Links */}
                        {/* Add actual links for href attributes */}
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-orange-500'
                        >
                            Home
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-orange-500'
                        >
                            About
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-orange-500'
                        >
                            Services
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-orange-500'
                        >
                            Contact
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-orange-500'
                        >
                            Chiefs
                        </a>
                    </div>
                </div>

                {/* Legal Section */}
                <div>
                    <p>LEGAL</p>
                    <div className='flex flex-col text-start mb-4 md:mb-0 text-[14px]'>
                        {/* Legal Links */}
                        {/* Add actual links for href attributes */}
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-orange-500'
                        >
                            Terms and Conditions
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-orange-500'
                        >
                            License Agreement
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-orange-500'
                        >
                            Privacy Policy
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-orange-500'
                        >
                            Copyright Information
                        </a>
                        <a
                            href='#'
                            className='block md:inline-block py-2 hover:text-orange-500'
                        >
                            Cookies Policy
                        </a>
                    </div>
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col">
                    <p>SOCIAL MEDIA</p>
                    <div className="flex mt-4 gap-3">
                        {/* Social Media Icons */}
                        {/* Add actual links for href attributes */}
                        <a
                            href='#'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaFacebook size={18} />
                        </a>

                        <a
                            href='#'
                            className='bg-pink-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaInstagram size={18} />
                        </a>
                        <a
                            href='#'
                            className='bg-blue-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaTwitter size={18} />
                        </a>
                        <a
                            href='#'
                            className='bg-red-600 p-1.5 rounded-sm text-white hover:scale-110'
                        >
                            <FaYoutube size={18} />
                        </a>
                    </div>

                    {/* Sign Up Button */}
                    <Button
                        title='Sign up'
                        btnType='button'
                        conteinerStyle='mt-10 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-md min-w-[130px]'
                    />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-center py-10">
                <span className="text-gray-400 leading-10">CodeWave &copy; 2023</span>
            </div>
        </footer>
    )
}

export default Footer
