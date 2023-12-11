import React from "react";
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faPen, faCircleUser, faUser } from '@fortawesome/free-solid-svg-icons';
import { faBookmark, faMessage, faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faUsers, faPhotoFilm, faMusic } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useState } from "react";
const FirstDiv = document.getElementById('FirstDiv');
const seconddiv = document.getElementById('seconddiv');


const Navbar = () => {
    const [dis,setdis]=useState(0);

const setStyling=()=>{
setdis(!dis);
}
const firstDivStyle = {
    display: dis ? "block" : "none"
};

const secondDivStyle = {
    display: dis ? "none" : "block"
   
};

    return <>
     
        <div id="FirstDiv" className="div"   style={firstDivStyle}>
            <div className="navbar" id="firstdivnaabar" style={{ height: "11vh", width: "16vw", borderBottom: '2px solid whitesmoke', borderRight: '2px solid whitesmoke' }}>
                <Container className=" d-flex align-item-center">
                     <Col className="col-4 d-flex  justify-content-center">Menu</Col>
                    <Col onClick={setStyling} className="col-4 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} icon={faXmark} /></Col>
                </Container>
            </div>
            <div className="navbar" style={{ height: "50vh", width: "16vw", borderBottom: '2px solid whitesmoke', borderRight: '2px solid whitesmoke' }}>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCircleUser} /> </Col>
                    <Col className="col-7 d-flex  ">Chetan</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} icon={faPen} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon style={{}} icon={faBookmark} /> </Col>
                    <Col className="col-6 d-flex  ">News Feed</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faMessage} /> </Col>
                    <Col className="col-6 d-flex  ">Message</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCalendarDays} /> </Col>
                    <Col className="col-6 d-flex  ">Events</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faUser} /> </Col>
                    <Col className="col-6 d-flex  ">Friend</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className=""><FontAwesomeIcon icon="fa-regular " />
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faUsers} /> </Col>
                    <Col className="col-6 d-flex  ">Groups</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faPhotoFilm} /> </Col>
                    <Col className="col-6 d-flex  ">Photo</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faMusic} /> </Col>
                    <Col className="col-6 d-flex  ">Music</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faYoutube} /> </Col>
                    <Col className="col-6 d-flex  ">Video</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCalendarDays} /> </Col>
                    <Col className="col-6 d-flex  ">Calender</Col>
                    <Col className="col-2 d-flex  justify-content-end mb-5"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>

            </div>
            <div className="navbar"  style={{ height: "50vh", width: "16vw", borderBottom: '2px solid whitesmoke', borderRight: '2px solid whitesmoke' }}>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCircleUser} /> </Col>
                    <Col className="col-7 d-flex ">Chetan</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} icon={faPen} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon style={{}} icon={faBookmark} /> </Col>
                    <Col className="col-6 d-flex  ">News Feed</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faMessage} /> </Col>
                    <Col className="col-6 d-flex  ">Message</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCalendarDays} /> </Col>
                    <Col className="col-6 d-flex  ">Events</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faUser} /> </Col>
                    <Col className="col-6 d-flex  ">Friend</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className=""><FontAwesomeIcon icon="fa-regular " />
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faUsers} /> </Col>
                    <Col className="col-6 d-flex  ">Groups</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faPhotoFilm} /> </Col>
                    <Col className="col-6 d-flex  ">Photo</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faMusic} /> </Col>
                    <Col className="col-6 d-flex  ">Music</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faYoutube} /> </Col>
                    <Col className="col-6 d-flex  ">Video</Col>
                    <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>
                <Container className="">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCalendarDays} /> </Col>
                    <Col className="col-6 d-flex  ">Calender</Col>
                    <Col className="col-2 d-flex  justify-content-end mb-5"><FontAwesomeIcon style={{ color: "#cccccc" }} /></Col>
                </Container>

            </div>
        </div>
  
        <div id="seconddiv" className="div"   style={secondDivStyle}>
            <div className="navbar" style={{ height: "11vh", width: "5vw", borderBottom: '2px solid whitesmoke', borderRight: '2px solid whitesmoke' }}>
                <Container className=" d-flex align-item-center justify-content-center text-center">
                    <Col onClick={setStyling}  className="col-4 d-flex  "> <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faBars} /></Col>
                </Container>
            </div>
            <div className="navbar " style={{ height: "50vh", width: "5vw", borderBottom: '2px solid whitesmoke', borderRight: '2px solid whitesmoke' }}>
                <Container className="d-flex align-item-center justify-content-center"> <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCircleUser} /> </Col></Container>
                <Container className="d-flex align-item-center justify-content-center"><Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon style={{}} icon={faBookmark} /> </Col></Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faMessage} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCalendarDays} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faUser} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center"><FontAwesomeIcon icon="fa-regular " />
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faUsers} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faPhotoFilm} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faMusic} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faYoutube} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCalendarDays} /> </Col>
                </Container>

            </div>
            <div className="navbar " style={{ height: "50vh", width: "5vw", borderBottom: '2px solid whitesmoke', borderRight: '2px solid whitesmoke' }}>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCircleUser} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon style={{}} icon={faBookmark} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faMessage} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCalendarDays} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faUser} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center"><FontAwesomeIcon icon="fa-regular " />
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faUsers} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faPhotoFilm} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faMusic} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faYoutube} /> </Col>
                </Container>
                <Container className="d-flex align-item-center justify-content-center">
                    <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCalendarDays} /> </Col>
                </Container>

            </div>
        </div>
    </>
}
export default Navbar;