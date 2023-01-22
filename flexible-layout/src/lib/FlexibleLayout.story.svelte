<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import FlexibleLayout from './FlexibleLayout.svelte';
  export let Hst: Hst;
</script>

<Hst.Story title="FlexibleLayout">
  <Hst.Variant title="default">
    <FlexibleLayout />
  </Hst.Variant>
</Hst.Story>
