const addMonsterRoot = document.querySelector(".add-monster");

//inits <form>
const monsterForm = document
  .querySelector(".add-monster")
  .querySelector("form");

//Creates <span> for text input field.
const monsterSpan = monsterForm.appendChild(document.createElement("span"));
//Creates <label> for text input and a text field
const monsterNameLabel = monsterSpan.appendChild(
  document.createElement("label")
);
//name creates inputfield for the name of monster
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

//kunna ta värdet från attributes. lägga till en input text för
addNumericInputFieldsFromEnum(
  monsterForm,
  MonsterAttribute,
  "add-monster-attributes",
  false
);
//creates listen event for the form, gathers all data and submits it to monsterObject
monsterForm.addEventListener(`submit`, (e) => {
  e.preventDefault();
  let monster = {
    name: monsterTextInput.value,
    color: monsterForm.querySelector("#monster-color").value,
    attributes: {},
  };

  const attributeFields = monsterForm.querySelectorAll(
    "[id^='add-monster-attributes-']"
  );
  attributeFields.forEach((input) => {
    const attributeName = input
      .getAttribute("id")
      .replace("add-monster-attributes", "");
    monster.attributes[attributeName] = Number(input.value);
  });
  console.log(monster);
});
