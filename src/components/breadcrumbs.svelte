<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";
  import {
    persist,
    createSessionStorage,
  } from "@macfja/svelte-persistent-store";
  import type { TransitionBeforeSwapEvent } from "astro/transitions/events";

  const stacked = persist(
    writable<Array<{ slug: string; title: string }>>([]),
    createSessionStorage(),
    "stacked",
  );

  let pathname = new URL(window.location.href).pathname;

  //   const stacked = writable<Array<{ slug: string; title: string }>>([]);

  onMount(() => {
    console.log("hello");

    function setup(e: TransitionBeforeSwapEvent) {
      console.log({ e });
      if (!e.to.pathname.startsWith("/notes") || e.to.pathname === "/notes") {
        console.log("resetting stack");
        $stacked = [];
        return;
      }

      pathname = e.to.pathname;
      console.log("page loaded");
      console.log({ pathname });
      const content = document.getElementById("note-content");
      if (!content) return;
      const { title } = content.dataset;

      const slug = new URL(window.location.href).pathname;
      console.log({ title, slug });
      //   const stack = JSON.parse(
      //     window.sessionStorage.getItem("stacked") ?? "[]",
      //   ) as {
      //     title: string;
      //     id: string;
      //   }[];
      //  same logic as above
      if (title && slug) {
        // $stacked = [...$stacked, { id, title }];
        console.log({ $stacked });
        stacked.update((s) => {
          console.log({ s });
          const index = s.findIndex((e) => e.slug === slug);
          console.log({ slug, index });
          if (index !== -1) {
            return s;
            // return s.slice(0, index);
          }
          console.log("pushing", { slug, title });
          s.push({ slug, title });
          console.log({ s });
          return s;
        });
      }
    }

    // @ts-expect-error - astro events
    document.addEventListener("astro:before-swap", setup);

    return () => {
      // @ts-expect-error - astro events
      document.removeEventListener("astro:before-swap", setup);
    };
  });
</script>

{#each $stacked as entry}
  <a
    style={`view-transition-name: note-${entry?.slug}`}
    data-breadcrumb
    href={entry.slug.startsWith("/notes") ? entry.slug : `/notes/${entry.slug}`}
    data-active={entry.slug === pathname}
    class="hover:bg-rose-500 flex shrink-0 items-center hover:text-white w-fit px-2 py-4 rounded text-rose-500 bg-white font-bold font-system text-sm min-w-0 max-w-64 truncate data-[active=true]:ring ring-rose-500 ring-inset"
  >
    <span class="truncate">
      {entry.title ?? entry?.slug?.split(".")[0].replace(/-/g, " ")}
    </span>
  </a>
{/each}
