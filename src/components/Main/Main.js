import React from "react";
import mealsAndTailsImg from "../../assets/images/MealsAndTails.png";
import codingQuiz from "../../assets/images/CodingQuiz.png";
import dayPlanner from "../../assets/images/DayPlanner.png";
import riseAndShine from "../../assets/images/WeatherDashboard.png";
import Spoofify from "../../assets/images/Spoofify.png";
import technasty from "../../assets/images/technasty.png";
import { WorkCard } from "../../components";
import "./Main.css";

function Main() {
  const cardInfo = [
    {
      link: "https://mcolumbusua21.github.io/Project1",
      imgUrl: mealsAndTailsImg,
      title: 'Meals & Tails'
    },
    {
      link: "https://mcolumbusua21.github.io/Code-Quiz/",
      imgUrl: codingQuiz,
      title: 'Coding Quiz'
    },
    {
      link: "https://mcolumbusua21.github.io/Marks-Planner/",
      imgUrl: dayPlanner,
      title: 'Day Planner'
    },
    {
      link: "https://mcolumbusua21.github.io/Rise-N-Shine/",
      imgUrl: riseAndShine,
      title: "Rise n' Shine"
    },
    {
      link: "https://spoofify13.herokuapp.com/login",
      imgUrl: Spoofify,
      title: 'Spoofify'
    },
    {
      link: "https://technastydirectory.netlify.app/",
      imgUrl: technasty,
      title: 'TechNasty'
    }
  ];

  const cardMap = cardInfo.map((el, index) => {
    return <WorkCard link={el.link} imgUrl={el.imgUrl} key={index} title={el.title} />;
  });

  return (
    <>
      <div className="story"></div>
      <h2 id="start">About Me</h2>
      <div>
        <p className="content">
          My name is Mark Columbus. I was in the restaurant industry for the
          last 20 years. I am graduated from Trilogy Boot Camp through the
          University of Arizona. It is a full stack program where we learn such
          languages as JavaScript, MySql and CSS to name a few. My hopes are to
          be able to help small businesses grow through their websites.
        </p>
      </div>
      <div className="row">
        <h2 id="work">Work</h2>
      </div>
      <hr />
      <div className="content">{cardMap}</div>
      <hr />
    </>
  );
}

export default Main;
