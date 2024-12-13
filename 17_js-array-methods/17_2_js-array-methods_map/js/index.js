console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((card) => {
  // ['as often as you like.', ...]
  return card.answer.toLowerCase();
});

const questionsAndAnswersTogether = cards.map((card) => {
  // ["How often can I use <header>? - As often as you like.", ...]
  return `${card.question} - ${card.answer}`;
});

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };

console.log("LOWERCASE ANSWERS_", lowerCaseAnswers);
console.log("QUESTIONS AND ANSWERS TOGETHER_", questionsAndAnswersTogether);
