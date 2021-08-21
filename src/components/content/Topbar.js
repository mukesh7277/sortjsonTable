import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft,faQuestionCircle,faUserAlt} from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  Button,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const Topbar = ({ toggleSidebar }) => {
  const [topbarIsOpen, setTopbarOpen] = useState(true);
  const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

  return (
    <Navbar
      color="light"
      light
      className="navbar shadow-sm p-3 mb-5 bg-purple rounded"
      expand="md"
    >
      <Button color="info" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={faAlignLeft} />
      </Button>
      <NavbarToggler onClick={toggleTopbar} />
      <Collapse isOpen={topbarIsOpen} navbar>
        <span style={{marginLeft:10}}>How are you today</span><span style={{color:"purple",fontWeight:'bold',marginLeft:5}}>Inder ?</span>
        <span style={{marginLeft:300,backgroundColor:'#D3D3CB',width:150,textAlign:'center',borderRadius:10}}>Web Campaign^</span>
        <span style={{marginLeft:40}}>Credit</span><span style={{color:'purple',fontWeight:'bold'}}>: 200</span>
        <FontAwesomeIcon icon={faQuestionCircle} style={{marginLeft:60}} />
        <FontAwesomeIcon icon={faUserAlt} style={{marginLeft:30}} />
      </Collapse>
    </Navbar>
  );
};

export default Topbar;
