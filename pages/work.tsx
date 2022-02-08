import { Spring, animated } from 'react-spring';
import styled from "styled-components";

const Work = () => {

    const Container = styled.div`
      height: 89vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `

    return (
        <Container>
            <Spring
                loop
                from={{ opacity: 0, color: 'red', fontSize: '3rem'  }}
                to={[
                    { opacity: 1, color: '#ffaaee', fontSize: '3rem' },
                    { opacity: 0, color: 'rgb(14,26,19)', fontSize: '3rem' },
                ]}>
                {(styles: any) => (
                    <animated.div style={styles}>WORK</animated.div>
                )}
            </Spring>
        </Container>
    )
}

export default Work;