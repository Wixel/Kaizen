#Kaizen framework

===

A simple-as-possible responsive Sass (built with [Bourbon](http://bourbon.io/)) starter framework with just the right amount of features to [get a project started in minutes](#installing-it-via-the-shell-script).

###Why?
It's about simplicity - frameworks like Foundation and Bootstrap are rather large and have a lots of unnecessary code. For this reason, we built a nimble front-end framework to get you started without the stuff you don't need.

It only takes a few minutes to get going and every line of code is carefully considered with performance in mind.

Think of it as the pencil instead of the blank page.

###What?
It's a bare-bones framework, it's meant to be hacked, modified and twisted to fit within your project yet it provides you with an extremely well organized framework to build upon.


###Mobile first
With mobile first, most styles are inherited from the smaller breakpoint, this keeps code light and manageable.

Always add universal styles to the code outside of breakpoints and then add additional styles for screen sizes from small to large. Example:

```
.button{
	background-color: blue;
	padding: 20px 12px;
	color: #ffffff;
	font-size: rem(18);
	...
}

@media only screen and (min-width: $medium-breakpoint){
	...
	.button{
		// this inherits all the styles from .button and adds more padding and increases the font size.
		padding: 30px 14px;
		font-size: rem(18);
	}
}

@media only screen and (min-width: $large-breakpoint){
	...
	.button{
		// this inherits all the styles from .button but makes all styles in previous breakpoint priority ($medium-breakpoint) and increases the font size.
		font-size: rem(24);
	}
}
```

###Includes
* Box-sizing reset. (we use [border-box](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)).
* Simple easy to understand file structure that can easily be reorganised to work with your app.
* A mobile first 12 column responsive grid with tablet/medium & desktop/large breakpoints.
* Typography reset with some tools and easily configurable settings.
* Small set of base settings for color, spacing etc.

The framework installs the [Bourbon](http://bourbon.io/) mixin library to extend the power of Sass. Bourbon also adds functionality like vendor prefixing, calculations eg. `px` to `REM`, `EM` for faster and easier development. It also includes [normalize.css](http://necolas.github.io/normalize.css/) as a reset to keep things consistent across modern browsers (IE8+, ofcourse).

##Installation
===

####Requirements

- **[Git](https://git-scm.com/)** a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency. [here's the installation guide to that](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and [here's a guide if you're unfamiliar with git](http://rogerdudler.github.io/git-guide/).
- **[NPM](https://www.npmjs.com/) (node.js)** [here's how to get node.js running on your machine](https://docs.npmjs.com/getting-started/installing-node) - installing node.js will include npm (node package manager, but remember to keep npm [updated](https://docs.npmjs.com/getting-started/installing-node#updating-npm)).
- **[Bower](http://bower.io/)** a package manager for the web that's optimised for the front-end [and here's how to install it](http://bower.io/#install-bower). You don't really have to be familiar with bower to use the framework but it's a powerful little tool.
- **[Sass](http://sass-lang.com/)** is a CSS preprocessor and is used for almost everything in the framework code [get it installed](http://sass-lang.com/install).

####Installing it via the shell script
1. Create your project repo (if you want to use git).
2. Download the framework [initializer 'setup.sh' file](https://github.com/Wixel/initializer) file.
3. Put the file in the root of your project directory.
4. Run `./setup.sh` in your terminal.
5. Run: `npm install`
6. Run: `grunt`

This will set up all the files and dependancies in the correct structure. There's another shell script for your Sass commands called "watch.sh" you can simply run that with `./watch.sh`. If it doesn't execute run: `chmod a+x watch.sh` and try again.

##Making use of things
===
We use the SCSS syntax of Sass. All settings are in *_base.scss*. It's best to change these settings to align with your design before starting on the project.

###Using the typography:

#####Adding custom fonts
Use google fonts and change the font setting in the base Sass file.

#####Font sizes
Heading and paragraph font sizes are all set in the _base.scss file, for mobile these sizes are divided by 1.2 (`35 / 1.2`) for headings and 1.125 for paragraph text. There are additional typography settings for line-height and font weight.

#####Customize things even more
Most typography changes should be done in `base.scss` but you can also work inside `_typography.scss`

#####Typography helpers
Center, left or right align text by using `.text-center` this applies to all breakpoints, for breakpoint with inheritance use `.small--text-center`, `.medium-text-right`, `.large-text-left` or for breakpoint specific text alignment use `.small-only-text-center`, `.medium-only-text-right` (these do not inherit).

Add `.no-style-list` to `<ul>` or `<ol>` to remove the default styling from a list.

###Using the grid:
The grid is a 12 column grid for mobile/small, tablet/medium, desktop/large.

Setting up your grid can be done from the base.css file:

- `$max-width` is the max width of `.row`.
- `$medium-breakpoint` is the breakpoint for mobile/small - tablet/medium.
- `$large-breakpoint` is the breakpoint between tablet/medium - desktop/large
- `$xlarge-breakpoint` is an additional breakpoint not used by the grid.

Use `.row` as the container for your columns, you can nest containers/rows inside one another. If you want a full width container simply add `.full-width` to the `.row` container.

To remove padding/margin from a container and it's child columns add `.collapse` to `.row`.

#####Using columns
add the width and `.column` or `.columns` class i.e.

```
<section class="row">
	<aside class="small-12 medium-3 large-4 columns">
		...
	</aside>
	<article class="small-12 medium-9 large-8 columns">
		...
	</article>
</section>
```

#####Column widths
**Mobile/Small breakpoint**: `.small-1`, `.small-2`, `.small-3`, `.small-4`, `.small-5`, `.small-6`, `.small-7`, `.small-8`, `.small-9`, `.small-10`, `.small-11`, `.small-12`

**Tablet/Medium breakpoint**: `.medium-1`, `.medium-2`, `.medium-3`, `.medium-4`, `.medium-5`, `.medium-6`, `.medium-7`, `.medium-8`, `.medium-9`, `.medium-10`, `.medium-11`, `.medium-12`

**Desktop/Large breakpoint**: `.large-1`, `.large-2`, `.large-3`, `.large-4`, `.large-5`, `.large-6`, `.large-7`, `.large-8`, `.large-9`, `.large-10`, `.large-11`, `.large-12`

#####Column helpers
**Center columns:** Use `.small-centered`, `.medium-centered`, `.large-centered` since it's mobile first any column with `.small-centered` will also be center aligned in larger breakpoints to remove
it simply add `.medium-uncentered` or `.large-uncentered`.

The last column in a row is automatically aligned to the right, to float it to the left add `.end`.

###Other things

#####Spacing helper for containers or elements
An easy way to keep spacing in containers consistent without adding extra code to your CSS.

`.padds-top-small`, `.padds-top-medium`, `.padds-top-large`, `.padds-bottom-small`, `.padds-bottom-medium`, `.padds-bottom-large`

#####Images are responsive by default
Images stretch their original size although if the container is smaller in width it'll only fill the width of it's parent.

#####Font rendering
If you're having [issues](http://www.smashingmagazine.com/2012/04/24/a-closer-look-at-font-rendering/) with font rendering check line 56-59 in _base.scss

#####Meta tags

- `<meta charset="utf-8">` The meta charset attribute specifies the character encoding of the current document.

- `<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">` The X-UA-Compatible meta tag allows web authors to choose what version of Internet Explorer the page should be rendered as.

- `<meta http-equiv="x-dns-prefetch-control" content="on">` DNS prefetching is an attempt to resolve domain names before a user tries to follow a link.

- a few [Open graph](http://ogp.me/) meta tags (`og:site_name`, `og:title`, `go:type`, `og:description`, `og:url`, `og:image`) used by social networks like Facebook.

- `<meta http-equiv="cleartype" content="on">` This meta tag allows for activation of ClearType in Mobile IE for smoothing fonts.

- `apple-mobile-web-app-capable`, `apple-mobile-web-app-status-bar-style`, `apple-mobile-web-app-title` Apple specific meta tags, [you can see what they do here](https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html).
- favicon tags and placeholder favicon files.
- Windows tile style meta tags.

#####Google analytics script
Change `UA-XXXXX-X` to your site ID given by google.

#####How to contribute

If you spot an opportunity to improve our framework, please submit a pull request that includes instructions added to this documentation file.
