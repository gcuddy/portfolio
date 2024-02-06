---
---
#literature #source/article #pkm 

https://thesephist.com/posts/inc/

- Notes should evolve over time
- "Good notes should behave like memory"
- adding new information to an ever-growing log of our thoughts vs current version of reality
	- not sure I really understand this distinction...

Principles:
1. Captured ideas are better than missed ones - never miss an idea, write everything down
2. Adding new ideas is better than updating old ones
	- This is the most interesting idea to me: "Updating notes in-place is inherently lossy, and I think it’s unnecessary" Linus argues when we go back and erase what's incorrect we lose the context of the original, which is unhelpful.
	- We shouldn't replace old notes, but add new things alongside the old ones
		- doesn't this get super messy tho?
3. Ideas that can't be recalled are worse than useless - effective search and recall form the soul of great notes.
	- sure, agree on that
4. Time is essential to how we remember, and should be a first-class concept in a good note-taking system
	 - moment in time we learned/thought something is a "mental anchor" we use to remember nearly everything, should not be thrown away
		 - good argument for using timestamps?

Should be an extra layer of memory you "grow around yourself"

I'm not sure why Linus attacks things like Obsidian — I can easily create timestamped fleeting notes, and connect them with other ideas. I leave those in place in an Archive and then link them out to newer notes, which are also timestamped.

I guess Linus wants time as a first-class citizen, which I get. But I'm fine creating a system around using time implicitly as first-class with simple markdown files. But maybe this is a blindspot for me, where I'm unclear how a piece of software could really help me

He uses an app he created ([[Specific computing, or making your own apps 20211220133014]]) to take notes on people that sounds pretty cool, I'd like to adopt some of the same features, either in Obsidian or in an app like CardHop (or build my own?):

> The first tool I personally built that embodied the incremental note-taking principles is probably [Mira](https://thesephist.com/posts/mira/), which I still use a year later as my primarily “people notes” app. I built it to replace my ever-growing mess of a note about everyone I knew and wanted to keep in touch with. Mira is fast – it often loads fully in the time it takes for Notion to start showing its loading spinner. After a conversation with someone, I always go back to Mira and add a few things I remember from the conversation, marked by the day’s date. When I open the app, Mira will show me people I’ve spoken to most recently, based on the conversations I’ve recorded. This means Mira is aware of time. In Mira, I rarely ever delete something from my past notes. Rather than removing “works at GFC” and replacing it with “works at Ideaflow”, I simply add a new entry: “Spoke at a tech dinner in New York, now working at Ideaflow”. In this way, Mira is a collection of notes grown incrementally over time. It describes a world changing through time, rather than a snapshot of it today. Lastly, Mira has some structured and free-form search. It’s lacking, but hopefully improving soon.

^^ that resonates with me, it's sort of how i work but could make it more explicit. i pay for Cardhop but don't know how to use it, but again part of me is attracted to just having everything in one place in Obsidian. But perhaps that's a mistake. For me, mobile [[Obsidian]] is very slow, probably because of my absolutely massive vault. It really kills me ([[When it comes to software, speed is king. 20200923144554]])

> [Ideaflow](https://thesephist.com/posts/ideaflow/), the note-taking software I help build at work, also embodies many of these principles. In fact, Ideaflow is my current “main” notes app. Ideaflow’s main interface is a timeline of notes, what we’ve internally called your “thought stream”. Imagine a long Twitter-style timeline, where each tweet is a note of some arbitrary length, potentially linking to many other notes. Many of these notes are short and simple, like random ideas or interesting links I read on the subway. There are even little facts I probably wouldn’t have put in my notes in most other apps, like transcripts of important emails and a list of publicly accessible bathrooms around the city. These are the 90%, underneath-the-surface thoughts that don’t really belong anywhere specific. Of course, there are also detailed, long-form notes like plans for conference talks, a folder of potential blog topics, records of conversations, and project ideas. Between my 980 notes today, there are around 1250 connections linking people to conversations, companies to investors, and ideas to their progenitors and other ideas inspired by them. So in a sense, incrementally, over time, Ideaflow helps me built up a sophisticated knowledge graph too. But in Ideaflow, time is a first-class citizen. Rather than a haphazard web of connections and words, notes go neatly into a timeline, grouped by days and weeks. This organization works together with my natural memory to help me remember things in units of time that I already use to understand my life. When I learn something new, I simply push another note onto the top of my timeline of notes, perhaps something connected to an older idea. Over time, this web grows denser and more populous like a forest of ideas growing around my life. I’m biased, of course, but I’ve found what I’ve been using so far to feel like a _true_ extended memory, more than simply another database of facts.

I see. His little tool, inc, is append-only. Which seems crazy, but it has some cool features, like being able to see the history of your notes. just going to copy and paste it all in here:

Inc is an experimental, [append-only](https://en.wikipedia.org/wiki/Append-only) notes app. This means you grow your notebook by adding information to existing notes, or adding new notes; never modifying older ones. This approach to taking notes feels strange at first. Why would we want a notebook where we can never update our notes? What if something about the world changes?

Rich Hickey, in his talk about the design of the Datomic database, gives us the answer:

> If my favorite color was red and now it’s blue, we don’t go back and change the fact that my favorite color was red to be blue – that’s wrong. Instead, we add a new, updated fact that my favorite color is now blue, but the old fact remains historically true.

> In other words, this database (like our memory) doesn’t update information by forgetting what was once true, and overwriting it with the new fact; instead, it simply remembers that the fact changed at some point in **time**. Using this approach, we can have a notes app where we only add new information, and never delete old ones. (With this approach, it’s also obviously extra-important for our tools to understand time.)
> 
> Inc is currently just a command-line utility with a few commands:
> 
> -   `+ Some note about #ink` adds the note “Some note about \#ink” to my notes. `#ink` is a tag I might use to search through my notes more effectively, but it has no special meaning beyond showing up in a different color in the app.
> -   `/some keyword` searches my notes database using the keywords, and gives me a numbered list of the matching notes. Because the results are numbered here, I can then take another action:
> -   `@12 Goes to Stanford` adds the information “Goes to Stanford” to note number 12 returned from my previous search.
> -   Typing `history` shows us the full edit history of my notes database. In Inc, the way my notes _came to be today_ is just as important as the information it currently holds. Using the history, I can rewind my notes back to any specific day, or just remember what I learned at any point in the past.
> 
> There are a few other shorthands and commands, but this is the core of Inc. Thought of something? Write it down in seconds. Trying to remember something? Search for it immediately. Want to review and understand your notes? Sift through time with a full history of your notes. Inc is focused on quickly capturing what’s on your mind, growing a knowledge base incrementally around your life, and helping you understand your notes with a first-class concept of time.

![[linus-inc.png]]

> Above is how I use Inc in practice, to manage development of Inc itself, captured in the form of an `inc history` output. The most visible parts are all the notes I add, but in between them are the quick searches I do to remember and keep track of my ideas, and the occasional history lookup to help myself remember what I was doing, and place myself in the right mental context where I left off.

Some of this stuff I can just build up with the use of Alfred and Obsidian plugins like quickadd, like quickly appending to notes with timestamps. But the history thing is cool. Obsidian has that for the graph view, but it's more of a pretty thing than anything else, not particularly useful...

This has inspired me to be more direct about my timestamps. hm. should they be in note titles? I started adopting postfixing the timestamp like [[Ton Zijlstra (Zylstra)]] does for "evergreen" notes. But maybe I should do that for all notes? not sure. And how to mark when specific sections have been added... yeah, I see how that gets tricky. Like this section of the note I want to be marked as being edited now. But if I append later, can that new part be marked with a new timestamp? I think it can, and I'm pretty sure Zylstra does it, but it's not quite as seamless, is it...

---

what about noteplan? that's designed around time...

There's an [incremental writing plugin for Obsidian](https://github.com/bjsi/incremental-writing), but I don't really understand the workflow...
but this seems to be related to [this supermemo idea](https://supermemo.guru/wiki/Incremental_writing), maybe unrelated from linus