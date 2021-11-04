/*global QUnit, opaTest*/

sap.ui.define([
	"walkthrough1/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/App"
], function (mockserver) {
	"use strict";

	QUnit.module("Navigation");

	opaTest("A verdad que mola? Dialogo Hola", function (Given, When, Then) {
		// initialize the mock server
		mockserver.init();

		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "walkthrough1"
			}
		});

		//Actions
		When.onTheAppPage.iPressTheSayHelloWithDialogButton();

		// Assertions
		Then.onTheAppPage.iShouldSeeTheHelloDialog();

		// Cleanup
		Then.iTeardownMyApp();
	});
});
