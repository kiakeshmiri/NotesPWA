#Notes PWA

AnularJS + MongoDB + Dotnetcore + Material + PWA Demo

===

## Purpose

Demonstrating How AngularJS 7 can consume .Net Core WebAPI . This application conatains logic ans appropiate settings to be used as Progressive Web App.

This application uses RxJS Subjects for transfering asynchronous data between components.

The following files are in charge of the behavior of PWA
...
Manifest.json is located in ClientApp/src folder
ngsw-config.json (ClientApp folder)
...

In order to be able to run and test this app, it should be deployed in production mode. by running ...npm run build... compiled Angular code will be pushed to wwwroot folder and you don't have to worry about CORS setup.

### Prerequisites
All the installations instructructions works on all supported platforms as server and it can run on desktop, android, ios as a native app.

The following must be installed (preferably in order) before getting started.

```
Mongodb (refer to  https://www.mongodb.com/download-center/community).
dotnetcore SDK (https://www.microsoft.com/net/download).
your favorite IDE (mine is VS code : https://code.visualstudio.com).

```
There are other packages that automatically will be installed by running npm install.

## Getting Started

After installing prerequisites Clone the repo on your machine and run following commands:

```
cd notes-pwa
npm install
dotnet restore
dotnet run

```

This will launch Krestel and will connects to default mongodb port (27017). this port can be configurable, experienced users can tweak the code or wait for next version. (I'll move all configurations to a unified config file).


```
cd dotnetcore
dotnet restore
dotnet watch run

```
