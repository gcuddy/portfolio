#map #area


- [ ] Create view showing who to contact today/soon
	- Based on nextContact, lastContact (been a while, depending on outreach type), and birthday/anniversary
		- [[△  Obsidian Contacts App Plugin]]



```dataviewjs

const toReachOut = dv.pages("#people").where(p => p.nextContact?.isValid).where(p => p.nextContact.valueOf() <= Date.now())

dv.table(["Person", "Next Contact", "Contact"], toReachOut.map(p => [p.file.link, p.nextContact, p.contact]))
```

