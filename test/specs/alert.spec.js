const HomePage = require('../pages/home.page.js');
const AlertPage = require('../pages/alert.page.js');

describe('End to End test', async () => {
    
    it(`The Alert screen should be visible`, async () => {
        console.log("test");
        
        await HomePage.clickAlertButton();
        await AlertPage.interactWithAlertDialog(true);
        await expect((await AlertPage.alertPageTextSelector)).toBeDisplayed();
        await AlertPage.goBackToMainPage();
    });

    it(`The Home screen should still be visible`, async () => {
        console.log('second test');
        await HomePage.clickAlertButton();
        await AlertPage.interactWithAlertDialog(false);
        await expect((await HomePage.alertButtonSelector)).toBeDisplayed();
    });

    it(`The Alert text should be correct`, async () => {
        console.log('third test');
        await HomePage.clickAlertButton();
        await AlertPage.interactWithAlertDialog(true);
        await expect((await AlertPage.alertPageTextSelector)).toHaveText('You are on the Alert page!')
    })

});
