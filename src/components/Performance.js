import React from 'react';
// import bgVideowebm from  "../images/walter-talent-show.mp4";
import tenSeconds from "../images/wc_ten_seconds.png";
import motivational from "../images/wc_motivational_title.png";
import unboxing from "../images/wc_unboxing_title.png";
import breadAndCircus from "../images/wc_bread_and_circus.png";

const talentLink1 = "https://www.youtube.com/playlist?list=PLtxzOWaznJ8dZpvahAM7FBY_f4y9CmNVy";
const talentLink2 = "https://www.youtube.com/playlist?list=PLtxzOWaznJ8fi0ay4RCgsx9FcLWEQp2jn";
const talentLink3 ="https://www.youtube.com/playlist?list=PLtxzOWaznJ8cmbfwVaTtzmYSvSI7Yvl2s";
const talentLink4 = "https://www.youtube.com/playlist?list=PLtxzOWaznJ8dkPvjD7DLWguLKbucW9411";

export default function Performance () {

    return (
      <section className="section-performance">
        <div className="title-box">
          <h2 className=" heading-secondary performance__title">Famous on the YouTubes!</h2>
          <h3>Walter has many channels with various themes.</h3>
        </div>
        <nav className="row">

          <div className="talent">
            <a className="talent__link" href={talentLink1}>
              <figure 
              className="talent__shape">

                <img src={tenSeconds}
                className="talent__image"
                alt="Walter wearing ear protection and holding an orange dead-blow hammer."></img>
                <figcaption className="talent__caption">Ten Seconds of My Life</figcaption>
              </figure> 
            </a>
          </div>

          <div className="talent">
            <a className="talent__link" href={talentLink2} target="_blank" rel="noopener noreferrer">
              <figure 
              className="talent__shape">

                <img src={motivational}
                className="talent__image"
                alt="Walter sporting a thick mustache, passionately speaking before a majestic cedar."></img>
                <figcaption className="talent__caption">Motivational Inspiration</figcaption>
              </figure>
            </a>
          </div>

          <div className="talent">
            <a className="talent__link" href={talentLink3} target="_blank" rel="noopener noreferrer">
              <figure 
              className="talent__shape">

                  <img src={unboxing}
                  className="talent__image"
                  alt="Walter in midair, inverted, seemingly floating over the grass beneath a large, orange ball."></img>
                <figcaption className="talent__caption">Unboxing with Walter</figcaption>
              </figure>
            </a>
          </div>

          <div className="talent">
            <a className="talent__link" href={talentLink4} target="_blank" rel="noopener noreferrer">
              <figure 
              className="talent__shape">

                  <img src={breadAndCircus}
                  className="talent__image"
                  alt="A man on stilts in a nice, white tux standing behind a marching band in costume."></img>
                <figcaption className="talent__caption">Bread and Circus!</figcaption>
              </figure>
            </a>
          </div>
        </nav>
      </section>)
  }