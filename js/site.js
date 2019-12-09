function loadContent(page) {
    /*
    const loading=$(`
        <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div class="spinner-border ml-5 text-primary" role="status" aria-hidden="true"></div>
        </div>
    `).prependTo('body');
    */
    $.when(
        $.ajax('header.html'),
        $.ajax('navbar.html'),
        $.ajax('footer.html')
    ).done(function (hdr, nav, ftr) {
        /*loading.remove();*/
        $('#header').html(hdr[0]);
        $('#navbar').html(nav[0]);
        if (page === "home") $("#home_li").addClass("active");
        else if (page === "contact") $("#contact_li").addClass("active");
        else if (page === "about") $("#about_li").addClass("active");
        $('#content').removeClass('invisible');
        $('#footer').html(ftr[0]);


    });

}