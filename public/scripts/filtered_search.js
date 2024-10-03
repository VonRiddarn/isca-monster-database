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
filteredSearchForm.setAttribute("id", "filter-search-monster-form");

// Add form elements to span through functions
applyMonsterColorSpanToForm(filteredSearchForm);


// Functions
function applyMonsterColorSpanToForm(form)
{
	// Initialize <span> element
	const span = form.appendChild(document.createElement("span"));

	// Initialize <label> element
	const label = span.appendChild(document.createElement("label"));
	label.setAttribute("for", "filter-search-monster-form-color");
	label.innerHTML = "Color";

	//Initialize <select>
	const select = span.appendChild(document.createElement("select"));
	select.setAttribute("id", "filter-search-monster-form-color");

	// Add all color options to select
	for (const color in MonsterColor) 
	{
		let opt = select.appendChild(document.createElement("option"));
		opt.setAttribute("value", `${color}`);
		opt.innerHTML = `${MonsterColor[color]}`;
	}
}



/*<form>
	<span>
		<label for="filter-search-form-color">Color</label>
		<select id="filter-search-form-color">
			<option value="Red">Red</option>
			<option value="Green">Green</option>
			<option value="Blue">Blue</option>
		</select>
	</span>
</form>*/