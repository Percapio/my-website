import * as Interfaces from '../interface_tests';

// Export Firebase Blog Model
export default class Blog {
  data: {
    user        : string,
    message     : string,
    email       : string,
    dateCreated : number,
    dateUpdated : number,
  }

  constructor(props : Interfaces.Contact) {
    this.data = {
      user        : props.user,
      message     : props.message,
      email       : props.email,

      dateCreated : Date.now(),
      dateUpdated : Date.now(),
    }
  }
}