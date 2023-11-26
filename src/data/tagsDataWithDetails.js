// Combines W3 tags and MDN tags, including the deprecated ones
export const tagsDataWithDetails = `<!--...>, 'Defines a comment', FALSE, '', FALSE,
<!DOCTYPE>, 'Defines the document type', FALSE, '', FALSE,
<a>, 'Defines a hyperlink', FALSE, '', TRUE,
<abbr>, 'Defines an abbreviation or an acronym', FALSE, '', FALSE,
<acronym>, 'Defines an acronym', TRUE, 'Use <abbr> instead', FALSE,
<address>, 'Defines contact information for the author/owner of a document', FALSE, '', TRUE,
<applet>, 'Defines an embedded applet', TRUE, 'Use <embed> or <object> instead', FALSE,
<area>, 'Defines an area inside an image map', FALSE, '', TRUE,
<article>, 'Defines an article', FALSE, '', TRUE,
<aside>, 'Defines content aside from the page content', FALSE, '', TRUE,
<audio>, 'Defines embedded sound content', FALSE, '', FALSE,
<b>, 'Defines bold text', FALSE, '', FALSE,
<base>, 'Specifies the base URL/target for all relative URLs in a document', FALSE, '', FALSE,
<basefont>, 'Specifies a default color, size, and font for all text in a document', TRUE, 'Use CSS instead', FALSE,
<bdi>, 'Isolates a part of text that might be formatted in a different direction from other text outside it', FALSE, '', FALSE,
<bdo>, 'Overrides the current text direction', FALSE, '', FALSE,
<big>, 'Defines big text', TRUE, 'Use CSS instead', FALSE,
<blockquote>, 'Defines a section that is quoted from another source', FALSE, '', TRUE,
<body>, 'Defines the document's body', FALSE, '', FALSE,
<br>, 'Defines a single line break', FALSE, '', FALSE,
<button>, 'Defines a clickable button', FALSE, '', FALSE,
<canvas>, 'Used to draw graphics, on the fly, via scripting (usually JavaScript)', FALSE, '', FALSE,
<caption>, 'Defines a table caption', FALSE, '', TRUE,
<center>, 'Defines centered text', TRUE, 'Use CSS instead', FALSE,
<cite>, 'Defines the title of a work', FALSE, '', FALSE,
<code>, 'Defines a piece of computer code', FALSE, '', TRUE,
<col>, 'Specifies column properties for each column within a <colgroup> element', FALSE, '', FALSE,
<colgroup>, 'Specifies a group of one or more columns in a table for formatting', FALSE, '', FALSE,
<data>, 'Adds a machine-readable translation of a given content', FALSE, '', FALSE,
<datalist>, 'Specifies a list of pre-defined options for input controls', FALSE, '', TRUE,
<dd>, 'Defines a description/value of a term in a description list', FALSE, '', FALSE,
<del>, 'Defines text that has been deleted from a document', FALSE, '', TRUE,
<details>, 'Defines additional details that the user can view or hide', FALSE, '', TRUE,
<dfn>, 'Specifies a term that is going to be defined within the content', FALSE, '', TRUE,
<dialog>, 'Defines a dialog box or window', FALSE, '', TRUE,
<dir>, 'Defines a directory list', TRUE, 'Use <ul> instead', FALSE,
<div>, 'Defines a section in a document', FALSE, 'It\'s a generic block-level container that has no special meaning. It should only be used when no other semantic element is relevant', FALSE,
<dl>, 'Defines a description list', FALSE, '', FALSE,
<dt>, 'Defines a term/name in a description list', FALSE, '', FALSE,
<em>, 'Defines emphasized text', FALSE, '', TRUE,
<embed>, 'Defines a container for an external application', FALSE, '', FALSE,
<fieldset>, 'Groups related elements in a form', FALSE, '', TRUE,
<figcaption>, 'Defines a caption for a <figure> element', FALSE, '', FALSE,
<figure>, 'Specifies self-contained content', FALSE, '', TRUE,
<font>, 'Defines font, color, and size for text', TRUE, 'Use CSS instead', FALSE,
<footer>, 'Defines a footer for a document or section', FALSE, '', TRUE,
<form>, 'Defines an HTML form for user input', FALSE, '', TRUE,
<frame>, 'Defines a window (a frame) in a frameset', TRUE, '', FALSE,
<frameset>, 'Defines a set of frames', TRUE, '', FALSE,
<h1>, 'Defines a level 1 heading (the most important heading)', FALSE, '', TRUE,
<h2>, 'Defines a level 2 heading', FALSE, '', TRUE,
<h3>, 'Defines a level 3 heading', FALSE, '', TRUE,
<h4>, 'Defines a level 4 heading', FALSE, '', TRUE,
<h5>, 'Defines a level 5 heading', FALSE, '', TRUE,
<h6>, 'Defines a level 6 heading', FALSE, '', TRUE,
<head>, 'Contains metadata/information for the document', FALSE, '', FALSE,
<header>, 'Defines a header for a document or section', FALSE, '', TRUE,
<hgroup>, 'Defines a header and related content', FALSE, '', FALSE,
<hr>, 'Defines a thematic change in the content', FALSE, '', TRUE,
<html>, 'Defines the root of an HTML document', FALSE, '', TRUE,
<i>, 'Defines a part of text in an alternate voice or mood', FALSE, '', FALSE,
<iframe>, 'Defines an inline frame', FALSE, '', FALSE,
<image>, 'an ancient and poorly supported precursor to the <img> element. It should not be used', TRUE, 'Use <img> instead', FALSE,
<img>, 'Defines an image', FALSE, '', TRUE,
<input>, 'Defines an input control', FALSE, '', TRUE,
<ins>, 'Defines a text that has been inserted into a document', FALSE, '', TRUE,
<kbd>, 'Defines keyboard input', FALSE, '', FALSE,
<label>, 'Defines a label for an <input> element', FALSE, '', FALSE,
<legend>, 'Defines a caption for a <fieldset> element', FALSE, '', FALSE,
<li>, 'Defines a list item', FALSE, '', TRUE,
<link>, 'Defines the relationship between a document and an external resource (most used to link to style sheets)', FALSE, '', FALSE,
<main>, 'Specifies the main content of a document', FALSE, '', TRUE,
<map>, 'Defines an image map', FALSE, '', FALSE,
<mark>, 'Defines marked/highlighted text', FALSE, '', FALSE,
<marquee>, 'Used to insert a scrolling area of text', TRUE, '', FALSE,
<menu>, 'Defines an unordered list', FALSE, '', TRUE,
<menuitem>, 'Represents a command that a user is able to invoke through a popup menu', TRUE, '', FALSE,
<meta>, 'Defines metadata about an HTML document', FALSE, '', FALSE,
<meter>, 'Defines a scalar measurement within a known range (a gauge)', FALSE, '', TRUE,
<nav>, 'Defines navigation links', FALSE, '', TRUE,
<nobr>, 'Prevents the text it contains from automatically wrapping across multiple lines', TRUE, 'Use the CSS property white-space', FALSE,
<noembed>, 'Provides alternative content for browsers that do not support the <embed> element', TRUE, 'Use <object> instead', FALSE,
<noframes>, 'Defines an alternate content for users that do not support frames', TRUE, '', FALSE,
<noscript>, 'Defines an alternate content for users that do not support client-side scripts', FALSE, '', FALSE,
<object>, 'Defines a container for an external application', FALSE, '', FALSE,
<ol>, 'Defines an ordered list', FALSE, '', TRUE,
<optgroup>, 'Defines a group of related options in a drop-down list', FALSE, '', TRUE,
<option>, 'Defines an option in a drop-down list', FALSE, '', TRUE,
<output>, 'Defines the result of a calculation', FALSE, '', TRUE,
<p>, 'Defines a paragraph', FALSE, '', TRUE,
<param>, 'Defines a parameter for an object', FALSE, '', FALSE,
<picture>, 'Defines a container for multiple image resources', FALSE, '', FALSE,
<plaintext>, 'Renders everything following the start tag as raw text, ignoring any following HTML', TRUE, '', FALSE,
<portal>, '', TRUE, '', FALSE,
<pre>, 'Defines preformatted text', FALSE, '', FALSE,
<progress>, 'Represents the progress of a task', FALSE, '', TRUE,
<q>, 'Defines a short quotation', FALSE, '', FALSE,
<rb>, 'Used to delimit the base text component of a <ruby> annotation', TRUE, '', FALSE,
<rp>, 'Defines what to show in browsers that do not support ruby annotations', FALSE, '', FALSE,
<rt>, 'Defines an explanation/pronunciation of characters (for East Asian typography)', FALSE, '', FALSE,
<rtc>, 'Embraces semantic annotations of characters presented in a ruby of <rb> elements used inside of <ruby> element', TRUE, '', FALSE,
<ruby>, 'Defines a ruby annotation (for East Asian typography)', FALSE, '', FALSE,
<s>, 'Defines text that is no longer correct', FALSE, '', TRUE,
<samp>, 'Defines sample output from a computer program', FALSE, '', FALSE,
<script>, 'Defines a client-side script', FALSE, '', FALSE,
<search>, 'Defines a search section', FALSE, '', TRUE,
<section>, 'Defines a section in a document', FALSE, '', TRUE,
<select>, 'Defines a drop-down list', FALSE, '', TRUE,
<slot>, 'Defines a placeholder inside a web component that you can fill with your own markup', FALSE, '', FALSE,
<small>, 'Defines smaller text', FALSE, '', FALSE,
<source>, 'Defines multiple media resources for media elements (<video> and <audio>)', FALSE, '', FALSE,
<span>, 'Defines a section in a document', FALSE, 'It\'s a generic inline-level container that has no special meaning. It should only be used when no other semantic element is relevant', FALSE,
<strike>, 'Defines strikethrough text', TRUE, 'Use <del> or <s> instead', FALSE,
<strong>, 'Defines important text', FALSE, '', TRUE,
<style>, 'Defines style information for a document', FALSE, '', FALSE,
<sub>, 'Defines subscripted text', FALSE, '', TRUE,
<summary>, 'Defines a visible heading for a <details> element', FALSE, 'Many, but not all, user agents expose the summary element with an implicit role of button.', FALSE,
<sup>, 'Defines superscripted text', FALSE, '', TRUE,
<svg>, 'Defines a container for SVG graphics', FALSE, '', TRUE,
<table>, 'Defines a table', FALSE, '', TRUE,
<tbody>, 'Groups the body content in a table', FALSE, '', TRUE,
<td>, 'Defines a cell in a table', FALSE, '', TRUE,
<template>, 'Defines a container for content that should be hidden when the page loads', FALSE, '', FALSE,
<textarea>, 'Defines a multiline input control (text area)', FALSE, '', TRUE,
<tfoot>, 'Groups the footer content in a table', FALSE, '', TRUE,
<th>, 'Defines a header cell in a table', FALSE, '', TRUE,
<thead>, 'Groups the header content in a table', FALSE, '', TRUE,
<time>, 'Defines a specific time (or datetime)', FALSE, '', TRUE,
<title>, 'Defines a title for the document', FALSE, '', FALSE,
<tr>, 'Defines a row in a table', FALSE, '', TRUE,
<track>, 'Defines text tracks for media elements (<video> and <audio>)', FALSE, '', FALSE,
<tt>, 'Defines teletype text', TRUE, 'Use CSS instead', FALSE,
<u>, 'Defines some text that is unarticulated and styled differently from normal text', FALSE, '', FALSE,
<ul>, 'Defines an unordered list', FALSE, '', TRUE,
<var>, 'Defines a variable', FALSE, '', FALSE,
<video>, 'Defines embedded video content', FALSE, '', FALSE,
<wbr>, 'Defines a possible line-break', FALSE, '', FALSE,
<xmp>, 'Renders text between the start and end tags without interpreting the HTML in between and using a monospaced font', TRUE, 'Use <pre> and <code> instead', FALSE,
`

// FOR REVIEWER TO SEE THE OUTPUT OF THE PARSED DATA: 
// 1. comment "export" from line 2
// 2. uncomment the code below
// 3. click run code

// function parseTagsData(data) {
//     const lines = data.split('\n');
//     const tagsObject = {};

//     lines.forEach(line => {
//         // Skip empty lines
//         if (line.trim() === '') {
//             return;
//         }

//         const parts = line.split(',').map(part => part.trim());

//         const [tag, description, deprecated, notes, atSupport] = parts;

//         const cleanedTag = tag.replace(/<|>/g, ''); 

//         const objRegex = /^'|'$/g;

//         tagsObject[cleanedTag] = {
//             // Removes leading and trailing quotes
//             'description': description.replace(objRegex, ''), 
//             'deprecated': deprecated === 'TRUE', // Converts to boolean
//             'notes': notes.replace(objRegex, ''), 
//             'at-support': atSupport === 'TRUE', // Converts to boolean
//         };
//     });
//     return tagsObject;
// }

// const tagsObject = parseTagsData(tagsDataWithDetails);

// console.log(tagsObject);