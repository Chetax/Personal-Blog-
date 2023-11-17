import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Row,Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars ,faXmark,faPen,faCircleUser} from '@fortawesome/free-solid-svg-icons';
import {faBookmark,faMessage} from '@fortawesome/free-regular-svg-icons';

const Navbar=()=>{
    return<>
    <div className="navbar" style={{height:"11vh",width:"16vw", borderBottom:'2px solid whitesmoke',borderRight:'2px solid whitesmoke'}}>
    <Container  className=" d-flex align-item-center">
   <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faBars} /> </Col>
   <Col className="col-4 d-flex  justify-content-center">Menu</Col>
   <Col className="col-4 d-flex  justify-content-end"><FontAwesomeIcon style={{color:"#cccccc"}} icon={ faXmark}/></Col>
    </Container>
    </div>
    <div className="navbar" style={{height:"50vh",width:"16vw", borderBottom:'2px solid whitesmoke',borderRight:'2px solid whitesmoke'}}>
    <Container  className="">
   <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCircleUser} /> </Col>
   <Col className="col-7 d-flex  justify-content-center">Chetan Padhen</Col>
   <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{color:"#cccccc"}} icon={ faPen}/></Col>
    </Container>
    <Container  className="">
   <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon style={{color:"#cccccc"}} icon={faBookmark} /> </Col>
   <Col className="col-7 d-flex  justify-content-center">News Feed</Col>
   <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{color:"#cccccc"}} icon={ faPen}/></Col>
    </Container>
    <Container  className="">
   <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faMessage} /> </Col>
   <Col className="col-7 d-flex  justify-content-center">Message</Col>
   <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{color:"#cccccc"}} icon={ faPen}/></Col>
    </Container>
    <Container  className="">
   <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCircleUser} /> </Col>
   <Col className="col-7 d-flex  justify-content-center">Message</Col>
   <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{color:"#cccccc"}} icon={ faPen}/></Col>
    </Container>
    <Container  className="">
   <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCircleUser} /> </Col>
   <Col className="col-7 d-flex  justify-content-center">Chetan Padhen</Col>
   <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{color:"#cccccc"}} icon={ faPen}/></Col>
    </Container>
    <Container  className="">
   <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCircleUser} /> </Col>
   <Col className="col-7 d-flex  justify-content-center">Chetan Padhen</Col>
   <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{color:"#cccccc"}} icon={ faPen}/></Col>
    </Container>
    <Container  className="">
   <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCircleUser} /> </Col>
   <Col className="col-7 d-flex  justify-content-center">Chetan Padhen</Col>
   <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{color:"#cccccc"}} icon={ faPen}/></Col>
    </Container>
    <Container  className="">
   <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCircleUser} /> </Col>
   <Col className="col-7 d-flex  justify-content-center">Chetan Padhen</Col>
   <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{color:"#cccccc"}} icon={ faPen}/></Col>
    </Container>
    <Container  className="">
   <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCircleUser} /> </Col>
   <Col className="col-7 d-flex  justify-content-center">Chetan Padhen</Col>
   <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{color:"#cccccc"}} icon={ faPen}/></Col>
    </Container>
    <Container  className="">
   <Col className="col-2 d-flex  justify-content-end">   <FontAwesomeIcon icon={faCircleUser} /> </Col>
   <Col className="col-7 d-flex  justify-content-center">Chetan Padhen</Col>
   <Col className="col-2 d-flex  justify-content-end"><FontAwesomeIcon style={{color:"#cccccc"}} icon={ faPen}/></Col>
    </Container>
    </div>
    </>
}
export default Navbar;
