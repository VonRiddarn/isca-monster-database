const utilities = Object.freeze
({
	/**
	 * @param {Element} parentElement HTML element to append the drop down menu to.
	 * @param {Object} enumToItterate Enum to extract dropdown values from.
	 * @param {String} id HTML element id of this dropdown to reference it later.
	 */
	addDropDownFromEnum(parentElement, enumToItterate, id)
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
	},

	/**
	 * 
	 * @param {Element} parentElement The element on where to apply this list of numeric inputs.
	 * @param {"Object"} enumToItterate The enum / object from where to get the keys.
	 * @param {String} idRoot The root name for the created elements. eg: filtered-search-form
	 * @param {Boolean} isFilter Adds a checkbox and numericFilterEnum to the input.
	 */
	addNumericInputFieldsFromEnum(parentElement, enumToItterate, idRoot, isFilter = false)
	{
		for (const el in enumToItterate) 
		{
			const elementId = `${idRoot}-${el}`;

			// <span> GENERIC
			const span = parentElement.appendChild(document.createElement("span"));
			span.setAttribute("class", `${idRoot}-span`);
			
			const labelSpan = span.appendChild(document.createElement("span"));
			
			// <input type="checkbox" />
			if(isFilter)
			{
				const checkbox = labelSpan.appendChild(document.createElement("input"));
				checkbox.setAttribute("type", "checkbox");
				checkbox.setAttribute("id", `${elementId}-isactive`);
			}

			// <label>
			const label = labelSpan.appendChild(document.createElement("label"));
			label.setAttribute("for", `${elementId}-${isFilter ? "isactive" : "count"}`);
			label.innerHTML = `${enumToItterate[el]}`;

			// <select>
			if(isFilter)
				this.addDropDownFromEnum(labelSpan, NumericFilterMethod, `${elementId}-numeric-filter-dropdown`);

			// <input type="number" />
			const count = span.appendChild(document.createElement("input"));
			count.setAttribute("type", "number");
			count.setAttribute("id", `${elementId}-count`);
		}
	},

	generateRawDropDownFromEnum(enumToItterate, id = null) 
	{
		// <select>
		const select = document.createElement("select");
		if(id)
			select.setAttribute("id", id);

		// Add all enum elements
		// <option value="e"> e </>
		for (const e in enumToItterate) 
		{
			let opt = select.appendChild(document.createElement("option"));
			opt.setAttribute("value", `${enumToItterate[e]}`);
			opt.innerHTML = `${enumToItterate[e]}`;
		}

		return select;
	},

	getObjectKeynameFromIndex(object, index)
	{ git 
		return Object.keys(object)[index] || null;
	},
});