import React from "react";
import "./SubHeading.css";

const SubHeading = () => {
  return (
    <div className="subheading-container">
      <div className="subheading-sub-container">
        <h1>Our apporach is different</h1>
        <p>
          SoulUp connects you to others who have overcome the same challenge as
          you. <br />
          This is super powerful - almost game-changing!
        </p>
      </div>
      <div className="second-container">
        <div className="top-1">
          <h1>Why SoulUp?</h1>
          <p>
            We are a team devoted to fixing emotional health. As humans, the
            mistakes we make, the questions we struggle with, have been faced by
            people before us and will be by those after us.
          </p>
          <p>
            This cycle had to be broken and we need to be able to build on each
            other's learnings.
          </p>
          <p>
            A lot of our expertise comes from the firsthand experience of
            something. So we started SoulUp, as a way for all of us to
            effectively discover and connect with our 'Peers' who are in the
            same boat as us - and learn from each others' journeys.
          </p>
        </div>
        <div className="bottom-2">
          <h2>
          Want to know more about SoulUp?
          </h2>
          <button>Connect with Us</button>
        </div>
      </div>
    </div>
  );
};

export default SubHeading;
