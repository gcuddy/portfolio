<script lang="ts">
  export let tab;
  export let active = false;
  let c = "";
  export { c as class };
</script>

<a {...$$restProps} href={tab.url} class={c} class:active>
  {tab.name}
  <slot />
</a>
