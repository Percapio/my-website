// Null Check
export var checkNull = function (object) {
    var values = Object.entries(object);
    for (var i = 0; i < values.length; i++) {
        switch (values[i][0]) {
            case 'dateCreated':
                continue;
            case 'dateUpdated':
                continue;
            default:
                if (values[i][1] == 'null' || typeof values[i][1] === 'undefined' || values[i][1].length === 0) {
                    return values[i][0] + " cannot be empty";
                }
        }
    }
    return '';
};
//# sourceMappingURL=interface_tests.js.map