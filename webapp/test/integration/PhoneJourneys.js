/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"odata/EmployeeODATA/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"odata/EmployeeODATA/test/integration/pages/App",
	"odata/EmployeeODATA/test/integration/pages/Browser",
	"odata/EmployeeODATA/test/integration/pages/Master",
	"odata/EmployeeODATA/test/integration/pages/Detail",
	"odata/EmployeeODATA/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "odata.EmployeeODATA.view."
	});

	sap.ui.require([
		"odata/EmployeeODATA/test/integration/NavigationJourneyPhone",
		"odata/EmployeeODATA/test/integration/NotFoundJourneyPhone",
		"odata/EmployeeODATA/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});