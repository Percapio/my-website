import db from '../database/database';
// Export Firebase Model modules
export const makeModel = (model, data) => {
    const hasError = checkNull(data);
    if (hasError.length > 0) {
        return hasError;
    }
    db.ref().child(model).push(data);
    return '';
};
export const updateModel = (model, id, data) => {
    const hasError = checkNull(data);
    if (hasError.length > 0) {
        return hasError;
    }
    db.ref().child(`${model}/${id}`).update({ data: data });
    return '';
};
export const findAllItems = (model, updateList) => {
    db.ref().child(model).once('value')
        .then((payload) => updateList(Object.entries(payload.val())))
        .catch((error) => ['all', { description: error }]);
};
export const fetchItem = (model, id, grabItem) => {
    db.ref().child(`${model}/${id}`).once('value')
        .then((payload) => grabItem(Object.values(payload.val())))
        .catch((error) => [id, { descripion: error }]);
};
export const deleteItem = (model, id) => {
    db.ref().child(`${model}/${id}`).remove();
};
// Null Check
const checkNull = (object) => {
    const values = Object.entries(object);
    for (let i = 0; i < values.length; i++) {
        switch (values[i][0]) {
            case 'dateCreated':
                continue;
            case 'dateUpdated':
                continue;
            default:
                if (values[i][1] == 'null' ||
                    typeof values[i][1] === 'undefined' ||
                    values[i][1].length === 0) {
                    return `${values[i][0]} cannot be empty`;
                }
        }
    }
    return '';
};
//# sourceMappingURL=crud_functions.js.map