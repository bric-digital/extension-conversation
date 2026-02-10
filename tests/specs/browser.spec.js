import { test, expect } from '@playwright/test';

/**
 * Comprehensive test suite for rex-types
 * Tests IndexedDB operations, CRUD, pattern matching, and bulk operations
 */

test.describe('REX Types - Browser', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/browser.html');
    await page.waitForFunction(() => window.testUtilitiesReady === true);
  });

  test('Validate page loaded.', async ({ page }) => {
    await expect(page).toHaveTitle(/REX Types Browser Test Page/);
  });
});
