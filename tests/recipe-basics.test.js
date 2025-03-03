// recipe-basics.test.js
// Tests for core recipe functions

import { expect, test, describe } from 'vitest';
import { createRecipe, addIngredient, addStep, removeStep } from '../src/recipe-basics';

describe('Recipe Creation and Modification', () => {
  // Test createRecipe function
  test('createRecipe creates a recipe with default servings', () => {
    const recipe = createRecipe('Pasta', 20);

    expect(recipe.name).toBe('Pasta');
    expect(recipe.cookingTime).toBe(20);
    expect(recipe.servings).toBe(4); // Default value
    expect(recipe.ingredients).toEqual([]);
    expect(recipe.steps).toEqual([]);
    expect(recipe.id).toBeDefined();
    expect(recipe.dateCreated).toBeDefined();
  });

  test('createRecipe creates a recipe with custom servings', () => {
    const recipe = createRecipe('Family Pasta', 25, 6);

    expect(recipe.name).toBe('Family Pasta');
    expect(recipe.cookingTime).toBe(25);
    expect(recipe.servings).toBe(6); // Custom value
  });

  // Test addIngredient function
  test('addIngredient adds an ingredient to a recipe', () => {
    const recipe = createRecipe('Omelet', 10, 1);
    const updatedRecipe = addIngredient(recipe, 'Eggs', 2, 'large');

    // Verify the ingredient was added
    expect(updatedRecipe.ingredients.length).toBe(1);
    expect(updatedRecipe.ingredients[0]).toEqual({
      name: 'Eggs',
      amount: 2,
      unit: 'large'
    });

    // Verify it returns the same recipe object (modified)
    expect(updatedRecipe).toBe(recipe);
  });

  test('addIngredient can add multiple ingredients', () => {
    const recipe = createRecipe('Omelet', 10, 1);

    addIngredient(recipe, 'Eggs', 2, 'large');
    addIngredient(recipe, 'Milk', 1, 'tbsp');
    addIngredient(recipe, 'Salt', 1, 'pinch');

    expect(recipe.ingredients.length).toBe(3);
  });

  // Test addStep function
  test('addStep adds a cooking step to a recipe', () => {
    const recipe = createRecipe('Toast', 5);
    const updatedRecipe = addStep(recipe, 'Put bread in toaster');

    expect(updatedRecipe.steps.length).toBe(1);
    expect(updatedRecipe.steps[0]).toBe('Put bread in toaster');

    // Verify it returns the same recipe object (modified)
    expect(updatedRecipe).toBe(recipe);
  });

  test('addStep can add multiple steps in sequence', () => {
    const recipe = createRecipe('Toast', 5);

    addStep(recipe, 'Put bread in toaster');
    addStep(recipe, 'Set toaster to medium');
    addStep(recipe, 'Wait until bread pops up');

    expect(recipe.steps.length).toBe(3);
    expect(recipe.steps[1]).toBe('Set toaster to medium');
  });

  // Test removeStep function
  test('removeStep removes a step at specified index', () => {
    const recipe = createRecipe('Sandwich', 10);

    addStep(recipe, 'Get two slices of bread');
    addStep(recipe, 'Add butter');  // This will be removed
    addStep(recipe, 'Add fillings');

    const updatedRecipe = removeStep(recipe, 1);

    expect(updatedRecipe.steps.length).toBe(2);
    expect(updatedRecipe.steps[0]).toBe('Get two slices of bread');
    expect(updatedRecipe.steps[1]).toBe('Add fillings');

    // Verify it returns the same recipe object (modified)
    expect(updatedRecipe).toBe(recipe);
  });

  test('removeStep does nothing with invalid index', () => {
    const recipe = createRecipe('Sandwich', 10);

    addStep(recipe, 'Get bread');
    addStep(recipe, 'Add fillings');

    // Try to remove with negative index
    removeStep(recipe, -1);
    expect(recipe.steps.length).toBe(2);

    // Try to remove with too large index
    removeStep(recipe, 5);
    expect(recipe.steps.length).toBe(2);
  });
});
