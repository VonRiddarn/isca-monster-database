const addMonsterRoot = document.querySelector(".add-monster");

//Creates <form>
const monsterForm = document
  .querySelector(".add-monster")
  .querySelector("form");

//Creates <span> for text input field.
const monsterSpan = monsterForm.appendChild(document.createElement("span"));
//Creates <label> for text input and a text field
const monsterNameLabel = monsterSpan.appendChild(
  document.createElement("label")
);

const monsterTextInput = monsterSpan.appendChild(
  document.createElement("input")
);

monsterTextInput.setAttribute("id", "monster-text-input");

monsterNameLabel.setAttribute("for", "monster-text-input");
monsterNameLabel.innerHTML = "Name: ";
//creates a label with a corresponding dropdown menu for color
const monsterColorLabel = monsterForm.appendChild(
  document.createElement("label")
);
monsterColorLabel.setAttribute("for", "monster-color");
monsterColorLabel.innerHTML = "Color";
addDropDownFromEnum(monsterForm, MonsterColor, "monster-color");

monsterForm.appendChild(document.createElement("br")); // temporary linebreak

//creates dropdown for monster attributes
// const monsterAttributeLabel = monsterForm.appendChild(
//   document.createElement("label")

// );
// monsterAttributeLabel.setAttribute("for", "monster-attribute");
// monsterAttributeLabel.innerHTML = "Attributes: ";
// addDropDownFromEnum(monsterForm, MonsterAttribute, "monster-attribute");

//kunna ta värdet från attributes. lägga till en input text för
addNumericInputFieldsFromEnum(
  monsterForm,
  MonsterAttribute,
  "add-monster-attributes",
  false
);

const addMonsterBtn = monsterForm.appendChild(document.createElement("button"));
addMonsterBtn.setAttribute("type", "submit");
addMonsterBtn.setAttribute("onclick", "return false");
addMonsterBtn.setAttribute("id", "add-monster-btn");
addMonsterBtn.innerHTML = "Add monster";

addMonsterBtn.addEventListener("click", function logData(params) {});
