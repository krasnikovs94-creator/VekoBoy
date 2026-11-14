const { test, expect } = require('@playwright/test');

test('Проверка запуска ВеткоБой', async ({ page }) => {
  const errors = [];

  page.on('pageerror', error => {
    errors.push(error.message);
  });

  await page.goto('/');
  await expect(page.locator('canvas').first())
    .toBeVisible({ timeout: 25000 });

  await page.waitForTimeout(4000);

  await page.screenshot({
    path: 'game-screen.png',
    fullPage: true
  });

  expect(errors).toEqual([]);
});
