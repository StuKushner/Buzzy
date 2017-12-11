//API
var apiKey = "1";

//User Inputs
var ingredient1 = "";
//query URL
var queryURL1 = "http://www.thecocktaildb.com/api/json/v1/" + apiKey + "/filter.php?i=";

var recipeCounter = 0;
var numResults = 0;

//FUNCTIONS

function runQuery(numRecipes, queryURL1) {

	$.ajax({
		url: queryURL1,
		method: "GET"
	}).done(function(response1) {
		console.log(queryURL1);
		console.log(response1);

		for (var i = 0; i < numRecipes; i++) {
			var drinkID = response1.drinks[i].idDrink;
			var queryURL2 = "http://www.thecocktaildb.com/api/json/v1/" + apiKey + "/lookup.php?i=" + drinkID;

			recipeCounter++;
			var wells = $("<div>");
			wells.addClass("well");
			wells.attr("id", "recipe-well-" + recipeCounter);
			$("#well-section").append(wells);

			if (response1.drinks[i].strDrinkThumb !== "null") {
				var drinkDisplay = $("<img>");
          		drinkDisplay.attr("src", response1.drinks[i].strDrinkThumb);
          		drinkDisplay.attr("class", "displayDrinkPics");
          		drinkDisplay.width(200);
				$("#recipe-well-" + recipeCounter).append(drinkDisplay);
				console.log(drinkDisplay);
			}

			if (response1.drinks[i].strDrink !== "null") {
				$("#recipe-well-" + recipeCounter).append(
					"<h3 class='nameOfCocktail><span class='label label-primary'>" +
					recipeCounter + ") <span><strong> " +
					response1.drinks[i].strDrink + "</strong></h3>"
				);
				console.log(response1.drinks[i].strDrink);
			}

			$.ajax({
				url: queryURL2,
				method: "GET"
			}).done(function(response2) {
				console.log(queryURL2);
				console.log(response2);

				for (var i = 0; i <= 15; i++) {
					var measurement = response2.drinks[0]['strMeasure' + i];
					var ingredient = response2.drinks[0]['strIngredient' + i];

					if (ingredient) {
						$("#recipe-well-" + recipeCounter).append(
							measurement + " " + ingredient + "<br>"
						);
						console.log(measurement);
						console.log(ingredient);
					}
				}

				if (response2.drinks[0].strInstructions !== "null") {
					$("#recipe-well-" + recipeCounter).append(
						response2.drinks[0].strInstructions + "<br>"
					);
					console.log(response2.drinks[0].strInstructions);
				}
			});
		}
	});
}

$(document).on("click", "#add-submit-btn", function(event) {
	event.preventDefault();
	recipeCounter = 0;
	$("#well-section").empty();
	ingredient1 = $("#first-ingredient").val().trim();
	var searchURL = queryURL1 + ingredient1;
	numResults = $("#num-recipes-select").val();
	console.log(numResults);
	console.log(searchURL);

	runQuery(numResults, searchURL);
});

$(document).on("click", "#add-reset-btn", function() {
	recipeCounter = 0;
	$("#well-section").empty();
});
