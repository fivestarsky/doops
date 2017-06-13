## Doops - DevOps Dashboard Template With AngularJS 4 And Material Design

Doops is a DevOps dashboard template developed with AngularJS 4 and Material Design. This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.0.

### 1. Components

#### 1.1 Page Loading  - Pace (http://github.hubspot.com/pace)

The [Pace](http://github.hubspot.com/pace) is a automatic page load progress bar included theme css.

> Pace will automatically monitor your ajax requests, event loop lag, document ready state, and elements on your page to decide the progress. On ajax navigation it will begin again!

##### 1.1.1 Install Pace

Download the Pace from [Page](http://github.hubspot.com/pace), unzip and place in the `src/asswets/vendor`.

##### 1.1.2 Import Library And CSS Themes

Import the library in the `index.html`'s _`HEAD`_.

```html
<script src="assets/vendor/pace-1.0.2/pace.min.js"></script>
```

Import the CSS theme in the `index.html`'s _`HEAD`_.

```html
<link href="assets/vendor/pace-1.0.2/themes/blue/pace-theme-flash.css" rel="stylesheet" />
```

##### 1.1.3 Customize the Pace loader

You could change the progress bar's color through change the `background` property.

```css
.pace .pace-progress {
  background: black;
}
```

##### 1.1.4 Configurate the Pace.

```javascript
window.paceOptions = {
  document: true,
  eventLag: true,
  restartOnPushState: true,
  restartOnRequestAfter: true,
  ajax: {
    trackMethods: [ 'POST','GET' ]
  }
};
```

##### 1.1.5 Other Resources

* [pace.js Tutorial and Example for Dummies](https://www.youtube.com/watch?v=QIvFUjsXlJI)

### 2. Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### 3. Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### 4. Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### 5. Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### 6. Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### 7. Further help

#### 7.1 Contacts

* _**[email]**_ : genedna AT outlook.com
* _**[Telegram]**_ : @genedna
