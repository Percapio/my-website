// Error checkers :: modulize it later
export const addItemCheck = (check, msg) => {
    if (check.length > 0) {
        msg = `${check}`;
    }
};
export const findAllCheck = (check, msg) => {
    if (check.length === 0) {
        msg = 'Something went wrong in fetching the lists of blogs';
        return false;
    }
    return true;
};
//# sourceMappingURL=errorhandlers.js.map