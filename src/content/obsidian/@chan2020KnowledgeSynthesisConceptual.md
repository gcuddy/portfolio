---
title: 'Knowledge synthesis: A conceptual model and practical guide'
aliases: ['Knowledge synthesis: A conceptual model and practical guide']
source: 'https://oasislab.pubpub.org/pub/54t0y9mk/release/2'
citekey: chan2020KnowledgeSynthesisConceptual
---

#source/paper 
#input

- metadata
   - zotero:: [Zotero](zotero://select/items/@chan2020KnowledgeSynthesisConceptual)
   - author:: [[Joel Chan]]
   - date:: 2020

# Knowledge synthesis: A conceptual model and practical guide

My initial audience for this document is researchers who struggle with **knowledge synthesis** (aka a “real” literature review"), which is the nebulous “black box” in between

> “I have found a bunch of papers to read”

and

> “I now have synthesized the literature and have a set of promising angles of attack on my research problem”

---

Before we go further, let’s define our target: what is **synthesis?**

A good place to start is to compare extreme examples:

Here is a “lit review” of observations with no synthesis:

> Species vary: some variations are bad, and some help with survival. Species struggle to survive. Some, but not all, organisms pass on new offspring.
disc
And here is the same set of observations, synthesized:

> Species struggle to survive. Species also vary, and some variations are good and some are bad for survival. Therefore, one precondition for species to survive and pass on offspring is by having or inheriting beneficial variations. This variation and selection process explains how we get the diversity of species we see today.

Notice how the second example _**creates something new**_, greater than the sum of its parts, namely the explanation for the origin of species. ==This is a core aspect of synthesis: the _**construction**_ of a new point of view from a set of observations, that directly advances knowledge and/or opens up a path to advancing knowledge.==

In this case, the synthesis yielded a _**theory**_, which to me is a paradigmatic example of synthesis. But a good synthesis can also take other forms, such as a critical literature review that leads to a set of powerful new research questions, or a design argument or problem frame.

---

Here are some common failure modes for a synthesis system and process that I have experienced and observed in others (not mutually exclusive!):

1.  **Too much detail** (too low-level, missing forest for trees). This manifests as a lack of higher-level synthesis of what a collection of results means. A common manifestation is the “x said this, y said this, z said this” form of literature review.
    
2.  **Too little detail** (too high-level, missing the devil/diamonds in the details). This manifests as overgeneralization of claims, or glossing over critical inconsistencies or contradictions. A good example of this is debates about the role of “children” in COVID-19 transmission that ignore the details of differences between young children (under 10).
    
3.  **Insufficient context**. This is related to the lack of details, but separate in that context can also come from connection to other claims: if this is missing, even observation notes can be lost because their significance isn’t recognized.
    
4.  **Information silos.** This manifests in part also due to inordinate detail-orientedness, where important connections across disciplines or topics are ignored. This can also come from too little detail! If results are described at too high a level, we might miss important connections at the subproblem level between problems and results.
    
5.  **Information overload**. There are often too many papers to read and process in a rigorous and iterative way, which leads to / exacerbates the preceding set of problems!

---

## The conceptual model

### “Data model”

==In this model, we create and update four basic kinds of entities in the synthesis process:==

1.  **Question** notes, which express an open research question,
    
2.  **Synthesis** notes, which express a single, generalized idea, such as a claim,
    
3.  **Observation** notes, which express a single, highly contextualized and specific observation that, together with other observation notes, can form the basis of a synthesis note, and
    
4.  **Context snippet** notes, which help to ground and contextualize observation notes.
    

Let’s consider each kind of entity in a bit more detail.

### QUESTION notes

Question notes express an open question (e.g., _“What is the effect of analogical distance of inspirations on creative output?”_). They can be readily mapped to research questions in research projects.

### SYNTHESIS notes

Synthesis notes articulate a single, generalized idea, such as a claim (e.g., _“Inspirations that are of intermediate distance from the problem domain strike the best balance between benefits for novelty and quality of ideas”_). In some cases, a synthesis note can encapsulate a more complex single idea, such as a theory (e.g., _“Darwinian theory of evolution by natural selection”_), high level argument (_“Scientific observations are theory-laden”_) or problem (e.g., _“The demarcation problem in philosophy of science”_)

By generalized, we mean that synthesis notes should aim at something that is true of an _equivalence class_ of instances instead of expressing a bounded statement about a single instance.

Synthesis notes can be mapped to citation statements in academic publications, which are typically generalized and drawing on more than a single source. They are also similar in flavor to “claims” in the micropublications model [undefined] (although it can encompass more complex things than a simple assertion), and ==“permanent notes” in the Zettelkasten method==.

### OBSERVATION notes

Observation notes articulate a **single, highly contextualized observation** (e.g., _“the finches on the island had different colored beaks after two generations”_).

By contextualized, we mean that observation notes should **tend towards being bounded in the particulars of time, authorship, and setting**, as opposed to trying to describe a generalized claim that holds over an equivalence class (that is the function of synthesis notes). The intuition is that observation notes should be as close to “the data” as possible. They should be similar to how results are described in results sections of academic publications.

By convention, **we write them in the past tense** (to ground them in _time_), **bind them to an assertor where possible** (to ground them in the standpoint of the author), and **tend towards lower levels of abstraction** (to ground them in relevant particulars).

Observation notes can be mapped to ==“literature notes” in the Zettelkasten method==, or “lines of evidence” in models of scholarly argumentation like the SEPIO model

### CONTEXT SNIPPET notes

Context snippet notes capture (and optionally describe) contextual details that ground the observation notes.

Contextual details is a broad term, but generally includes things like specific figures, data items, tables, or quotes that are the basis for an observation, as well as metadata (e.g., authors, year, publication) and methodological details that are important for understanding and evaluating an observation note.

As a practical matter, I’ve found it more useful to use screenshots as context snippets, rather than plain text grabs. I find that this gives me the freedom to be a bit more sloppy and inclusive in the context of the quote (vs. very precisely specifying something), easier handling of images/figures/tables, and forces me to redescribe the context snippet, which enhances comprehension and recall. I also don’t need to waste time fixing up text (OCR mistakes, formatting, etc.)undefined!

---
mw:: cc davecan system
![[Pasted image 20210922131239.png]]

There is a hierarchical relationship between the artifacts: **question** and **synthesis** notes (at the top "layer") are supported/opposed/informed by one or more **observation** notes (at the middle "layer"), which are substantiated/contextualized by one or more **context snippet** notes (at the bottom "layer").

Synthesis notes can also be composed into more complex structures (such as arguments or theories or models) through relations with other synthesis notes that vary in complexity from simple "relates to", to implication/explanation and support/opposition.

From a practical standpoint, it’s probably most important to implement the typed distinction between entities (synthesis vs. observation vs. context snippet); typed distinctions between relations could significantly enhance the system's ability to augment human synthesis, but significant boosts in synthesis will likely accrue with implementation of only the three distinct artifacts (without explicit typed distinctions between relations).

## Examples

Note: while synthesis notes should, whenever possible, be supported/opposed by multiple observation notes, for simplicity here I will only show a single thread through from context snippet to observation to question/synthesis.

![[Pasted image 20210922131711.png]]
In this example, we have:

1.  A **synthesis** note that _“Children are approximately half as likely to contract COVID given equivalent exposure”_
    
2.  An **observation note** from a paper [undefined] that _“in an exhaustive contact tracing study of 13 families in Central Israel, the COVID secondary attack rates for children < 10yo was ~2x lower than adults”._ This observation note supports the synthesis note.
    
3.  Three **context snippets**, including a screenshot of the raw descriptive results and test statistics for the differences between age groups, one context snippet about the exhaustive testing regime (i.e., regardless of symptoms), and the number of participants and setting. These context snippets ground the observation note, and are extracted from the paper’s PDF.

This bundle of synthesis, observation, and context snippet notes is embedded in a larger network of synthesis/observation/context notes that is focused on understanding the risk of reopening schools for elementary school-aged children (a personal concern of mine!). The following figure demonstrates this. The focal synthesis note we just discussed is highlighted in bold.

![[Pasted image 20210922131840.png]]

In Roam:
![[Pasted image 20210922131925.png]]

Here, the focal synthesis note is instantiated as a page.

The observation note about secondary attack rates is _transcluded_ into (via block reference, and therefore a _part-of_) the synthesis page.

The context snippets are linked to the observation note via indentation in the outline as well as via hyperlinks to their block references, all of which create explicit bi-directional links in the underlying database between the items. Note here also how one of the context snippets includes a crucial detail that the testing regime was exhaustive (regardless of symptoms), which lends additional strength to the observation and how it might support a more informed synthesis claim about COVID transmission risks for children.

Both observation notes and context snippets are also _part-of_ a page dedicated to the particular paper from which they came


----

Chan has more examples here that are helpful but which I won't include

## Process

1. Articulate question notes
2. Create observation notes from papers
3. Develop synthesis notes, link them to questions
4. Compose synthesis notes into arguments/theories


==Video of Chan using system:==
https://www.youtube.com/watch?v=uUF0XWk0bns