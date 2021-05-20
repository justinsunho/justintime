import React from "react";
import { useInView } from "react-intersection-observer";
import { a, useSpring } from "react-spring";
import { Image } from "components/atoms";
import { TextBlock } from "components/molecules";
import { enterLeft } from "utilities/springConfigs";

const Hero = ({ button, className, description, headingText, image }) => {
    const { inView, ref } = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });

    const AnimatedImage = a(Image);

    const imageSpring = useSpring({
        ...enterLeft(inView),
    });

    return (
        <div className={`section`} ref={ref}>
            <div className={` row align-items-center flex-md-row flex-column-reverse  ${className}`}>
                <div className={"col-md-6 col-lg-8"}>
                    {/* <AnimatedImage image={image} style={imageSpring} /> */}
                    {image}
                </div>
                <TextBlock
                    button={button}
                    className="col-md-6 col-lg-4 align-items-start"
                    description={description}
                    headingTag={"h1"}
                    headingText={headingText}
                    inView={inView}
                    subtitle={"hero subtitle"}
                />
            </div>
        </div>
    );
};

export default Hero;
