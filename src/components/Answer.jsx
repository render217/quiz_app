import React from "react";

const Answer = ({ choice, option, onAnswerChosen, selectedOption, correctOption }) => {
  const pendingClass =
    " border-cpurple  duration-200 hover:bg-corange hover:text-white hover:border-transparent";
  const correctAnswerClass = "bg-cgreen border-cgreen text-white ";
  const incorrectAnswerClass = "bg-cred border-cred text-white";
  let classN;
  let icon;
  if (selectedOption === null) {
    classN = pendingClass;
  } else if (selectedOption === option && selectedOption !== correctOption) {
    classN = incorrectAnswerClass;
    icon = "incorrect";
  } else if (selectedOption === option && selectedOption === correctOption) {
    classN = correctAnswerClass;
    icon = "correct";
  } else if (selectedOption !== option && option === correctOption) {
    classN = correctAnswerClass;
    icon = "correct";
  }
  let choiceName;
  switch(choice){
    case 0:
        choiceName = 'A'
        break;
    case 1:
        choiceName = 'B'
        break;
    case 2:
        choiceName = 'C'
        break;
    case 3:
        choiceName = 'D'
        break;
    default:
        break;
  }
  return (
    <>
      <div
        onClick={() => onAnswerChosen(option)}
        className={`font-semibold text-sm text-cpurple p-3 flex gap-4 rounded-lg max-w-[400px] border-cpurple border-2 cursor-pointer ${classN}`}
      >
        <span>{choiceName}</span>
        <span>{option}</span>
        <span className="ml-auto">
          {icon === "correct" && <i className="fa-regular fa-circle-check"></i>}
          {icon === "incorrect" && (
            <i className="fa-regular fa-circle-xmark"></i>
          )}
        </span>
      </div>
    </>
  );
};

export default Answer;
