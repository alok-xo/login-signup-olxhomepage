import React from "react";
import logo from "../style/img/olx-logo.png";
import "../style/homie.css";
import sell from "../style/img/sell.png";
import data from "./Data";
import full from "../style/img/full.png";
import play from '../style/img/google play.png'

const Home = () => {
  return (
    <div style={{ fontSize: "1.5rem" }}>
      <nav>
        <img src={logo} />
        <div className="ms-5 dropdown">
          <button className="dropbtn">
            
            &nbsp;&nbsp;
            <span className="bi bi-search"></span> &nbsp; &nbsp; India &nbsp;
            &nbsp; <span className="ms-5 bi bi-chevron-down"></span> &nbsp;
          </button>
          <div className="dropdown-content">
            <a href="#">
              <span className="bi bi-geo-alt"></span> &nbsp; Odisha
            </a>
            <a href="#">
              <span className="bi bi-geo-alt"></span> &nbsp; Pune
            </a>
            <a href="#">
              <span className="bi bi-geo-alt"></span> &nbsp; Uttar Pradesh
            </a>
            <a href="#">
              <span className="bi bi-geo-alt"></span> &nbsp; Raipur
            </a>
            <a href="#">
              <span className="bi bi-geo-alt"></span> &nbsp; Delhi
            </a>
          </div>
        </div>
        <div className="ms-5 txt-bar">
          <input
            id="iput"
            type="text"
            placeholder="Find Cars, Mobile Phones and more..."
          />
          <span className="srcbtn bi bi-search"></span>
        </div>
        <div className="ms-5 dropdown">
          <button
            style={{ border: "none", backgroundColor: "#eff1f3" }}
            className="dropbtn"
          >
            English &nbsp;
            <span className="bi bi-chevron-down"></span>
          </button>
          <div className="dropdown-content" style={{ minWidth: "10rem" }}>
            <a href="#">English</a>
            <a href="#">Hindi</a>
          </div>
        </div>
        <div className="ms-5">
          <img src={sell} width={100} />
        </div>
      </nav>
      <div className="afternav">
        <a href="">
          <b>
            ALL CATEGORIES &nbsp; <span className="bi bi-chevron-down"></span>
          </b>
        </a>
        <a href="">Cars</a>
        <a href="">Motorcycles</a> &nbsp; &nbsp; <a href="">Mobile Phones</a>
        <a href="">For Sale: Houses & Apartments</a>
        <a href="">Scooters</a>
        <a href="">Commercial & Other Vehicles</a>
        <a href="">For Rent: Houses & Apartments</a>
      </div>
      <main>
        {data.map((item) => (
          <div className="cnter me-4 mt-3">
            <div class="card-deck">
              <div class="card">
                <img src={item.Image} alt="" height={200} />
                <div class="card-body">
                  <h5 class="card-title" style={{ fontSize: "2rem" }}>
                    <b>&#8377; {item.Price}</b>
                  </h5>
                  <p class="card-text">{item.Name.toUpperCase()}</p>
                </div>
                <div style={{ fontSize: "1.1rem" }}>
                  <>
                    &nbsp;&nbsp; {item.From.toUpperCase()}
                    <span className="tday">{item.When.toUpperCase()}</span>
                  </>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      <div
        className="mt-5"
        style={{ justifyContent: "center", display: "flex" }}
      >
        <span id="load">
          <b>Load more</b>
        </span>
      </div>
      <div className="fullimg">
        <img src={full} alt="" />
      </div>
      <div id="footer">
        <div id="plo">
          <ol>
          <li><h3>POPULAR LOCATIONS</h3></li>
          <li><a href="#">Kolkata</a></li>
          <li><a href="#">Chennai</a></li>
          <li><a href="#">Mumbai</a></li>
          <li><a href="#">pune</a></li>
          </ol>
        </div>
        <div id="tlo">
        <ol>
          <li><h3>TRENDING LOCATIONS</h3></li>
          <li><a href="#">Bhubaneswar</a></li>
          <li><a href="#">Hyderabad</a></li>
          <li><a href="#">Chandigarh</a></li>
          <li><a href="#">Nashik</a></li>
        </ol>
        </div>
        <div id="bout">
          <ol>
            <li><h3>ABOUT US</h3></li>
            <li><a href="#">About OLX Group</a></li>
            <li><a href="#">Carers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">OLXPeople</a></li>
            <li><a href="#">Waah Jobs</a></li>
          </ol>
        </div>
        <div id="OLX">
          
          <ol>
            <li><h3>OLX</h3></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Sitemap</a></li>
            <li><a href="#">Legal & Privacy information</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">OLX About Self Car</a></li>
            <li><a href="#">Vulnerability Disclosure Progra</a></li>
          </ol>
        </div>
        <div className="lastf">
          <h3 style={{color:'#002f34'}}>FOLLOW US</h3>
          <span className="me-4 bi bi-facebook"></span>
          <span className="me-4 bi bi-instagram"></span>
          <span className="me-4 bi bi-twitter"></span>
          <span className="bi bi-play-circle"></span>
        <div className="playn">
          <img src={play} alt="" width={150} />
        </div>
        </div>
      </div>
      <div id="sfoot">
          <div>
            <div className="lsttxt">Other countries</div>
            <div className="lsttxt mt-2">Indonesia - Pakistan - SouthAfrica</div>
          </div>
            <div className="right">All rights reserved © 2006-2023 OLX</div>
      </div>
    </div>
  );
};

export default Home;


// 
//           
//           
//           
//           