<script>
  import SearchBar from "../components/searchBar.svelte";
  import { goto } from "$app/navigation";

  let location = "";
  const setLocation = (newVal) => {
    location = newVal;
    goto(`/current-weather/${location}`);
  };
</script>

<div class="container">
  <div class="weatherContainer">
    <div class="searchBarContainer">
      <SearchBar value={location} setValue={setLocation} />
    </div>
    <slot />
  </div>
</div>

<style>
  .container {
    height: 100vh;
    width: 100vw;
    display: grid;
    place-items: center;
  }

  .weatherContainer {
    width: 600px;
    height: 600px;
    background-color: #8cdfd6;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 20px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .searchBarContainer {
    display: flex;
    justify-content: center;
  }
</style>
