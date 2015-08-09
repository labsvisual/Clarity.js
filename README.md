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

## Problems
If you think that you have the courage to download the repository, fix the code and then push it back again, feel free. :)

## Upcoming
- Custom Image Suffix
- jQuery Plugin

[Clarity.js Official Website](http://isomr.co/clarityjs)
Shreyansh Pandey ([334@doonschool.com](mailto:334@doonschool.com))
