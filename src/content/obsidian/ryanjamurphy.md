Active user in Discord/Forums for [[Obsidian]] also [[DevonThink]], [[Mac Power Users]]

Links:

- MPU Forum: https://talk.macpowerusers.com/u/ryanjamurphy/activity
- Obsidian Forum: https://forum.obsidian.md/u/ryanjamurphy/activity
- Obsidian Discord:
- DevonThink Forum: https://discourse.devontechnologies.com/u/ryanjamurphy


## Notes on his notes/task setup

A few things. - I use the Review plugin to push notes and blocks to different daily notes as tasks. - In turn, My Daily Note template includes an embedded search for open tasks in my daily notes folder. (`line:(/- [ \] .*/) path:calendar`) So each Daily Note includes an auto-updating collection of tasks that have been given a "do date". \- I use a very small number of tags to indicate project status. They're either `#fire` (i.e., literally currently doing this) `#engagements` (i.e., an active/ongoing deliverable), `#backburner` (I'm waiting for something), and nothing. I regularly review a project inbox that has embedded searches for these tags so that I am conscious of what my responsibilities are. This approach is project\-focused. I don't have a lot of todos spread over the areas of my life, but instead I tend to focus on a project (represented by a note) at a time. So I won't pretend that these ideas will apply to someone who has more piecemeal responsibilities that require routine management/execution.

---

 2021-04-16 From the MPU Forum:

 > Please please share your tag set up.

Hah, it’s nothing magical. In Obsidian I use a status-type tag: either `#🔥`, `#engagement`, or `#backburner`. (For specific kinds of notes, I indicate note types with special unicode symbols in the title: ⧸△ is an open project, ⨳ is an area of responsibility… this makes it easier to quickly filter when using autocomplete-type searches, and it provides a visual indicator of project status just from the link. A bit weird, but it works for me!)

Then, I just tag my reference material by type. I have a predefined list of type tags, and use a Keyboard Maestro macro to call it up. From there I select whichever ones that apply to the current record.

That’s it!

[](https://talk.macpowerusers.com/t/583-the-obsidian-deep-dive/22772/89 "go to the quoted post")

![](https://talk.macpowerusers.com/user_avatar/talk.macpowerusers.com/mitchwagner/40/7514_2.png) MitchWagner:

> What I _think_ I want to do is select a block and tell Obsidian “append this to this other note there without my actually having to open the note.”

Yeah, Workbench does this. Right now the workflow is choose note, append stuff (as two separate commands), so it’s kinda clunky if you want to send things to all manner of notes. I’m planning an update that provides a mechanic for on-the-fly appending to any note in your vault, though.

---

On notes and folders:

I haven't caught up on the convo yet, so maybe this has already been said to some degree. **We interact with our notes in essentially three ways: input (what you put into your notes), output (what you produce from your notes), and throughput (how you interact with your notes in-between)**. We can think about the kinds of organizational problems you're describing by considering the qualities of input workflows, output workflows, and throughput workflows that we care about. In fact, since the quality of input informs the quality of throughput, which informs the quality of output, we should probably start at the end: what do good output workflows look like to us? What ways of working with your notes (throughput) will facilitate those good output workflows? Finally, how do we need to shape our input processes to fit? ^ee1e9a


All this may sound vague until we put the work in. But note that we have to figure out all three—**==output, throughput, and input==**. Thinking about one on its own may lead to ideas that don't fit with the others. For me, I want my notes to be a place of action and creation. Most of my notes are anchored to my research missions, questions, and the projects those involve. I want those lines of research to be clear, and I want them to be visible, so that I happen upon them to **facilitate serendipity**. Last, I want to **stay on top of those projects without having to think about them** (GTD-style). So, that's a few output-level qualities. Throughput-wise, that means I have a few core principles. I want to spend the **minimum amount of time possible doing janitorial work in my notes**. So, I've adopted a few techniques and personal "grammars" to minimize how much effort I have to put into keeping things organized. For example, ==I **only worry about bundling items into folders opportunistically**== (e.g., **items related to a given project will go into a folder when I have the opportunity**). **Otherwise, I use structural notes, lots of linking, and search to work with my thoughts**. I also want my notes to be super generative, so I have adopted some **evergreen/MoC-ish** ideas. My interest in avoiding janitorial knowledge work continues on the input front. **I don't want to think about a thing when I'm capturing a note**. So, I **don't do up-front categorization**. See above re: opportunistic organizing. I also want to **capture everything**, because I'm not sure what will lead to serendipity later. So I **let daily notes drive my thinking**. I'm not describing everything here, of course. My intention is not to provide an exemplary model for you or anyone else. Hopefully, though, it shows how to apply the **output←throughput←input** model to think about the organizational quandary you're stuck on. ^158c44


## Screenshots

Graph view:

![](https://cdn.discordapp.com/attachments/709712341066842113/830196476973023272/Screen_Shot_2021-04-09_at_3.44.07_PM.png)
q: what is file:md doing there?

![](https://cdn.discordapp.com/attachments/710585052769157141/829874353080107048/Screen_Shot_2021-04-08_at_6.23.36_PM.png)

![](https://cdn.discordapp.com/attachments/744933215063638183/830888490832101437/Screen_Shot_2021-04-11_at_1.29.16_PM.png)

One thing I don't understand with his system: is there a leading / before note titles? Why? Ah: perhaps to


## Critique of PARA

![[knowledge-management - Discord-Discord-screenshot-2021-04-17T184737.jpg]]

ryanjamurphy (he/him) 05/28/2020
have some critiques of PARA that I've been writing up, but
haven't published yet. One of the primary ones is the
simultaneous maintenance of groups of files/ideas in
separate places. In Tiago's setup, the separate places are
Evernote, Things, etc.-I don't want to move around projects
in multiple apps as I work through my week
The second one is that it lightly corrupts the idea of an Area
of Responsibility. The third is that it conceptually overloads
the idea of a "Project."

Gotta write these
up more robustly...

## on relationships between ie meetings and projects

![[general - Discord-20210516210421.jpg]]


---

Shortcut to start writing:


![[plugin-advanced - Discord-20210519122638.jpg]]
![[Pasted image 20210519122844.png]]

I wonder what Hearth is? Perhaps a home for all tasks/a home dashboard? That's what I'm thinking of setting up...

---

https://forum.obsidian.md/t/in-what-ways-can-we-form-useful-relationships-between-notes-long-read/702/13

on conceptual modeling and [[Flat Structures vs Folders]]

Here’s food for thought. The conventional approach to conceptual modeling is the main paradigm being discussed here: classification. When we set up any information system, we tend to begin by answering “What kinds of data are we putting in this system?” Implicit in this question is the idea of “kinds”: People, Locations, Projects, Events, as [@ja\_rule](https://forum.obsidian.md/u/ja_rule) mentions, are an example of a “kind.” But so are “Notes” or “Blocks” [as has been discussed elsewhere here 10](https://forum.obsidian.md/t/how-to-do-block-referencing-in-obsidian/831). The idea of assuming that everything has a kind is so embedded in our thinking that we rarely question it.

Before I go on, let me clarify something real quick. In information modelling, we typically refer to these types of kinds as _classes._ An entry in a database is an _instance_. In other words, the real-world stuff we put into information systems are instances of stuff, and we conventionally instantiate our stuff by saying it is one of a given class of thing.

In the conventional paradigm, classes (and the relationships between them) make up the system’s _conceptual model_. (The model is a digital representation of [the _ontology_ of the domain 9](https://forum.obsidian.md/t/imf-advanced-starter-kit-v2/390/12), from our perspective.)

However, another option exists. After all, why do things need to be a kind _before they are a thing_?

As the “You are a person” example illustrates, every instance is actually unique. By classifying everything, all the time, we may actually degrade the quality of information in that instance. As [@nickmilo](https://forum.obsidian.md/u/nickmilo)’s example shows, when we classify a person as “born in the 1980s,” we tend to lose the data that they were “born in Canada.” (That is a strikingly bad conceptual model, but hopefully it illustrates the point.)

As it happens, by developing these ideas in this thread, y’all have essentially reproduced my PhD supervisor’s early papers (e.g., [“Emancipating instances from the tyranny of classes in information modeling” 15](https://dl.acm.org/doi/abs/10.1145/357775.357778)).

This—all of this!—is why flatter structures tend to be better _for information quality_. This is especially true when the purpose of the information isn’t known from the start, or when the information may be used in ways originally unintended.

In order to resist the paradigm of classify-first information-later, we can embed as much richness in our instances as possible. In other words, _when capturing information_, go for richness, and include rich semantics and metadata so that you’re representing the thing you’re capturing as completely and usefully as possible.

In other other words: **when you’re note-taking, capture rich notes, use useful tags, and keep good metadata (e.g., always list a book’s title in the same form along with a quote from the book).**

Obviously, though, just because flat structures are good for information quality doesn’t mean they’re good for information _use_. [Classification has many cognitive benefits. 10](https://www.jstor.org/stable/25148874?seq=1) Economy is one: it is easier to think of a person by representing only their basic demographics than by empathizing with their person-hood—especially at scale. Inference is another: when we see a piece of data and know that it’s a Person, we can infer that it has a birth date and some kind of citizenship.

So what? Well, if we’ve captured rich data in a flat structure, we can then layer purpose-built conceptual models on top of that data.

In other words, **with a flat data structure, we can use tools like smart searches, tag panels, and ontology notes (what [Nick calls “maps of content”](https://forum.obsidian.md/t/imf-advanced-starter-kit-v2/390/14)) to view, filter, query, and organize rich data according to whatever need we might have in a given moment.**

None of will be new or surprising to most, I suspect, but I hope it’s interesting to note that there’s science behind the conclusions that have been discussed already!

In terms of this thread, I think the key practices people should adopt are:

-   Capture notes with richness and good metadata.
-   Flatten your data structure as much as possible.
-   Create _purposeful_ relationships between notes. I.e., don’t create conceptual models—that is, build organizing structure, or relate notes to one another—based on some predicted, anticipated need. Only organize your notes according to an actual, current need.
    -   Such a need, of course, could simply be to explore an interest of yours. The “need” to put your newest note somewhere _doesn’t count_.
-   When you do have a purpose, choose how to organize (and what tools you should use) based _on that purpose_.
    -   If exploring an interest is the purpose, a [Map of Content 33](https://forum.obsidian.md/t/imf-advanced-starter-kit-v2/390/11)/[Ontology 19](https://notes.andymatuschak.org/z29hLZHiVt7W2uss2uMpSZquAX5T6vaeSF6Cy) note is probably be best approach to organizing your notes.
    -   If managing inline tasks while you research is the purpose, creating a backlink collection with a pseudo-tag [(as explained here by @deftdeg) 42](https://forum.obsidian.md/t/how-do-you-handle-tasks-in-obsidian/822/8) is probably the best organizing approach. Hashtags could also suit.
    -   If you’re putting together a project or a publication, a [speculative outline 48](https://notes.andymatuschak.org/z2uXyfV67dnWLUKg1iDbsrHk3DGjtNWTxSTah) is probably the best organizing approach.

I hope this landed! If it did, a question for anyone interested: what other purpose → organizing approach pairs are out there?

_…apparently I’ve been paying attention in my PhD_


---

metadata:

I try really hard to make what I call "metadata" semantic—i.e., easily readable and intuitively found in the context of the files. The open project symbol △ vs closed ▲ is one example. Simply by glancing at a file I can tell whether I should care about that project or not. Another is that I usually indicate what the next action is/what the waiting for status might be with a "status:" line just under a project note's header. I'll use hashtags and links here, too. And hell no, I use folders extensively; things are just in rough categories. I don't worry about it too much, though. The main use of folders for me is keeping assets (diagrams, data, slides, etc) for a project together in one place.

_[_10:40 PM_\]_

I'd probably use YAML for some of this, maybe, except that using Obsidian and NotePlan together means no YAML ;<

![❤️](https://discord.com/assets/0483f2b648dcc986d01385062052ae1c.svg)

1

March 4, 2021

I need to write it up more fully (I should make this a text expansion snippet) but... an open project looks like this: `⧸△ Some project title` if it's done with I switch it to this: `⧸▲ Some project title` I am experimenting with the filename bit. It makes it easy to grab in autocomplete searches but I don't like storing status (open/closed) metadata in the filename

---

I think this is why the extra character:
Seeking ideas: I like to use symbols to visually (and alphabetically) distinguish certain kinds of notes from others. For instance, `△` is an open project. By listing a project note as `△ project name`, it shows up in a certain order when sorting alphabetically, it is easy to grab when using autocomplete prompts (e.g., linking or quick opening) and so on. When I have completed such a project, I'd like to use `▲` to indicate it's finished, for the same reasons. However, as I've used this "system" for the past few months, I've noticed a trend. I am a human, with a fallible brain. Ergo, when I'm searching for "that project I just finished," I search for `△`. Because I'm dumb. But, the project doesn't show up, as I've replaced the `△` symbol with `▲`. Obviously. Despite the obviousness, though, it usually takes me a bit of lookin' before I realize that the item I'm looking for is not in the list I've just generated. Duh. An obvious answer to this Very Significant Issue is to keep the `△` symbol somehow... So, when I've finished a project, add the `▲` symbol (i.e., `▲△ Project name`. But, also obviously, that's kind of ugly. is there any other approach you can think of that would save me from myself?



---

## Unicode Symbol System

[[Unicode Chars]]

- ᐤ := open
- • := closed
- ∵ := responsibility
- ᠅ := role
- △ := project
- ⟁ := subject
- ⧉ := inbox
- ☰ := wayfinder
- ∎ := summary (looks like this one doesn't show up)
- ꆜ := Person
- book/source?


He also has one for question - ↯ ?
MW place?



[[The Curtain 103]]


## On Discord as a Notes app

I actually don't see Obsi as a notes app, but as a tool for managing and synthesing unstructured and semistructured data... I think there's a lot of that in the world, and therefore there's room for Obsi to grow.

- Doesn't link to attachments, just between notes
- ↯ Does it make sense to move to [[Scrivener]] once there's enough "structure"?

Using vault folder for everything (Materials/Projects), but not wanting it to be cluttered:

> (Restating for clarity: this would be a toggle or similar, not a default)
> There seems to be an assumption that what I'm talking about is bad for new users-but surely I can't be the only person whose vault is ~50% attachments.
> For example: I've been working on a research project on data granularity with a collaborator for the past two years or so. I have maybe 10ish notes with the term "granularity" in the title. If initiate an autocomplete search for the term "granularity," though, I get-100-200 results: every image in any folders with "granularity" in the folder name, and every .docx and PDF version of the papers we've iterated upon, etc.
> **I don't think it's entirely unlikely that a "new" user will start a vault on a bunch of existing files, intending on using it for notes on those files, only to find this kind of clutter disruptive**. Not a great experience! also think this is an important issue at scale. As anyone's vault content grows, it'll become increasingly important to provide methods of narrowing results by type. (edited)

> And yes, you could tell Obsi to not recognize attachments at all, but that has a few big drawbacks: - Obsidian Sync won’t sync the files, which could be crucial on other devices - Sometimes you might actually want to link these items, just not as often as you want to use your notes on them - You wouldn’t be able to view the items in e.g., Obsi mobile, which also might be necessary I’m actually very happy with the new quick switcher toggle. Just furthering this debate because it’s interesting.

That's not how I use Obsidian at all... interesting though.



## Screenshots

Projects Kanban

![[2021-05-11_12.34.39.gif (2238×795)-20211014171746.jpg]]

![[ryanjamurphy obsidian screenshot.png]]

![](https://cdn.discordapp.com/attachments/744933215063638183/1054759495202525294/CleanShot_2022-12-20_at_10.24.23.png)
