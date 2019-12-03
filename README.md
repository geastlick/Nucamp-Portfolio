# Nucamp-Portfolio
Portfolio project for Nucamp full stack bootcamp

In order to avoid coding header/navbar/footer on every page, thus having to change every page repeatedly, I used the following solution:

```html
<div id="header"></div>
```
```javascript
$(function () {
    $.ajax({
        url: 'header.html',
        context: document.body,
        success: function (data) {
            $('#header').html(data);
        }
    });
});
```
