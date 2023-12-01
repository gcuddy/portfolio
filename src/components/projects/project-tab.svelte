<script lang="ts">
  interface Tab {
    name: string;
    url: string;
  }

  export let tab: Tab;
  export let active = false;
</script>

<a
  href={tab.url}
  class="relative px-3 text-lg cursor-pointer whitespace-nowrap transition"
  class:active
>
  {tab.name}
</a>

<style>
  .active {
    text-decoration: underline;
    text-decoration-style: wavy;
    text-underline-offset: 4px;
    @apply decoration-rose-500;
  }
</style>
