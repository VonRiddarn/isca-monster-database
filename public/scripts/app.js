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

let monsters = [
  {
    uid: 0,
    alias: "James P. Sulivan",
    color: MonsterColor.Blue,
    stats: {
      Eyes: 2,
      Horns: 2,
      Tails: 1,
      Tentacles: 0,
      Legs: 2,
    },
  },
  {
    uid: 1,
    alias: "Mike Wazowski",
    color: MonsterColor.Green,
    stats: {
      Eyes: 1,
      Horns: 2,
      Tails: 0,
      Tentacles: 0,
      Legs: 2,
    },
  },
  {
    uid: 2,
    alias: "Randall Boggs",
    color: MonsterColor.Purple,
    stats: {
      Eyes: 2,
      Horns: 0,
      Tails: 1,
      Tentacles: 3,
      Legs: 6,
    },
  },
  {
    uid: 3,
    alias: "Celia Mae",
    color: MonsterColor.Purple,
    stats: {
      Eyes: 11,
      Horns: 0,
      Tails: 0,
      Tentacles: 8,
      Legs: 8,
    },
  },
  {
    uid: 4,
    alias: "Henry J. Watermoose",
    color: MonsterColor.Blue,
    stats: {
      Eyes: 5,
      Horns: 0,
      Tails: 0,
      Tentacles: 0,
      Legs: 8,
    },
  },
  {
    uid: 5,
    alias: "Sully's Brother",
    color: MonsterColor.Red,
    stats: {
      Eyes: 3,
      Horns: 1,
      Tails: 2,
      Tentacles: 0,
      Legs: 2,
    },
  },
  {
    uid: 6,
    alias: "Fire Breather",
    color: MonsterColor.Red,
    stats: {
      Eyes: 2,
      Horns: 2,
      Tails: 1,
      Tentacles: 0,
      Legs: 3,
    },
  },
  {
    uid: 7,
    alias: "Green Goblin",
    color: MonsterColor.Green,
    stats: {
      Eyes: 2,
      Horns: 1,
      Tails: 0,
      Tentacles: 2,
      Legs: 4,
    },
  },
  {
    uid: 8,
    alias: "Purple Phantom",
    color: MonsterColor.Purple,
    stats: {
      Eyes: 3,
      Horns: 0,
      Tails: 1,
      Tentacles: 0,
      Legs: 5,
    },
  },
  {
    uid: 9,
    alias: "Blue Beast",
    color: MonsterColor.Blue,
    stats: {
      Eyes: 4,
      Horns: 0,
      Tails: 1,
      Tentacles: 0,
      Legs: 4,
    },
  },
  {
    uid: 10,
    alias: "Red Raptor",
    color: MonsterColor.Red,
    stats: {
      Eyes: 2,
      Horns: 2,
      Tails: 0,
      Tentacles: 0,
      Legs: 3,
    },
  },
  {
    uid: 11,
    alias: "Green Guardian",
    color: MonsterColor.Green,
    stats: {
      Eyes: 1,
      Horns: 1,
      Tails: 2,
      Tentacles: 0,
      Legs: 2,
    },
  },
  {
    uid: 12,
    alias: "Purple Nightmare",
    color: MonsterColor.Purple,
    stats: {
      Eyes: 5,
      Horns: 1,
      Tails: 0,
      Tentacles: 4,
      Legs: 2,
    },
  },
  {
    uid: 13,
    alias: "Blue Banshee",
    color: MonsterColor.Blue,
    stats: {
      Eyes: 2,
      Horns: 0,
      Tails: 0,
      Tentacles: 6,
      Legs: 2,
    },
  },
  {
    uid: 14,
    alias: "Red Cyclops",
    color: MonsterColor.Red,
    stats: {
      Eyes: 1,
      Horns: 2,
      Tails: 0,
      Tentacles: 0,
      Legs: 2,
    },
  },
  {
    uid: 15,
    alias: "Green Leviathan",
    color: MonsterColor.Green,
    stats: {
      Eyes: 3,
      Horns: 0,
      Tails: 1,
      Tentacles: 3,
      Legs: 5,
    },
  },
];

// Start program:
renderMonsterCards(monsters);