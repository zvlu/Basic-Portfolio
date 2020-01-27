$('navbar a, .btn').on("click", function(e){
    if(this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -80
            },
            800
        );
    }
})