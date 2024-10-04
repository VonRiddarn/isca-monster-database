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
		attributes: 
		[
			{
				attribute: MonsterAttribute.Eyes,
				amount: 2,
			},
			{
				attribute: MonsterAttribute.Horns,
				amount: 2,
			},
			{
				attribute: MonsterAttribute.Tails,
				amount: 1,
			},
			{
				attribute: MonsterAttribute.Tentacles,
				amount: 0,
			},
			{
				attribute: MonsterAttribute.Legs,
				amount: 2,
			},
		],
	},
	{
		alias: "Mike Wazowski",
		color: MonsterColor.Green,
		attributes: 
		[
			{
				attribute: MonsterAttribute.Eyes,
				amount: 1,
			},
			{
				attribute: MonsterAttribute.Horns,
				amount: 2,
			},
			{
				attribute: MonsterAttribute.Tails,
				amount: 0,
			},
			{
				attribute: MonsterAttribute.Tentacles,
				amount: 0,
			},
			{
				attribute: MonsterAttribute.Legs,
				amount: 2,
			},
		],
	},
	{
		alias: "Randall Boggs",
		color: MonsterColor.Purple,
		attributes: 
		[
			{
				attribute: MonsterAttribute.Eyes,
				amount: 2,
			},
			{
				attribute: MonsterAttribute.Horns,
				amount: 0,
			},
			{
				attribute: MonsterAttribute.Tails,
				amount: 1,
			},
			{
				attribute: MonsterAttribute.Tentacles,
				amount: 3,
			},
			{
				attribute: MonsterAttribute.Legs,
				amount: 6,
			},
		],
	},
	{
		alias: "Celia Mae",
		color: MonsterColor.Purple,
		attributes: 
		[
			{
				attribute: MonsterAttribute.Eyes,
				amount: 11,
			},
			{
				attribute: MonsterAttribute.Horns,
				amount: 0,
			},
			{
				attribute: MonsterAttribute.Tails,
				amount: 0,
			},
			{
				attribute: MonsterAttribute.Tentacles,
				amount: 8,
			},
			{
				attribute: MonsterAttribute.Legs,
				amount: 8,
			},
		],
	},
	{
		alias: "Henry J. Watermoose",
		color: MonsterColor.Blue,
		attributes: 
		[
			{
				attribute: MonsterAttribute.Eyes,
				amount: 5,
			},
			{
				attribute: MonsterAttribute.Horns,
				amount: 0,
			},
			{
				attribute: MonsterAttribute.Tails,
				amount: 0,
			},
			{
				attribute: MonsterAttribute.Tentacles,
				amount: 0,
			},
			{
				attribute: MonsterAttribute.Legs,
				amount: 8,
			},
		],
	},
];