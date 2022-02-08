import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { Spring, animated } from 'react-spring';


const Home = () => {

    return (
            <Parallax pages={3} style={{ top: '4rem', left: '0' }}>
                <ParallaxLayer
                    offset={0}
                    speed={2.5}
                    style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Spring
                        loop
                        from={{ opacity: 0, color: 'red', fontSize: '3rem'  }}
                        to={[
                            { opacity: 1, color: '#ffaaee', fontSize: '3rem' },
                            { opacity: 0, color: 'rgb(14,26,19)', fontSize: '3rem' },
                        ]}>
                        {(styles: any) => (
                            <animated.div style={styles}>Here we go.</animated.div>
                        )}
                    </Spring>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#000000' }} />

                <ParallaxLayer
                    offset={1}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'white',
                    }}>
                    <Spring
                        loop
                        from={{ opacity: 0, color: 'red', fontSize: '3rem'  }}
                        to={[
                            { opacity: 1, color: '#ffaaee', fontSize: '3rem' },
                            { opacity: 0, color: 'rgb(14,26,19)', fontSize: '3rem' },
                        ]}>
                        {(styles: any) => (
                            <animated.div style={styles}>Another One.</animated.div>
                        )}
                    </Spring>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={2}
                    speed={0.5}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Spring
                        loop
                        from={{ opacity: 0, color: 'red', fontSize: '3rem'  }}
                        to={[
                            { opacity: 1, color: '#ffaaee', fontSize: '3rem' },
                            { opacity: 0, color: 'rgb(14,26,19)', fontSize: '3rem' },
                        ]}>
                        {(styles: any) => (
                            <animated.div style={styles}>Final One</animated.div>
                        )}
                    </Spring>
                </ParallaxLayer>
            </Parallax>
    )
}

export default Home;