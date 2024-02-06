## Not linked in [[⫿⫿⫿ Projects]]

```dataview
LIST
From !outgoing([[⫿⫿⫿ Projects]]) and -"Bins" WHERE (contains(file.name, "△") or contains(file.tags, "#project")) and !contains(file.name, ".excalidraw")
```

## Project List

```dataviewjs
let projects = Array.from(dv.pages()
.where(p => !p.file.path.startsWith("Bins/"))
.where(p => p.file.tags.includes("#project") || (p.file.name.includes("△") && !p.file.name.includes(".excalidraw"))))

// map out status then loop through
// const statuses = new Set(projects.map(p => p.status).filter(s => typeof s === "string"))
// TODO: get this from kanban
const statuses = ["◌ Someday", "○ Backburner", "◑ Active", "◕ Wrapping Up", "◍ paused", "✓ completed", "⊗ canceled"]

const calculateProgress = (p) => {
	if (p.progress) {
		if (typeof p.progress === "number" && p.progress < 1) {
			return Math.round((p.progress)*100);
		} else {
			return p.progress
		}
	}
	if (!p.file.tasks?.length) return 0;
	let total = 0;
	Array.from(p.file.tasks).forEach(task => {
		total = total + (task.e || 1)
	})
	let completed = 0;
	Array.from(p.file.tasks).filter(t => t.completed).forEach(task => {
		completed = completed + (task.e || 1)
	})
	return Math.round((completed / total)*100);
}

const calculateIcon = (num) => {
	if (num <= 40) {
		return `◔`;
	} else if (num <= 64) {
		return `◑`;
	} else if (num <= 99) {
		return `◕`;
	} else {
		return `●`
	}
}
dv.header(2, "No status");
dv.table(["Project", "Review", "Due"],projects.map(p => [p.file.link,  p.review, p.due]))
Array.from(statuses).forEach(status => {
	dv.header(2, status)
	let projects_with_status = []
	projects.forEach((p,i) => {
		if (p.status === status) {
			projects_with_status.push(p);
			projects.splice(i, 1);
		}
	})
	dv.table(["Project", "Health", "Review", "Due", "Status"], projects_with_status.map(p => {
	let status;
	if (p.status.toLowerCase().includes("active")) {
	console.log({status})
		const progress = calculateProgress(p);
		status = `${calculateIcon(progress)} ${progress}%`
	} else {
		status = p.status;
	}
	return [p.file.link, p.health, p.review, p.due, status]
	}));
})

```


```
const KANBAN_FILE = "⫿⫿⫿ Projects";
const kanban = dv.page(KANBAN_FILE);
console.log({kanban})
```
```
const files = dv.pages().where(p => !p.file.tags.includes("#project") && p.file.name.includes("△"))
```


```
table status, review, due from #project and -"Bins" sort status
```
