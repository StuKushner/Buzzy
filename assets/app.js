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
			if (alcoholData.response.drinks[i].strIngredient1 !== "null") {
				$("#recipe-well-" + recipeCounter).append(
					"<h3 class='nameOfCocktail><span class='label label-primary'>" +
					recipeCounter + "<span><strong> " +
					alcoholData.response./*whatever*/.drinkID + "</strong></h3>"
					);
			}

			//Log name of cocktail to console
			console.log(nameOfCocktail /*Placeholder*/)	

			//get drink id of first 5

		}

	});
}
//When user presses submit button
$("#add-submit-button").click(function(event){
	//Hitting "Enter" on keyboard will work
	event.preventDefault();
	//Initially sets recipeCounter to 0
	recipeCounter = 0;
	//Empties all of the wells
	$("#well-section").empty();
	//The user puts in the first ingredient and updates the URL with it
	ingre1 = $("#first-ingredient").val().trim();
	var searchURL = queryURLbase + ingre1;
	//Only 5 results
	numRecipes = 5;
	//Repeat for ingredients 2 and 3 if user put them in
	ingre2 = $("#second-ingredient").val().trim();
	ingre3 = $("#third-ingredient").val().trim();

	//If user puts in the first ingredient, it will be stored in the URL
	if (parseInt(ingre1)) {
		searchURL = searchURL + "&ingre1=" + ingre1 + "0101";
	}
	//If user puts in the first ingredient, the second ingredient will be stored in the URL
	if (parseInt(ingre2)) {
		searchURL = searchURL + "&ingre2=" + ingre2 + "0101";
	}
	//If user puts in the first ingredient and a second ingredient, the third ingredient will be stored in the URL
	if (parseInt(ingre3)) {
		searchURL = searchURL + "&ingre3=" + ingre3 + "0101";
	}
	//Run query with results and URLS
	runQuery(numRecipes, searchURL);
});

// When user presses reset button, everything is cleared
$("#add-reset-button").click(function() {
	recipeCounter = 0;
	$("well-section").empty();
});

$("#")

//signup button
