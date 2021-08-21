import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faSignOutAlt,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink, Nav } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";

// import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => {
  const [active,setActive]= useState('0');

  return(
  <div  className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "purple" }}>
        &times;
      </span>
      <div>
        <img style={{width:30}} src="https://www.nexweave.com/static/Favicon-99a32c20f086fde271dbe6862e5e6434.png" alt="logo"/>
      <span style={{color:'orange',fontWeight:'bold',marginLeft:7}}>Nex</span><span style={{color:'purple',fontWeight:'bold'}}>Weave.</span>
      </div>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem className="mb-2">
          <NavLink tag={Link} to={"/"} onClick={()=>setActive('0')} style={{color:active=='0'? 'orange' : 'grey' ,borderLeftWidth:5,borderLeftStyle:active==0?'solid':''}}>
            <FontAwesomeIcon icon={faHome} className="mr-4" />
            Get Startted
          </NavLink>
          </NavItem>
        <NavItem className="mb-2">
          <NavLink tag={Link} to={"/templates"} onClick={()=>setActive('1')} style={{color:active=='1'? 'orange' : 'grey',borderLeftWidth:5,borderLeftStyle:active==1?'solid':''}}>
            <FontAwesomeIcon icon={faBriefcase} className="mr-4" />
            Templates
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink tag={Link} to={"/campaigns"} onClick={()=>setActive('2')} style={{color:active=='2'? 'orange' : 'grey',borderLeftWidth:5,borderLeftStyle:active==2?'solid':''}}>
            <FontAwesomeIcon icon={faImage} className="mr-4" />
            Campaigns
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink tag={Link} to={"/integrations"} onClick={()=>setActive('3')} style={{color:active=='3'? 'orange' : 'grey',borderLeftWidth:5,borderLeftStyle:active==3?'solid':''}}>
            <FontAwesomeIcon icon={faQuestion} className="mr-4" />
            Integrations
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink tag={Link} to={"/manageWeb"} onClick={()=>setActive('4')} style={{color:active=='4'? 'orange' : 'grey',borderLeftWidth:5,borderLeftStyle:active==4?'solid':''}}>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-4" />
            Manage Websites
          </NavLink>
        </NavItem>
        <NavItem className="mb-2">
          <NavLink tag={Link} to={"/settings"} onClick={()=>setActive('5')} style={{color:active=='5'? 'orange' : 'grey',borderLeftWidth:5,borderLeftStyle:active==5?'solid':''}}>
            <FontAwesomeIcon icon={faCopy} className="mr-4" />
            Settings
          </NavLink>
        </NavItem>
        <div style={{backgroundImage: "url(" + "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy5ywCdo04M-J_L_JfLsv2SDPRunPqLVtutA&usqp=CAU" + ")",width:'85%',height:'15vh',textAlign:'center',marginTop:'35%',marginBottom:'15%'}}><h6 style={{marginTop:'10%',color:'white'}}>Upgrade to Pro</h6><span>Read more <FontAwesomeIcon icon={faArrowRight} /></span></div>
        <h5 ><FontAwesomeIcon icon={faSignOutAlt} />Logout</h5>
      </Nav>
    </div>
  </div>
  )
  };

export default SideBar;
