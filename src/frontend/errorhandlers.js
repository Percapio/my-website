// Error checkers :: modulize it later
export var addItemCheck = function (check, msg) {
    if (check.length > 0) {
        msg = "" + check;
    }
};
export var findAllCheck = function (check, msg) {
    if (check.length === 0) {
        msg = 'Something went wrong in fetching the lists of blogs';
        return false;
    }
    return true;
};
//# sourceMappingURL=errorhandlers.js.map