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
			el = generateRawDropDownFromEnum(dropDownEnum);
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
		generateInputAndReplace(attributeElements[i], "number", getObjectKeynameFromIndex(monsterObject.stats, i), null);
	}
}

function exitEditMode(card, saveChanges)
{
	toggleButtonSpans(card, false);
	
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

