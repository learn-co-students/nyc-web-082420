class FavoritesController < ApplicationController
  def new 
    @favorite = Favorite.new
  end 

  def create 
    favorite = Favorite.create(favorite_params)

    redirect_to candle_path(favorite.candle)
  end 

  private 

  def favorite_params
    params.require(:favorite).permit(:candle_id, :dog_user_id)
  end 

end
