sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
], function (Opa5, Press) {
	"use strict";

	var sViewName = "walkthrough1.view.HelloPanel";

	Opa5.createPageObjects({
		onTheAppPage: {
			actions: {
				iPressTheSayHelloWithDialogButton: function () {
					return this.waitFor({
						id: "helloDialogButton",
						viewName: sViewName,
						actions: new Press(),
						errorMessage: "No encontré el botón 'Di hola' en la vista HelloPanel"
					});
				}
			},

			assertions: {
				iShouldSeeTheHelloDialog: function () {
					return this.waitFor({
						controlType: "sap.m.Dialog",
						success: function () {
							// we set the view busy, so we need to query the parent of the app
							Opa5.assert.ok(true, "El Dialogo esta abierto");
						},
						errorMessage: "No encontre el controlador de Dialogo"
					});
				}
			}
		}
	});
});