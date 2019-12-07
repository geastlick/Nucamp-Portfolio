function loadContent(page) {
    $.ajax({
        url: 'header.html',
        context: document.body,
        success: function (data) {
            $('#header').html(data);
        }
    });
    $.ajax({
        url: 'navbar.html',
        context: document.body,
        success: function (data) {
            $('#navbar').html(data);

            if (page === "home") $("#home_li").addClass("active");
            else if (page === "contact") $("#contact_li").addClass("active");
            else if (page === "about") $("#about_li").addClass("active");
        }
    });
    $.ajax({
        url: 'footer.html',
        context: document.body,
        success: function (data) {
            $('#footer').html(data);
        }
    });

}