module.exports = require('angular')
  .module('ngSidebarModule', [])
  .directive('ngSidebar', ngSidebar)
  .name

function ngSidebar () {
  return {
    restrict: 'E',
    scope: false,
    link: link
  }
}

function link (scope, element, attrs) {
  var sidebar = element[0]
  var sidebarContainer = document.querySelector('.js-side-nav-container')

  var startX = 0
  var currentX = 0
  var touchingSideNav = false

  element.on('touchstart', function () {
    if (!sidebar.classList.contains('side-nav--visible'))
      return

    startX = event.touches[0].pageX
    currentX = startX

    touchingSideNav = true
    requestAnimationFrame(update)
  })

  element.on('touchend', function () {
    if (!touchingSideNav)
      return

    touchingSideNav = false

    var translateX = Math.min(0, currentX - startX)
    sidebarContainer.style.transform = ''

    if (translateX < 0) {
      hideSideNav()
    }
  })

  element.on('touchmove', function (event) {
    if (!touchingSideNav)
      return

    if (event.originalEvent && event.originalEvent.touches) {
      currentX = event.originalEvent.touches[0].pageX
    } else {
      currentX = event.touches[0].pageX
    }

    var translateX = Math.min(0, currentX - startX)

    if (translateX < 0) {
      event.preventDefault()
    }
  })

  element.on('transitionend', function () {
    sidebarContainer.classList.remove('side-nav--animatable')
    sidebar.removeEventListener('transitionend', onTransitionEnd)
  })

  function showSideNav () {
    sidebar.classList.add('side-nav--animatable')
    sidebar.classList.add('side-nav--visible')
    sidebar.addEventListener('transitionend', onTransitionEnd)
  }

  function hideSideNav () {
    sidebar.classList.add('side-nav--animatable')
    sidebar.classList.remove('side-nav--visible')
    sidebar.removeEventListener('transitionend', onTransitionEnd)
  }

  element.on('click', hideSideNav)

  function onTransitionEnd () {
    sidebar.classList.remove('side-nav--animatable')
    sidebar.removeEventListener('transitionend', onTransitionEnd)
  }

  function update () {
    if (!touchingSideNav)
      return

    requestAnimationFrame(update)

    var translateX = Math.min(0, currentX - startX)
    sidebarContainer.style.transform = 'translateX(' + translateX + 'px)'
  }

  scope.$on('openSidebar', showSideNav)
}
