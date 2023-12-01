<script lang="ts">
  import { fly } from "svelte/transition";

  export let url: URL;

  const existingTags = url.searchParams.getAll("tag");
  const existingTech = url.searchParams.getAll("tech");

  export let tags: string[] = [];
  export let technologies: string[] = [];

  const makeLink = (key: string, value: string) => {
    const _url = new URL(url.toString());
    let existing = _url.searchParams.getAll(key);

    if (existing.includes(value)) {
        existing = existing.filter((v) => v !== value);
        _url.searchParams.delete(key);
        existing.forEach((v) => _url.searchParams.append(key, v));
    } else {
      _url.searchParams.append(key, value);
    }

    return _url.toString();
  };
</script>

{#if url.searchParams.has("filter")}
  <div transition:fly class="flex flex-col text-left mt-4">
    <!-- <span class="text-center">Filter</span> -->
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-1">
        <span class="text-base">Tags</span>
        <div class="flex flex-wrap gap-2 justify-start items-center">
          {#each tags as tag}
            <a
              href={makeLink("tag", tag)}
              data-active={existingTags.includes(tag)}
              class="bg-white/5 backdrop-blur-md rounded-lg py-1 px-2 text-sm data-[active=true]:bg-rose-500/25"
              >{tag}</a
            >
          {/each}
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <span class="text-base">Technologies</span>
        <div class="flex flex-wrap gap-2 justify-start items-center">
          {#each technologies as t}
            <a
              href={makeLink("tech", t)}
              data-active={existingTech.includes(t)}
              class="bg-white/5 backdrop-blur-md rounded-lg py-1 px-2 text-sm data-[active=true]:bg-rose-500/25"
              >{t}
            </a>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}
