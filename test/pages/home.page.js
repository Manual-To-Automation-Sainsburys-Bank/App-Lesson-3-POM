const Page = require("./page");

class HomePage extends Page {
  get alertButtonSelector () { return $(`~alert-btn-acc-id`); };
  get textFieldButtonSelector () { return $(`~txt-field-btn-acc-id`); };
  get formButtonSelector () { return $(`~form-btn-acc-id`); };
  get datePickerButtonSelector () { return $(`~date-btn-acc-id`); };
  get switchesButtonSelector () { return $(`~switches-btn-acc-id`); };
  get logoSelector () { return $(`~bstack-logo`); };

  async clickAlertButton() {
    await this.alertButtonSelector.waitForDisplayed({ timeout: 10000 });
    await this.alertButtonSelector.click();
  }

  async clickTextFieldButton() {
    await this.textFieldButtonSelector.waitForDisplayed({ timeout: 10000 });
    await this.textFieldButtonSelector.click();
  }

  async clickFormButton() {
    await this.formButtonSelector.waitForDisplayed({ timeout: 10000 });
    await this.formButtonSelector.click();
  }

  async clickDateButton() {
    await this.datePickerButtonSelector.waitForDisplayed({ timeout: 10000 });
    await this.datePickerButtonSelector.click();
  }

  async clickSwitchesButton() {
    await this.switchesButtonSelector.waitForDisplayed({ timeout: 10000 });
    await this.switchesButtonSelector.click();
  }
}
module.exports = new HomePage();
