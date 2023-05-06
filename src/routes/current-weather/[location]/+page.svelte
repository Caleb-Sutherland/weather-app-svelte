<script>
  import { intros } from "svelte/internal";
  import DisplayCard from "../../../components/displayCard.svelte";
  export let data;
  const displayMessageIntro = "Showing results for ";
  let errorMessage = "";
  let fullLocationName = "";
  let text, icon;
  let temp_c, humidity, feelslike_c, wind_kph;
  $: {
    if (data.error) {
      errorMessage = "Unable to show this location!";
    } else {
      errorMessage = "";
      fullLocationName = `${data.location.name}, ${data.location.region}, ${data.location.country}`;
      ({ text, icon } = data.current.condition);
      ({ temp_c, humidity, feelslike_c, wind_kph } = data.current);
    }
  }
</script>

<main>
  {#if errorMessage}
    <div class="errorMessageContainer">{errorMessage}</div>
  {:else}
    <div class="displayMessageContainer">
      {displayMessageIntro}<span class="fullLocationText"
        >{fullLocationName}</span
      >
    </div>
    <div class="cardContainer">
      <div class="mainCard">
        <div class="iconContainer">
          <img class="icon" src={icon} alt="Weather Icon" />
          <div class="iconText">{text}</div>
        </div>

        <div class="temperatureContainer">
          <span class="temperatureText degreesCelsius">{temp_c}</span>
        </div>
      </div>
      <div class="miniDisplaysContainer">
        <DisplayCard
          title="Humidity"
          icon="💦"
          ><div class="humidityContent">
            <span>{humidity}<span class="percent">%</span></span>
          </div></DisplayCard
        >
        <DisplayCard
          title="Wind"
          icon="💨"
          ><div class="humidityContent">
            <span>{wind_kph}<span class="percent">kph</span></span>
          </div></DisplayCard
        >
        <DisplayCard
          title="Feels Like"
          icon="🤌"
          ><div class="humidityContent degreesCelsius">
            <span>{feelslike_c}</span>
          </div></DisplayCard
        >
      </div>
    </div>
  {/if}
</main>

<style>
  .cardContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
  }
  .mainCard {
    width: 60%;
    height: 200px;
    background-color: rgba(58, 96, 110, 0.5);
    border-radius: 30px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
  }
  .errorMessageContainer {
    text-align: center;
    padding-top: 5px;
  }

  .fullLocationText {
    font-weight: 600;
  }

  .displayMessageContainer {
    text-align: center;
    padding-top: 7px;
  }

  .iconContainer {
    width: 50%;
    display: grid;
    place-items: center;
    padding-bottom: 40px;
  }

  .icon {
    width: 150px;
  }

  .iconText {
    margin-top: -30px;
    font-weight: bold;
    color: white;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
    font-size: x-large;
  }

  .temperatureContainer {
    width: 50%;
    display: grid;
    place-items: center;
  }

  .temperatureText {
    color: white;
    font-size: 42px;
    font-weight: 600;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
  }

  .degreesCelsius::after {
    content: "\00B0 C";
    font-size: 0.4em;
    font-weight: 100;
    vertical-align: top;
  }

  .miniDisplaysContainer {
    box-sizing: border-box;
    margin-top: 20px;
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .humidityContent {
    color: white;
    font-size: 38px;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    font-weight: 400;
  }

  .percent {
    font-size: x-large;
    vertical-align: middle;
  }
</style>
