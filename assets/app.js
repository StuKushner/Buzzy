var authKey = "";
//User Inputs
var ingre1 = "";
var ingre2 = "";
var ingre3 = "";

//query URL
var queryURLbase = "";

//Keep track of recipe counter
var recipeCounter = 0;

//FUNCTIONS

function runQuery(numRecipes, queryURL) {

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(alcoholData) {

		//Log URL so we have access to it for troubleshooting
		console.log("QueryURL: " + queryURL);

		//Log the alcoholData
		console.log(alcoholData);

		for (var i = 0; i < numRecipes; i++) {
			//increase the number of recipes shown
			recipeCounter++;
			//Create wells for each entry
			var wells = $("<div>");
			wells.addClass("well");
			wells.attr("id", "recipe-well-" + recipeCounter);
			$("#well-section" /* PLACEHOLDER ID */).append(wells);

			//Confirm that the JSON isn't missing any details
			//If the recipe has a title, include it with the drink picture

			//Log name of cocktail to console

			//if the recipe has the ingredients typed in, put that ingredient

			//log the ingredients

			//Put the rest of the ingredients in the html

			//log them to console

		}

	});
}

$("#add-submit-button").click(function(event){
	event.preventDefault();
	recipeCounter = 0;
	$("#well-section").empty();
	ingre1 = $("#first-ingredient").val().trim();
	var searchURL = queryURLbase + ingre1;

	numRecipes = 5;
	ingre2 = $("#second-ingredient").val().trim();
	ingre3 = $("#third-ingredient").val().trim();

	if (parseInt(ingre1)) {
		searchURL = searchURL + "&ingre1=" + ingre1 + "0101";
	}

	if (parseInt(ingre2)) {
		searchURL = searchURL + "&ingre2=" + ingre2 + "0101";
	}

	if (parseInt(ingre3)) {
		searchURL = searchURL + "&ingre3=" + ingre3 + "0101";
	}

	runQuery(numRecipes, searchURL);
});

$("#add-reset-button").click(function() {
	recipeCounter = 0;
	$("well-section").empty();
});