<script lang="ts">
  interface Tab {
    name: string;
    url: string;
  }

  export let tab: Tab;
  export let active = false;
  let c = "";
  export { c as class };
</script>

<!-- "relative px-3 text-lg cursor-pointer whitespace-nowrap transition" -->
<a {...$$restProps} href={tab.url} class={c} class:active>
  {tab.name}
</a>

<style>
  .active {
    text-decoration: underline;
    text-decoration-style: wavy;
    text-underline-offset: 4px;
    text-decoration-thickness: 2px;
    @apply decoration-rose-500;
  }
</style>
