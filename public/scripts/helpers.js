// helpers.js
//
// This is a collection of global functions with the purpose of minimizing repetetive code.
// Might be subject for change and / or refactor later.

/**
 * @param {Element} parentElement HTML element to append the drop down menu to.
 * @param {Object} enumToItterate Enum to extract dropdown values from.
 * @param {String} id HTML element id of this dropdown to reference it later.
 */
function addDropDownFromEnum(parentElement, enumToItterate, id)
{
	// <select>
	const select = parentElement.appendChild(document.createElement("select"));
	select.setAttribute("id", id);

	// Add all enum elements
	// <option value="e"> e </>
	for (const e in enumToItterate) 
	{
		let opt = select.appendChild(document.createElement("option"));
		opt.setAttribute("value", `${enumToItterate[e]}`);
		opt.innerHTML = `${enumToItterate[e]}`;
	}
}

/**
 * 
 * @param {Element} parentElement The element on where to apply this list of numeric inputs.
 * @param {"Object"} enumToItterate The enum / object from where to get the keys.
 * @param {String} idRoot The root name for the created elements. eg: filtered-search-form
 * @param {Boolean} isFilter Adds a checkbox and numericFilterEnum to the input.
 */
function addNumericInputFieldsFromEnum(parentElement, enumToItterate, idRoot, isFilter = false)
{
	for (const el in enumToItterate) 
	{
		const elementId = `${idRoot}-${el}`;

		// <span> GENERIC
		const span = parentElement.appendChild(document.createElement("span"));
		span.setAttribute("class", `${idRoot}-span`);
		span.setAttribute("display", "flex"); // EXPERIMENTAL AF, DEBUG!!!!! REMOVE WHEN WE ARE WORKING ON CSS!!!!!
		console.warn(`DEBUG CODE IS STILL IN USE: ${idRoot} span style is set inside javascript!`);

		// <input type="checkbox" />
		if(isFilter)
		{
			const checkbox = span.appendChild(document.createElement("input"));
			checkbox.setAttribute("type", "checkbox");
			checkbox.setAttribute("id", `${elementId}-isactive`);
		}

		// <label>
		const label = span.appendChild(document.createElement("label"));
		label.setAttribute("for", `${elementId}-${isFilter ? "isactive" : "count"}`);
		label.innerHTML = `${enumToItterate[el]}`;

		// <select>
		if(isFilter)
			addDropDownFromEnum(span, NumericFilterMethod, `${elementId}-numeric-filter-dropdown`);

		// <input type="number" />
		const count = span.appendChild(document.createElement("input"));
		count.setAttribute("type", "number");
		count.setAttribute("id", `${elementId}-count`);
	}
}