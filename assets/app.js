
//API
var apiKey = "1";

//User Inputs
var ingredient1 = "";
var ingredient2 = "";
var ingredient3 = "";

//query URL
var queryURL1 ="http://www.thecocktaildb.com/api/json/v1/" + apiKey + "/filter.php?i=";

var recipeCounter = 0;
var numResults = 0;

//FUNCTIONS



function runQuery(numRecipes, queryURL) {

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		console.log(queryURL);
		console.log(response);

		for (var i = 0; i < numRecipes; i++) {
			recipeCounter++;
			var wells = $("<div>");
			wells.addClass("well");
			wells.attr("id", "recipe-well-" + recipeCounter);
			$("#well-section").append(wells);

			/*if (response.drinks[i].strDrinkThumb !== "null") {
				$("#recipe-well-" + recipeCounter).append(
					var drinkDisplay = $("<img>");
					drinkDisplay.attr("src", response.drinks[0].strDrinkThumb);
					drinkDisplay.attr("class", "displayDrinkPics");
					drinkDisplay.width(200);
				);
				console.log(response.drinks[i].strDrinkThumb);
			}*/

			if (response.drinks[i].strDrink !== "null") {
				$("#recipe-well-" + recipeCounter).append(
					"<h3 class='nameOfCocktail><span class='label label-primary'>" +
					recipeCounter + ") <span><strong> " +
					response.drinks[i].strDrink + "</strong></h3>"
				);
				console.log(response.drinks[i].strDrink);
			}

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure1 + " " + response.drinks[i].strIngredient1 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure2 + " " + response.drinks[i].strIngredient2 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure3 + " " + response.drinks[i].strIngredient3 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure4 + " " + response.drinks[i].strIngredient4 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure5 + " " + response.drinks[i].strIngredient5 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure6 + " " + response.drinks[i].strIngredient6 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure7 + " " + response.drinks[i].strIngredient7 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure8 + " " + response.drinks[i].strIngredient8 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure9 + " " + response.drinks[i].strIngredient9 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure10 + " " + response.drinks[i].strIngredient10 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure11 + " " + response.drinks[i].strIngredient11 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure12 + " " + response.drinks[i].strIngredient12 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure13 + " " + response.drinks[i].strIngredient13 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure14 + " " + response.drinks[i].strIngredient14 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strMeasure15 + " " + response.drinks[i].strIngredient15 + "</h5>");

			$("#recipe-well-" + recipeCounter)
			.append("<h5>" + response.drinks[i].strInstructions + "</h5>");

			console.log(response.drinks[i].strMeasure1);
			console.log(response.drinks[i].strIngredient1);
			console.log(response.drinks[i].strMeasure2);
			console.log(response.drinks[i].strIngredient2);
			console.log(response.drinks[i].strMeasure3);
			console.log(response.drinks[i].strIngredient3);
			console.log(response.drinks[i].strMeasure4);
			console.log(response.drinks[i].strIngredient4);
			console.log(response.drinks[i].strMeasure5);
			console.log(response.drinks[i].strIngredient5);
			console.log(response.drinks[i].strMeasure6);
			console.log(response.drinks[i].strIngredient6);
			console.log(response.drinks[i].strMeasure7);
			console.log(response.drinks[i].strIngredient7);
			console.log(response.drinks[i].strMeasure8);
			console.log(response.drinks[i].strIngredient8);
			console.log(response.drinks[i].strMeasure9);
			console.log(response.drinks[i].strIngredient9);
			console.log(response.drinks[i].strMeasure10);
			console.log(response.drinks[i].strIngredient10);
			console.log(response.drinks[i].strMeasure11);
			console.log(response.drinks[i].strIngredient11);
			console.log(response.drinks[i].strMeasure12);
			console.log(response.drinks[i].strIngredient12);
			console.log(response.drinks[i].strMeasure13);
			console.log(response.drinks[i].strIngredient13);
			console.log(response.drinks[i].strMeasure14);
			console.log(response.drinks[i].strIngredient14);
			console.log(response.drinks[i].strMeasure15);
			console.log(response.drinks[i].strIngredient15);
			console.log(response.drinks[i].strInstructions);

		}
	});
}

$(document).on("click", "#add-submit-btn", function(event) {
	event.preventDefault();
	recipeCounter = 0;
	$("#well-section").empty();
	ingredient1 = $("#first-ingredient").val().trim();
	var searchURL = queryURL1 + ingredient1;
	//ingredient2 = $("#second-ingredient").val().trim();
	//ingredient3 = $("#third-ingredient").val().trim();
	numResults = $("#num-recipes-select").val();
	console.log(numResults);
	console.log(searchURL);

	if (ingredient2) {
		searchURL = searchURL + "i=" + ingredient2;
	}

	if (ingredient3) {
		searchURL = searchURL + "i=" + ingredient3;
	}

	runQuery(numResults, searchURL);
});

$(document).on("click", "#add-reset-btn", function() {
	recipeCounter = 0;
	$("#well-section").empty();
});

