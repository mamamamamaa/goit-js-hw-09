!function(){var t={startBtn:document.querySelector("[data-start]"),stopBtn:document.querySelector("[data-stop]")},e=null;t.startBtn.addEventListener("click",(function(t){e=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.target.setAttribute("disabled","disabled")})),t.stopBtn.addEventListener("click",(function(){clearInterval(e),t.startBtn.removeAttribute("disabled")}))}();
//# sourceMappingURL=01-color-switcher.18f457ac.js.map