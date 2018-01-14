// Error checkers :: modulize it later
export const addItemCheck = (check : string, msg : string) : void => {
  if(check.length > 0) {
    msg = `${check}`;
  }
}

export const findAllCheck = (check : Array <any>, msg : string) => {
  if (check.length === 0) {
    msg = 'Something went wrong in fetching the lists of blogs';
    return false;
  }
  return true;
}