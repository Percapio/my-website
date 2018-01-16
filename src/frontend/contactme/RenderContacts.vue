<template>
  <aside>
    <ul class='contact-items' v-show='filled'>
      <h4>contacts to be listed:</h4>
      <li v-for='(contact, index) in contacts'>
        <p>{{ index }}: {{ contact[0] }}</p>
        <p>{{ contact[1].data.user }}</p>
        <p>{{ contact[1].data.email }}</p>
        <p>{{ contact[1].data.message }}</p>
        <p>{{ contact[1].data.dateCreated }}</p>
      </li>
    </ul>
  </aside>
</template>

<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import { findAllCheck, addItemCheck } from '../errorhandlers';

import * as Controllers from '../../backend/controllers/controllers';

@Component
export default class RenderContacts extend Vue {
  name      : string = 'rendercontacts';
  contacts  : any;

  // Rendering
  filled         : boolean = false;
  contactFetched : boolean = false;

  mounted() {
    this.contacts = Controllers.getAllContacts( this.updateContactList.bind(this) );
  }

  updateContactList(newContacts : Array<any>) {
    this.contacts  = newContacts;
    let noErrors = findAllCheck(this.contacts, this.msg);
    if (noErrors) {
      this.filled = true; 
    }
  }
      removeContact(e : any) : void {
      e.preventDefault();
      
      Controllers.destroyContact(this.contactId);
      this.msg = `${ this.contactId } is deleted.`;
    }
}
</script>