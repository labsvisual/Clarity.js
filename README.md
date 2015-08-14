# Clarity.js
## Automagically add retina images.

Clarity.js is a simple library which automatically adds the @2x prefix to all the images you want.

## Getting Started

```html
<body>

  <img src="img/img1.png">
  ...
  ...

  <script src="path/to/clarity.min.js"></script>

</body>
```
No kidding, the website is ready to kick some retina-butt.

## CDN
**This document will be updated once we get an official CDN.**

## I don't want to include an image
Oh! That's simple, just do it like this:

```html
<body>

  <img src="img/img1.png">
  <img src="img/img2.png" data-clarity="escape">
  ...

  <script src="path/to/clarity.min.js"></script>

</body>
```
Done! :D

## Important
Now, since Clarity.js works by getting in all of the `img` tags of the page **before** it, you **will** have to include it last; make sure that this file is the last one to be included.

Incase you're wondering why so, it's because, the moment your browser fetches Clarity.js, it executes the script which contains a function indexing all of the images. Since it starts the moment it's loaded, it traverses over all of the already-loaded elements (parsed HTML); so, if your image files are below Clarity.js's inclusion point, it won't add them to the index.

## Custom Configuration
Want to specify your custom suffix for the retina image? Easy; now you can easily add configuration via a JSON-like form.

### Custom Retina Suffix
```html
<body>

  <img src="img/img1.png">
  <img src="img/img2.png" data-clarity="escape">
  ...

  <script src="path/to/clarity.min.js#{at2xSuffix: '_retina'}"></script>

</body>
```
Now, the retina images will be like: `img/img1_retina.png`

### Custom Directory for Retina Images
Sometimes, for modularity, you want to place all the retina image files in a custom directory, with **v1.0.1**, you can do that:

```html
<body>

  <img src="img/img1.png">
  <img src="img/img2.png" data-clarity="escape">
  ...

  <script src="path/to/clarity.min.js#{at2xSuffix: '_retina', retinaDir: 'retina-files'}"></script>

</body>
```
Now, for example, img1_retina.png's directory will be: `img/retina-files/img1_retina.png`. *Remember, it's relative to the base path of the image files.*

## Disable Clarity
In case you're wondering is you can disable the library after you've included it: you can. As of version **v1.0.2**, you just need to add the `#disabled` tag in the `src` attribute and voilà. A more practical demo, here:

```html
<body>

  <img src="img/img1.png">
  <img src="img/img2.png" data-clarity="escape">
  ...

  <script src="path/to/clarity.min.js#disabled"></script>

</body>
```

## Consider
**NOTE:** The config object uses **SINGLE** quotation marks instead of the popular `"` form; it's required, otherwise the HTML parser won't be able to parse it.

## Problems
If you think that you have the courage to download the repository, fix the code and then push it back again, feel free. :)

## Upcoming
- ~~Custom Image Suffix~~
- jQuery Plugin

## Changelog
- v1.0.1
    - Added custom configuration options via a JSON like syntax.
- v1.0.2
    - Added the ability to disable Clarity.js

[Clarity.js Official Website](http://isomr.co/clarityjs)
Shreyansh Pandey ([334@doonschool.com](mailto:334@doonschool.com))
