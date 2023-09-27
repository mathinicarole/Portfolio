/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/portfolio1.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hello, Well am Raquel Carole Mathini.I solve complex problems while creating some of the most advanced applications in the industry. I collaborate and Communicate with other front-end developers within the company, and tech industry on best practices, new technologies and the changes.I posses Excellent knowledge in React, JavaScript/TypeScript, HTML and CSS.Moreover, I have knowledge in Wordpress, UI/UX design and additional skills in digital marketing and social media management.I Provide mentorship and conduct events as well as organize and speak to fellow developers in various communites since I am a big advocate of inclusion and diversity. ";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "React.js",
  "Typescript/Javascript",
  "User experience",
  "Inclusive design",
  "Digital Marketing",
  "UI/UX design",
  "Wordpress",
  "Graphic design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "rgb(208, 214, 214)",
          width: "50%",
          fontWeight: "500",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p style={{ fontWeight: "500", fontSize: "20px " }} className="large">
          {description}
        </p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontWeight: "500",
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0", fontWeight: "400", color: "#4E567E" }}>
          {detailOrQuote}
        </p>
      </div>
    </section>
  );
};

export default About;
