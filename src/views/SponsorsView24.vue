<script setup lang="ts">
// import NavBar from '../components/floatingNavBar.vue'
import NavBar from '../components/RespNavbarFullPage.vue'
import Footer from '../components/footer.vue'



</script>

<template>

  <main class="sponsors">
    <NavBar />
    <div class="mainContainer">

      <section class="section">
        <div class="champTitle">
          <h2>{{ $t('champion') }}</h2>
        </div>
        <div class="LinkDiv">
          <!-- Hakko -->
          <a class="ImageLink" href="https://hakkousa.com/" target="_blank">
            <img class="hakko" src="../assets/LOGOS_SPONSORS/Hakko.svg" alt="Hakko" />
          </a>
          <!-- Fast Riding School -->
          <a class="ImageLink" href="https://www.fastridingschool.com/" target="_blank">
            <img class="fast" src="../assets/LOGOS_SPONSORS/FAST.svg" alt="Fast Riding School" />
          </a>
          <!-- Campagna Motors -->
          <a class="ImageLink" href="https://campagnamotors.com/en/" target="_blank">
            <img class="campagna" src="../assets/LOGOS_SPONSORS/Campagna.svg" alt="Campagna Motors" />
          </a>
          <!-- BRP -->
          <a class="ImageLink" href="https://www.brp.com/en/" target="_blank">
            <img class="BRP" src="../assets/LOGOS_SPONSORS/BRP.svg" alt="BRP" />
          </a>
          <!-- Altium -->
          <a class="ImageLink" href="https://www.altium.com/" target="_blank">
            <img class="Altium" src="../assets/LOGOS_SPONSORS/Altium.svg" alt="Altium" />
          </a>
          <!-- Genium 360 -->
          <a class="ImageLink" href="https://www.genium360.ca/fr-ca/" target="_blank">
            <img class="genium" src="../assets/LOGOS_SPONSORS/G360.svg" alt="Genium 360" />
          </a>
          <!-- ETS -->
          <a class="ImageLink" href="https://www.etsmtl.ca/" target="_blank">
            <img class="ETS" src="../assets/LOGOS_SPONSORS/ETS.svg" alt="ETS" />
          </a>
        </div>
        <!-- Add content for Platinum section here -->
      </section>

      <section class="section">
        <div class="aceTitle">
          <h2>{{ $t('Ace') }}</h2>
        </div>
        <div class="LinkDiv">
          <!-- Drillmex -->
          <a class="ImageLink" href="https://drillmex.com/" target="_blank">
            <img class="drillmex" src="../assets/LOGOS_SPONSORS/drillmex.svg" alt="Drillmex" />
          </a>
          <!-- ENA -->
          <a class="ImageLink" href="https://www.ena.ca/ecole-nationale-d-aerotechnique/" target="_blank">
            <img class="ena" src="../assets/LOGOS_SPONSORS/ENA.svg" alt="ÉNA" />
          </a>
          <!-- Prolab Technologies -->
          <a class="ImageLink" href="https://www.prolab-technologies.com/" target="_blank">
            <img class="prolab" src="../assets/LOGOS_SPONSORS/Prolab.svg" alt="Prolab Technologies" />
          </a>
          <!-- Novasteel -->
          <a class="ImageLink" href="https://novasteel.ca/" target="_blank">
            <img class="nova" src="../assets/LOGOS_SPONSORS/NovaSteel2.svg" alt="NovaSteel" />
          </a>
          <!-- IVI -->
          <a class="ImageLink" href="https://www.ivisolutions.ca/" target="_blank">
            <img class="ivi" src="../assets/LOGOS_SPONSORS/IVI.svg" alt="IVI Solutions" />
          </a>
          <!-- AEETS -->
          <a class="ImageLink" href="https://www.aeets.com/" target="_blank">
            <img class="aeets" src="../assets/LOGOS_SPONSORS/AEETS.svg" alt="AEETs" />
          </a>
          <!-- WeidMuller -->
          <a class="ImageLink" href="https://www.weidmuller.ca/en/index.jsp" target="_blank">
            <img class="weidmuller" src="../assets/LOGOS_SPONSORS/Weidmuller.svg" alt="WeidMuller" />
          </a>
          <!-- PMG -->
          <a class="ImageLink" href="https://www.pmgtest.com/" target="_blank">
            <img class="pmg" src="../assets/LOGOS_SPONSORS/PMGTechnologies.svg" alt="PMG Technologies" />
          </a>
        </div>
        <!-- Add content for Gold section here -->
      </section>

      <section class="section">
        <div class="qualifierTitle">
          <h2>{{ $t('Qualifier') }}</h2>
        </div>
        <div class="LinkDiv">
          <!-- MMS laser -->
          <a class="ImageLink" href="https://www.mmslaser.com/" target="_blank">
            <img class="mms" src="../assets/LOGOS_SPONSORS/MMS Laser.svg" alt="MMS laser" />
          </a>
          <!-- Cerakote -->
          <a class="ImageLink" href="https://www.cerakote.com/canada" target="_blank">
            <img class="cerakote" src="../assets/LOGOS_SPONSORS/Cerakote.svg" alt="Cerakote" />
          </a>
          <!-- RMH industires -->
          <a class="ImageLink" href="https://www.rmhindustries.com/" target="_blank">
            <img class="rmh" src="../assets/LOGOS_SPONSORS/RMH.svg" alt="RMH industires" />
          </a>
          <!-- HyperPro -->
          <a class="ImageLink" href="https://hyperpro.com/" target="_blank">
            <img class="hyperpro" src="../assets/LOGOS_SPONSORS/Hyperpro.svg" alt="HyperPro" />
          </a>
          <!-- Vanguard Steel -->
          <a class="ImageLink" href="https://vanguardsteel.com/" target="_blank">
            <img class="vanguard" src="../assets/LOGOS_SPONSORS/VanguardSteel.svg" alt="Vanguard Steel" />
          </a>
          <!-- Sodel -->
          <a class="ImageLink" href="https://www.sodel.com/en/" target="_blank">
            <img class="sodel" src="../assets/LOGOS_SPONSORS/Sodel.svg" alt="Sodel" />
          </a>
          <!-- Moto illimitées -->
          <a class="ImageLink" href="https://www.motosillimitees.com/fr/" target="_blank">
            <img class="motoIllimitees" src="../assets/LOGOS_SPONSORS/MotoIllimitees.svg" alt="Moto illimitées" />
          </a>
          <!-- Vibrant Performance -->
          <a class="ImageLink" href="https://vibrantperformance.com/" target="_blank">
            <img class="vibrant" src="../assets/LOGOS_SPONSORS/vibrant.svg" alt="Vibrant Performance" />
          </a>
          <!-- Opal-RT -->
          <a class="ImageLink" href="https://www.opal-rt.com/" target="_blank">
            <img class="opalrt" src="../assets/LOGOS_SPONSORS/OpalRT.svg" alt="Opal-RT Technologies" />
          </a>
          <!-- ForaXperts -->
          <a class="ImageLink" href="https://foraxpert.com/" target="_blank">
            <img class="fora" src="../assets/LOGOS_SPONSORS/ForaXperts.svg" alt="ForaXperts" />
          </a>
          <!-- Furick -->
          <a class="ImageLink" href="https://furickcup.com/" target="_blank">
            <img class="furick" src="../assets/LOGOS_SPONSORS/furick.svg" alt="Furick" />
          </a>
          <!-- General -->
          <a class="ImageLink" href="https://generaltools.com/" target="_blank">
            <img class="generaltools" src="../assets/LOGOS_SPONSORS/GeneralTools.svg" alt="General Tools" />
          </a>
          <!-- Kimpex -->
          <a class="ImageLink" href="https://www.kimpex.com/en-ca/home" target="_blank">
            <img class="kimpex" src="../assets/LOGOS_SPONSORS/Kimpex.svg" alt="Kimpex" />
          </a>
          <!-- BRS -->
          <a class="ImageLink" href="https://www.facebook.com/franois.barbee/" target="_blank">
            <img class="brs" src="../assets/LOGOS_SPONSORS/BRS.svg" alt="BRS" />
          </a>
        </div>
        <!-- Add content for Silver section here -->
      </section>

      <section class="section">
        <div class="rookieTitle">
          <h2>{{ $t('Rookie') }}</h2>
        </div>
        <div class="LinkDiv">
          <!-- Laval Moto -->
          <a class="ImageLink" href="https://www.lavalmoto.com/fr/" target="_blank">
            <img class="lavalmoto" src="../assets/LOGOS_SPONSORS/LavalMoto.svg" alt="Laval Moto" />
          </a>
          <!-- MPG Moto -->
          <a class="ImageLink" href="https://www.mpgmoto.com/" target="_blank">
            <img class="mpg" src="../assets/LOGOS_SPONSORS/MPG.svg" alt="MPG Moto" />
          </a>
          <!-- LL Industries -->
          <a class="ImageLink" href="https://www.llindustries.qc.ca/" target="_blank">
            <img class="LL" src="../assets/LOGOS_SPONSORS/LL Industries.svg" alt="LL Industries" />
          </a>
        </div>
        <!-- Add content for Bronze section here -->
      </section>

      <section class="section">
        <h2 class="SponsorTitle">{{ $t('becomePartner') }}</h2>
        <div class="planSection">
          <div class="frenchSection">
            <p>Vous souhaitez devenir un partenaire de ComETS? Contactez-nous pour plus d'informations.</p>
            <a class="pdfLink" href="./PlanPartenariat[FR].pdf" target="_blank">
              <img>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-filetype-pdf" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z" />
              </svg>
              </img>
              Plan de Partenariat
            </a>
          </div>
          <div class="englishSection">
            <p>Would you like to become a partner of ComETS? Contact us for more information.</p>
            <a class="pdfLink" target="_blank" href="./PartnershipPlan[EN].pdf">
              <img>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                class="bi bi-filetype-pdf" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM1.6 11.85H0v3.999h.791v-1.342h.803q.43 0 .732-.173.305-.175.463-.474a1.4 1.4 0 0 0 .161-.677q0-.375-.158-.677a1.2 1.2 0 0 0-.46-.477q-.3-.18-.732-.179m.545 1.333a.8.8 0 0 1-.085.38.57.57 0 0 1-.238.241.8.8 0 0 1-.375.082H.788V12.48h.66q.327 0 .512.181.185.183.185.522m1.217-1.333v3.999h1.46q.602 0 .998-.237a1.45 1.45 0 0 0 .595-.689q.196-.45.196-1.084 0-.63-.196-1.075a1.43 1.43 0 0 0-.589-.68q-.396-.234-1.005-.234zm.791.645h.563q.371 0 .609.152a.9.9 0 0 1 .354.454q.118.302.118.753a2.3 2.3 0 0 1-.068.592 1.1 1.1 0 0 1-.196.422.8.8 0 0 1-.334.252 1.3 1.3 0 0 1-.483.082h-.563zm3.743 1.763v1.591h-.79V11.85h2.548v.653H7.896v1.117h1.606v.638z" />
              </svg>
              </img>
              Partnership Plan
            </a>
          </div>
        </div>

      </section>

    </div>
    <Footer />
  </main>
</template>

<script lang="ts">
export default {
  name: "PartnershipPlanEN",
  data() {
    return {
      documentUrl: "./../assets/pdf/Partnership_Plan_Comets_2024EN.pdf"
    }
  }
}


function enPdf() {
  // open pdf in new tab
  window.open("<%= BASE_URL %>Partnership_Plan_Comets_2024EN.pdf", '_blank');
}
</script>

<style>
/* * {
  border: 1px solid red !important; //Used for debugging CSS
} */


@media (max-width: 1023px){

  .sponsors {
    min-width: 100vw;
    min-height: 100vh;
    display: block;
    align-items: center;
    background-image: url(../assets/backgrounds/hexagon.svg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }


  .mainContainer {
    /* background-color: #27284E; */
    background: transparent;
    display: block;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100vw;
  }

  .section {
    color: white;
    display: block;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    width: 85%;
    height: 100%;
    border-radius: 10px;
    transition: 0.3s;
    padding: 2rem;
    background-color: rgba(255, 255, 255, .05);
    backdrop-filter: blur(5px);
  }

  .champTitle {
    color: paleturquoise;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .aceTitle {
    color: gold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .qualifierTitle {
    color: silver;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .rookieTitle {
    color: brown;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }


  .SponsorTitle {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .pdfLink {
    color: white;
    text-decoration: none;
  }

  .pdfLink:hover {
    color: red;
    transition: .5s;
  }

  .LinkDiv1 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-content: center;
    align-items: center;
  }

  .LinkDiv2 {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    align-items: center;
  }

  .LinkDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .ImageLink {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem;
    padding-left: 1rem;
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .ImageLink:hover {
    transform: scale(1.1);
  }

  .planSection {
    display: block;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: 2rem;
    padding-left: 2rem;
    text-align: center;
  }

  .frenchSection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-right: 2rem;
    padding-left: 2rem;
    padding-bottom: 2rem;
  }

  .englishSection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    word-wrap: break-word;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  /* Champion Section */
  .hakko {
    height: 170px;
    width: auto;
  }

  .fast {
    height: 190px;
    width: auto;
  }

  .campagna,
  .BRP {
    height: 144px;
    width: auto;
  }

  .Altium {
    height: 170px;
    width: auto;
  }

  .ETS {
    height: 200px;
    width: auto;
  }

  /* Ace Section */
  .drillmex,
  .ena {
    height: 200px;
    width: auto;
  }

  .prolab {
    height: 180px;
    width: auto;
  }

  .nova {
    height: 160px;
    width: auto;
  }

  .ivi {
    height: 200px;
    width: auto;
  }

  .aeets,
  .weidmuller,
  .pmg {
    height: 250px;
    width: auto;
  }

  /* Qualifier Section */
  .mms {
    height: 250px;
    width: auto;
  }

  .cerakote {
    height: 200px;
    width: auto;
  }

  .rmh {
    height: 200px;
    width: auto;
  }

  .hyperpro,
  .vibrant,
  .opalrt,
  .furick,
  .generaltools,
  .kimpex,
  .brs {
    height: 200px;
    width: auto;
  }

  .vanguard {
    height: 200px;
    width: auto;
  }

  .sodel {
    height: 200px;
    width: auto;
  }

  .motoIllimitees {
    height: 250px;
    width: auto;
  }

  .fora {
    height: 200px;
    width: auto;
  }

  /* Rookie Section */
  .lavalmoto {
    height: 250px;
    width: auto;
  }

  .mpg,
  .LL {
    height: 180px;
    width: auto;
  }

}

@media (min-width: 1024px) {
  .sponsors {
    min-width: 100vh;
    min-height: 100vh;
    display: block;
    align-items: center;
    background-image: url(../assets/backgrounds/hexagon.svg);
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

  }


  .mainContainer {
    /* background-color: #27284E; */
    background: transparent;
    display: block;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .section {
    color: white;
    display: block;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    width: 85%;
    height: 100%;
    border-radius: 10px;
    transition: 0.3s;
    padding: 2rem;
    background-color: rgba(255, 255, 255, .05);
    backdrop-filter: blur(5px);
  }

  .champTitle {
    color: paleturquoise;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .aceTitle {
    color: gold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .qualifierTitle {
    color: silver;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .rookieTitle {
    color: brown;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }


  .SponsorTitle {
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .pdfLink {
    color: white;
    text-decoration: none;
  }

  .pdfLink:hover {
    color: red;
    transition: .5s;
  }

  .LinkDiv1 {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    justify-content: center;
    align-items: center;
  }

  .LinkDiv2 {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: center;
    align-items: center;
  }

  .LinkDiv {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .ImageLink {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: 2rem;
    padding-left: 2rem;
    display: inline-block;
    transition: transform 0.3s ease;
  }

  .ImageLink img {
    width: auto;
    height: 200px;
  }

  .ImageLink:hover {
    transform: scale(1.1);
  }

  .planSection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-right: 2rem;
    padding-left: 2rem;
  }


  .frenchSection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .englishSection {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    word-wrap: break-word;
    padding-right: 2rem;
    padding-left: 2rem;
  }


  .fast {
    height: 144px;
    width: 210px;
  }

  .hakko,
  .campagna,
  .BRP,
  .Altium,
  .genium,
  .ETS {
    height: 144px;
    width: 144px;
  }

  /* Ace Section */
  .drillmex,
  .ena {
    height: 84px;
    width: 183px;
  }

  .prolab {
    height: 75px;
    width: 207px;
  }

  .nova {
    height: 144px;
    width: 144px;
  }

  .ivi {
    height: 84px;
    width: 184px;
  }

  .aeets,
  .weidmuller,
  .pmg {
    height: 150px;
    width: 150px;
  }

  /* Qualifier Section */
  .mms {
    height: 77px;
    width: 197px;
  }

  .cerakote {
    height: 72px;
    width: 180px;
  }

  .rmh {
    height: 64px;
    width: 200px;
  }

  .hyperpro,
  .vibrant,
  .opalrt,
  .furick,
  .generaltools,
  .kimpex,
  .brs {
    height: 62px;
    width: 206px;
  }

  .vanguard {
    height: 46px;
    width: 276px;
  }

  .sodel {
    height: 60px;
    width: 210px;
  }

  .motoIllimitees,
  .fora {
    height: 150px;
    width: 150px;
  }

  /* Rookie Section */
  .lavalmoto {
    height: 150px;
    width: 150px;
  }

  .mpg,
  .LL {
    height: 64px;
    width: 200px;
  }


}
</style>