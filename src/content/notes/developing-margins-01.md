---
draft: true
title: "Developing Margins: Part 1 - The Stack"
pubDate: 2023-10-23
---

I've been working on [Margins](https://margins.gg) for a while now. It's a project that I've been working on in my spare time, and I've been learning a lot along the way. I've been wanting to write about it for a while, but I've been waiting until I had something to show for it. I think I'm finally at that point.

I'm going to be writing a series of posts about the development of Margins. I'm going to try to keep them short and sweet, and I'm going to try to keep them coming. I'm going to start with a high-level overview of the stack, and then I'll dive into the details of each component in future posts.

I'll also discuss high-level research, the goals of the app, and the design process. But that's for another time.

## The Stack

Margins is built with [Svelte](https://svelte.dev/) and uses [Sveltekit](https://kit.svelte.dev/), the full-stack framework for building Svelte apps.

For the most part, Svelte has been a joy to use. It's a very simple framework, and it's very easy to get started with. It's also very fast, and it's very easy to build fast apps with it. I'm looking forward to the upcoming Svelte 5, and their new Runes architecture. Margins currently utilizes a lot of stores, which are mostly great to work with but can face challenges when utilizing them in non-Svelte code.

Svelte loaders and form actions are great and utilized quite a bit. But we also have a caching layer that utilizes Tanstack Query.

Where form actions are not sufficient, we have a home-grown typesafe API solution reminiscent of tRPC. A previous version of Margins actually used tRPC, but I ran into a few issues with how I wanted to utilize it, so decided to implement my own (very simplified) version. For the most part, it works great.

One major problem I've been having with the developer experience is the Typescript performance in our codebase. With a lot of type magic happening behind the scenes in our API layer, the performance and autocomplete can at times be painful.

I deploy the app using Vercel, and almost entirely on the edge. Some routes which utilize node are deployed instead to serverless functions. But these are few and far between.

## The Database

Margins uses [Planetscale](https://planetscale.com/) to host our MySQL database. I've been very happy with Planetscale so far. The performance is astonishingly fast. As part of this process I've become quite comfortable writing SQL, which is fun. Since Planetscale has a serverless driver, we can use it on the edge.

Previously I used Prisma, but the performance on cold boots was slow, and when I was using it it didn't support running on the edge. However, I still greatly enjoy the experience of maintaing a schema.prisma file, so we still use Prisma to keep our schema in a single file and generate types. I use [Kysely](https://kysely.dev/), however, to write type-safe queries. Kysely can generate types via Prisma, so the whole experience is really quite smooth.

In terms of MySQL versus Postgres, I'd be happy to use Postgres but Planetscale doesn't support it, but the truth is that, for the most part, I don't really care. Modern MySQL works great.

## Other things

We use Tailwind for styling, and I've been very happy with it. I used to be a Tailwind skeptic, but after developing an app with it, I'm pretty much won over.
