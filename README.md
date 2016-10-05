# cordova-windows-share-target

## Create a clipper for a Universal Windows Platform app (UWP) developped with Cordova

This repo is a code sample that permits to achieve an url clipping workflow, on a Cordova app, based on the Cordova-windows platform, targetting universal Windows 10 devices (phones/devices)

The workflow:
- Open Edge browser on any page
- Click Share button and select your app
- Your app opens/resumes and you receive the Edge page URI in a callback

## Run this repo

- Clone this repo
- Install latest cordova platform (>= 4.5.0)
- Load platform project Windows10 on Visual Studio 2015
- Open app manifest
- Declare Share Target with dataFormat=URI and startupPage=www/windowsShareTarget.html
- Declare Protocol with name=stample
- Run the project 

## How it works

- On Edge share click, the page `www/windowsShareTarget.html` is launched in a view (right flyout for desktop) 
- That page contains JS handler that receives the share operation of type URI
- We want to open/resume our main app, not work in the share view
- We call `Windows.System.Launcher.launchUriAsync` with a `stample:?shareTargetURI=youtube.com` URI
- Our app stars or resume. We are able to retrieve the value of the `shareTargetURI` parameter of the app protocol-based launch


Note: it seems impossible to catch WinJS activation event after the deviceready event of cordova is fired
Note: had problems with Windows 10 emulators crashing. I suspect calling shareOperation, or opening my app,fixed the problem.
Note: useful issue [CB-11924](https://issues.apache.org/jira/browse/CB-11924)
