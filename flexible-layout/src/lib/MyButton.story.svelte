<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import MyButton from './MyButton.svelte';

  export let Hst: Hst;

  export let disabled = false;
  let content = 'Click me';
</script>

<Hst.Story>
  <svelte:fragment slot="controls">
    <Hst.Text bind:value={content} title="Content" />
    <Hst.Checkbox bind:value={disabled} title="Disabled" />
  </svelte:fragment>

  <Hst.Variant title="Variant 1">
    <MyButton {disabled}>
      {content}
    </MyButton>
  </Hst.Variant>

  <Hst.Variant title="Variant 2">
    <MyButton {disabled}>
      {content}
    </MyButton>
  </Hst.Variant>
</Hst.Story>
