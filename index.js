import "./custom-dropdown.css";

export default class CustomDropdown {
	dropdownMenu;
	dropdownInputDisplay;
	dropdownShowOptionsBtn;
	dropdownOptionsContainer;
	dropdownOptions;

	constructor(targetElementName) {
		this.dropdownMenu = document.querySelector(targetElementName);
		this.dropdownInputDisplay = this.dropdownMenu.querySelector(
			"button > span:first-child"
		);
		this.dropdownShowOptionsBtn = this.dropdownMenu.querySelector(
			"button > span:last-child"
		);
		this.dropdownOptionsContainer = this.dropdownMenu.querySelector("ul");
		this.dropdownOptions = this.dropdownOptionsContainer.querySelectorAll("li");

		this.dropdownInputDisplay.classList.add("placeholder");
		this.dropdownOptionsContainer.classList.add("hide");

		this.initEventListeners();
	}

	initEventListeners() {
		this.dropdownOptions.forEach((options) => {
			options.addEventListener("click", () => {
				this.dropdownOptionsContainer.classList.toggle("hide");
				this.dropdownInputDisplay.textContent = options.dataset.value;
				this.dropdownInputDisplay.classList.remove("placeholder");
			});
		});

		this.dropdownShowOptionsBtn.addEventListener("click", () => {
			this.dropdownOptionsContainer.classList.toggle("hide");
		});
	}
}
