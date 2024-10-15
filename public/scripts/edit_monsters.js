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

function enterEditMode(articleElement)
{
	toggleButtonSpans(articleElement, true);
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