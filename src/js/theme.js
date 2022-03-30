var theme = localStorage.getItem("st-Theme");
var themeButton = document.getElementById("changeTheme");

if (theme == null){
	theme = "system";
}

function checkSystemTheme() {
	if (window.matchMedia('(prefers-color-scheme: dark)').matches){
		return "dark";
	}
	else {
		return "light";
	}
}

if (theme == "system") {
	setTheme("system")
}
else {
	setTheme(theme)
}

function changeTheme() {
	var theme = localStorage.getItem("st-Theme");
	var listOfThemes = ["system", "light", "dark"];
	var indexOfCurrentTheme = listOfThemes.indexOf(theme);

	if (indexOfCurrentTheme < listOfThemes.length - 1){
		theme = listOfThemes[indexOfCurrentTheme + 1];
	}
	else {
		theme = listOfThemes[0];
	}

	if (theme == "system"){
			setTheme("system")
	}
	else {
		setTheme(theme)
	}
}

function setTheme(theme) {
	localStorage.setItem("st-Theme", theme)
	if (themeButton !== null) {
		themeButton.innerHTML = `Change Theme (${theme})`;
	}
	if (theme == "system") {
		var theme = checkSystemTheme()
	}
	document.getElementsByTagName("html")[0].className = theme + "Mode";
}
