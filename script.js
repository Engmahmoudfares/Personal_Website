window.onscroll = function() {
    const floatingButtons = document.getElementById('floatingButtons');
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 300) {
        floatingButtons.classList.remove('hidden');
    } else {
        floatingButtons.classList.add('hidden');
    }
};
