import '../styles/globals.css'
import type { AppProps } from 'next/app'
import styled from "styled-components";
import Navigation from "../components/Navigation";
import Header from "../components/Header";
import {useState} from "react";

function MyApp({ Component, pageProps }: AppProps) {

  const MainContainer = styled.div`
    background: #e5e5e5;
  `
  const [ isNavOpen, setIsNavOpen ] = useState(false)

  const toggleNav  = () => setIsNavOpen(!isNavOpen)

  return (
      <MainContainer>
        <Navigation isOpen={isNavOpen} toggleNav={toggleNav} />
        <Header toggleNav={toggleNav} isOpen={isNavOpen} />
        <Component {...pageProps} />
    </MainContainer>
  )
}

export default MyApp
