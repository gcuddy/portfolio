---
up:
related:
created: 2022-09-14
tags: [map]
---
up:: [[Home]] 

- Small Circle
	- [[Friends]] / Close Contacts
- Bigger
	- people by eras in my life
- Special
	- Prominent People
	- Theatre Industry

> [!user]+ ## Prominent People 🌋
> The hope is to see these prominent people in various ways to pull out insights. For example, by date allowed me to see that both Carl Sagan and Mihaly Csikszentmihalyi were born in 1934.
>
> ```dataview
> TABLE WITHOUT ID
>  file.link as People,
>  dates as "Years Lived"
> 
> FROM #person
> 
> SORT dates asc
> ```
>
> ---
> 

```dataview
TABLE WITHOUT ID
 file.link as People,
 file.etags as "Tags"
FROM #people

SORT file.name asc
```
