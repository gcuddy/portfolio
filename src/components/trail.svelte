<script lang="ts">
  let el: HTMLDivElement;
  let { children } = $props();

  let borderBoxSize: ResizeObserverEntry["borderBoxSize"] = $state([])

  let overflowing = $state(false)


  $effect(() => {
    // console.log({borderBoxSize})
    // TODO: get this working
    // check inline size vs width
if (el.scrollWidth > borderBoxSize[0]?.inlineSize) {
    //   console.log("overflowing")
    //   console.log(el.scrollWidth)
    setTimeout(() => {

        el.scrollLeft = el.scrollWidth
    }, 0);
    }
    // if (borderBoxSize[0]?.inlineSize >= el.clientWidth) { console.log("overflowing")
    // }
  })

</script>

<div
  bind:borderBoxSize
  bind:this={el}
  class:overflowing
  data-trail
  class="flex gap-4 items-center relative w-full min-w-0 overflow-auto"
>
  {@render children()}
</div>

  <style>
    [data-trail] > * {
      flex: 0 0 auto;
    }
    [data-trail]::after {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      height: 1px;
      border: 1px dashed white;
      opacity: 0.1;
      width: 100%;
      z-index: -1;
    }
  </style>
