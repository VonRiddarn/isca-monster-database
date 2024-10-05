// filtered_search.js
//
// This file contains all variables and functionality related to the filtered search.
// This script should remain self-contained!

// Create <form> then create <span> and save the <span> to a variable so we can mutate it in a function later.
const filteredSearchRoot = document.querySelector(".filter-search-monster");
const filteredSearchForm = filteredSearchRoot.querySelector("form");
filteredSearchForm.innerHTML = "";
filteredSearchForm.setAttribute("style", "display: flex; flex-direction: column"); // DEBUG!!!! EXPERIMENTAL!!! REMOVE WHEN WE HAVE CSS!!!
console.warn(`DEBUG CODE IS STILL IN USE: ${filteredSearchRoot.className} form style is set inside javascript!`);

// Add form elements to span through functions
applyMonsterColorToForm(filteredSearchForm);
addNumericInputFieldsFromEnum(filteredSearchForm, MonsterAttribute, "filtered-search-monster-attribute", true);

// Create search <button> (filtered seach form submitter)
const filteredSearchButton = filteredSearchForm.appendChild(document.createElement("button"));
filteredSearchButton.setAttribute("id", "filtered-search-monster-form-submit");
filteredSearchButton.innerHTML = "Search";


/**
 * Generates and applies MonsterColor HTML elements the passed form.
 * @param {Form} form 
 */
function applyMonsterColorToForm(form)
{
	// <span>
	const span = form.appendChild(document.createElement("span"));
	span.setAttribute("id", "filtered-search-monster-color-span");

	// <input type="checkbox">
	const colorCheckBox = span.appendChild(document.createElement("input"));
	colorCheckBox.setAttribute("type", "checkbox");
	colorCheckBox.setAttribute("id", "filtered-search-monster-color-isactive");

	// <label>
	const label = span.appendChild(document.createElement("label"));
	label.setAttribute("for", "filtered-search-monster-color-isactive");
	label.innerHTML = "Color";

	// <select>
	addDropDownFromEnum(span, MonsterColor, "filtered-search-monster-color-dropdown");
}


// TODO: 
// Change this to dynamically create the filterCriteria object from filter form
function getFilterCriteria()
{
	const fc = 
	{
		color: "Purple",
		attributes: 
		{
			Horns: { filterMethod: NumericFilterMethod.LessThan, amount: 1 },
			Eyes: { filterMethod: NumericFilterMethod.LessThan, amount: 20 },
		},
	};

	return fc;
}

/**
 * 
 * @param {Array} monstersArr The array containing all monster objects in javascript form
 * @returns monsterArr modified to only include monsters matching the current active filters on the form.
 */
function getFilteredMonsterArray(monstersArr)
{
	const filterCriteria = getFilterCriteria();

	return monstersArr.filter(monster => 
	{
		// If color filter exists, and we do NOT match.
		if (filterCriteria.color && monster.color !== filterCriteria.color)
			return false;

		// If attribute filter exists, go nest and do more checks
		if(filterCriteria.attributes)
		{
			for(let [attributeKey, filterCondition] of Object.entries(filterCriteria.attributes))
			{
				// Skip if attribute does not exist on monster.
				if(monster[attributeKey] === undefined)
					continue;

				const value = monster[attributeKey]; // Current monster attribute count saved in value
				const { filterMethod, amount } = filterCondition;

				switch(filterMethod)
				{
					case NumericFilterMethod.LessThan:
						if(value >= amount)
							return false;
						break;

					case NumericFilterMethod.EqualTo:
						if(value != amount)
							return false;
						break;

					case NumericFilterMethod.GreaterThan:
						if(value <= amount)
							return false;
						break;

					default:
						console.error(`Invalid numeric filter method ${filterMethod} on ${monster}`);
						return false;
				}
			}
		}

		// Passed all active filters
		return true;
	});
}

/*
<form>
	<!-- COLOR -->
	<span>
		<label for="filter-search-form-color">Color</label>
		<select id="filter-search-form-color">
			<option value="Red">Red</option>
			<option value="Green">Green</option>
			<option value="Blue">Blue</option>
		</select>
	</span>

	<!-- Attributes -->
	<span style="display: flex;">
		<input type="checkbox" id="foo"/>
		<label for="foo">Bar</label>
		<select name="dropdown-numeric-filter" id="numeric-filter-bar">
			<option value="LessThan">&lt;</option>
			<option value="Equals">=</option>
			<option value="GreaterThan">&gt;</option>
		</select>
		<input type="number" />
	</span>
</form>
*/