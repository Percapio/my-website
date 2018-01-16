<template>
  <div id='contactme'>
    <section class='contact-body'>
      <form v-on:submit='addContact' class='contact-form'>
        <input type='text' v-model='user' placeholder='Enter Name'>
        <textarea type='text' v-model='message' placeholder='Enter Message' id='text'/>
        <input type='text' v-model='email' placeholder='Enter Email'>
        <input type='submit' value='Submit'>
      </form>
      <button @click='removeMessage'>Clear message</button>
    </section>
    <aside class='farewell'>
      <h5>Thank you for stopping by!</h5>
      <p>My name is Thomas Vu, and I enjoy reading, gaming, coding, hiking and exploring new things.  Feel free to reach out, as I always welcome a new friend.</p>
      <p>mr.thomas.vu@gmail.com</p>
    </aside>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';
  import { addItemCheck } from '../errorhandlers';

  import * as Interfaces from '../../backend/interface_tests';
  import * as Controllers from '../../backend/controllers/controllers';

  @Component({})
  export default class ContactComponent extends Vue {
    name       : string      = 'contacts';
    msg        : string      = '';
    contactId  : string      = '';
    oneContact : Array<any>  = [];
    contacts   : any;

    // Contact Keys
    user        : string = '';
    email       : string = '';
    message     : string = '';
    dateCreated : number = 0;

    mounted() {
      let text : any = document.getElementById('text');
      let observe : any;

      this.$nextTick( () => {
        if (window.addEventListener) {
          observe = (el : any, event : any, hand : any) => {
            el.addEventListener('on' + event, hand);
          };
        } else {
          observe = (el : any, event : any, hand : any) => {
            el.addEventListener(event, hand, false);
          };
        }

        function resize() {
          text.style.height = 'auto';
          text.style.height = text.scrollHeight + 'px';
        }

        function delayedResize() {
          window.setTimeout( resize, 0 );
        }

        observe(text, 'change', resize);
        observe(text, 'cut', delayedResize);
        observe(text, 'paste', delayedResize);
        observe(text, 'drop', delayedResize);
        observe(text, 'keydown', delayedResize);

        resize();
      })
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

    removeMessage() : void {
      this.user    = '';
      this.email   = '';
      this.message = '';
    }
  };
</script>

<style lang="css" scoped>
  #contactme {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 150px;
  }

  input, #text {
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 700px;
    padding: 5px;
    text-align: center;
    font-size: 41px;
  }

  input:nth-child(odd), #text {
    margin-bottom: 10px;
  }

  input:last-child {
    background-color: rgba(0, 0, 0, 0.1);
  }

  input:last-child:hover {
    background-color: rgba(0, 150, 255, 0.4);
  }

  button {
    padding: 10px;
    font-size: 20px;
    padding-top: 50px;
    padding-bottom: 25px;
  }

  #text {
    resize: none;
    overflow: hidden;
    word-wrap: break-word;
  }

  button:hover {
    color: red;
  }

  .farewell p {
    margin-top: 15px;
  }

  @media (min-width : 1024px) {
    #contactme {
      flex-direction: row;
    }

    .contact-body, .farewell {
      width: 45%;
    }

    input, #text {
      width: 100%;
      font-size: 22px;
      text-align: center;
    }

    .contact-body {
      margin-top: 5%;
    }

    .farewell {
      margin-left: 10%;
    }
  }
</style>
