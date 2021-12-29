# **Seven Wonders Science Calculator**

A quick and simple project designed to speed up the process of working out each players science points in the popular boardgame 7 Wonders.

You can see the deployed site [here](https://john-mcpherson.github.io/7-Wonders-Science-Calculator/).

![Preview](./assets/imgs/readme/preview.png)

## **Contents**
* [Features](#features)
    * [Total Score](#total-score) 
    * [Wild Cards](#wild-cards) 
* [Testing](#testing)
* [Deployment](#deployment)
* [Credits](#credits)

## **Features**
### **Toal Score**
* The application should display the total score in an easy to read format. And it will be automatically calculated whenever the user updates an input.  

### **Wild Cards**
* The application should work out the best option when using wild cards. 

### **Clear Button**
* The application has the option to clear all user input with one button press. That way users can quickly. and easily check multiple players scores. 

## **Testing**
* [Preformance](#preformance)
* [Validation](#validation)
* [Function Testing](#function-testing)

### **Preformance**

I ran the website through the lighthouse checker and it came back with the following score;
![CSS](./assets/imgs/readme/lighthouse.png)

### **Validation**

First I ran the website through the the w3 html checker and it came back with no issues;
![CSS](./assets/imgs/readme/w3-html-checker.png)

Then I ran it through the W3 CSS checker and that also came back with no issues; 
![CSS](./assets/imgs/readme/w3-css-checker.png)

And finally I ran it through the JSHint validatior and that also came back with no issues; 
![JSHint](./assets/imgs/readme/jshint-validator.png)

### **Function Testing**

As part of the testing I manually tested all inputs to ensure that the logic of the code was working as intended. I manually checked inputs to ensure the output matched what was expected. During my intial tests I discoverd an issue with the way the wild input was being calculated. This was fixed in commit [c3353e9](https://github.com/John-McPherson/7-Wonders-Science-Calculator/blob/1f9e59e7efd799d67f4d9464f7123ca672f5c780/assets/js/script.js). 

Once the bug had been resolved I reran my tests and everything worked as intended. 

## **Deployment**

The site is deployed via github pages. To deploy the site:

1. Go to the Github repository for the project.
2. Click on the settings menu at the top right-hand side of the page. 
3. Scroll down and select the pages tab towards the bottom of the menu. 
4. Select the source branch that you want to publish. 
5. Click save. This will generate a url for the site.  

# **Credits**

### **Content**

All code was written by John McPherson. 

The font for the project is [Antiquarian](https://fonts.adobe.com/fonts/antiquarian#fonts-section) from Adobe Fonts and it was licensed through my Adobe Creative Cloud Subscription. 

### **Acknowledgements** 

* My friend Ben Orton for helping test the project and finding a major bug. 
* [Code Institute](https://codeinstitute.net/) for giving me the skills through their tutorials to create this site. 
* [Free Code Camp](https://www.freecodecamp.org/) for introducing me to coding. 
* [JavaScript30]( https://javascript30.com/) for providing additional challenges to help me develop my JavaScript tools. 
* [Css-tricks.com](https://css-tricks.com/) and [W3Schools](https://www.w3schools.com/) for helping me whenever I got stuck. 






