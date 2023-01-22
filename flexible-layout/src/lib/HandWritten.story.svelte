<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  export let Hst: Hst;

  let count = 0;
  const source = `<h1>Todo</h1>

  <input
    bind:value={count}
    type="number"
  >`;
</script>

<Hst.Story title="Hand-written source">
  <Hst.Variant title="Source prop" {source}
    ><h1>Todo</h1>
    <input bind:value={count} type="number" />
  </Hst.Variant>
</Hst.Story>
