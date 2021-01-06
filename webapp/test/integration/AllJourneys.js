/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 EMPLOYEESet in the list

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
		"odata/EmployeeODATA/test/integration/MasterJourney",
		"odata/EmployeeODATA/test/integration/NavigationJourney",
		"odata/EmployeeODATA/test/integration/NotFoundJourney",
		"odata/EmployeeODATA/test/integration/BusyJourney",
		"odata/EmployeeODATA/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});