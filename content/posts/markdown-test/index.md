---
## Important: If this is a draft, next line should NOT begin with #
#draft: true
title: Markdown Tests
date: "2019-05-29"
## below are user-defined parameters (lower case keys recommended)
subtitle:
categories: ["md"]
tags:
  - markdown
  - meta
  - math
  - web
  - coding
  - test
markup: "md"
s9: true
img: markdown.png
---

![tiger from static/images](/images/tiger.png)Tiger - static/images/tiger.png

*Thanks to [markdown-it](https://github.com/markdown-it/markdown-it)
for most of the content of this file! --nm*


# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements


(c) (C) (r) (R) (tm) (TM) (p) (P) +-

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text** `fr:"**This is bold text**"`

__This is bold text__ `fr:"__This is bold text__"`

*This is italic text* `fr:"*This is italic text*"`

_This is italic text_ `fr:"_This is italic text_"`

~~Strikethrough~~ 
`fr:"~~Strikethrough~~"`


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

`> Blockquotes can also be nested...`

`>> ...by using additional > signs right next to each other...`

`> > > ...or with spaces between arrows.`


## Lists

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

from:

\+ Sub-lists are made by indenting 2 spaces:

 \- Marker character change forces new list start:

      * Ac tristique libero volutpat at

      + Facilisis in pretium nisl aliquet

      - Nulla volutpat aliquam velit

\+ Very easy!

___

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

from:

`1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

`. You can use sequential numbers...
`1. ...or keep all the numbers as `1.`

Start numbering with offset:

`57. foo
`1. bar


## Code

Inline `code`

Indented code by inserting 2 spaces at start of each line

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

from:

\```

Sample text here...

\```

Syntax highlighting (js)

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

from:

\``` js

var foo = function (bar) {
  return bar++;
};

console.log(foo(5));

\```

## Tables
using separating vertical bar (|)

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns by adding : (:|) to the right of each case

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

from:

`[link text](http://dev.nodeca.com)`

`[link with title](http://nodeca.github.io/pica/demo/ "title text!")`

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"



### Subscript / Superscript

- 19<sup>th</sup> from: `19<sup>th</sup>`
- H<sub>2</sub>O  from: `H<sub>2</sub>O`



### Footnotes

- Footnote 1 link[^first]. coded: `Footnote 1 link[^first].`

- Footnote 2 link[^second]. coded: `Footnote 2 link[^second].`

- Inline footnote^[Text of inline footnote]definition.


- Duplicated footnote reference[^second].
coded: Duplicated footnote reference\[^second].
___
Footnotes definitions:
[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.

coded:
`[^first]: Footnote **can have markup**`

    `and multiple paragraphs.`

`[^second]: Footnote text.`

### Citations

Blah blah [@doe99; @smith2000; @smith2004].

Blah blah.[^cita]

[^cita]:  John Doe, "Frogs," *Journal of Amphibians* 44 (1999);
Susan Smith, "Flies," *Journal of Insects* (2000);
Susan Smith, "Bees," *Journal of Insects* (2004).
___
### Definition lists
Term 1 
:   Definition 1
with lazy continuation.

Term 2
:   Definition 2 with *inline markup*

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

from

Term 1

\:   Definition 1
with lazy continuation.

Term 2

\:   Definition 2 with *inline markup*

        { some code, part of Definition 2 }

    Third paragraph of definition 2.
***
*** End test text ***