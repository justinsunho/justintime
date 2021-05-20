import React from "react";
import { SmallCaps } from "components/atoms";
import { a } from "react-spring";

const SectionWrapper = React.forwardRef(
    ({ backgroundClassName, children, className, id, subtitle, title, trailArray }, ref) => {
        return (
            <div className={`section ${className}`} id={id} ref={ref}>
                <div className={backgroundClassName}>
                    {subtitle && (
                        <a.div className={`row`} style={trailArray && trailArray[0]}>
                            <div className={`col text-center`}>
                                <SmallCaps>{subtitle}</SmallCaps>
                            </div>
                        </a.div>
                    )}
                    {title && (
                        <a.div className={`row`} style={trailArray && trailArray[1]}>
                            <h2 className={`col text-center`}>{title}</h2>
                        </a.div>
                    )}
                    {children}
                </div>
            </div>
        );
    }
);

export default SectionWrapper;
