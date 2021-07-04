# Getting Started with React 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This can be a good first project where you will learn the following:
1. Setup for creating React app
2. Creating a React app
3. Making an API Call using React.
4. Setup React Developer Tools

If you already have IDE and node installed on your system Skip to the section on Creating a React App
1) Setup for creating a React App
i. Setup an IDE: I used Visual Studio Code for implementing the following project.
Download VSCode from this link: https://code.visualstudio.com/download

ii. Setup Node: I had node previously installed on my system, however for this project, I needed a more recent version of node, so I used nvm to switch between multiple node versions.

How to setup nvm?
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
nvm --version

How to setup Node using NVM?
Install the specific version that you want of node: Example:
nvm install 12
To switch between node version use:nvm use 12
To check Node version use: node -v
Check npx version: npx -v

2) Creating a React App
Creating a React App is simply now that you have the setup.
Use npx to create a react app. This will create a sample app with all the required things in a folder named my-app. After the folder gets created, change directory to the folder and run the app.
npx create-react-app my-app
cd mp-app
npm start
Something like this will come up on port 3000:

3) Make an API Call using React
Congratulations your basic React app is up and running. Now let us try to edit App.js and learn to make an API call using React.
Here I have used apublic api to make an API call, so that we don’t have to grow through the hassle of creating api-key.

API Used:
https://api.coindesk.com/v1/bpi/currentprice.json

API Response:
{
 “time”:{
 “updated”:”Jul 4, 2021 17:55:00 UTC”,
 “updatedISO”:”2021–07–04T17:55:00+00:00",
 “updateduk”:”Jul 4, 2021 at 18:55 BST”
 },
 “disclaimer”:”This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org”,
 “chartName”:”Bitcoin”,
 “bpi”:{
 “USD”:{
 “code”:”USD”,
 “symbol”:”&#36;”,
 “rate”:”35,583.4383",
 “description”:”United States Dollar”,
 “rate_float”:35583.4383
 },
 “GBP”:{
 “code”:”GBP”,
 “symbol”:”&pound;”,
 “rate”:”25,743.1231",
 “description”:”British Pound Sterling”,
 “rate_float”:25743.1231
 },
 “EUR”:{
 “code”:”EUR”,
 “symbol”:”&euro;”,
 “rate”:”29,990.2556",
 “description”:”Euro”,
 “rate_float”:29990.2556
 }
 }
}


Code to fetch API Response:
componentDidMount() { 
document.title = “Bitcoin Prices”; fetch(‘https://api.coindesk.com/v1/bpi/currentprice.json') 
      .then(results => { return results.json(); })
      .then(data => {
            const bpi = get(data, ‘bpi’, {}); 
            const time = get(data, ‘time’, {}) 
       
       this.setState({ bpi: bpi, 
                       time: time }); 
     });
}

4) Setting up React Developer Tools
To see the react components we can use the extension React Developer Tools which makes debugging easy for React. Search for the extension and add it to your browser.
Once you have add it go to Inspect and switch to the Component tab and you will be able to see the resources created in your app, something like this.

Congratulations, You have learnt how to successfully create a react app, make API calls and debug using React.
