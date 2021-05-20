import React from "react";
import { Link } from "gatsby";
import * as styles from "./styles.module.scss";

const Header = () => {
    return (
        <header className={`${styles.header} container`}>
            <Link className={styles.logo} to={"/"}>
                Just in Time
                <br /> Tutoring
            </Link>
        </header>
    );
};

export default Header;
