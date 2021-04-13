import React, { useState } from "react";
import Milestones from "../Milestones";
import { Container } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProgressBar from "../../progressBar";
import TimeTable from "../../timeTable";
import styled, { keyframes } from 'styled-components';
import CSS from '../../../App.css';

import {
    LandingBackground,
    PaddedCol,
    Col2,
    ResponsiveHeader2,
    ResponsiveHeader4,
    ResponsiveParagraph,
    FullRow,
    FullRow2,
    LoginButton,
    VerticalCenterWrapper
} from "./styles";
import SignupLoginModal from "../SignupLoginModal";

const URL = "https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80";

const Landing = () => {
    const [show, setShow] = useState(false);

    return (
        <div>
            <LandingBackground className={"z-depth-5"} url={URL}>
                <FullRow>
                    <PaddedCol xs={{ span: 10, offset: 1 }} sm={{ span: 5, offset: 1 }}>
                        <ResponsiveHeader2>Welcome to routineBuildr</ResponsiveHeader2>
                        <ResponsiveParagraph>start building your dailiy routine!</ResponsiveParagraph>
                    </PaddedCol>
                    <PaddedCol xs={{ span: 10, offset: 1 }} sm={{ span: 5, offset: 1 }}>
                        <VerticalCenterWrapper>
                            <LoginButton size="lg" onClick={() => setShow(true)}>
                                Join routineBuildr{" "}
                            </LoginButton>
                        </VerticalCenterWrapper>
                    </PaddedCol>
                </FullRow>
                <SignupLoginModal show={show} setShow={setShow} />
            </LandingBackground>

            <Container style={{ minHeight: "900px" }}>
                <ResponsiveHeader4>routineBuildr</ResponsiveHeader4>
                <p>
                    build your routine here!
                </p>

            <Container>
                <FullRow2>
                    <Col2 xs lg="2">
                        9AM
                    </Col2>
                        <Col className="justify-content-md-center">
                            <form>
                                <label>
                                    Task or Activity
                            <input type="text" name="name" />
                            </label>
                            <input type="submit" value="Submit" />
                            </form></Col>
                </FullRow2>
                
                <FullRow2>
                    <Col2 xs lg="2">
                         10AM
                </Col2>
                    <Col className="justify-content-md-center">Variable width content...............</Col>
                </FullRow2>
                
                <FullRow2>
                    <Col2 xs lg="2">
                        11AM
                    </Col2>
                    <Col className="justify-content-md-center">Variable width content...............</Col>
                </FullRow2>
                
                <FullRow2>
                    <Col2 xs lg="2">
                     12PM
                    </Col2>
                    <Col className="justify-content-md-center">Variable width content...............</Col>
                </FullRow2>
                
                <FullRow2>
                    <Col2 xs lg="2">
                        1PM
                    </Col2>
                    <Col className="justify-content-md-center">Variable width content...............</Col>
                    </FullRow2>
                
                <FullRow2>
                    <Col2 xs lg="2">
                        2PM
                    </Col2>
                    <Col className="justify-content-md-center">Variable width content...............</Col>
                    </FullRow2>
                      
                <FullRow2>
                    <Col2 xs lg="2">
                        3PM
                    </Col2>
                    <Col className="justify-content-md-center">Variable width content...............</Col>
                    </FullRow2>
                      
                <FullRow2>
                    <Col2 xs lg="2">
                       4PM
                    </Col2>
                    <Col className="justify-content-md-center">Variable width content...............</Col>
                    </FullRow2>
                    
                <FullRow2>
                    <Col2 xs lg="2">
                       5PM
                    </Col2>
                    <Col className="justify-content-md-center">Variable width content...............</Col>
                    </FullRow2>
                    
                <FullRow2>
                    <Col2 xs lg="2">
                       6PM
                    </Col2>
                    <Col className="justify-content-md-center">Variable width content...............</Col>
                    </FullRow2>
                    
                <FullRow2>
                    <Col2 xs lg="2">
                       7PM
                    </Col2>
                    <Col className="justify-content-md-center">Variable width content...............</Col>
                    </FullRow2>
                    
                <FullRow2>
                    <Col2 xs lg="2">
                       8PM
                    </Col2>
                    <Col className="justify-content-md-center">Variable width content...............</Col>
                    </FullRow2>
                    
                <FullRow2>
                    <Col2 xs lg="2">
                       9PM
                    </Col2>
                    <Col className="justify-content-md-center">Variable width content...............</Col>
                </FullRow2>
    
            </Container> 


        </Container>
        </div>
    );
};

export default Landing;
