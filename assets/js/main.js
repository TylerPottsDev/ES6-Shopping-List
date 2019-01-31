const itemToAdd = document.getElementById("itemToAdd");
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("list");

class Item {
	constructor (itemName) {
		this.name = itemName;

		this.create();
	}

	create () {
		let listItem = document.createElement("div");
		listItem.classList.add("list-item");

		let input = document.createElement("input");
		input.type = "text";
		input.classList.add("item-name");
		input.value = this.name;
		input.disabled = true;

		let actions = document.createElement("div");
		actions.classList.add("item-actions");

		let updateButton = document.createElement("button");
		updateButton.classList.add("update");
		updateButton.innerText = "Update";
		updateButton.addEventListener("click", () => this.update(input));

		let removeButton = document.createElement("button");
		removeButton.classList.add("remove");
		removeButton.innerText = "Remove";
		removeButton.addEventListener("click", () => this.remove(listItem));

		actions.appendChild(updateButton);
		actions.appendChild(removeButton);
		listItem.appendChild(input);
		listItem.appendChild(actions);

		itemList.appendChild(listItem);
	}

	update (input) {
		input.disabled = !input.disabled;
	}

	remove (listItem) {
		listItem.parentNode.removeChild(listItem);
	}
}

addButton.addEventListener("click", () => newItem());

function newItem () {
	if (itemToAdd.value != "") {
		new Item(itemToAdd.value);
		itemToAdd.value = "";
	}
}