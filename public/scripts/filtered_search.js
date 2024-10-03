// filtered_search.js
//
// This file contains all variables and functionality related to the filtered search.
// This script should remain self-contained!

// Filtered search enum
const NumerixFilterMethod = Object.freeze
(
	{
		LessThan: "<",
		EqualTo: "=", 
		GreaterThan: ">", 
	}
);

// Initialize root
const filteredSearchRoot = document.querySelector(".filter-search-monster");
filteredSearchRoot.innerHTML = "";

// Create <form> then create <span> and save the <span> to a variable so we can mutate it in a function later.
const filteredSearchForm = filteredSearchRoot.appendChild(document.createElement("form"));
filteredSearchForm.setAttribute("style", "display: flex; flex-direction: column"); // DEBUG!!!! EXPERIMENTAL!!! REMOVE WHEN WE HAVE CSS!!!
console.warn(`DEBUG CODE IS STILL IN USE: ${filteredSearchRoot.className} form style is set inside javascript!`);

// Add form elements to span through functions
applyMonsterColorToForm(filteredSearchForm);
applyMonsterAttributesToForm(filteredSearchForm);


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

/**
 * Generates and applies MonsterAttribute HTML elements the passed form.
 * @param {Form} form 
 */
function applyMonsterAttributesToForm(form)
{
	for (const attribute in MonsterAttribute) 
	{
		const idRoot = `filtered-search-monster-attribute-${MonsterAttribute[attribute]}`;

		// <span> GENERIC
		const span = form.appendChild(document.createElement("span"));
		span.setAttribute("class", "filtered-search-monster-attribute-span");
		span.setAttribute("display", "flex"); // EXPERIMENTAL AF, DEBUG!!!!! REMOVE WHEN WE ARE WORKING ON CSS!!!!!
		console.warn(`DEBUG CODE IS STILL IN USE: ${idRoot} span style is set inside javascript!`);

		// <input type="checkbox" />
		const checkbox = span.appendChild(document.createElement("input"));
		checkbox.setAttribute("type", "checkbox");
		checkbox.setAttribute("id", `${idRoot}-isactive`);

		// <label>
		const label = span.appendChild(document.createElement("label"));
		label.setAttribute("for", `${idRoot}-isactive`)
		label.innerHTML = `${MonsterAttribute[attribute]}`;

		// <select>
		addDropDownFromEnum(span, NumerixFilterMethod, `${idRoot}-numeric-filter-dropdown`);

		// <input type="number" />
		const count = span.appendChild(document.createElement("input"));
		count.setAttribute("type", "number");
		count.setAttribute("id", `${idRoot}-count`);
	}
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