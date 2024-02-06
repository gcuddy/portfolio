---
aliases:
  - PKM
id: c252667ac6g
title: PKM
originalFileName: PKM.md

---

---
aliases:
  - PKM
id: uknlfo86ha
title: PKM
originalFileName: PKM.md

---

#map #note/tidy

Regarding PKM, this is sort of a "master note" for all things:

* [[Zettelkasten]]
* [[BASB]]
* [[Evergreen (or Atomic) Notes]], Atomic Notes, etc.
* barebones concept of "[[linked notes]]"

And some heavy hitters (for me) in this space:

* [[Andy Matuschak]]
* [[Tiago Forte]]
* [[Nick Milo]]
* [[Ton Zijlstra (Zylstra)]]
* [[ryanjamurphy]]
* [[davecan]]

(embarassingly, these are all dudes. incidentally one thing i really liked about tiago was his pushing of [[adrienne maree brown]]; unfortunately, i fear he has sold out a bit.)

Some ideas:

* [[Using a form of outline note to orient yourself when using linked notes 20220913022451]]
* [[Using open questions as a lens]]
* Note "types" - refactor this
  * [[My own taxonomy of note types]]
  * [[Scaling synthesis, note types]]
  * [[Using schemas and types with personal notes]]
  * [[20220103015639 types of notes]]
  * [[Identifying patterns in different types of notes, and how to optimally design outline notes davecan]]

And with that:

* File organization, [[Files & Folders MOC]]
  * [[My own folder structure for my notes]]
  * [[Flat Structures vs Folders]]

Some other ideas:

* Using note colors (supercharged links); see [[Link colors documentation]] and [[Emoji (Supercharged links)]]

## Notes with tag pkm

```dataview
list where contains(file.etags, "pkm")
```

## unrequited notes

```dataview
TABLE file.mtime.year + "-" + file.mtime.month + "-" + file.mtime.day as Modified

FROM [[]]
and !outgoing([[]])

SORT file.mtime desc
```
