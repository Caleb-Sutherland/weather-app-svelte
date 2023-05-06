<script>
  export let value;
  export let setValue;

  // Update the the value after a refresh
  import { onMount } from "svelte"
  import { page } from '$app/stores';
  let lastValue=""
  onMount(() => {
    if ($page.params.location) {
      lastValue = $page.params.location
    }
  })
  
</script>

<main>
  <div>
    <input
      placeholder="Albuquerque, New Mexico"
      value={value ? value : lastValue}
      on:change={(e) => {
        setValue(e.target.value);
      }}
    />
  </div>
</main>

<style>
  input {
    width: 400px;
    height: 50px;
    border: 0.5px none black;
    border-radius: 20px;
    font-size: x-large;
    padding-left: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  input:focus {
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
  }
</style>
