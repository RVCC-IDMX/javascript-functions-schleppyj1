// recipe-collection.test.js
// Tests for recipe collection management functions

import { expect, test, describe, beforeEach } from 'vitest';
import { addRecipe, findRecipe, getQuickRecipes, clearRecipes, recipeCollection } from '../src/recipe-collection';
import { createRecipe } from '../src/recipe-basics';

// Clean up the recipe collection before each test
beforeEach(() => {
  clearRecipes();
});

describe('Recipe Collection Management', () => {
  // Test addRecipe function
  test('addRecipe adds a recipe to the collection', () => {
    const recipe = createRecipe('Pancakes', 20);
    const result = addRecipe(recipe);

    expect(result).toBe(true);
    expect(recipeCollection.length).toBe(1);
    expect(recipeCollection[0]).toBe(recipe);
  });

  test('addRecipe can add multiple recipes', () => {
    const recipe1 = createRecipe('Pancakes', 20);
    const recipe2 = createRecipe('Waffles', 25);
    const recipe3 = createRecipe('French Toast', 15);

    addRecipe(recipe1);
    addRecipe(recipe2);
    addRecipe(recipe3);

    expect(recipeCollection.length).toBe(3);
  });

  // Test findRecipe function
  test('findRecipe finds a recipe by exact name', () => {
    const recipe1 = createRecipe('Pancakes', 20);
    const recipe2 = createRecipe('Waffles', 25);

    addRecipe(recipe1);
    addRecipe(recipe2);

    const found = findRecipe('Pancakes');
    expect(found).toBe(recipe1);
  });

  test('findRecipe returns undefined when recipe not found', () => {
    const recipe = createRecipe('Pancakes', 20);
    addRecipe(recipe);

    const found = findRecipe('Waffles');
    expect(found).toBeUndefined();
  });

  test('findRecipe is case-sensitive', () => {
    const recipe = createRecipe('Pancakes', 20);
    addRecipe(recipe);

    const found = findRecipe('pancakes'); // lowercase
    expect(found).toBeUndefined();
  });

  // Test getQuickRecipes function
  test('getQuickRecipes finds recipes under default time (30 min)', () => {
    const recipe1 = createRecipe('Quick Pasta', 20);
    const recipe2 = createRecipe('Slow Roast', 120);
    const recipe3 = createRecipe('Quick Salad', 10);
    const recipe4 = createRecipe('Medium Stew', 35);

    addRecipe(recipe1);
    addRecipe(recipe2);
    addRecipe(recipe3);
    addRecipe(recipe4);

    const quickRecipes = getQuickRecipes();

    expect(quickRecipes.length).toBe(2);
    expect(quickRecipes).toContain(recipe1);
    expect(quickRecipes).toContain(recipe3);
  });

  test('getQuickRecipes accepts custom time limit', () => {
    const recipe1 = createRecipe('Quick Pasta', 20);
    const recipe2 = createRecipe('Medium Stew', 40);
    const recipe3 = createRecipe('Quick Salad', 10);

    addRecipe(recipe1);
    addRecipe(recipe2);
    addRecipe(recipe3);

    const quickRecipes = getQuickRecipes(15);

    expect(quickRecipes.length).toBe(1);
    expect(quickRecipes).toContain(recipe3);
  });

  test('getQuickRecipes returns empty array when no matches', () => {
    const recipe1 = createRecipe('Medium Pasta', 35);
    const recipe2 = createRecipe('Slow Roast', 120);

    addRecipe(recipe1);
    addRecipe(recipe2);

    const quickRecipes = getQuickRecipes(10);

    expect(quickRecipes).toEqual([]);
  });

  // Test clearRecipes function
  test('clearRecipes empties the collection', () => {
    const recipe1 = createRecipe('Pancakes', 20);
    const recipe2 = createRecipe('Waffles', 25);

    addRecipe(recipe1);
    addRecipe(recipe2);
    expect(recipeCollection.length).toBe(2);

    clearRecipes();
    expect(recipeCollection.length).toBe(0);
  });
});
