sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"sap/learning/user10/test/integration/pages/EmployeeDetailsList",
	"sap/learning/user10/test/integration/pages/EmployeeDetailsObjectPage"
], function (JourneyRunner, EmployeeDetailsList, EmployeeDetailsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('sap/learning/user10') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeeDetailsList: EmployeeDetailsList,
			onTheEmployeeDetailsObjectPage: EmployeeDetailsObjectPage
        },
        async: true
    });

    return runner;
});

