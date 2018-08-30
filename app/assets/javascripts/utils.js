var loading = {
    show: function() {
        $('.loader').show();
    },
    hide: function() {
        $('.loader').hide();
    }
}

var cartDisplay = {
    show: function() {
        $('.overlay').addClass('shown');
        $('.cart-lightbox').addClass('shown');
    },
    hide: function() {
        $('.overlay').removeClass('shown');
        $('.cart-lightbox').removeClass('shown');
    }
}