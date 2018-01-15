import db from '../database/database';
// Export Firebase Model modules
export var makeModel = function (model, data) {
    var hasError = checkNull(data);
    if (hasError.length > 0) {
        return hasError;
    }
    db.ref().child(model).push(data);
    return '';
};
export var updateModel = function (model, id, data) {
    var hasError = checkNull(data);
    if (hasError.length > 0) {
        return hasError;
    }
    db.ref().child(model + "/" + id).update(data);
    return '';
};
export var findAllItems = function (model, updateList) {
    db.ref().child(model).once('value')
        .then(function (payload) { return updateList(Object.entries(payload.val())); })
        .catch(function (error) { return ['all', { description: error }]; });
};
export var fetchItem = function (model, id, grabItem) {
    db.ref().child(model + "/" + id).once('value')
        .then(function (payload) { return grabItem(Object.entries(payload.val())); })
        .catch(function (error) { return [id, { descripion: error }]; });
};
export var deleteItem = function (model, id) {
    db.ref().child(model + "/" + id).remove();
};
// Null Check
var checkNull = function (object) {
    var values = Object.entries(object);
    for (var i = 0; i < values.length; i++) {
        switch (values[i][0]) {
            case 'dateCreated':
                continue;
            case 'dateUpdated':
                continue;
            default:
                if (values[i][1] == 'null' ||
                    typeof values[i][1] === 'undefined' ||
                    values[i][1].length === 0) {
                    return values[i][0] + " cannot be empty";
                }
        }
    }
    return '';
};
//# sourceMappingURL=crud_functions.js.map