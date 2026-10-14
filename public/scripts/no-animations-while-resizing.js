(function() {
    const bodyClass = document.body.classList;
    let resizeTimer = 0;

    window.addEventListener('resize', function ()
    {
        if (resizeTimer)
        {
            clearTimeout(resizeTimer);
            resizeTimer = null;
        }
        else
        {
            bodyClass.add('resize-transition-stopper');
        }

        // Remove the class 100 milliseconds after the user stops dragging the window
        resizeTimer = setTimeout(() =>
        {
            bodyClass.remove('resize-transition-stopper');
            resizeTimer = null;
        }, 100);
    });
})();