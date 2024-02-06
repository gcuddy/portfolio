---
---
author:: [[Ton Zijlstra (Zylstra)]]
name:: 100 Days in Obsidian Pt 2: Hierarchy and Logs – Interdependent Thoughts
url:: https://www.zylstra.org/blog/2020/10/100-days-in-obsidian-pt-2-hierarchy-and-logs/
dateAccessed:: [[2022-05-07]]
datePublished:: 
tags:: #source/clippings #to/read
related:: 
comment:: 

# 100 Days in Obsidian Pt 2 Hierarchy and Logs – Interdependent Thoughts

## two types of note taking: networked (notions), and hierarchical (daily work)

I started using Obsidian to make better notes (Notions as I call them), and link them together where I see relevance. This is a *networked* type of use. For my daily work and for logging that daily activity I use a folder structure, which is a *hierarchical* approach. My [personal knowledge management](https://www.zylstra.org/blog/pkm/) system is based on the interplay of those networked and hierarchical perspectives, which allows emergent insights *and* putting those insights to action or keep them until they can be used.

## Folder hierarchy

To kick-off my more detailed description of using Obsidian, I will start with that hierarchical perspective: the folder structure. I will also explain how I make daily and week logs, as well as what I call ‘month maps’


Within that vault I have a folder structure that currently looks like this:

![](https://www.zylstra.org/wp/wp-content/uploads/2020/10/Schermafbeelding-2020-10-25-om-16.28.01.png)  
*Main folder structue in my Obsidian vault*

That list of main folders is a mix of folders for each of the *areas* I’m active in, some folders that I use to manage my own work, or that I have/had as Notebook in Evernote to keep their contents apart from other things, and the folders that contain the notes and notions that led me to start using Obsidian.

Areas (a component in the GTD method) are things like my company (4TGL), family and health, home, my voluntary board positions, and websites/automation. Within each area there are projects, specific things I’m working on. Projects all have their own folder in an Area. Some of the projects may have subfolders for (sub)projects taking place within the context of a client assignment for instance.

Examples of folders for managing my work are 1GTD12WY which contains things related to my longer term goals and 3 month planning cycle (combining elements from Getting Things Done and the 12 Week Year methods), and the 2Daglogs folder which contains day and week logs, and month maps.

Evernote notebooks like travel related material (bookings, itineraries) en digital tickler files (also part of the GTD method), and Network (where I keep contextual notes about people, as LinkedIn etc e.g. stores nothing about how you met someone) also have their own top level folder at the moment.

==The actual folders for notes are Notes (for notes made from information coming in) and 0GardenofForkingPaths ([why that title](https://www.zylstra.org/blog/2020/07/planting-the-garden-of-forking-paths/)?), which contains my Notions, the conceptual Zettelkasten-style notes. Those two folders internally take a networked perspective and have no subfolders.==  
Some folder names start with a number to ensure them being shown at the top end of the list. One folder Z-Templates contains, well, templates, and is called Z so it is always last. Templates can be copied into new notes for those notes where you want to keep a specific structure.

Whenever I start a new project I run an Applescript that after asking me the project name, the area it belongs to, the description and project tag, creates the right folders and in them the right notes I need to start a project (albeit a client project, an internal one, or something else). That script used to create those structure, tasks and notes for me in Evernote and Things, but now creates them in the filesystem within my Obsidian folder. Each project e.g. has a ‘main’ note stating the projects planned results, to which goal(s) it contributes, main stakeholders, budget and rough timeline.

## Day and week logs, month maps

Within the folder 2Daglogs I keep day logs, week logs, and month maps. Day logs are ordered in monthly folders, all weeks in a year are in one folder, as are all month maps. Day and week logs are for the now and looking back (they’re logs), month maps I use to look forward to the month ahead, at the start of each month (they’re surveying the coming weeks).

![](https://www.zylstra.org/wp/wp-content/uploads/2020/10/logmaps.png)  
*Folder structure that keeps day/week/month files*

The first thing I do in the morning, is start the Day log. I do this by clicking the ‘tomorrow’ link in the day log of the day before (after glancing at what I did yesterday). Then in the new note I hit the keyboard short cut /dnow which (through Alfred) adds date tags (like #2020- #2020-10 #2020-1025) and links to the day logs of yesterday and the (as yet not existing) one for tomorrow. See the screenshot below. During the day I add activities to the log as I’m doing them. I also mention thoughts or concerns, how I think the day goes etc. I link/mention the notes corresponding to activities, e.g. things I wrote down in a project meeting. I [started keeping day logs last April](https://www.zylstra.org/blog/2020/05/building-a-day-log-habit/), and they are useful to help me see on days that seem unfocused what I actually did do, even if it felt I didn’t do much. That helps spot patterns as well.

![](https://www.zylstra.org/wp/wp-content/uploads/2020/10/daylog.png)  
*Example of a day log with the links to other days shown, beneath a bullet list of things I mention during the day*

Week logs are notes that collate the day logs of a week. (Since I restarted doing weekly reviews, a week log is accompanied with a note that contains review notes.) Collating is done by transcluding 7 day logs into one note. I add links to the previous and next week on top. I use the week logs in my weekly review on Friday, to write hours in my timesheets at the end of the week, and to write my Week Notes blogpost on Sunday.

![](https://www.zylstra.org/wp/wp-content/uploads/2020/10/weeklog.png)  
*A week log is a list of transcluded day logs. Above in edit mode, below in preview mode*

![](https://www.zylstra.org/wp/wp-content/uploads/2020/10/weeklog2.png)

Monthmaps are something I make at the start of each month, they are a mindmap of the coming month, hence the name (the Dutch word for month, ‘maand’ sounds a bit like the English mind in mindmap). It’s a habit I started 4 years ago. I list every area (see folder structure above), and within those areas I list every project where I see I might hit a snag, where I have concerns or urgencies are likely to pop up, or where activities are in store I know I usually try to evade or postpone. I add easy actions I can think of that will help me deal with such barriers. It’s a way to confront underlying hesitations or anxieties and prevent negative consequences from them. I refer to it during the week, to see if barriers indeed popped up, or what I had planned to deal with them when they do. I go through it during weekly reviews as well.

In the next part I’ll take a look at how I’ve replaced my todo-list app Things with simple markdown files in Obsidian.