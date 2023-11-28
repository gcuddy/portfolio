<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  interface $$Props {
    project: CollectionEntry<"projects">;
  }

  export let project: $$Props["project"];

  $: ({ data, slug } = project);
</script>

<!-- TODO: get commits from githubs... -->
<div class="relative transition duration-500 card-outer">
  <a
    class="card {data.scope === 'experiment' ? 'border-dashed' : ''}}"
    href={`/project/${slug}`}
  >
    {#if data.scope === "project"}
      <div class="bg-white text-black title font-sans">
        <span>{data.title}</span>
      </div>
      <img
        src={data.image}
        alt={data.title || ""}
        loading="lazy"
        decoding="async"
      />
    {:else}
      <div class="flex items-center truncate gap-3">
        <div class="bg-white text-black px-6 font-sans">
          <span>{data.title}</span>
        </div>
        <span class="truncate text-sm">{data.description}</span>
      </div>
    {/if}
  </a>
  {#if data.featured}
    <div class="absolute -top-3 -right-3 rotate-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-star fill-yellow-500 stroke-yellow-500 drop-shadow-2xl h-8 w-8"
      >
        <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
        />
      </svg>
    </div>
  {:else if data.scope === "experiment"}
    <!-- <div class="absolute -top-3 -left-3 rotate-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 fill-rose-500"
        viewBox="0 0 256 256"
        ><path
          d="M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23ZM110.86,103.25A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167c-12,2.37-29.07,1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48,208l28.54-47.58c14.25-1.74,30.31,1.85,47.82,10.72,19,9.61,35,12.88,48,12.88a69.89,69.89,0,0,0,19.55-2.7L208,208Z"
        ></path></svg
      >
    </div> -->
  {/if}
</div>

<style>
  .card {
    display: grid;
    /* position: relative; */
    grid-template: auto 1fr / auto 1fr;
    /* height: 11rem; */
    /* background: var(--gradient-subtle); */
    overflow: hidden;
    text-decoration: none;
    @apply rounded-sm border-2 border-white bg-black transition;
  }

  .card-outer:hover {
    @apply scale-105;
  }

  .title {
    grid-area: 1 / 1 / 2 / 2;
    z-index: 1;
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    background: var(--gray-999);

    color: var(--gray-200);
    border-radius: 0.375rem;

    @apply bg-white text-black;
  }

  img {
    grid-area: 1 / 1 / 3 / 3;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 50em) {
    .card {
      /* height: 22rem; */
      /* border-radius: 1.5rem; */
    }

    .title {
      /* border-radius: 0.9375rem; */
    }
  }
</style>
