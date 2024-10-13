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
	eyes.innerHTML = (`eyes: ${monster.Eyes}`);
	stats.appendChild(eyes);

	// create list item containing horns
	const horns = document.createElement("li");
	horns.className = "monster-horns";
	horns.innerHTML = (`horns: ${monster.Horns}`);
	stats.appendChild(horns);

	// create list item containing tails
	const tails = document.createElement("li");
	tails.className = "monster-tails";
	tails.innerHTML = (`tails: ${monster.Tails}`);
	stats.appendChild(tails);

	// create list item containing tentacles
	const tentacles = document.createElement("li");
	tentacles.className = "monster-tentacles";
	tentacles.innerHTML = (`tentacles: ${monster.Tentacles}`);
	stats.appendChild(tentacles);

	// create list item containing legs
	const legs = document.createElement("li");
	legs.className = "monster-legs";
	legs.innerHTML = (`legs: ${monster.Legs}`);
	stats.appendChild(legs);
  }
};


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