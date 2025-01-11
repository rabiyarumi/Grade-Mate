import React from 'react';
import aboutImg from "../../assets/about_us.png";
import { Link } from 'react-router-dom';
const AboutUs = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse gap-6 md:gap-8 w-[85%] mx-auto my-10 md:my-20">
      <div className="bg-accent bg-opacity-35 rounded-t-full rounded-bl-full w-1/2">
        <img src={aboutImg} alt="" />
      </div>
      <div className="w-1/2 flex flex-col gap-6 justify-center">
      <h2 className="text-4xl font-bold  ">
            About <span className="text-accent ">Crowdcube</span>
          </h2>
        <p>
          At Crowdcube, we believe in the power of collective effort to bring
          ideas to life. Our platform empowers creators, dreamers, and
          changemakers by providing the tools and community needed to turn
          visions into reality. Whether it’s a groundbreaking tech startup, a
          passion project, or a cause close to your heart, Crowdcube is the
          bridge that connects ideas to the people who believe in them.
        </p>
        <Link to={`/#contact-us`} className="btn btn-outline btn-accent w-fit">Contact Us</Link>
      </div>
    </div>
    );
};

export default AboutUs;