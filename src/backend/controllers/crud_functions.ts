import db from '../database/database';

// Export Firebase Model modules
export const makeModel = (model : string, data : any) => {
  const hasError = checkNull(data);

  if (hasError.length > 0) {
    return hasError;
  }

  db.ref().child(model).push(data);
  return '';
}

export const updateModel = (model : string, id : string, data : any) => {
  const hasError = checkNull(data);
  
  if (hasError.length > 0) {
    return hasError;
  }

  db.ref().child(`${ model }/${ id }`).update(data);
  return '';
}

export const findAllItems = (model : string, updateList : any) => {
  db.ref().child(model).once('value')

    .then( (payload : any) => updateList( Object.entries( payload.val() )))

    .catch( (error : string) => ['all', { description: error }] )
}

export const fetchItem = (model : string, id : string, grabItem : any) => {
  db.ref().child(`${ model }/${ id }`).once('value')

    .then((payload : any) => grabItem(Object.entries( payload.val() )))

    .catch((error : string) => [ id, { descripion: error }])
}

export const deleteItem = (model : string, id : string) : void => {
  db.ref().child(`${ model }/${ id }`).remove();
}

// Null Check
const checkNull = (object : any) => {
  const values = Object.entries(object)

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
}