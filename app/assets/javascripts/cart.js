var cart = {
    addToCart: function(current_prod) {
        // Valida produto 
        var isValid = true;
        $('.product-cart').each(function(){
            var data = $(this).data('info');
            if(current_prod.id == data.id){
                alert('Este produto já está na sua sacola');
                isValid = false;
                return;
            }
        });

        if(!isValid) {
            return;
        }

        // Remove mensagem de carrinho vazio
        $('.empty-cart').hide();
        $('.cart-content').css('display', 'flex');
        
        // Insere produto na sacola
        var prod_img = $('<td/>').append($('<img/>').attr('src', current_prod.image));
        var prod_name = $('<td/>').append($('<h4/>').text(current_prod.name));
        var prod_price = $('<td/>').append($('<strong/>').text('R$ ' + current_prod.price.toFixed(2)));

        var buy_button = $('<td/>').append($('<a/>').text('Remover').addClass('remove_cart'));

        var prod_box = $('<tr/>').addClass('product-cart')
                                    .append(prod_img)
                                    .append(prod_name)
                                    .append(prod_price)
                                    .append(buy_button)
                                    .attr('data-info', JSON.stringify(current_prod));
        $('.shop-products table').append(prod_box);

        this.updateCartStatus();

        // Exibe o carrinho
        cartDisplay.show();
    },

    removeFromCart: function(prodElem) {
        prodElem.remove();

        var prod_count = $('.product-cart').length;
        if(prod_count == 0) {
            $('.empty-cart').css('display', 'flex');
            $('.cart-content').hide();
        }

        this.updateCartStatus();
    },

    updateCartStatus: function() {
        // Atualiza contador
        var prod_count = $('.product-cart').length;
        $('#shopping-bag').text(prod_count);

        var total = 0;
        $('.product-cart').each(function(){
            var data = $(this).data('info');
            total += data.price;
        });
        $('#cart-total').text('R$ ' + total.toFixed(2).replace('.',','));
    }
}