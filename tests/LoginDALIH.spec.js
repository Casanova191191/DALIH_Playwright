import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://dalih.app/login-dalih');
  await page.getByPlaceholder('Correo electrónico').click();
  await page.getByPlaceholder('Correo electrónico').fill('');
  await page.getByPlaceholder('Correo electrónico').click();
  await page.getByPlaceholder('Correo electrónico').fill('casanova9812@gmail.com');
  await page.getByPlaceholder('Contraseña').click();
  await page.getByPlaceholder('Contraseña').fill('12345');
  await page.getByRole('button', { name: 'Iniciar Sesión', exact: true }).click();
  await page.goto('https://dalih.app/mosaico');
 
  await page.getByRole('button', { name: 'plus Agregar nuevo cliente' }).click();
  await page.getByPlaceholder('Nombre / Razón social').click();
  await page.getByPlaceholder('Nombre / Razón social').fill('Cositas');
  await page.getByRole('button', { name: 'Tipo de persona' }).click();
  await page.locator('#single-populate--person_type__0').click();
  await page.getByLabel('Close', { exact: true }).nth(1).click();
  await page.getByRole('button', { name: 'Tipo de identificación' }).click();
  await page.locator('#single-populate--id_type__0').click();
  await page.getByLabel('Close', { exact: true }).nth(2).click();
  await page.getByPlaceholder('Identificación').click();
  await page.getByPlaceholder('Identificación').fill('12345553');
  await page.getByPlaceholder('Teléfono').click();
  await page.getByPlaceholder('Teléfono').fill('3232124124');
  await page.getByPlaceholder('Correo electrónico').click();
  await page.getByPlaceholder('Correo electrónico').fill('casanova9812@gmail.com');
  await page.getByPlaceholder('Correo electrónico').press('ArrowLeft');
  await page.getByPlaceholder('Correo electrónico').press('ArrowLeft');
  await page.getByPlaceholder('Correo electrónico').press('ArrowLeft');
  await page.getByPlaceholder('Correo electrónico').press('ArrowLeft');
  await page.getByPlaceholder('Correo electrónico').press('ArrowLeft');
  await page.getByPlaceholder('Correo electrónico').press('ArrowLeft');
  await page.getByPlaceholder('Correo electrónico').press('ArrowLeft');
  await page.getByPlaceholder('Correo electrónico').press('ArrowLeft');
  await page.getByPlaceholder('Correo electrónico').press('ArrowLeft');
  await page.getByPlaceholder('Correo electrónico').fill('casanova12@gmail.com');
  await page.getByRole('button', { name: 'Crear registro' }).click();
});