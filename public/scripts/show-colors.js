const colorsE = document.querySelector(".colors");


function ResetColorCount()
{
	colorsE.textContent = "";
	for (const c in MonsterColor) {
		colorsE.appendChild(document.createElement("p")).textContent = `${c}: ${getColoredArray(monsters, MonsterColor[c]).length}`;
	}
}

function getColoredArray(monstersArr, colorParam)
{
	const filterCriteria = {color: colorParam}
	
	return monstersArr.filter(monster => 
	{
		if (filterCriteria.color != null && monster.color !== filterCriteria.color)
			return false;

		return true;
	});
}

ResetColorCount();