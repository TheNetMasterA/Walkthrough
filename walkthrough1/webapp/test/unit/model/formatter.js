/*global QUnit*/

sap.ui.define([
	"walkthrough1/model/formatter",
	"sap/ui/model/resource/ResourceModel"
], function (formatter, ResourceModel) {
	"use strict";

	QUnit.module("Formatting functions", {
		beforeEach: function () {
			this._oResourceModel = new ResourceModel({
				bundleUrl: sap.ui.require.toUrl("walkthrough1") + "/i18n/i18n.properties"
			});
		},
		afterEach: function () {
			this._oResourceModel.destroy();
		}
	});


	QUnit.test("Should return the translated texts", function (assert) {

		// Arrange
		// this.stub() does not support chaining and always returns the right data
		// even if a wrong or empty parameter is passed.
		var oModel = this.stub();
		oModel.withArgs("i18n").returns(this._oResourceModel);
		var oViewStub = {
			getModel: oModel
		};
		var oControllerStub = {
			getView: this.stub().returns(oViewStub)
		};

		// System under test
		var fnIsolatedFormatter = formatter.statusText.bind(oControllerStub);

		// Assert
		assert.strictEqual(fnIsolatedFormatter("A"), "Nuevo", "The long text for status A is correct");

		assert.strictEqual(fnIsolatedFormatter("B"), "En Progreso", "The long text for status B is correct");

		assert.strictEqual(fnIsolatedFormatter("C"), "Listo", "The long text for status C is correct");

		assert.strictEqual(fnIsolatedFormatter("Foo"), "Foo", "The long text for status Foo is correct");
	});

});