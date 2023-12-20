/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/github.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Microservice Medical Booking",
    description:
      "Developed a microservice booking app to support 100+ patients and doctors during the COVID-19 pandemic.",
    url: "https://github.com/dohoanggiahuy317/Microservice_medical_booking_app",
  },
  {
    title: "Sentiment Analysis with LSTM and Attention",
    description:
      "Developed Machine Learning models to analyze the users' feedback from customer service. Achieve accuracy rates of 89% by utilizing Bi-LSTM and Attention.",
    url: "https://github.com/dohoanggiahuy317/Project-Sentiment-Analysis-LSTM-vs-Attention-NLP",
  },
  {
    title: "Data Engineer	May 2023 - Denison Uni Research Lab",
    description:
      "Proposed a pipeline to generate a high-quality dataset of 77,000 unanswerable questions, resulting in improved State-of-the-Art model performance.",
    url: "https://arxiv.org/abs/2309.05103v1",
  },
  {
    title: "Premoji Machine Learning Chatbot app",
    description:
      "Developed and deployed bots: a Chatbot, a Feeling Detection bot, and movie and music suggestion bots utilizing the Cornell Movie-Dialogs Corpus database.",
    url: "https://github.com/dohoanggiahuy317/App-Premoji-ML_Chatbot-Web",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div
        style={{ display: "flex", flexDirection: "row", paddingTop: "3rem", paddingLeft: "3rem" }}
      >
        <div style={{ maxWidth: "40%", alignSelf: "center", left: "3rem" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover", overflow: "hidden" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
