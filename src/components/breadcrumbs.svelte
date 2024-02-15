<script lang="ts">
  import { onMount } from "svelte";

  let stacked = $state([]);

  onMount(() => {
    console.log("hello");

    function setup() {
      console.log("page loaded");
      const content = document.getElementById("note-content");
      if (!content) return;
      const { title, slug } = content.dataset;

      if (title && slug) {
        const index = stacked.findIndex((e) => e.slug === slug);
        if (index !== -1) {
          stacked = stacked.slice(0, index);
        }
        stacked.push({ slug, title });
      }
    }

    document.addEventListener("astro:before-swap", setup);

    return () => {
      document.removeEventListener("astro:before-swap", setup);
    };
    // addEventListener("storage", (e) => {
    //   console.log("storage");
    //   console.log({ e });
    // });

    // setTimeout(() => {
    //   //   localStorage.setItem("hmm", "hmm");
    //   sessionStorage.setItem("hmm", "hmm");
    // }, 1000);
  });
</script>

{#each stacked as entry}
  <a
    style={`view-transition-name: note-${entry?.id}`}
    data-breadcrumb
    href={entry.slug.startsWith("/notes") ? entry.slug : `/notes/${entry.slug}`}
    class="hover:bg-rose-500 flex items-center hover:text-white w-fit px-2 py-4 rounded text-rose-500 bg-white font-bold font-system text-sm min-w-0 max-w-64 truncate"
  >
    <span class="truncate">
      {entry.title ?? entry?.id?.split(".")[0].replace(/-/g, " ")}
    </span>
  </a>
{/each}
