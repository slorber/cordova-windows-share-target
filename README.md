# cordova-windows-share-target

Shows how Edge can share a link to a Cordova app (UWP)

- Clone this repo
- Install latest cordova platform (4.5.0-dev worked for me)
- Load platform project Windows10 on VS
- Declare Share Target -> URI in Manifest (eventually setup a dedicated www/share.html page)
- Run the project 

Issues: works fine on desktop UWP. Also works fine in W10 phone emulator, but after sharing operation it seems emulator crashes

Note: it seems impossible to catch activation event of WinJS after the deviceready event of cordova is fired
