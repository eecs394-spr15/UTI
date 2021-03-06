# UTI

## DESCRIPTION
AmandaCare is a mobile application that helps those who are suspicious of having a UTI to conveniently submit their symptoms for a quick diagnosis. AmandaCare requires two front ends (patient and nurse) and the UTI repository provides the code for the patient side of the application. The key components of the patient front end include symptom submission, viewing current and past cases, recieving electronic prescriptions via email and filling out basic personal/medical information.
## STORYBOARD
![Image of Yaktocat](http://i.imgur.com/qhkuQzg.png?1)

## CURRENT FEATURES
* Register account and login with corresponding account.
* After personal profile is filled, a UTI case could be report.
* All cases reported for a patient are listed in the app.
* Cases show whether it is aproved, pending, or denied.

## SYSTEM REQUIREMENTS
* iOS 8.0.0+
* [AngularJS 1.3+](https://github.com/angular/angular.js)
* [Parse.js 1.4.2+](https://parse.com/downloads/javascript/parse-1.4.2.min.js)
* [Node.js 0.12.0+](https://nodejs.org/)
* [AppGyver Steroids](http://www.appgyver.com/steroids)

## INSTALLATION

1. First step is to install Steroids.
>Follow the [instructions](https://academy.appgyver.com/installwizard/steps#/home) for getting and installing Supersonic.

2. The next step is to make a folder on your local machine by cloning.
>```bash
$git clone https://github.com/eecs394-spr15/UTI.git
>```
3. This application requires a back-end server to store user data. 
  * You can create a [Parse account](https://www.parse.com/signup) for this back-end purpose.
  * Onthe parse cloud, you need to create two object classes:
    * `User class, which is used for storing user information.`
    * `Case class, which is used for storing all reported cases information.`

  *NOTE: Make sure you never include your Parse master key in any binary. Put cloudcode/config/global.json into their GLOBAL gitignore settings and remove the global.json file from all your github repos.*

4. In case you wish to run the codes on a simulator, you can run the following command in the corresponding directory
`$ steroids connect`
*If Steroids asks for an update, you can run this command before connecting to Steroids*
`$ steroids update`
5. Finally you can run simulator on your computer or download **AppGyver Scanner** in the App Store on your mobile side.


## DEPLOYMENT

For the basic deployment steps,
>Follow the [Supersonic deployment instructions](http://docs.appgyver.com/tooling/build-service/build-settings/deploying-to-cloud/).

You also need to create an ad hoc build.
>Follow the instructions for [an ad hoc build](http://docs.appgyver.com/tooling/build-service/build-settings/building-a-debug-build/) This type of app can be installed on devices for testing but can't be placed on the Apple App Store. Distribution versions need approval from Apple for the App Store for enterprise-level distribution. Approval can take weeks.

**Pay Attention:To deploy to iOS, you must have an Apple developer license, and a Macintosh with the current version of MacOS and Xcode. Xcode is a free download from Apple, but developer licenses cost about $100 per year.**

## ISSUES & LIMITATIONS
* This application works on iOS8
* Lower version of iOS system are not tested, it might work.
* Android scanner are not tested, it might work.

## FEATURES TO BE ADDED
* Credit card needs actual security measures
* Connection with pharmacy, actual integration
* Nurse individual login
* Enter zip code for nearby pharmacy
* Patient survey before receiving result
