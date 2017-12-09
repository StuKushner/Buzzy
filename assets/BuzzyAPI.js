function drinkInfoSpirit() {
        // This variable needs to pull the ingredient data
        var ingredientSpirit = $("#spirit-ingredient-input").val().trim();
        // drink = "Gin";
        console.log(ingredientSpirit);
        // var queryURL= "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=14029";
        var queryURL1="http://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+ ingredientSpirit;
        // var queryURL= "http://www.thecocktaildb.com/api/json/v1/1/search.php?i=" + drink;
        var drinkArrayNumbers = [];
        var drinkRecipes = [];
        // Creates AJAX call
        $.ajax({
          url: queryURL1,
          method: "GET"
        }).done(function(response) {
          	// console.log(queryURL1);
          	// console.log(response);
          	for (var i = 0; i < (response.drinks).length; i++) {
          		// console.log(response.drinks[i]);
          		drinkArrayNumbers.push(response.drinks[i].idDrink);
          	}
          	// console.log(drinkArrayNumbers);
          	// This should be updated to run 10 results per page
          	for (var i = 0; i < drinkArrayNumbers.length; i++) {
        		var drinkNumber = drinkArrayNumbers[i];
        		// console.log(drinkNumber);
        		var queryURL2="http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + drinkNumber;
        		$("#display").empty();
        		$.ajax({
          		url: queryURL2,
          		method: "GET"
        		}).done(function(response) {
          		console.log(queryURL2);
          		drinkRecipes.push(response);
          		var drinkDisplay = $("<img>");
          		drinkDisplay.attr("src", response.drinks[0].strDrinkThumb);
          		drinkDisplay.attr("class", "displayDrinkPics");
          		drinkDisplay.width(200);
          		var ingredient1 
          		$("#display").append(drinkDisplay);
          		// var Image = $("<img>");
          		// Image.attr("src", ImageLink);
          		// console.log(Image);
          		// $("#movies-view").append(Image);
          		// $("#display").append("<img src=" + response.drinks[0].strDrinkThumb + ">");
        		});
          	}
          	console.log(drinkRecipes);
        });
    }
    $("#add-submit-btn").on("click", function(event) {
        event.preventDefault();
        drinkInfoSpirit();
    });
