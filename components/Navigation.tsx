import styled from "styled-components";
import {motion,MotionConfig} from "framer-motion";
import { useRouter } from 'next/router'

interface INavigation {
    toggleNav: () => void;
    isOpen: boolean
}

const Navigation = ({ isOpen, toggleNav }: INavigation) => {

    const NavContainer = styled.div`
      display: flex;
      height: 91.4vh;
      width: 100%;
      top: 0;
      background: white;
      position: absolute;
      padding-top: 5rem;
      z-index: 2;
    `

    const NavItemContainer60 = styled.div`
      width: 60%;
      display: flex;
    `
    const NavItemContainer40 = styled.div`
      width: 40%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 3rem;
    `

    const NavItem = styled.div`
      width: 33%; 
      border-right: 2px solid #000000;
      display: flex;
      justify-content: center;
      align-items: end;
      padding: 10rem 0rem;
    `

    const NavLink = styled.div`
      width: 100%;
      font-size: 8rem;
      transform: rotate(-90deg);
    `

    const FooterLink = styled.p`
      margin-bottom: 12px;
      -webkit-transition: all 250ms ease;
      transition: all 250ms ease;
      color: #000;
      font-size: 1.2em;
      line-height: 1.2em;
      font-weight: 300;
      letter-spacing: 0.01em;
    `

    const router = useRouter()

    const navigate = (path: string) => {
        router.push(path)
        if (isOpen) {
            toggleNav()
        }
    }

    return (
        <MotionConfig transition={{ duration: 0.5 }}>
            <motion.div
                initial={{ opacity: isOpen ? 0 : 1 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
            >
            <NavContainer>
                <NavItemContainer60>
                    <NavItem>
                        <NavLink onClick={() => navigate('/work')}>WORK</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => navigate('/about')}>ABOUT</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => navigate('/contact')}>CONTACT</NavLink>
                    </NavItem>
                </NavItemContainer60>
                <NavItemContainer40>
                    <FooterLink>514-222-3461</FooterLink>
                    <FooterLink>jomar@jomardesgin.com</FooterLink>
                </NavItemContainer40>
            </NavContainer>
            </motion.div>
        </MotionConfig>
    )
}

export default Navigation;