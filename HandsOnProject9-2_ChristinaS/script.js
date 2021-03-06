/*    JavaScript 6th Edition
      Chapter 9
      Hands-on Project 9-2

      Author: Christina Sereday
      Date:   03/24/2021

      Filename: script.js

*/

"use strict";
function processCookie() {
      document.cookie = "username=" + document.getElementById("usernameinput").value;
}

function populateInfo() {
      if (document.cookie);
      var uname = document.cookie;
      uname = uname.substring(uname.lastIndexOf("=") +1);
      document.getElementById("usernameinput").value  = uname;
      
}

function handleSubmit(evt) {
      if (evt.preventDefault) {
            evt.preventDefault();
      }
      else {
            evt.returnValue = false;
      }

      processCookie();
      document.getElementsByTagName("form")[0].submit();
}

function createEventListener() {
      var loginForm = document.getElementsByTagName("form")[0];

      if (loginForm.addEventListener) {
            loginForm.addEventListener("submit", handleSubmit, false);
      }
      else if (loginForm.attachEvent) {
            loginForm.attachEven("onsubmit", handleSubmit);
      }
}

function setUpPage() {
      populateInfo();
      createEventListener();
}

if (window.addEventListener) {
      window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent) {
      window.attachEvent("onload", setUpPage);
}