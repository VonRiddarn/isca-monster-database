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
		opt.setAttribute("value", `${e}`);
		opt.innerHTML = `${enumToItterate[e]}`;
	}
}