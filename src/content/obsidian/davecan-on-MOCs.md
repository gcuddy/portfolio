---
citekey:
status: unstarted
---

#source

###### metadata

topic:: [[Note-taking]]

https://forum.obsidian.md/t/how-to-keep-moc-note-evergreen/13194https://forum.obsidian.md/t/how-to-keep-moc-note-evergreen/13194

Honestly it sounds like you are making a mistake in how you use MOCs. Maybe I’m misunderstanding you but it sounds like you are adding every note to a MOC. In that case you are effectively recreating tagging.

I don’t update a MOC with _every_ note I add to my ZK system, only those that represent key entry points to various topics within that MOC _or_ are notes that don’t really fit into any other note or MOC. (so there’s at least _one_ link to the note from _somewhere_, and that link probably gets refactored to somewhere else as I add more notes on that topic over time)

If you are simply linking from the MOC to every individual note you are kind of recreating folder/tag hierarchical systems which is an anti pattern. You should focus on building up a dense network of interlinked notes at the “low” level among your evergreen notes then allow MOCs and similar index/outline notes float _above_ them and point to the key entry points.

Then when you use the MOC you are following a link from the MOC to an entry point into a topic, and then once you are in that topic within an evergreen note you are navigating from note to note _within_ that topic via inter-note links.

Analogy: ==You are playing an FPS game and the **MOC is the _top down_ map view**, but once you click into an area you **switch to the FPS view** and navigate from room to room (note to note)==. Then periodically you switch back to the map view and jump somewhere else. ^9ce025

Adopting this approach is what brings fluidity to the process.

Also there are a couple of strategies for linking from a MOC when you want.

1.  Create note first, then update the MOC.
2.  Create link in MOC first, then create note from it.

The latter is trivially easy with the Note Refactor plugin. In fact you can start writing the entire note in the MOC and then highlight it and refactor it into its own evergreen note. The MOC will automatically be updated to contain the link to the new note for you.

Either way, you can’t get away from the need to update the MOC. This is why it’s not a good idea to try to update the MOC for every note you create since that can create a lot of unnecessary relationships between notes and make finding the actual relationships more difficult – too much noise, not enough signal.

---

https://forum.obsidian.md/t/how-do-you-handle-tasks-in-obsidian/822?page=4
For example, instead of having strings as knowledge categories I have `topic: [[Note or MOC name]]` so incoming content is tied to at least one if not more hub notes or MOCs somewhere in my system.
