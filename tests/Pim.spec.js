import {test, expect } from '../fixtures/baseFixture';
import { generateEmployeeName } from '../utils/helper';

test.describe('PIM Module - Add Employee', ()=>{
    test('TC_PIM_1 - Add employee navigates to add employee page', async({pimPage, page})=>{
        await pimPage.clickAddEmployee();
        await expect(page).toHaveURL(/addEmployee/);
    });

    test('TC_PIM_2 - Add Employee with valid details shows success toast', async({pimPage, page})=>{
        const employee = generateEmployeeName();

        await pimPage.clickAddEmployee();
        await page.waitForURL(/addEmployee/);

        await pimPage.fillEmployeeName(
            employee.firstName,
            employee.middleName,
            employee.lastName
        );

        await pimPage.clickSave();

        await expect(page.getByText('Successfully Saved')).toBeVisible({ timeout: 10000 });
    });

    test('TC_PIM_3 - PIM Page loads Employee List', async({pimPage, page})=>{
        await expect(page).toHaveURL(/viewEmployeeList/)
    })
})