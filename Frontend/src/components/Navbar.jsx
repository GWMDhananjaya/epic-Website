import React , { useEffect , useState} from 'react'
import logo from '../assets/logo.png'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    // set toggle Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

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
    <nav className="">
        
       

    </nav>
  )
}

export default Navbar

