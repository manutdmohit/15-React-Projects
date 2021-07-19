import React, { useState } from "react";
import questions from "./data";
import SingleQuestion from "./SingleQuestion";
import "./Accordion.css";

const Question = () => {
  const [question, setQuestion] = useState(questions);
  return (
    <>
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {question.map((currQuestion) => {
              return <SingleQuestion key={currQuestion.id} {...currQuestion} />;
            })}
          </section>
        </div>
      </main>
    </>
  );
};

export default Question;
