<!-- 

    TEAM MEMBER PAGE NOT CURRENTLY USED
 
            DO NOT DELETE
            
-->




<script setup lang="ts">
import linkedinTooltip from '../components/memberlinkedin.vue'

// export default {
//     props: {
//         member: Object
//     }
// }
</script>

<template>
    <div class="cardContainer">
        <div class="card">
        <div class="card-body">
            <!-- <h5 class="card-title"> {{ member.name }} </h5>
            <h6 class="card-subtitle mb-2 text-muted"> {{ member.position }} </h6>
            <p class="card-text"> {{ member.description }} </p>
            <linkedinTooltip :linkedin="member.linkedin" /> -->
            <img src="../assets/imageHaley/haleycourse2.jpg" class="image" style=" width: 33%; height: 100%;">
            <h5 class="card-title"> Test Name </h5>
            <h6 class="card-subtitle mb-2"> Log Leader </h6>
            <p class="card-text"> Genie Logiciel </p>
            <div class="linkedin-container">
                <!-- To Decide which one to keep between linkedintooltip or linkedinButton-->
                <linkedinTooltip />
            </div>
        </div>
        </div>
    </div>
</template>



<style>
.cardContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
    background-color: transparent;
    width: 30%;
    /* position: relative;
    width: 50rem; 
  background: transparent;
    width: 30%;  
  border-color: black; 
  border-width: medium; 
  color: white; */
}

.card{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: white;
}




.card-body{
    /* display: block;
    justify-content: center;
    align-items: center;
    color: white; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.linkedin-container{ 
    width: 20%;
}


</style>