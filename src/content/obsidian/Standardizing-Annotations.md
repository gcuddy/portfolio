---
id: 0w7hhj4egix
title: Standardizing Annotations
originalFileName: Standardizing Annotations.md

---

up:: [[web standards]], [[Annotations]]

Experimental idea based off https://www.w3.org/TR/annotation-model/#css-selector

Reconstruct the location of annotation cross website/in margins

Use text quote selector, primarily, refining with xpath and css path and text position

This is sort of how Hypothes.is does it, via "Fuzzy Anchoring":
https://web.hypothes.is/blog/fuzzy-anchoring/

Basically can recreate this strategy, using:
RangeSelector
TextPositionSelector
TextQuoteSelector

And then their strategy...

Actually let me just clip this article so I have it.

The problem here is that I don't necessarily recreate the DOM. But maybe I should store that somewhere? Or at the very least keep CSS classes and the general structure? (Mercury does that which is productive, I think.)

* RangeSelector
  * xpath/css selector with string offset inside them
    * (also need to save "root" element — so in many cases this would be the most parent element that contains everything — but also need to sanitize (lol))
