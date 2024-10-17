let nextUniqueId = 0;

function generateInputAndReplace(elementToReplace, inputType, labelText, dropDownEnum)
{
	// TODO: Convert P-tag to label later.
	const span = document.createElement("span");
	const label = document.createElement("label");
	label.textContent = labelText;

	let el = null;
	let value = elementToReplace.textContent;
	
	if(value.includes(":"))
		value = value.split(":")[1].trim();

	switch(inputType)
	{
		case "text":
			el = document.createElement("input");
			el.value = value;
			el.setAttribute("type", "text");
		break;
		case "dropdown":
			el = utilities.generateRawDropDownFromEnum(dropDownEnum);
			el.value = value; // Could technically be bad input if something is changed at runtime :shrug:
		break;
		case "number":
			el = document.createElement("input");
			el.value = value;
			el.setAttribute("type", "number");
		break;
	}

	const eid = `label-id-connector-${nextUniqueId}`;
	el.id = eid;
	label.setAttribute("for", eid)
	nextUniqueId++;

	span.appendChild(label);
	span.appendChild(el);

	elementToReplace.parentElement.replaceChild(span, elementToReplace);
	return span;
}

function toggleButtonSpans(card, isEditing)
{
	// Can be hard to understnad but is actually easy
	// Create 2 variables and set them to the first 2 elements of the return of "array.from"
	// We are deconstructing it instantly
	const [deleteEditSpan, saveCancelSpan] = Array.from(card.querySelectorAll("span"));

	card.className = isEditing ? "monster-card isediting" : "monster-card";
	deleteEditSpan.style = isEditing ? "display: none;" : "";
	saveCancelSpan.style = isEditing ? "" : "display: none;";
}

function enterEditMode(articleElement, monsterObject)
{
	toggleButtonSpans(articleElement, true);

	const aliasElement = articleElement.querySelector("section h3");
	const colorElement = articleElement.querySelectorAll("section p")[0];
	const attributeElements = articleElement.querySelector("ul").children;

	generateInputAndReplace(aliasElement, "text", "Name:", null);
	generateInputAndReplace(colorElement, "dropdown", "Color: ", MonsterColor);

	for (let i = 0; i < attributeElements.length; i++) 
	{
		generateInputAndReplace(attributeElements[i], "number", utilities.getObjectKeynameFromIndex(monsterObject.stats, i), null);
	}
}

function exitEditMode(articleElement, saveChanges, monsterObject)
{
	toggleButtonSpans(articleElement, false);

	if(!saveChanges)
	{
		replaceCard(articleElement, monsterObject);
		return monsterObject;
	}

	const mockMonster = {};
	mockMonster.uid = monsterObject.uid;
	mockMonster.stats = {};

	const sections = articleElement.querySelectorAll("section");

	const aliasElement = sections[0].children[1].querySelector("input");
	mockMonster.alias = saveChanges ? aliasElement.value : monsterObject.alias;
	
	const colorElement = sections[0].children[2].querySelector("select");
	mockMonster.color = saveChanges ? colorElement.value : monsterObject.color;

	const attributeSpans = articleElement.querySelector("ul").children;

	for (let i = 0; i < attributeSpans.length; i++) 
	{
		const attributeElement = attributeSpans[i].querySelector("input");
		const attributeName = attributeSpans[i].querySelector("label").innerHTML;
		mockMonster.stats[attributeName] = saveChanges ? attributeElement.value : monsterObject.stats[attributeName];
	}

	// Apply to object
	const mon = monsters.find((monster) => monster.uid === mockMonster.uid);

	for (const key in mon) 
	{
    	mon[key] = mockMonster[key];
  	}

	replaceCard(articleElement, mockMonster);
	return mockMonster;
}

function replaceCard(card, newMonsterObject)
{
	card.innerHTML = "";
	generateCardContent(card, newMonsterObject);
}

function deleteCard(card, object)
{
	card.remove();
	monsters = monsters.filter((m) => m.uid !== object.uid);
	console.log("--- MONSTER REMOVED ---");
	console.log(object);
	console.log(monsters);
	console.log("--- --- ---");
}

function generateCardContent(monsterCard, monster)
{

	////////////// IGNORERA KODEN HÄRIFRÅN, TILL - ////////////////////////////
	// DELETE / EDIT buttons
	const deleteEditSpan = monsterCard.appendChild(document.createElement("span"));

	const deleteButton = deleteEditSpan.appendChild(document.createElement("button"));
	deleteButton.addEventListener('click', (e) => {
		e.preventDefault();
		deleteCard(monsterCard, monster);

	});
	deleteButton.innerHTML = "Delete";

	const editButton = deleteEditSpan.appendChild(document.createElement("button"));
	editButton.addEventListener('click', (e) => {
		e.preventDefault();
		enterEditMode(monsterCard, monster);

	});
	editButton.innerHTML = "Edit";

	// SAVE / CANCEL buttons
	const saveCancelSpan = monsterCard.appendChild(document.createElement("span"));
	saveCancelSpan.style = "display: none;";

	const saveButton = saveCancelSpan.appendChild(document.createElement("button"));
	saveButton.addEventListener('click', (e) => {
		e.preventDefault();
		exitEditMode(monsterCard, true, monster);

	});
	saveButton.innerHTML = "Save";

	const cancelButton = saveCancelSpan.appendChild(document.createElement("button"));
	cancelButton.addEventListener('click', (e) => {
		e.preventDefault();
		exitEditMode(monsterCard, false, monster);
		console.warn("EDIT BUTTON CURRENTLY DELETES MONSTER - ADD FUNCTION TO EDIT!!!");

	});
	cancelButton.innerHTML = "Cancel";
	////////////////////////// HIT /////////////////////////////////
	// Förklaring:
	// Denna koden lägger till knapparna för att redigera och ta bort monster
	// Den "måste" ligga i 


	// create section containing monster alias
	const monsterProfile = document.createElement("section");
	monsterProfile.className = "monster-profile";
	monsterCard.appendChild(monsterProfile);

	const monsterImage = document.createElement("section");
	monsterImage.className = "monster-image";
	monsterImage.innerHTML = ("");
	monsterProfile.appendChild(monsterImage);

	const monsterAlias = monsterProfile.appendChild(document.createElement("h3"));
	monsterAlias.innerHTML = monster.alias;

	// create list item containing color
	const color = document.createElement("p");
	color.className = "monster-color";
	color.innerHTML = (`color: ${monster.color}`);
	monsterProfile.appendChild(color);

	// create ul containing monster stats
	const stats = document.createElement("ul");
	stats.className = "monster-stats";
	monsterProfile.appendChild(stats);

	// create list item containing eyes
	const eyes = document.createElement("li");
	eyes.className = "monster-eyes";
	eyes.innerHTML = (`eyes: ${monster.stats.Eyes}`);
	stats.appendChild(eyes);

	// create list item containing horns
	const horns = document.createElement("li");
	horns.className = "monster-horns";
	horns.innerHTML = (`horns: ${monster.stats.Horns}`);
	stats.appendChild(horns);

	// create list item containing tails
	const tails = document.createElement("li");
	tails.className = "monster-tails";
	tails.innerHTML = (`tails: ${monster.stats.Tails}`);
	stats.appendChild(tails);

	// create list item containing tentacles
	const tentacles = document.createElement("li");
	tentacles.className = "monster-tentacles";
	tentacles.innerHTML = (`tentacles: ${monster.stats.Tentacles}`);
	stats.appendChild(tentacles);

	// create list item containing legs
	const legs = document.createElement("li");
	legs.className = "monster-legs";
	legs.innerHTML = (`legs: ${monster.stats.Legs}`);
	stats.appendChild(legs);
}