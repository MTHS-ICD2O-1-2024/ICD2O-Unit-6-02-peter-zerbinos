// Copyright (c) 2025 Peter Zerbinos All rights reserved
//
// Created by: Peter Zerbinos
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICD2O-Unit-6-02-bain-liao-1/sw.js", {
    scope: "/ICD2O-Unit-6-02-bain-liao-1/",
  })
}

let timesClicked = sessionStorage.timesClicked ? Number(sessionStorage.timesClicked) : 0

/**
 * This function adds to the click counter on the cookie.
 */
function clickCookie() {
  timesClicked++
  sessionStorage.timesClicked = timesClicked
  // Display result
  document.getElementById('result').innerHTML = "Cookie Count: " + timesClicked
}

// Update the sessionStorage
if (sessionStorage.timesClicked) {
  sessionStorage.timesClicked = Number(sessionStorage.timesClicked) + 1
} else {
  sessionStorage.timesClicked = 0
}
