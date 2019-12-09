# Nucamp-Portfolio
Portfolio project for Nucamp full stack bootcamp

In order to avoid coding header/navbar/footer on every page, thus having to change every page repeatedly, I used the following solution:

Each page:
> ``` html
> <div id="header"></div>
> <div id="navbar"></div>
> <div id="content" class="container invisible"> ... </div>
> <div id="footer"></div>

> ``` javascript
> $(function () {
>     loadContent("home|contact|about");
> }

site.js:
> ```javascript
>function loadContent(page) {
>    /*
>    const loading=$(`
>        <div class="d-flex align-items-center">
>        <strong>Loading...</strong>
>        <div class="spinner-border ml-5 text-primary" role="status" aria-hidden="true"></div>
>        </div>
>    `).prependTo('body');
>    */
>    $.when(
>        $.ajax('header.html'),
>        $.ajax('navbar.html'),
>        $.ajax('footer.html')
>    ).done(function (hdr, nav, ftr) {
>        /*loading.remove();*/
>        $('#header').html(hdr[0]);
>        $('#navbar').html(nav[0]);
>        if (page === "home") $("#home_li").addClass("active");
>        else if (page === "contact") $("#contact_li").addClass("active");
>        else if (page === "about") $("#about_li").addClass("active");
>        $('#content').removeClass('invisible');
>        $('#footer').html(ftr[0]);
>    });
>}

Carousel with differently sized images:  **The only solution is to make sure all images are consistently sized**.  This was partially addressed via JavaScript (setting the height to that of the tallest image).  But to make it look better, a dark-grey background was added along with centering the images.  The issue encountered is that BS does some DOM magic and conflicts with this code.  It works on initial load, but upon resizing the window, all images go to 0 height.

- Add bg-secondary to all carousel-item class.

- Add the following in the document.ready function:
> ``` javascript
>const items = $('#carouselSigns .carousel-item');
>
>function carouselNormalization() {
>    // reset the height
>    items.css('min-height', 0);
>    // set the height
>    let maxHeight = Math.max.apply(null,
>        items.map(function () {
>            return $(this).outerHeight();
>        }).get());
>    items.css('min-height', maxHeight + 'px');
>}
>
>$(window).on('load resize orientationchange', carouselNormalization);

- Add the following styles:
>``` CSS
>#carouselSigns .carousel-item {
>    position: relative;
>    height: 100%;
>}
>#carouselSigns .carousel-item:not(:first-child) img {
>    /* 
>        :first-child must be excluded or carousel will be displayed under heading
>        Implication is that first carousel image should be the tallest
>
>        Better solution is to simply resize/crop all images to same pixel height/width
>    */
>    position: absolute;
>    top: 50%;
>    transform: translateY(-50%);
>}
