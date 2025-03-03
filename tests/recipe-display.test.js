// recipe-display.test.js
// Tests for recipe display and formatting functions

import { expect, test, describe } from 'vitest';
import { timePerServing, getStepsList, formatRecipe } from '../src/recipe-display';
import { createRecipe, addIngredient, addStep } from '../src/recipe-basics';

describe('Recipe Display and Formatting', () => {
  // Test timePerServing function
  test('timePerServing calculates time divided by servings', () => {
    const recipe1 = createRecipe('Pasta', 20, 4);
    expect(timePerServing(recipe1)).toBe(5); // 20 / 4 = 5

    const recipe2 = createRecipe('Family Meal', 45, 6);
    expect(timePerServing(recipe2)).toBe(7.5); // 45 / 6 = 7.5
  });

  test('timePerServing handles single serving recipes', () => {
    const recipe = createRecipe('Personal Omelet', 10, 1);
    expect(timePerServing(recipe)).toBe(10); // 10 / 1 = 10
  });

  // Test getStepsList function
  test('getStepsList returns formatted steps list', () => {
    const recipe = createRecipe('Toast', 5);

    addStep(recipe, 'Get bread');
    addStep(recipe, 'Put in toaster');
    addStep(recipe, 'Wait until golden');

    const stepsList = getStepsList(recipe);

    // Check if it contains numbered steps
    expect(stepsList).toContain('1. Get bread');
    expect(stepsList).toContain('2. Put in toaster');
    expect(stepsList).toContain('3. Wait until golden');
  });

  test('getStepsList handles empty steps array', () => {
    const recipe = createRecipe('Empty Recipe', 0);

    const stepsList = getStepsList(recipe);
    expect(stepsList).toBe('No steps added yet');
  });

  // Test formatRecipe function
  test('formatRecipe formats a complete recipe', () => {
    const recipe = createRecipe('Simple Omelet', 10, 1);

    addIngredient(recipe, 'Eggs', 2, 'large');
    addIngredient(recipe, 'Milk', 2, 'tbsp');

    addStep(recipe, 'Beat eggs and milk');
    addStep(recipe, 'Cook in pan');

    const formatted = formatRecipe(recipe);

    // Check if it contains all the main sections
    expect(formatted).toContain('Simple Omelet');
    expect(formatted).toContain('for 1 people');
    expect(formatted).toContain('Cooking time: 10 minutes');
    expect(formatted).toContain('Time per serving: 10.0 minutes');
    expect(formatted).toContain('2 large of Eggs');
    expect(formatted).toContain('2 tbsp of Milk');
    expect(formatted).toContain('1. Beat eggs and milk');
    expect(formatted).toContain('2. Cook in pan');
  });

  test('formatRecipe handles recipes with no ingredients or steps', () => {
    const recipe = createRecipe('Empty Recipe', 15, 2);

    const formatted = formatRecipe(recipe);

    expect(formatted).toContain('Empty Recipe');
    expect(formatted).toContain('for 2 people');
    expect(formatted).toContain('Cooking time: 15 minutes');
    expect(formatted).toContain('No ingredients added yet');
    expect(formatted).toContain('No steps added yet');
  });
});
