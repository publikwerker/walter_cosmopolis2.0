import React from 'react';
import bgVideomp4 from  "../images/walter-talent-show.mp4";
// import bgVideowebm from  "../images/walter-talent-show.mp4";
import tenSeconds from "../images/wc_ten_seconds.png";
import motivational from "../images/wc_motivational_title.png";
import unboxing from "../images/wc_unboxing_title.png";

const talentLink1 = "https://www.youtube.com/playlist?list=PLtxzOWaznJ8dZpvahAM7FBY_f4y9CmNVy";
const talentLink2 = "https://www.youtube.com/playlist?list=PLtxzOWaznJ8fi0ay4RCgsx9FcLWEQp2jn";
const talentLink3 ="https://www.youtube.com/playlist?list=PLtxzOWaznJ8cmbfwVaTtzmYSvSI7Yvl2s";

export default class Performance extends React.Component {

  render () {
    return (
      <section className="section-performance">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={bgVideomp4} type="video/mp4">
            </source>
            {/* <source src={bgVideowebm} type="video/webm">
            </source> */}
            Your Browser is not Supported!
          </video>
        </div>  
        <h2 className=" heading-secondary performance__title">Famous on the YouTubes!</h2>
        <div className="row">
          <a className="talent__link" href={talentLink1}>
          <div className="talent">
            <figure 
            className="talent__shape">

              <img src={tenSeconds}
              className="talent__image"
              alt="Walter wearing ear protection and holding an orange dead-blow hammer."></img>
              <figcaption className="talent__caption">Ten Seconds of My Life</figcaption>
            </figure>
          </div>
            </a>

          <div className="talent">
            <figure 
            className="talent__shape">
            <a href={talentLink2} target="_blank" rel="noopener noreferrer">

              <img src={motivational}
              className="talent__image"
              alt="Walter sporting a thick mustache, passionately speaking before a majestic cedar."></img>
            </a>
              <figcaption className="talent__caption">Motivational Encouragement</figcaption>
            </figure>
          </div>

          <div className="talent">
            <figure 
            className="talent__shape">
              <a href={talentLink3} target="_blank" rel="noopener noreferrer">

                <img src={unboxing}
                className="talent__image"
                alt="Walter in midair, inverted, seemingly floating over the grass beneath a large, orange ball."></img>
              </a>
              <figcaption className="talent__caption">Unboxing with Walter</figcaption>
            </figure>
          </div>
        </div>
      </section>)
  }
}