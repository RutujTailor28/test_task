import styled from "styled-components";
import {useState} from "react";
import { motion } from "framer-motion";
import { useRouter } from 'next/router'

interface IHeader {
    toggleNav: () => void;
    isOpen: boolean;
}


const Header = ({ toggleNav, isOpen }: IHeader) => {

    const [mouseEnter, setMouseEnter] = useState(false)

    const HeaderContainer = styled.div`
      background: rgba(0,0,0,0);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 2rem;
      position: relative;
      top: 0;
      z-index: 3;
    `

    const HeaderNav = styled.p`
      font-size: 2rem;
      cursor: pointer;
    `

    const NavItem = styled.div`
      width: 33%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      //transform: rotate(-90deg);
      font-size: 5rem;
      border-right: 4px solid blue;
    `

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const router = useRouter()

    return (
            <HeaderContainer>
                <HeaderNav style={{ display: 'flex' }} onClick={() => router.push("/home")} onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>L
                    <motion.ul variants={container} initial={mouseEnter ? "hidden" : "visible"} animate={mouseEnter ? "visible" : "hidden"} style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                        <motion.li key={2} className="item" variants={item} />
                        {['O','G','O'].map((index,i) => (
                            <motion.li key={i} className="item" variants={item}>{index}</motion.li>
                        ))}
                    </motion.ul>
                </HeaderNav>
                <HeaderNav onClick={toggleNav} style={{ display: 'flex' }} onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}>M
                    <motion.ul variants={container} initial={mouseEnter ? "hidden" : "visible"} animate={mouseEnter ? "visible" : "hidden"} style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                        <motion.li key={2} className="item" variants={item} />
                        {['E','N','U'].map((index,i) => (
                            <motion.li key={i} className="item" variants={item}>{index}</motion.li>
                        ))}
                    </motion.ul>
                </HeaderNav>
                {/*</motion.div>*/}
            </HeaderContainer>
    )
}

export default Header;