# Chromestrap – Chrome App Bootstrap
 
A quick start template for Chrome App development.

Featuring

👻 Gulp Commands   

👾 Angular Material   

🐼 Google Login 


## Development Requirements

|Dependency|OS X Installation|
|:--|:--|
|node.js|`brew install nodejs`|
|gulp|`npm install -g gulp`|
|bower|`npm install -g bower`|

### Useful Tools:

* [Chrome Apps & Extensions Developer Tool](https://chrome.google.com/webstore/detail/chrome-apps-extensions-de/ohmmkhmmmpcnpikjeljgnaoabkaalbgc?utm_source=chrome-ntp-launcher)
* [Chrome Dev Editor (developer preview)](https://chrome.google.com/webstore/detail/chrome-dev-editor-develop/pnoffddplpippgcfjdhbmhkofpnaalpg?utm_source=chrome-ntp-launcher)

## Development

### Installation

```
git clone https://github.com/myurasov/chromestrap.git
cd chromestrap
npm install
bower install
```

### Launching as Chrome App

`gulp launch`

### Live Reload

`gulp serve`

## Environments

* **dev-app** – app is executed as a Chrome App, Chrome APIs are available.
* **dev-browser** – app is executed as a web app, Chrome APIs are mocked/not available.

## Using Google Login

In order to allow users to authenticate with their Google Account app should be published to Chrome Web Store and registered with the API console. The [app/manifest.json](app/manifest.json) file should be populated with the appropriate **key** and **oauth2.client_id** values. 

See [https://developer.chrome.com/apps/app_identity](https://developer.chrome.com/apps/app_identity) for more info.


## Available Gulp Tasks

|Command|Desc|
|:--|:--|
|`gulp cleanup`|Remove build files|
|`gulp jshint`|Run jshint|
|`gulp launch`|Launch as a Chrome App|
|`gulp serve` (default)|Launch as a web page with live reload|
|`gulp build:dev-app`|Build for the __dev-app__ environment|
|`gulp build:dev-browser`|Build for the __dev-browser__ environment|
|`gulp set-env:dev-app`|Set environment to __dev-app__|
|`gulp set-env:dev-app`|Set environment to __dev-browser__|
|`gulp update-build`|Update build number \* |
|`gulp list`|List available commands|

\* Build number is stored in /build and copied to relevant files to be accessible in stylesheets, js, etc.


## Reference

* [Chrome Apps Basics](https://developer.chrome.com/apps/about_apps)
* [Angular Material](https://material.angularjs.org/)
* [Material Design Guidelines](http://www.google.com/design/spec/material-design/introduction.html)

## Author

Mikhail Yurasov <<me@yurasov.me>>.

Web & Mobile Solutions Architect, Technical Lead, Hacker.

* [Linkedin](https://www.linkedin.com/profile/view?id=173007295)
* [Github](https://github.com/myurasov)

## License

[WTFPL](http://www.wtfpl.net/)