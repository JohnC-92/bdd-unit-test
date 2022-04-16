const expect = require("chai").expect;

const titleCase = (title) => {
  const words = title.split(" ");
  const titleCaseWords = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });
  return titleCaseWords.join(" ");
};

expect(titleCase("the great mouse detective")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("vertigo")).to.equal("Vertigo");

expect(titleCase("the great mouse detective")).to.equal(
  "The Great Mouse Detective"
);
