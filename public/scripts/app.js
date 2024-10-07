// app.js
// 
// This will always be the last script to run.
// Here we will "activate" the page if needed.

// Array where we store all monster objects

// THIS LOOKS SCARY - BUT IT'S NOT!
// 
// monsters is an array with monster objects I will call those objects "monsterObject" for clarity.
// So the array looks like this:
// monsters = [monsterObject, monsterObject, monsterObject]
// 
// The monsterObject has 3 variables:
// alias : This is a string with the name
// color : This is an enum from MonsterColor (can be represented as string when called)
// attributes : This is an array of attributeObjects
// 
// An attributeObject has 2 variables:
// attribute : a MonsterAttribute enum to know which attribute the value is connected to
// count : An int that tells how many of the (attribute) we have
const monsters =
[
	{
		alias: "James P. Sulivan",
		color: MonsterColor.Blue,
		Eyes: 2,
		Horns: 2,
		Tails: 1,
		Tentacles: 0,
		Legs: 2,
	},
	{
		alias: "Mike Wazowski",
		color: MonsterColor.Green,
		Eyes: 1,
		Horns: 2,
		Tails: 0,
		Tentacles: 0,
		Legs: 2,
	},
	{
		alias: "Randall Boggs",
		color: MonsterColor.Purple,
		Eyes: 2,
		Horns: 0,
		Tails: 1,
		Tentacles: 3,
		Legs: 6,
	},
	{
		alias: "Celia Mae",
		color: MonsterColor.Purple,
		Eyes: 11,
		Horns: 0,
		Tails: 0,
		Tentacles: 8,
		Legs: 8,
	},
	{
		alias: "Henry J. Watermoose",
		color: MonsterColor.Blue,
		Eyes: 5,
		Horns: 0,
		Tails: 0,
		Tentacles: 0,
		Legs: 8,
	},
];

console.log(monsters);
console.log(getFilteredMonsterArray(monsters));