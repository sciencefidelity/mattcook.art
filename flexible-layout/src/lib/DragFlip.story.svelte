<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import DragFlip from './DragFlip.svelte';
  export let Hst: Hst;
</script>

<Hst.Story title="DragFlip">
  <Hst.Variant title="default">
    <DragFlip />
  </Hst.Variant>
</Hst.Story>
