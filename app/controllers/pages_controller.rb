class PagesController < ApplicationController
  def home
  end

  def catalog
    @products = Product.all
  end

  def products
    @products = Product.all
    render :json => @products
  end
end
