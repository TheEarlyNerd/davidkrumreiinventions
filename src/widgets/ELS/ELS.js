import React from "react";
import "./ELS.style.scss";

const ELS = () => {
  return (
    <section id="els" className="ELS">
      <div className="u-center-text u-margin-bottom-small">
        <h2 className="heading-secondary">
          Elevated Launcher Sight (ELS&trade;)
        </h2>
      </div>
      <div className="ELS__content">
        <div className="row container">
          <div className="col-1-of-2">
            <p className="paragraph">
              The Elevated Launcher Sight (ELS) is an adjustable occluded eye
              gun sight for use with multiple types of weapons including guns
              and projectile launchers. The sight being light weight, having a
              low profile, and mountable on top of a weapon and adjustable for
              different launch angles.
            </p>
            <p className="small-space">Patent No. US 9,459,075 B1</p>
            <p className="small-space">Filed: April 30, 2014</p>
            <p className="small-space">Issued: October 4, 2016</p>
            <p className="small-space">
              Assigned: Rapid Entry Technologies, LLC.
            </p>
          </div>
          <div className="col-1-of-2">
            <div className="els_container">
              <img
                src={require(`../../assets/LevelELS.png`)}
                alt="team"
                className="els__photo img-comp__photo img-comp__photo--p1"
              />
              <img
                src={require(`../../assets/ElevatedELS.png`)}
                alt="team"
                className="els__photo img-comp__photo img-comp__photo--p1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ELS;
