import React , { useEffect , useState} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);}

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 100){
                setIsSticky(true)
            }else{
                setIsSticky(false)
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    });
    
    //navItems array
    const navItems = [
        {link: "Location", path: "Location"},
        {link: "About", path: "About"},
        {link: "Contact", path: "Contact"},
        {link: "shop", path: "shop"},
    ]
  return (
    <header className='fixed top-0 left-0 right-0 w-full bg-black md:bg-transparent'>
        <nav>
            <div>
                <a href="" className='space-x-3 text-2xl item-center bg-slate-400'>
                    <img src={logo} className='inline-block w-32 item-center'>
                    </img>
                </a>

                <ul className='hidden space-x-12 md:flex'>
                    {
                        navItems.map(({link, path}) => <Link key={path} spy={true} smooth={true} to={path} offset={-100} 
                        className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>)
                    }
                    
                </ul>
                
                <div className='items-center hidden space-x-12 lg:flex'>
                    <a href='/' className='hidden lg:flex item-center text-brandPrimary hover:text-gray900'>Login</a>
                    <button className='px-4 py-2 text-white transition-all duration-300 rounded bg-brandPrimary hover:bg-neutralDGrey'>Sign up</button>
                </div>
                
            </div>
            
        </nav>
    </header>
  )

}

export default Navbar