const Page = require('./page.js');

class AlertPage extends Page {
    get yesButtonSelector () { return $('android=new UiSelector().resourceId("android:id/button1")'); }
    get noButtonSelector () { return $('android=new UiSelector().resourceId("android:id/button2")'); }
    get alertPageTextSelector () { return $(`~alert-page-text-acc-id`); };
    get alertPageGoBackButtonSelector () { return $(`~alert-page-go-back-acc-id`); };

    async clickAcceptDialog() {
        await this.yesButtonSelector.waitForDisplayed({ timeout: 30000 });
        await this.yesButtonSelector.click();

        await this.test();
    }

    async interactWithAlertDialog(moveToAlertPage) {
        if (moveToAlertPage == true) {
            await this.yesButtonSelector.waitForDisplayed({ timeout: 30000 });
            await this.yesButtonSelector.click();
        } else {
            await this.noButtonSelector.waitForDisplayed({ timeout: 30000 });
            await this.noButtonSelector.click();
        }
    }

    async getAlertText() {
        await this.alertPageTextSelector.waitForDisplayed({ timeout: 30000 });
        return await this.alertPageTextSelector.getText();
    }

    async goBackToMainPage() {
        await this.alertPageGoBackButtonSelector.waitForDisplayed({ timeout: 30000 });
        await this.alertPageGoBackButtonSelector.click();
    }
}

module.exports = new AlertPage();