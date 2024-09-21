import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
    await page.goto('/'); 
    const header = await page.locator('h1'); 
    await expect(header).toBeVisible();
});
