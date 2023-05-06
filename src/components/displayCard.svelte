<script>
  export let title;
  export let icon;
</script>

<div class="card">
  <div class="titleContainer"><h3><span>{icon}</span>{title}</h3></div>
  <slot />
</div>

<style>
  .card {
    width: 175px;
    height: 100px;
    background-color: rgba(58, 96, 110, 0.5);
    border-radius: 30px;
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 8px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  .titleContainer {
    width: 100%;
    display: inline;
    text-align: center;
    margin-top: -2px;
    line-height: 0.1em;
  }

  span {
    font-size: x-large;
    margin-right: 10px;
  }

  h3 {
    color: white;
    text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.3);
    font-size: 20px;
  }
</style>
