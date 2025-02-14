<template>
    <div class="send-button-container">
      <button @click="sendMessage" :class="{ sent: isSent }">
        <span v-if="!isSent">{{ $t('sendBtn') }}</span>
        <span v-if="isSent" class="motorcycle-container">
          <span class="motorcycle">🏍️</span>
          <span class="sent-text">Recu</span>
        </span>
      </button>
    </div>
  </template>
  
  
  
  <script>
  export default {
    name: 'SendButton',
    data() {
      return {
        isSent: false
      };
    },
    methods: {
      sendMessage() {
        this.isSent = true;
        setTimeout(() => {
          this.isSent = false;
        }, 2000); // Reset after 2 seconds for demonstration
      }
    }
  };
  </script>
  
  
  <style scoped>
  .send-button-container {
    display: inline-block;
    position: relative;
  }
  
  button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    background-color: red;
    color: white;
    border: none;
    border-radius: 4px;
    transition: transform 0.5s, opacity 0.5s, background-color 0.5s;
  }
  
  button.sent {
    background-color: transparent;
    color: transparent;
  }
  
  .motorcycle-container {
    display: flex;
    align-items: center;
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.5s;
  }
  
  button.sent .motorcycle-container {
    transform: translateX(100px);
  }
  
  .motorcycle {
    font-size: 500px;
  }
  
  .sent-text {
    margin-left: 10px;
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  button.sent .sent-text {
    opacity: 1;
  }
  </style>
  