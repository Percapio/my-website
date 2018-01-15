import * as Interfaces from '../interface_tests';

// Export Firebase Blog Model
export default class Blog {
  data: {
    name        : string,
    message     : string,
    email       : string,
    dateCreated : number,
    dateUpdated : number,
  }

  constructor(props : Interfaces.Contact) {
    this.data = {
      name        : props.name,
      message     : props.message,
      email       : props.email,

      dateCreated : Date.now(),
      dateUpdated : Date.now(),
    }
  }
}