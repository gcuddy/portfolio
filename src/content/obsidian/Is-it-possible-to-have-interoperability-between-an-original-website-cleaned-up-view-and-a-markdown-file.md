---
id: oc1i2mht0ze
title: Is it possible to have interoperability between an original website,
  cleaned up view, and a markdown file?
originalFileName: Is it possible to have interoperability between an original
  website, cleaned up view, and a markdown file?.md

---

up::
tags::
dates:: 2022-05-07

# Is it possible to have interoperability between an original website, cleaned up view, and a markdown file? ↯

[[△ Margins]]

What I'm thinking here is essentially:

* In Margins, you can read an article in a "clean" view, like Instapaper, Readability, Pocket, etc.ß
* When you highlight or annotate, these highlights/annotations map onto the "real" website, so that when you visit the website those highlights/annotations are there (like in Hypothes.is)
  * This would use the [[𖠫 Web Annotation Data Model]] — essentially use a css/xpath selector refined by a text position selector, refined also by a prefix/suffix for maximum compatibility?
* On the file level, this translates into an (optional) markdown file: The markdown file can represent the original source, like [[My Note Making Flow – Interdependent Thoughts]], and then have highlights wrapped with a highlight syntax `==`, for instance. Or the file could just represent the highlights, with the comments.
  * This latter version would be akin to what Andy Matuschak has talked about with live export. See [[Export is one-way and limiting]]
  * But would it be possible to have a "direct" connection between a Postgres DB and a markdown file, for instance?

#on/notetaking
#on/ux
#note/question
