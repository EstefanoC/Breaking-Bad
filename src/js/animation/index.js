// Parallax
import lax from 'lax.js'

// Component
import openingFirst from '@js/animation/opening-first.js'
import { h1, h2, card } from '@js/animation/opening-second.js'
import { cursorX, cursorY } from '@js/animation/mouse-position.js'


window.onload = function () {
  lax.init()

  // Add a driver that we use to control our animations
  lax.addDriver('scrollY', function () {
    return window.scrollY
  })

  // Setup mouse move listener
  document.addEventListener('mousemove', function (e) {
    lax.__cursorX = e.clientX
    lax.__cursorY = e.clientY
  }, false)

  // Add lax driver for cursorX
  lax.addDriver('cursorX', function () {
    return lax.__cursorX || 0
  })

  // Add lax driver for cursorY
  lax.addDriver('cursorY', function () {
    return lax.__cursorY || 0
  })

  // Add lax driver for cursorXY
  lax.addDriver('cursorDistanceFromCenter', function () {
    var pageHeight = document.body.scrollHeight
    var pageWidth = document.body.scrollWidth

    var pageCenterX = pageWidth / 2
    var pageCenterY = pageHeight / 2

    var absDistanceFromCenterY = Math.abs((lax.__cursorY || 0) - pageCenterY) / pageCenterY
    var absDistanceFromCenterX = Math.abs((lax.__cursorX || 0) - pageCenterX) / pageCenterX

    return absDistanceFromCenterX + absDistanceFromCenterY
  })

  // first content opening
  lax.addElements('.opening-first', {
    scrollY: openingFirst
  })

  // Second content opening
  lax.addElements('.opening-second h1', {
    scrollY: h1
  })

  lax.addElements('.opening-second h2', {
    scrollY: h2
  })

  lax.addElements('.opening-second #card', {
    scrollY: card
  })

  if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    lax.addElements('.opening-second .card, .characters-left, .characters-right', {
      'cursorX': cursorX,
      'cursorY': cursorY,
      'cursorDistanceFromCenter': {}
    })
}
}