### angular-sidebar

[![NPM][angular-sidebar-icon]][angular-sidebar-url]

[Live Demo!](http://jackhanford.com/angular-sidebar)

#### Usage
```js
// app.js
angular
  .module('app', [
    require('angular-sidebar')
  ])
```  

```html
// index.html
<ng-sidebar class="js-side-nav side-nav" no-drag>
  <nav class="js-side-nav-container side-nav__container">
    <button class="js-menu-hide side-nav__hide">close</button>
    <header class="side-nav__header">
      Side Nav
    </header>
    <ul class="side-nav__content">
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
    </ul>
  </nav>
</ng-sidebar>
```  

#### API  
angular-sidebar takes in two events, one to open and the other to close

By adding the `no-drag` attribute, you can disable the touch handling

```js
$scope.$broadcast('openSidebar')
```

```js
$scope.$broadcast('hideSidebar')
```

[angular-sidebar-icon]: https://nodei.co/npm/angular-sidebar.png?downloads=true
[angular-sidebar-url]: https://npmjs.org/package/angular-sidebar
