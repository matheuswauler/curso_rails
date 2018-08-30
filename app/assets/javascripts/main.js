$(document).ready(function(){

    loadProducts();
    cartDisplayControl();
    cartController();
    
});

function loadProducts() {
    loading.show();
    $.ajax({
        url: '/pages/products',
        dataType: 'json',
        success: function(response) {
            var products = response;
            var count = products.length;

            $('#product-count').html('(' + count + ( count > 1 ? ' produtos' : ' produto' ) + ')');
            $('#product-grid').html('');
            for(var i=0; i<count; i++) {
                var current_prod = products[i];
                var prod_img = $('<img/>').attr('src', current_prod.img);
                var prod_name = $('<h2/>').text(current_prod.name);
                var prod_cate = $('<span/>').text(current_prod.category);
                var prod_price = $('<strong/>').text('R$ ' + current_prod.price.toFixed(2).replace('.', ','));

                var buy_button = $('<a/>').text('comprar').addClass('buy-now').attr('data-info', JSON.stringify(current_prod));

                var prod_box = $('<div/>').addClass('product-box')
                                          .append(prod_img)
                                          .append(prod_name)
                                          .append(prod_cate)
                                          .append(prod_price)
                                          .append(buy_button);
                $('#product-grid').append(prod_box);
            }
        }
    }).done(function (){
        loading.hide();
    });
}

function cartDisplayControl() {
    $('#shopping-bag').on('click', function() {
        cartDisplay.show();
    });
    $('.cart-lightbox .close-button, .cart-lightbox .keep-shopping').on('click', function() {
        cartDisplay.hide();
    });
}

function cartController() {
    $('#product-grid').on('click', '.buy-now', function() {
        cart.addToCart($(this).data('info'));
    });

    $('.cart-lightbox .shop-products').on('click', '.remove_cart', function() {
        cart.removeFromCart($(this).parent().parent());
    });
}