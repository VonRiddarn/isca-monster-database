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
const colorSpan = monsterForm.appendChild(document.createElement("span"));
const monsterColorLabel = colorSpan.appendChild(
  document.createElement("label")
);
monsterColorLabel.setAttribute("for", "monster-color");
monsterColorLabel.innerHTML = "Color";
addDropDownFromEnum(colorSpan, MonsterColor, "monster-color");

//added last might be removed
const monsterHostility = monsterForm.appendChild(
  document.createElement("span")
);
const monsterHostLabel = monsterHostility.appendChild(
  document.createElement("label")
);
monsterHostLabel.setAttribute("for", "monster-color");
monsterHostLabel.innerHTML = "Monster attitudes ";
addDropDownFromEnum(monsterHostility, MonsterHostility, "monster-hostility");
//...............................................................................
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
    alias: monsterTextInput.value,
    color: monsterForm.querySelector("#monster-color").value,
    stats: {},
    monsterHostility: monsterForm.querySelector("#monster-hostility").value,
  };

  const attributeFields = monsterForm.querySelectorAll(
    "[id^='add-monster-attributes-']"
  );
  attributeFields.forEach((input) => {
    const attributeName = input
      .getAttribute("id")
      .replace("add-monster-attributes-", "")
      .replace("-count", "");
    monster.stats[attributeName] = Number(input.value);
  });
  console.log(monsters);
  console.log(monster);
  monsters.push(monster);
});
