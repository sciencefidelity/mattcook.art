<script lang="ts">
  const list = [
    { name: 'one', color: 'ffc107' },
    { name: 'two', color: '2196f3' },
    { name: 'three', color: '607d8b' },
    { name: 'four', color: '795548' },
    { name: 'five', color: '00bcd4' },
    { name: 'six', color: 'ff5722' },
    { name: 'seven', color: '673ab7' },
    { name: 'eight', color: '4caf50' },
    { name: 'ten', color: '3f51b5' },
    { name: 'eleven', color: '03a9f4' },
    { name: 'twelve', color: '8bc34a' },
    { name: 'thirteen', color: 'cddc39' },
    { name: 'fourteen', color: 'ff9800' },
    { name: 'fifteen', color: 'e91e63' },
    { name: 'sixteen', color: '9c27b0' },
    { name: 'seventeen', color: 'f44336' },
    { name: 'eighteen', color: '009688' },
    { name: 'ninteen', color: 'ffeb3b' },
  ];
</script>

<div class="container">
  {#each list as item, idx}
    <div class="block" style="--color: #{item.color}">{idx}</div>
  {/each}
</div>

<style>
  .container {
    padding: 1rem;
    width: calc(100vw - 2rem);
    /* height: calc(100vh - 2rem); */
    position: relative;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 1fr);
  }
  .block {
    position: relative;
    display: grid;
    place-items: center;
    border-radius: 1rem;
    width: 100%;
    height: 10rem;
    background-color: var(--color);
  }
</style>
