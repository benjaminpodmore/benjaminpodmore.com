import { useSpring, animated } from '@react-spring/web';

const Landing = () => {
    const fade = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 100
    });

    return (
        <div id="landing" className="h-[80vh] flex flex-col justify-center items-center snap-start">
            <animated.h1 style={fade} className="text-4xl font-bold mb-6">Hello, I'm Benjamin Podmore</animated.h1>
            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden border-4 border-blue-600">
                <animated.img style={fade} src="portrait-min-zoom.jpg" alt="Your Portrait" className="absolute top-0 left-0 w-full h-full object-cover"/>
            </div>
        </div>
    );
}

export default Landing;
