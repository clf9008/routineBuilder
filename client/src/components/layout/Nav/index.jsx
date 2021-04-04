import React from "react";
import { StyledNav } from "./styles";

const Nav = () => {
    return (
        <StyledNav>
            <StyledNav.Brand href="/">
                <img alt="" src="/" width="30" height="30" className="d-inline-block align-top" /> routineBuildr
            </StyledNav.Brand>
        </StyledNav>
    );
};

export default Nav;
