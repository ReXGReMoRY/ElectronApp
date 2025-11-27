/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/process-model
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';

console.log(
  '👋 This message is being logged by "renderer.js", included via webpack',
);
const usuario_real = "RosaMaria";
const password_real = "axioma";
const usuario_real_input = document.getElementById("Username_sesion");
const password_real_input = document.getElementById("Password_sesion");
//
let iniciado_sesion_label = document.getElementById("iniciado_sesion");
let iniciado_sesion = false;
window.addEventListener("DOMContentLoaded", () => {

  
  document.addEventListener("keydown", (e) =>{
    if (e.key === "Enter" && (document.activeElement === usuario_real_input || document.activeElement === password_real_input))
    {
      if (usuario_real_input.value === usuario_real && password_real_input.value === password_real)
      {
        console.log("Sesion iniciada en: " + usuario_real);
        iniciado_sesion_label.textContent = "axioma";
        window.location.href = "./mainChenilWindow.html";
      }else{
        console.log("Error en inicio de sesion");
      }
    }
  });

});


