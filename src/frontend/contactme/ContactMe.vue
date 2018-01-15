<template>
  <div id='contactme'>
    <img src="../../assets/logo.png">

    {{ msg }}
    <section class='contact-body'>
      <form v-on:submit='addContact' class='contact-form'>
        <input type='text' v-model='user' placeholder='Enter Name'>
        <textarea type='text' v-model='message' placeholder='Enter Message'/>
        <input type='text' v-model='email' placeholder='Enter Email'>
        <input type='submit' value='Submit'>
      </form>
      <button @click='removeContact'>Delete the message</button>
    </section>
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
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';
  import { findAllCheck, addItemCheck } from '../errorhandlers';

  import * as Interfaces from '../../backend/interface_tests';
  import * as Controllers from '../../backend/controllers/controllers';

  @Component({})
  export default class ContactsComponent extends Vue {
    name       : string      = 'contacts';
    msg        : string      = 'Welcome to Contacts.';
    contactId  : string      = '';
    oneContact : Array<any>  = [];
    contacts   : any;

    // Contact Keys
    user        : string = '';
    email       : string = '';
    message     : string = '';
    dateCreated : number = 0;

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

    addContact() : void {
      const contactData : Interfaces.Contact = {
        user: this.user,
        message: this.message,
        email: this.email,
        dateCreated: 0,
        dateUpdated: 0,
      }

      const check = Controllers.createContact(contactData);
      addItemCheck(check, this.msg);
    }

    removeContact(e : any) : void {
      e.preventDefault();
      
      Controllers.destroyContact(this.contactId);
      this.contacts = this.updateContactList.bind(this);
      this.msg = `${ this.contactId } is deleted.`;
    }
  };
</script>

<style lang="scss" scoped>
  #contactme, .contact-body, .contact-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .contact-form {
    background: #ccc;
    color: #fff;
    margin: 10px;

    textarea: {
      resize: none;
    }
  }

  input, textarea {
    width: 200px;
    text-align: center;
  }
</style>
