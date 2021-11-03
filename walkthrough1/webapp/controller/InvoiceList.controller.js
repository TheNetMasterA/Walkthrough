sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("walkthrough1.controller.InvoiceList", {

		onInit : function () {
			var oViewModel = new JSONModel({
				currency: "MXN"
			});
			this.getView().setModel(oViewModel, "view");
		}

	});
});