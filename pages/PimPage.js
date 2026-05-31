export class PimPage {
    constructor(page){
        this.page=page;
    }

    async goto(){
        await this.page.goto('/web/index.php/pim/viewEmployeeList')
    }

    async clickAddEmployee(){
        await this.page.getByRole('button', {name: 'Add'}).click();
    }

    async enterFirstName(name){
        await this.page.getByRole('textbox', {name: 'First Name'}).fill(name);
    }

    async enterMiddleName(name) {
    await this.page.getByRole('textbox', { name: 'Middle Name' }).fill(name);
  }

  async enterLastName(name) {
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(name);
  }

    async fillEmployeeName(firstName, middleName, lastName) {
    await this.enterFirstName(firstName);
    await this.enterMiddleName(middleName);
    await this.enterLastName(lastName);
  }

  async clickSave(){
    await this.page.getByRole('button', {name: 'Save'}).click();
  }

  async isSuccessToastVisible(){
    return await this.page.getByText('Successfully Saved').isVisible();
  }
}