const addMonsterRoot = document.querySelector(".add-monster");
addMonsterRoot.innerHTML = "";
//Creates <form>
const monsterForm = addMonsterRoot.appendChild(document.createElement("form"));
monsterForm.setAttribute("id", "monster-form");
//Creates <div> for text input field.
const monsterDiv = monsterForm.appendChild(document.createElement("div"));
//Creates <label> for text input and a text field
const monsterNameLabel = monsterDiv.appendChild(
  document.createElement("label")
);

const monsterTextInput = monsterDiv.appendChild(
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
const monsterAttributeLabel = monsterForm.appendChild(
  document.createElement("label")
);
monsterAttributeLabel.setAttribute("for", "monster-attribute");
monsterAttributeLabel.innerHTML = "Attributes: ";
addDropDownFromEnum(monsterForm, MonsterAttribute, "monster-attribute");
