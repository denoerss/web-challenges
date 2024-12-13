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
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => {
  return card.id.includes(2);
});

const allCardsWith3Tags = cards.filter((card) => {
  return card.tags.length === 3;
});

const allCardsThatAreNotBookmarked = cards.filter((card) => {
  return card.isBookmarked === false;
});

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card) => {
  const hasRelevantTags =
    card.tags.includes("html") || card.tags.includes("js");
  const isBookmarked = card.isBookmarked;
  return hasRelevantTags && isBookmarked;
});

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};

console.log("ONLY CARD WITH ID 2: ", onlyCardWithIdTwo);
console.log("ALL CARDS WITH 3 TAGS: ", allCardsWith3Tags);
console.log(
  "ALL CARDS THAT ARE NOT BOOKMARKED: ",
  allCardsThatAreNotBookmarked
);
console.log(
  "ALL CARDS WITH TAGS HTML OR JS THAT ARE BOOKMARKED: ",
  allCardsWithTagsHTMLOrJSThatAreBookmarked
);
