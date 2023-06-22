const Page = require("./page");

class TextFieldPage extends Page {
    get textFieldSelector () { return $(`~enter-text-box-acc-id`); };
    get enteredTextSelector () { return $(`~entered-txt-label-acc-id`); };
    get submitTextSelector () { return $(`~enter-text-btn-acc-id`); };
    get enteredTextLabelSelector () { return $(`~entered-txt-label-acc-id`); };
    get textFieldPageGoBackButtonSelector () { return $(`~text-page-go-back-acc-id`); };

    async enterTextInField(textToEnter) {
        await this.textFieldSelector.waitForDisplayed({ timeout: 10000});
        await this.textFieldSelector.setValue(textToEnter);

        await this.submitTextSelector.click();
    }

    async goBackToHomePage() {
        await this.textFieldPageGoBackButtonSelector.waitForDisplayed({ timeout: 10000 });
        await this.textFieldPageGoBackButtonSelector.click();
    }
}

module.exports = new TextFieldPage();