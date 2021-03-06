import React from "react";
import * as styles from "./styles.module.scss";

const SmallCaps = ({ children, className, style }) => {
    return (
        <span className={`${styles.smallCaps} ${className}`} style={style}>
            {children}
        </span>
    );
};

export default SmallCaps;
