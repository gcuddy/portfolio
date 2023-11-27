<script lang="ts">
  import type { CollectionEntry } from "astro:content";

  interface $$Props {
    project: CollectionEntry<"projects">;
  }

  export let project: $$Props["project"];

  $: ({ data, slug } = project);
</script>

<!-- TODO: get commits from githubs... -->
<div class="relative transition card-outer">
  <a class="card" href={`/project/${slug}`}>
    <div class="bg-white text-black title font-sans">
      <span>{data.title}</span>
    </div>
    <img
      src={data.image}
      alt={data.title || ""}
      loading="lazy"
      decoding="async"
    />
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
