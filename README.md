# Where Is My Stuff
Simplistic inventory management for pedantic people

[![Stories in Ready](https://badge.waffle.io/DrSLDR/whereismystuff.png?label=ready&title=Ready)](https://waffle.io/DrSLDR/whereismystuff)

---

## What is the meaning of this?
Where Is My Stuff was my answer to that very question, in the middle of a major
move. My inventory from last move had been hastily jotted down in a TXT document
which was, at best, cumbersome to deal with. In order to allow me to work faster
and with better structure, I hastily slapped together a database application and
ported over my inventory. From this, Where Is My Stuff has grown.

Where Is My Stuff is by no means a finished product. The development is still
ongoing, and there are numerous bugs to iron out. Nothing game-breaking, that
I'm aware of, at least.

## How do I run it?
Clone the repo, run `npm install` (oh yeah, you need node.js and npm
installed. fix that first.) and then `npm start`. If it doesn't go as planned,
have a look at the version numbers in
[package.json](https://github.com/DrSLDR/whereismystuff/blob/master/package.json),
particularly in the `electron-repair-sqlite3` script. It's known to be
bothersome. I'll do a more permanent fix for that... later.

---

## Licenses
Where Is My Stuff uses the following components with licenses:

- [sorttable.js](http://www.kryogenix.org/code/browser/sorttable/)
  ([MIT license](http://choosealicense.com/licenses/mit/))
- [sqlite3](https://www.npmjs.com/package/sqlite3)
  ([BSD 3-clause license](http://choosealicense.com/licenses/bsd-3-clause/))
- tab.js, part of [Bootstrap](https://getbootstrap.com/javascript/#tabs)
  ([MIT license](http://choosealicense.com/licenses/mit/))
- [tree.js](https://www.npmjs.com/package/tree)
  ([MIT license](http://choosealicense.com/licenses/mit/))

I am very thankful to the authors of these packages. You have made my life
substantially easier.
