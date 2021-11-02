sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("walkthrough.controller.App", {
       onShowHello : function () {
          MessageToast.show("¡Hola Mundo!");
       }
    });
 });