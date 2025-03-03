# JavaScript Functions: A Recipe Manager

This project introduces fundamental JavaScript function concepts through a practical recipe manager application.

## Project Structure

The project is divided into three modules, each focusing on specific function concepts:

### 1. `recipe-basics.js`
- Focus: Creating and modifying individual recipes
- Key concepts: Function declarations, function expressions, parameters, return values
- Functions included:
  - `createRecipe(name, cookingTime, servings = 4)`
  - `addIngredient(recipe, name, amount, unit)`
  - `addStep(recipe, instruction)`
  - `removeStep(recipe, stepIndex)`

### 2. `recipe-collection.js`
- Focus: Managing collections of recipes
- Key concepts: Arrow functions, default parameters, outer variables
- Functions included:
  - `addRecipe(recipe)`
  - `findRecipe(name)`
  - `getQuickRecipes(maxTime = 30)`
  - `clearRecipes()`

### 3. `recipe-display.js`
- Focus: Formatting and displaying recipes
- Key concepts: Concise arrow functions, function composition, string formatting
- Functions included:
  - `timePerServing(recipe)`
  - `getStepsList(recipe)`
  - `formatRecipe(recipe)`

## Testing

Each module has a corresponding Vitest test file that demonstrates how to test the functions:

1. `recipe-basics.test.js`
2. `recipe-collection.test.js`
3. `recipe-display.test.js`

## Function Concepts Covered

- Function Declaration
- Local variables
- Outer variables
- Parameters
- Default values
- Returning a value
- Function expressions (Function is a value)
- Arrow functions
- Function composition

## Running Examples

Each JavaScript file includes a `SHOW_EXAMPLES` flag at the top:

```javascript
// Set to true to see console examples when running this file directly
const SHOW_EXAMPLES = false;
```

Set this to `true` to see the functions in action when they run the file directly.

## Getting Started

1. Review each JavaScript file in sequence, starting with `recipe-basics.js`
2. Set `SHOW_EXAMPLES = true` in each file to run the examples
3. Study the test files to understand how to verify function behavior
4. Add missing code according to given hints
5. Test the file and/or run the file with node to see its output
6. Repeat the previous step until all tests pass
