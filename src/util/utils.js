export const generateRandomQuestions = (arr1, arr2) => {
  let questions = [];

  let random = Math.random();

  if (random < 0.5) {
    for (let i = 0; i < 3; i++) {
      let randomIndex = getRandomIndex(arr1.length);
      questions.push(arr1[randomIndex]);
    }
    for (let i = 0; i < 2; i++) {
      let randomIndex = getRandomIndex(arr2.length);
      questions.push(arr2[randomIndex]);
    }
  } else {
    for (let i = 0; i < 2; i++) {
      let randomIndex = getRandomIndex(arr1.length);
      questions.push(arr1[randomIndex]);
    }
    for (let i = 0; i < 3; i++) {
      let randomIndex = getRandomIndex(arr2.length);
      questions.push(arr2[randomIndex]);
    }
  }
  return shuffleArray(questions);
};


const getRandomIndex = (arr) => {
  let randomIndex = Math.floor(Math.random() * arr);
  return randomIndex;
};


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };