    let scrollTimer = null;
    window.onscroll = function() {
        document.querySelector('#dim').style.display = 'block';
        document.querySelector('#dim').style.display = 'top 3s';
        if (document.body.clientWidth >= 576) {
            document.querySelector('.fixed-top').style.top = '0px';
            document.querySelector('.fixed-top').style.transition = 'top 3s';
        }
        if (scrollTimer != null) clearTimeout(scrollTimer);
        scrollTimer = window.setTimeout("scrollFinished()", 500);
    }

    function scrollFinished() {
        document.querySelector('#dim').style.display = 'none';
        document.querySelector('#dim').style.display = 'top 3s';
        if (document.body.clientWidth >= 576) {
            document.querySelector('.fixed-top').style.top = '-60px';
            document.querySelector('.fixed-top').style.transition = 'top 3s';
        }
    }