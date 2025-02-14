<template>
  <div class="contact">
    <div class="contactInfo">
      <h1 class="contactLabel">{{ $t('contact') }}</h1>
      <div class="info">
        <div class="infoLabels">
          <h5>{{ $t('email') }}</h5>
          <!-- <h5>Téléphone</h5> -->
          <h5>Linktree</h5>
          <h5>{{ $t('address') }}</h5>
          <h5>{{ $t('office') }}</h5>
        </div>
        <div class="infoText">
          <h5>comets@ens.etsmtl.ca</h5>
          <a href="https://linktr.ee/comets_emoto" target="_blank">
            <h5>linktr.ee/comets_emoto</h5>
          </a>
          <h5>1100 R. Notre Dame O, Montréal, QC H3C 1K3</h5>
          <h5>École de Technologie Supérieure Pavillon D</h5>
        </div>
      </div>
    </div>
    <div class="contactForm">
      <form @submit.prevent="submitForm">
        <input type="text" name="name" v-model="name" :placeholder="$t('full-name')" />
        <input type="email" name="email" v-model="email" :placeholder="$t('email')" />
        <textarea name="message" v-model="message" placeholder="Message" id="messageBox"></textarea>
        <!-- <button class="submitButton" type="submit">Envoyer</button> -->
        <SendButton />
        <!-- <recaptcha /> -->
      </form>
    </div>
  </div>
</template>

<script>
import SendButton from '@/components/sendbutton.vue';
// import { recaptcha } from '@/components/captcha.vue';
const WEB3FORMS_ACCESS_KEY = "31eed7b6-7012-464b-bf02-ffb353621cbc"; // ComETS Access Key
// const WEB3FORMS_ACCESS_KEY = "5a4876b8-ff3d-4d0b-b167-a0a64f7fd4a6"; // Test Access Key (gab look email)

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    async submitForm() {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: this.name,
          email: this.email,
          message: this.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        console.log(result);
      }
    },
  },
  components: {
    SendButton,
  },
};
</script>

<style>
@media screen and (min-width: 1024px) {

  #messageBox {
    height: 6rem;
  }

  .contact {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 2rem;
    color: white;
    width: 100%;
    height: 50%;
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    color: white;
  }

  .infoLabels {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .infoText {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contactInfo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;
    height: 100%;
    justify-content: center;
  }

  .contactForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 50%;
    justify-content: center;
  }

  .contactLabel {
    text-align: center;
    margin-top: 2rem;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 75%;
    margin: 0 auto;
  }

  input,
  textarea,
  button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    width: 20%;
  }
}

@media screen and (max-width: 767px) {

  .contactInfo {
    display: grid;
    /* flex-direction: column; */
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }


  .contact {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    color: white;
    width: 100vw;
    height: 100vh
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    color: white;
  }

  .infoLabels {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .infoText {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* .contactInfo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  } */

  .contactForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }

  .contactLabel {
    text-align: center;
    margin-top: 2rem;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 75vw;
    margin: 0 auto;
  }

  input,
  textarea,
  button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    width: 40vw;
  }
}


@media screen and (min-width: 768px) and (max-width: 1024px) {


  .contact {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
    color: white;
    width: 100vw;
    height: 80vh
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding: 2rem;
    color: white;
  }

  .infoLabels {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .infoText {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .contactInfo {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }

  .contactForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    justify-content: center;
  }

  .contactLabel {
    text-align: center;
    margin-top: 2rem;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 75vw;
    margin: 0 auto;
  }

  input,
  textarea,
  button {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    width: 40vw;
  }
}
</style>