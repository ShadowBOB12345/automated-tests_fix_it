import { test, expect } from '@playwright/test';

test('Lalafo.kg Laptop Product Search and Filter Test', async ({ request }) => {
  const BASE_URL = 'https://lalafo.kg/api/search/v3/feed/search';
  
  // Параметры запроса
  const params = {
    'expand': 'url',
    'per-page': '20',
    'category_id': '1343', // Категория: Ноутики
    'q': 'ноутбуки', // Поиск по ключевому слову
    'city_id': '103184', // ID города
    'sort_by': 'default', // Сортировка по умолчанию
    'price[from]': '30000', // Минимальная цена
    'price[to]': '50000', // Максимальная цена
    'with_feed_banner': 'true'
  };

  // Заголовки запроса
  const headers = {
    'accept': 'application/json, text/plain, */*',
    'country-id': '12',
    'device': 'pc',
    'experiment': 'discountlevelpurchase-discountlevelpurchase-partition-2',
    'language': 'ru_RU',
    'referer': 'https://lalafo.kg/bishkek/kompyutery/noutbuki-i-netbuki/q-%D0%BD%D0%BE%D1%83%D1%82%D0%B1%D1%83%D0%BA%D0%B8?sort_by=default&price[from]=30000&price[to]=50000',
    'request-id': 'react-client_aa210fa9-4531-4f42-ac44-990de68de358',
    'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    'user-hash': 'ab9785ac-69cf-4fb3-98f0-b3dfab724895',
    'x-cache-bypass': 'yes'
  };

  // Выполнение запроса
  const response = await request.get(BASE_URL, { params, headers });
  console.log('Response body:', JSON.stringify(await response.json(), null, 2));
  
  // Проверка успешности запроса
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  // Преобразование тела ответа в JSON
  const responseBody = await response.json();

  // Проверка, что массив товаров не пуст
  expect(Array.isArray(responseBody.items)).toBe(true);
  expect(responseBody.items.length).toBeGreaterThan(0);

  // Проверка цен на товары в пределах указанного диапазона
  responseBody.items.forEach(item => {
    expect(item.price).toBeGreaterThanOrEqual(30000);
    expect(item.price).toBeLessThanOrEqual(50000);
  });

  // Проверка, что каждый товар имеет нужные поля
  responseBody.items.forEach(item => {
    expect(item).toHaveProperty('title');
    expect(item).toHaveProperty('price');
    expect(item).toHaveProperty('user');
    expect(item.user).toHaveProperty('username');  // Исправлено на username
  });
});
