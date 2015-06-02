# UTI

## DESCRIPTION
AmandaCare requires two front ends (patient and nurse) and UTI repository provides codes for the patient side of the application.

## SYSTEM REQUIREMENTS


## INSTALLATION

1. First step is to install Steroids.
>Follow the [instructions](https://academy.appgyver.com/installwizard/steps#/home) for getting and installing Supersonic.

2. The next step is to make a folder on your local machine by cloning.
>```bash
$git clone https://github.com/eecs394-spr15/UTI.git
>```
3. This application requires a back-end server to store user data. 
>You can create a [Parse account](https://www.parse.com/signup) for this back-end purpose.

  *NOTE: Make sure you never include your Parse master key in any binary. Put cloudcode/config/global.json into their GLOBAL gitignore settings and remove the global.json file from all your github repos.*

4. In case you wish to run the codes on a simulator, you can run the following command in the corresponding directory
`$ steroids connect`
*If Steroids asks for an update, you can run this command before connecting to Steroids*
`$ steroids update`
5. Finally you can run simulator on your computer or download **AppGyver Scanner** in the App Store on your mobile side.



## DEPLOYMENT

For the basic deployment steps for both Android and iOS,
>Follow the [Supersonic deployment instructions](http://docs.appgyver.com/tooling/build-service/build-settings/deploying-to-cloud/).

For iOS, you need to create an ad hoc build.
>Follow the instructions for [an ad hoc build](http://docs.appgyver.com/tooling/build-service/build-settings/building-a-debug-build/) This type of app can be installed on devices for testing but can't be placed on the Apple App Store. Distribution versions need approval from Apple for the App Store for enterprise-level distribution. Approval can take weeks.

**Pay Attention:To deploy to iOS, you must have an Apple developer license, and a Macintosh with the current version of MacOS and Xcode. Xcode is a free download from Apple, but developer licenses cost about $100 per year.**

