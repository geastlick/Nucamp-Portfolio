# Nucamp-Portfolio
Portfolio project for Nucamp full stack bootcamp

In order to avoid coding header/navbar/footer on every page, thus having to change every page repeatedly, I used the following solution:

> ``` html
> <div id="header"></div>

> ``` javascript
> $(function () {
>     $.ajax({
>         url: 'header.html',
>         context: document.body,
>         success: function (data) {
>             $('#header').html(data);
>         }
>     });
> });

Carousel with differently sized images:  The preferred solution is to make sure all images are consistently sized.  The problem with inconsistently sized images is that the lower content moves with each image load.  This was partially addressed via JavaScript (setting the height to that of the tallest image).  But to make it look better, a dark-grey background was added along with centering the images.

- Add bg-secondary to all carousel-item class.

- Add the following in the document.ready function:
> ``` javascript
>function carouselNormalization() {
>    let items = $('#carouselSigns .carousel-item'); //grab all slides
>    let tallest; //create variable to make note of the tallest slide
>
>    if (items.length) {
>        function normalizeHeights() {
>            tallest = null;
>            items.each(function () { //add heights to array
>                tallest = Math.max(tallest, $(this).height()); //calculate largest value
>            });
>            items.each(function () {
>                $(this).css('min-height', tallest + 'px');
>            });
>        };
>        normalizeHeights();
>
>        $(window).on('resize orientationchange', function () {
>            items.each(function () {
>                $(this).css('min-height', '0'); //reset min-height
>            });
>            normalizeHeights(); //run it again 
>        });
>    }
>}
>
>carouselNormalization();

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
