<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte';
  import { logEvent } from 'histoire/client';
  import EventButton from './EventButton.svelte';
  export let Hst: Hst;
</script>

<Hst.Story title="events/EventButton">
  <EventButton on:myEvent={(arg) => logEvent('My event', arg)} /><br />
  <button on:click={(event) => logEvent('Click', event)}>Click</button>
</Hst.Story>
