<script lang="ts">
  import { flip } from 'svelte/animate';
  // import { send, receive} from './transition.ts';

  let groups = [
    {
      name: 'Basket 1',
      items: ['Apple', 'Banana', 'Cherry'],
    },
    {
      name: 'Basket 2',
      items: ['Grapefruit', 'Kiwi', 'Lemon'],
    },
    {
      name: 'Basket 3',
      items: ['Mango', 'Orange', 'Peach'],
    },
  ];

  let stackHover: string | null = null;

  const dragStart = (
    event: DragEvent,
    groupIndex: number,
    itemIndex: number,
  ) => {
    const data = { groupIndex, itemIndex };
    event.dataTransfer?.setData('text/plain', JSON.stringify(data));
  };

  const drop = (event: DragEvent, groupIndex: number) => {
    event.preventDefault();
    const json = event.dataTransfer?.getData('text/plain');
    const data = json && JSON.parse(json);
    const [item] = groups[data.groupIndex].items.splice(data.itemIndex, 1);
    groups[groupIndex].items.push(item);
    groups = groups;

    stackHover = null;
  };
</script>

<p>Drag a framework/library from random to respected drop</p>

{#each groups as stack, groupIndex (stack)}
  <div animate:flip>
    <strong>{stack.name}</strong>
    <ul
      class:hovering={stackHover === stack.name}
      on:dragenter={() => (stackHover = stack.name)}
      on:dragleave={() => (stackHover = null)}
      on:drop={(event) => drop(event, groupIndex)}
      ondragover="return false"
    >
      {#each stack.items as item, itemIndex (item)}
        <li
          class="item"
          animate:flip={{ duration: 500 }}
          draggable={true}
          on:dragstart={(event) => dragStart(event, groupIndex, itemIndex)}
        >
          {item}
        </li>
      {/each}
    </ul>
  </div>
{/each}

<style>
  .hovering {
    border-color: orange;
  }
  .item {
    display: inline;
  }
  li {
    background-color: lightgray;
    cursor: pointer;
    display: inline-block;
    padding: 10px;
  }
  li:hover {
    background-color: orange;
    color: white;
  }
  ul {
    border: 1px solid lightgray;
    width: calc(100% - 20px);
    display: flex;
    gap: 10px;
    height: 40px;
    padding: 10px;
  }
</style>
