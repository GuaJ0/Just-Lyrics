// ==UserScript==
// @name         Just Lyrics - Resume Autoscroll Hotkey
// @namespace    https://github.com/GuaJ0
// @version      1.0
// @description  Press a key to snap Better Lyrics back to the current line after scrolling
// @author       GuaJ0
// @match        https://music.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  // Change this to any key you like, e.g. "c", ".", "Enter"
  const HOTKEY = "a";

  document.addEventListener("keydown", (e) => {
    if (e.key.toLowerCase() !== HOTKEY.toLowerCase()) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;

    // Don't fire while typing in the search box or any other text field
    const el = document.activeElement;
    if (el && (el.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName))) return;

    // Better Lyrics' own "Resume autoscroll" button, which appears after you scroll
    const button = document.getElementById("autoscroll-resume-button");
    if (!button || button.getAttribute("autoscroll-hidden") === "true") return;

    e.preventDefault();
    e.stopPropagation();
    button.click();
  }, true);
})();
