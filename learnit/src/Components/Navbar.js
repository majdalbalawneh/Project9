import React from 'react'
import {useSelector,useDispatch } from 'react-redux';
import {logout} from "../actions/index";

function Navbar() {
  const dispatch=useDispatch();
  let user_id= sessionStorage.getItem("user_info");

  return (
    <>
      <nav id="main-nav" className="main-nav fixed">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="nav-header d-flex justify-content-between align-items-center">
              <a href="/" className="logo" title="LOGO">
                <img className="logo-img" src="../img/logo.png" alt="LOGO" />
                <img
                  className="alt-logo-img"
                  src="../img/logo-alt.png"
                  alt="LOGO"
                />
              </a>
            </div>
            <div className="nav-wrap">
              <ul id="nav" className="nav-wrap__list menu">
                <li className="current">
                  <a href="/" title="Home" class='navTabs'>
                    Home
                  </a>
                </li>
                <li>
                  <a href="/Subjects" title="Courses" class='navTabs'>
                    Courses
                  </a>
                </li>
                <li>
                  <a href="About" title="About Us" class='navTabs'>
                    <span className="red-fox">About Us</span>
                  </a>
                </li>
                <li>
                  <a href="/Contact" title="Contact Us" class='navTabs'>
                    Contact Us
                  </a>
                </li>
                <div className="dropdown">
                  <span>
                    <div className="drop-ed" />
                  </span>
                  <div className="dropdown-content">
                    <span className="arrow_box" />
                    <ul className="drop-vape">
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                      <li>
                        <a href="#">Банлист</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </ul>
              <div className="riglt-floats-xs">
                {user_id &&<a href='/Profile' className="btn-login">
                  <span className="ic-sx21" /> Profile
                </a>}
                {user_id &&
                <a href="/" className="btn-startgames" onClick={()=>dispatch(logout())}>
                  <span className="ic-sx22" id="logoutBtn"/> Logout
                </a>}
                {!user_id &&
                <a href="/Login" className="btn-login">
                  <span className="ic-sx21" id="loginBtn"/> Login
                </a>}
                {!user_id &&
                <a href="/SignUp" className="btn-startgames">
                  <span className="ic-sx22" id="joinUstBtn"/> Join Us
                </a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
