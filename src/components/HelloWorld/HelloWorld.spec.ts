import { expect, test } from '@playwright/test';

test('should display a greeting message', async ({ page }) => {
  await page.goto('/en/');

  // Assert that the text content of the p element is "Hello, world!"
  const greeting = await page.textContent('p');
  expect(greeting).toBe(`👋 Hello there, General Kenobi!`);
})