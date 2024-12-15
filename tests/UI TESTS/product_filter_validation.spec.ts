import { test, expect } from '@playwright/test';
import { OrgAccountPage } from '../../pages/OrgAccount.page';

test.describe('Laptops Search and Filter Functionality', () => {

    test('Check Page Object for laptops search', async({ page }) => {
        const orgPage = new OrgAccountPage(page);
        await page.goto('https://lalafo.kg/');

        const data = {
            searchInput: 'ноутбуки',
            minPrice: '30000',
            maxPrice: '50000'
        };

        // Ожидание загрузки страницы и поиска
        await orgPage.searchProduct(data.searchInput);
        await orgPage.waitForAds();

        // Применение фильтрации по цене
        await orgPage.applyPriceFilter(data.minPrice, data.maxPrice);

        // Увеличиваем таймаут ожидания появления объявления
        await page.waitForTimeout(5000);  // Подождать больше времени

        // Проверка количества объявлений после фильтрации
        const adsCount = await orgPage.getAdsCount();
        console.log(`Количество объявлений после фильтрации: ${adsCount}`);
        
        expect(adsCount).toBeGreaterThan(0);
    }
)










    /*test('Check', async ({ page }) => {
    await page.goto('https://lalafo.kg/');
    
    // Заполнение поля поиска для ноутбуков
    await page.locator('input[type="text"].search-input[placeholder="Я ищу..."]').fill('ноутбуки');
    
    // Клик по кнопке поиска
    await page.locator('button[type="button"].search-input-button').click();
    
    // Ожидание заголовков объявлений
    await page.waitForSelector('.ad-tile-horizontal-header-link-title', { timeout: 20000, state: 'visible' });
    
    // Проверка, сколько объявлений загружено
    const adsCount = await page.locator('.ad-tile-horizontal-header-link-title').count();
    console.log(`Количество загруженных объявлений: ${adsCount}`);

    // Заполнение цен
    await page.locator('input[type="number"].LFInput__input[placeholder="Цена от"]').fill('30000');
    await page.locator('input[type="number"].LFInput__input[placeholder="Цена до"]').fill('50000');
    
    // Клик по кнопке фильтрации
    await page.locator('button[type="button"].LFButton.medium.primary-green').click();

    // Ожидание, пока результаты отфильтруются
    await page.waitForTimeout(20000);
});*/
});
