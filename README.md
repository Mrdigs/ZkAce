ZkAce
=====

A ZK Component for embedding the excellent Ace code editor in your ZK 
application.

Ace features over 20 themes, and syntax highlighting for over 100 languages 
(including C, CSS, Groovy, HTML, Java, Javascript, JSON, Less, Perl, Python,
Ruby, Scala, SQL, XML), code folding, and a live syntax checker.

Installation
------------

Download the pre-built jar file from the dist directory and put it in your 
classpath. That is it.

Usage
-----

The ZkAce component is called Acebox and extends the ZK Textbox in multi-line 
mode. Use it how and where you would use a Textbox.

In ZUL:

```xml
<acebox mode="html" readonly="true">
	<attribute name="value"><![CDATA[<i>Ace for ZK is cool!</i>]]></attribute>
</acebox>
```

In Java:

```java
Acebox acebox = new Acebox();
acebox.setMode("html");
acebox.setReadOnly(true);
acebox.setValue("<i>Ace for ZK is cool!</i>");
```
Supported Properties
--------------------

Most properties inherited from Textbox should work, but the only properties 
with specific support are:

##### `mode` #####

Sets the language. See the Ace documentation at http://ace.c9.io/ for possible
values.

##### `theme` #####

Sets the theme. See the Ace documentation at http://ace.c9.io/ for possible
values.

##### `showgutter` #####

Shows or hides the Acebox gutter. Can be `true` or `false`.

##### `constraint` ##### (new for v1.0.1)

All the usual constraint types available to a Textbox can be used, with the
addition of 2 new ones. If `grammar(strict)` is specified, the value will be
rejected if any grammar violation warning or errors are present. If `grammar(lenient)`
is specified, then only errors will cause the value to be rejected.

##### `readonly` #####

Sets the Acebox to readonly mode - the value cannot be edited. Can be `true` or 
`false` just like Textbox.

##### `rows` #####

Behaves like rows on Textbox, except that if you do not specify a `rows` property 
Textbox defaults to 1 row whereas Acebox defaults to number of lines in the 
initial value.

##### `maxrows` #####

If you do not specify `maxrows`, or if `maxrows` is less than `rows`, then the Acebox
will not grow beyond `rows` in height, otherwise it will grow until `maxrows` lines
is reached.

Supported Events
----------------

The only event supported at the moment is `onChange`, which is fired whenever Ace 
looses focus.