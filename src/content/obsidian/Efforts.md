---
up:
  - "[[Home]]"
tags:
  - map
created: 2022-09-13
---
Keep your priorities in order. Quickly adjust your bandwidth as needed. 

> [!Box]+ 🔥 On
>
> ``` dataview
> TABLE WITHOUT ID
> file.link as "",
>  rank as "Rank"
> FROM "Efforts/On"
> SORT rank desc
> ```

> [!Box]+ ♻️ Ongoing
>
> ``` dataview
> TABLE WITHOUT ID
> file.link as "",
> rank as "Rank"
> FROM "Efforts/Ongoing"
> SORT rank desc
> ```

> [!Box]+ 〰️ Simmering
> Efforts can easily move from `on` to `simmering` in the background.
>
> ``` dataview
> TABLE WITHOUT ID
> file.link as "",
> rank as "Rank"
> FROM "Efforts/Simmering"
> SORT rank desc
> ```

---

Back to [[Home]].
