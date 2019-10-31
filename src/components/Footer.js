import React from 'react';
import bgVideomp4 from  "../images/walter-talent-show.mp4";

export default function Footer() {
  return (
    <footer className="footer">
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={bgVideomp4} type="video/mp4">
        </source>
        {/* <source src={bgVideowebm} type="video/webm">
        </source> */}
        Your Browser is not Supported!
      </video>
    </div>  
      <p className="footer--text">All content Copyright &copy; 2019 Publikwerks, LLC</p>
    </footer>
  )
}