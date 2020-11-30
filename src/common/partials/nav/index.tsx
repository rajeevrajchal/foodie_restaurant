import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link'

import navItem from "../../../mock/navItems";

const Nav = () => {
    const [scrolled, setScrolled] = useState(false)
    const navRef = useRef<any>()
    navRef.current = scrolled;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 150;
            if (show) {
                setScrolled(true)
            } else {
                setScrolled(false);
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);

    return (
        <nav className={`navbar flex justify-between align-center item-center  ${scrolled ? 'scrolled' : ''}`}>
            <Link href={'/'}>
                <div className={'logo logo-text bold mt-sm pointer'}>
                    Foodie
                </div>
            </Link>
            <div className={`navbar-items flex align-center item-center`}>
                {
                    navItem.map((item, index: number) => (
                        <div className={`logo-text capitalize bold ml-xl mt-sm pointer`} key={index}>
                            {item.label}
                        </div>
                    ))
                }

                <Link href={'/cart'}>
                    <div className="navbar-cart ml-xl mt-sm bold pointer">
                        <i className="material-icons">
                            add_shopping_cart
                        </i>
                    </div>
                </Link>
                <div className="btn primary ml-xl ml-sm">
                    Order Now
                </div>
            </div>
        </nav>
    );
};

export default Nav;