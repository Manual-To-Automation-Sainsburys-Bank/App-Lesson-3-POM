<p float="left">
  <img src="https://d98b8t1nnulk5.cloudfront.net/production/images/layout/logo-header.png?1469004780" width="400" height="100" title="BS_Logo">
  <img src="https://cdn.cookielaw.org/logos/af33d682-b608-4a02-a87c-726c5880e254/44ba34d9-63c1-451e-a22d-ba28af064ea1/19ef061a-823e-4179-ae5c-43b2c60fe360/New_SB_Logo_r240g108b0.png" width="400" height="100" title="Percy.IO2">
</p>

# Sainsburys Bank - App - Lesson 3 - Page Object Model

This repository shows an implementation of the Page Object Model.

## How To Run

Follow the below steps to run the script on your machine:

Clone this repository:

```sh
git clone https://github.com/Manual-To-Automation-Sainsburys-Bank/App-Lesson-3-POM.git
```

Move into the directory:

```sh
cd App-Lesson-3-POM
```

You will need to upload the Apps in order to test on BrowserStack. See details on how to do this [here](https://www.browserstack.com/docs/app-automate/appium/upload-app-from-filesystem) and [here](https://www.browserstack.com/docs/app-automate/appium/upload-app-define-custom-id) for how to set a custom ID for your app.

Once you have uploaded the App(s), use the hashed ID or the custom ID in your BrowserStack config file like below:

```js
services: [
    [ 'browserstack',
      {
        app: "<app id or custom id>",
      },
    ],
  ],
```


Type the following commands:

To run a single test on a single browser:

```sh
npm run bstack-single
```

To run the tests in parallel on a single browser:

```sh
npm run bstack-parallel
```

To run a single test on multiple browsers in parallel:

```sh
npm run bstack-parallel-browsers
```

There are obviously many ways to grab this repository and this is just one way. Some of the others are:

 - GitHub Desktop application
 - Download the Zip file of the repository
 - Clone it through Visual Studio Code