<template>
    <div class="icon-container">
      <img src="@/assets/arrow.png" class="animated-icon" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnimatedIcon',
  };
  </script>
  
  <style scoped>
  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2vh; /* Center the icon vertically */
  }
  
  .animated-icon {
    animation: moveUpDown 2s infinite;
    height: 3vh; /* Set the height of the icon */

  }
  
  @keyframes moveUpDown {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px); /* Move the icon up by 10px */
    }
  }
  </style>
  