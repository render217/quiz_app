import { useEffect, useState } from "react";
import {
  flagQuestions as flagQ,
  capitalQuestions as CapitalQ,
} from "./data/questions";
import { generateRandomQuestions } from "./util/utils";
import Answer from "./components/Answer";

const App = () => {
  const [flagQuestions, setFlagQuestions] = useState(flagQ);
  const [capitalQuestions, setCapitalQuestions] = useState(CapitalQ);
  const [randomQuestions, setRandomQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [quizEnd, setQuizEnd] = useState(false);

  useEffect(() => {
    start();
  }, []);

  const start = () => {
    const data = generateRandomQuestions(flagQuestions, capitalQuestions);
    // console.log(data);
    setRandomQuestions(data);
    setCurrentIndex(0);
    setCurrentQuestion(data[currentIndex]);
    setScore(0);
    setSelectedOption(null);
    setCorrectOption(null);
    setShowNextBtn(false);
    setQuizEnd(false);
  };

  const nextQuestion = () => {
    setShowNextBtn(false);
    setSelectedOption(null);
    setCorrectOption(null);
    if (currentIndex === 4) {
      setQuizEnd(true);
      setCurrentIndex(0);
    } else {
      const prevIndex = currentIndex;
      setCurrentIndex((prev) => prev + 1);
      setCurrentQuestion(randomQuestions[prevIndex + 1]);
    }
  };
  const onAnswerChosen = (ans) => {
    // console.log(ans, currentQuestion.correctAnswer);
    setShowNextBtn(true);
    if (ans === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    } else {
    }
    setSelectedOption(ans);
    setCorrectOption(currentQuestion.correctAnswer);
  };
  const resetQuiz = () => {
    start();
  };
  if (currentQuestion !== null)
    return (
      <div className="font-Poppins">
        <img
          className="w-full h-full fixed -z-10"
          src="/background.png"
          alt=""
        />
        <div className="flex flex-col justify-center items-center min-h-[100vh]">
          <div className="">
            <h1 className="font-bold text-3xl text-white mb-3">Country Quiz</h1>
            <div className="bg-slate-200  rounded-xl min-w-[400px]  min-h-[440px] relative flex flex-col px-8">
              {!quizEnd && (
                <img
                  className="w-32 absolute -top-14 right-0"
                  src="undraw_adventure_4hum1.svg"
                  alt=""
                />
              )}
              {quizEnd ? (
                <>
                  <div className="flex flex-col items-center min-h-[410px] gap-1 ">
                    <img
                      className="w-40 my-10"
                      src="undraw_winners_ao2o2.svg"
                      alt=""
                    />

                    <h1 className="text-4xl font-semibold  text-cblue2 mb-2">
                      Results
                    </h1>
                    <p className="text-lg">
                      You got{" "}
                      <span className="text-3xl font-semibold text-green-700">
                        {score}
                      </span>{" "}
                      correct answers
                    </p>
                    <button
                      onClick={resetQuiz}
                      className="mt-10 border-2 text-cblue2 border-cblue2  px-10 py-3 rounded-xl duration-300 hover:text-white hover:bg-cblue2"
                    >
                      Try again
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3 mt-15 min-h-[410px] flex flex-col justify-center gap-4 ">
                    <div className="mt-4">
                      <div className="min-h-[50px]">
                        {currentQuestion.flag && (
                          <img
                            className="w-20 h-full object-cover"
                            src={currentQuestion?.flag}
                            alt=""
                          />
                        )}
                      </div>

                      <h1 className="mt-2 font-semibold text-xl text-cblue max-w-[310px]">
                        {currentQuestion.question}
                      </h1>
                    </div>

                    {currentQuestion?.answerOptions.map((option,i) => (
                      <Answer
                        key={option}
                        choice={i}
                        option={option}
                        selectedOption={selectedOption}
                        correctOption={correctOption}
                        onAnswerChosen={onAnswerChosen}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between items-center min-h-[60px] mb-3">
                    <p className="my-2 mx-3 text-sm text-cblue">{currentIndex + 1}/5</p>
                    {showNextBtn && (
                      <button
                        onClick={nextQuestion}
                        className="min-w-[80px] my-2 mx-3 self-end font-semibold bg-corange py-2 px-2 text-white rounded-lg"
                      >
                        Next
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default App;
