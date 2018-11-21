function init() {
  //put any page initialization/handlebars initialization here
  let recipeForm = document.getElementById('recipe-form-template').innerHTML
<<<<<<< HEAD
  let template = Handlebars.compile(recipeForm)
  document.getElementsByTagName('main')[0].innerHTML = template()

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    return new Handlebars.SafeString('<li name="ingredients">' + ingredient + "</li>");
  })

  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById('recipe-details-partial').innerHTML)

=======
  let templateFn = Handlebars.compile(recipeForm)
  let html = templateFn(recipeForm)
  document.getElementsByTagName('main')[0].innerHTML += html

  Handlebars.registerHelper('displayIngredient', function(ingredient) {
    var result = "<li name='ingredient'>" + ingredient.name + "</li>"
    return new Handlebars.SafeString(result);
  })
>>>>>>> da0b2e8a1688a0d3deebf61c6efb11de04cc8ebe
}
document.addEventListener("DOMContentLoaded", function(event) {
  init()
})

function handleSubmit() {
<<<<<<< HEAD
  let name = document.getElementById("name").value
  let description = document.getElementById("description").value
  let inputs = document.getElementsByName('ingredients')
  let ingredients = []
  for (var i = 0; i < inputs.length; i++) {
    ingredients.push(inputs[i].value)
  }
  let recipe = {name, description, ingredients}

  let recipeTemplate = document.getElementById('recipe-template').innerHTML
  let template = Handlebars.compile(recipeTemplate)
  document.getElementById('main').innerHTML = template(recipe)
}

function displayEditForm() {
  let name = document.getElementById('name').innerText
  let description = document.getElementById('description').innerText
  let inputs = document.getElementsByName('ingredients')
  let ingredients = []
  for (var i = 0; i < inputs.length; i++) {
    ingredients.push(inputs[i].innerText)
  }
  let recipe = {name, description, ingredients}

  let recipeFormTemplate = document.getElementById('recipe-form-template').innerHTML
  let template = Handlebars.compile(recipeFormTemplate)
  document.getElementById('main').innerHTML = template(recipe)
}
=======
  let recipeName = document.getElementById('name').value
  let recipeDesc = document.getElementById('description').value
  let inputs = document.getElementsByName('ingredient')
  let ingredients = []
  for (i = 0; i < inputs.length; i++) {
    ingredients.push(inputs[i].value)
  }

  console.log(recipeName)
  console.log(recipeDesc)
  console.log(ingredients)
}


>>>>>>> da0b2e8a1688a0d3deebf61c6efb11de04cc8ebe
