# Notes PWA

Anular + Dotnetcore + PWA Demo

## Purpose

Demonstrating How Angular 7 can consume .Net Core WebAPI . This application conatains logic ans appropiate settings to be used as Progressive Web App.

This application uses RxJS Subjects for transfering asynchronous data between components.

The following files are in charge of the behavior of PWA
...
Manifest.json is located in ClientApp/src folder
ngsw-config.json (ClientApp folder)
...

In order to be able to run and test this app, it should be deployed in production mode. by running ...npm run build... compiled Angular code will be pushed to wwwroot folder and you don't have to worry about CORS setup.

## NGXS

State management moved to [NGXS](https://github.com/ngxs/store) library. NGXS is built for Angular rather than Redux that originally was written for React.

### Prerequisites
All the installations instructructions works on all supported platforms as server and it can run on desktop, android, ios as a native app.

The following must be installed (preferably in order) before getting started.

```
Mongodb (refer to  https://www.mongodb.com/download-center/community).
dotnetcore SDK (https://www.microsoft.com/net/download).
your favorite IDE (mine is VS code : https://code.visualstudio.com).

```
There are other packages that automatically will be installed by running **npm install**.

## Getting Started

After installing prerequisites Clone the repo on your machine and run following commands:

```
1. cd notes-pwa
2. npm install
3. dotnet restore
4. npm run build 
5. dotnet run

```

This will launch Krestel and will connects to default mongodb port (27017) and Krestel on port 5001 and SSL on port 5001. browse application in Chrome, Edge, Firefox or Safari on either desktop or mobile simulator. To test service worker take application offline either in chrome developer console (Application tab) or press Ctrl+C if you're running Krestel in terminal.

In case you want to change Angular app, go ahead and perform your modifications. By running command **npm run build** production (releases) version of angular app will be pushed to wwwroot folder. You need to restart krestel to reflect the changes or you can run **dotnet watch run**. in this case dotnet core automaticlly will reload the changes to targer website.


