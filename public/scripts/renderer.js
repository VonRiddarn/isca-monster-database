// renderer.js
//
// Self contained script that renders the monster array to main.

// SKRIV KOD HÄR

function renderMonsterCards(arrayToRender)
{
	// document.querySelector("main").innerHTML = "";
  for (const monster of arrayToRender) {

	// create article containing monster card
	const main = document.querySelector("main");
	const monsterCard = document.createElement("article");
	monsterCard.className = "monster-card";
	main.appendChild(monsterCard);

	
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
		deleteCard(monsterCard, monster);
		console.warn("EDIT BUTTON CURRENTLY DELETES MONSTER - ADD FUNCTION TO EDIT!!!");

	});
	editButton.innerHTML = "Edit";

	// create section containing monster alias
	const monsterProfile = document.createElement("section");
	monsterProfile.className = "monster-profile";
	monsterProfile.innerHTML = (monster.alias);
	monsterCard.appendChild(monsterProfile);

	const monsterImage = document.createElement("section");
	monsterImage.className = "monster-image";
	monsterImage.innerHTML = ("");
	monsterCard.appendChild(monsterImage);

	// create ul containing monster stats
	const stats = document.createElement("ul");
	stats.className = "monster-stats";
	monsterProfile.appendChild(stats);

	// create list item containing color
	const color = document.createElement("li");
	color.className = "monster-color";
	color.innerHTML = (`color: ${monster.color}`);
	stats.appendChild(color);

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
};

function deleteCard(card, object)
{
	card.remove();
	monsters = monsters.filter((m) => m.uid !== object.uid);
	console.log("--- MONSTER REMOVED ---");
	console.log(object);
	console.log(monsters);
	console.log("--- --- ---");
}

renderMonsterCards(monsters);

/*
		<article class="monster-card">
			<section class="monster-profile">
				<!-- PROFILE -->
			</section>
			<section class="monster-stats">
				<!-- STATS -->
			</section>
		</article>
*/