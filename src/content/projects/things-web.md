---
title: Some Thing
description: A local-first todo web app inspired by Things.app, with realtime sync
image: ./assets/things-web.jpg
dates: "2024"
pubDate: 2024-01-13 00:00:00
url: https://things.guscuddy.com/
featured: true
tags:
  - Dev
  - Design
  - Recurse Center
technologies:
  - Svelte
  - Replicache
  - Partykit
  - WebSockets
  - IndexedDB
github: gcuddy/some-thing
scope: project
---

A loving riff on the great [Things](https://culturedcode.com/things/) by Cultured Code, built as a [local-first](https://www.inkandswitch.com/local-first/) app with web technologies that supports realtime sync and sharing.

## Built with

- Svelte / Sveltekit
- Partykit (handling websockets and background sync)
- Replicache (client-side sync framework that utilizes IndexedDB)
- SQLite database on the Edge with Turso

## Features

- Date picker!

<video src="https://github.com/gcuddy/replicache-sk/assets/24555627/5f472bad-5061-4c9c-a0fe-ddb2d7172ce5" autoplay controls></video>

- Quick Find

<video src="https://github.com/gcuddy/replicache-sk/assets/24555627/75dde67a-aec4-470d-8d07-6b8bcad1f51a" autoplay controls></video>

- Projects, Areas, Lists

- Local-first: incredibly fast, no spinners, work offline - but still get syncing online

## Acknowledgments / Inspiration

Things 3 is one of my favorite pieces of software. I love its speed, maturity, and design. Its brilliant interface and interaction design still somehow feels fresh even though its design came out in 2017.

## TODO

- Enable users to share and collaborate on individual lists
- A more robust user system with authentication (currently it's just for demo purposes)
- Differentiate (more than semantically) between Projects, Areas, and Lists (my own feature addition)
- More robust repo structure (monorepo)
