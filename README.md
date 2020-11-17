
# PiggyBank,the Budget Tracker
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 

## Table of contents

1. [Description](#description)

2. [Install Guide](#install)

3. [Usage](#usage)

4. [Credits](#credits)

5. [license](#license)

6. [Screenshots](#screenshots)

7. [URL](#urls)
        
<div id="description"/>
        
## Description
```
A NodeJS, Progressive Web Application (PWA), to track Budget and to allow offline access and functionality to the users.
```
        
<div id="install"/>
        
## Installation Instruction
```
NodeJS for server side run time environment, express for handling api and html routes, and mongoose which is a ODM(Object Document Mapper) for MongoDB and Node JS. Also use Materialize CSS for color.

Other NodeJS modules like, Compression for compression, Morgan for logging are also used in this App.
Data is saved in noSQL DB, MongoDB.
Heroku and Mongo Atlas for the Application deployment..
```
        
<div id="usage"/>
        
## Usage
```
The app is a single page Web Application. It is a PWA (Progressive Web App) that can be installed as a stand alone app. Uses ServiceWorkers to handle and keep track of the offline transactions in indexDB and update into the DB when the App comes back online. Both data and static routes are cached to help to have a seamless offline experience. 

Offline functionality:
1) Enter deposits offline
2) Enter expenses offline

When brought back online:
1) Offline entries gets added to tracker.


A perfect use case, is a user who is a avid traveller . With this App, they will be able to track their withdrawals and deposits with or without a data/internet connections. This will help them to keep track of their account balance when they are traveling.
```
        
<div id="credits"/>
        
## Credits
```
* Keiren Anthony - Helped with identifying the multiple mongoose connections issue with the App version hosted on Heroku.
```
        
<div id="license"/>
        
## License
```
MIT
```
        
<div id="screenshots"/>
        
## Screenshots

1) Application on Load:
![Screen #1](/public/Assets/Screenshots/Screenshot_on_Load.PNG)
2) Transaction with network Offline:
![Screen #2](/public/Assets/Screenshots/Screenshot_Offline_Transaction_pic1.PNG)
3) Offline Transaction saved in indexedDB:
![Screen #3](/public/Assets/Screenshots/Screenshot_Offline_Transaction_pic2.PNG)
4) MongoDB Collection with the offline transaction after the App is Online:
![Screen #4](/public/Assets/Screenshots/Screenshot_MongoDB_BudgetDB.PNG)

        
<div id="urls"/>
        
## URL:

GitHub Repository: https://github.com/meenaambalam/meenaambalam.github.io

Application URL: https://piggybank-budget-tracker.herokuapp.com/