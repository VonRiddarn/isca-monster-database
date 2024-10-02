// Color enum
const MonsterColor = Object.freeze
(
	{
		Blue: "Blue",
		Green: "Green",	
		Red: "Red",
		Purple: "Purple",
	}
);

// Attributes enum
const MonsterAttribute = Object.freeze
(
	{
		Horns: "Horns",
		Eyes: "Eyes",
		Wings: "Wings",
		Tentacles: "Tentacles",
		Tails: "Tails",
	}
);

console.log("MonsterColor and MonsterAttribute has been loaded!");

// How to use dynamically
// 1: attribute = Horns
// 2: attribute = Eyes
// 3: attribute = Wings
for (const attribute in MonsterAttribute) 
{
	// 1: MonsterAttribute[Horns]
	// 2: MonsterAttribute[Eyes]
	console.log(MonsterAttribute[attribute]);

	// document.querySelector("body").innerHTML += MonsterAttribute[attribute] + " | ";
}