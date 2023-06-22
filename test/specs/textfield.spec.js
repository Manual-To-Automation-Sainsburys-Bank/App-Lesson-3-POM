const HomePage = require('../pages/home.page');
const TextFieldPage = require('../pages/textfield.page');

describe('Text Field Page Tests', async () => {

    it('The text field screen should be visible', async () => {
        await HomePage.clickTextFieldButton();
        await expect((await TextFieldPage.textFieldSelector)).toBeDisplayed();
        await TextFieldPage.goBackToHomePage();
    });

    it(`The Entered Text is displayed on the label`, async () => {
        let textToEnter = "here is some text";
        await HomePage.clickTextFieldButton();
        await TextFieldPage.enterTextInField(textToEnter);
        await expect((await TextFieldPage.enteredTextLabelSelector.getText())).toContain(textToEnter);
        await TextFieldPage.goBackToHomePage();
    });

})