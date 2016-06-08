#Kaizen framework

A simple-as-possible responsive Sass (built with [Bourbon](http://bourbon.io/)) starter framework with just the right amount of features & components to [get a project started in minutes](#install).

###Why?

It's about simplicity - We've built a nimble framework to get you started without the stuff you don't need. It only takes a few minutes to setup and every line of code is carefully considered with performance in mind. Think of it as the pencil instead of the blank page.

###What?

It's a bare-bones framework, it's meant to be hacked, modified and twisted to fit within your project yet it provides you with an extremely organized framework to build upon with just the right amount of utility and components.

##Installation

```sh
gem install kaizen-cli
```

####Requirements

- **[Ruby](https://www.ruby-lang.org/)** 

####Getting started

- Run: `kzn [directory]` sets up the specified directory without overwriting files
- Run: `kzn [directory] -f` sets up the specified directory and overwrites files if they already exist
- Run: `kzn -s` - watches the current directory for any changes and compiles changes to Sass files automatically
- Run: `kzn [directory] -s` watches the specified directory for any changes and compiles changes to Sass files automatically
- Run: `kzn --help` for further instructions

If something does happen to wrong, you can add the `-v` argument to enable more verbosity. 

###Mobile first

With mobile first, most styles are inherited from the smaller breakpoint, this keeps code light and manageable.

**[NOTE]:** Always add universal styles to the code outside of breakpoints and then add additional styles for screen sizes from small to large. Example:

```css
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

### What's included?

* Box-sizing reset. (we use [border-box](http://www.paulirish.com/2012/box-sizing-border-box-ftw/)).
* Simple easy to understand file structure that can easily be reorganised to work with your app.
* A mobile first 12 column responsive grid with tablet/medium & desktop/large breakpoints.
* Typography reset with some tools and easily configurable settings.
* Small set of base settings for color, spacing etc.

The framework installs the [Bourbon](http://bourbon.io/) mixin library to extend the power of Sass. Bourbon also adds functionality like vendor prefixing, calculations eg. `px` to `REM`, `EM` for faster and easier development. It also includes [normalize.css](http://necolas.github.io/normalize.css/) as a reset to keep things consistent across modern browsers (IE8+, ofcourse).

## How to use the framework

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

If you spot an opportunity to improve our framework, please submit a pull request.
