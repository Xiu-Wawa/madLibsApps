"use strict";

window.onload = () => {
  // Total questions
  let questionTotal = 19;

  // Question Counter (which question are we on)
  let questionCounter = 0;

  // Test logic:
  let solicitation = `Please enter `;
  let questionArray = [
    `${solicitation}the year you're born`,
    `${solicitation}your full name`,
    `${solicitation}your computer system (Linux or Windows?)`,
    `${solicitation}your school`,
    `${solicitation}a friends name`,
    `${solicitation}a type of error`,
    `${solicitation}computer-specific part (example: "screens", "mouse", etc..)`,
    `${solicitation}a profession you want to be`,
    `${solicitation}a type of book`,
    `${solicitation}verb (past-tense)`,
    `${solicitation}another verb (past-tense)`,
    `${solicitation}an adjective`,
    `${solicitation}a pronoun`,
    `${solicitation}a noun`,
    `${solicitation}verb`,
    `${solicitation}a month, day and year (example: ie January 1, 2000)`,
    `${solicitation}a number`,
    `${solicitation}a noun (plural-tense)`,
    `${solicitation}famous museum`,
    `${solicitation}a City`
  ];

  let userInputs = [];
  for (let i = questionTotal; i >= 0; i--) {
    console.log(
      questionArray[questionCounter] + `... (${questionTotal} questions left)`
    );
    userInputs.push(
      prompt(
        questionArray[questionCounter] + `... (${questionTotal} questions left)`
      )
    );
    console.log(userInputs);
    questionCounter++;
    questionTotal--;
  }


  let originalStory = `<h2>In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]} at ${userInputs[3]}. It was at this time that ${userInputs[4]} discovered a ${userInputs[5]} had gotten trapped in one of the ${userInputs[6]} and was causing an error. The ${userInputs[7]} removed the ${userInputs[5]} and taped it in their ${userInputs[8]}, identifying it as the "first actual case of bug being ${userInputs[9]}."</h2>
    <h2>Word got out that the team had "${userInputs[10]}" the ${userInputs[2]}, hence leading to the phrase’s use in computing and ${userInputs[11]} culture. ${userInputs[1]} readily admitted that ${userInputs[12]} was not there when the incident occurred, but that didn’t stop it from becoming one of ${userInputs[1]}'s favorite ${userInputs[13]}s. ${userInputs[1]} ${userInputs[14]} of natural causes on January 1, ${userInputs[15]}, at the age of ${userInputs[16]}. For those interested, the offending ${userInputs[5]}'s ${userInputs[17]}, along with the original ${userInputs[8]}, can be seen at the ${userInputs[18]} in ${userInputs[19]}.</h2>`;
  console.log(originalStory);

  // End of User Inputs
  alert(
    "All done! Ready for your totally-accurate, not-at-all confusing history of tech??"
  );

  // Output
  console.log(originalStory);
  document.write(originalStory);
};
