class FavoritesController < ApplicationController
  def new 
    @favorite = Favorite.new
  end 

  def create 
    favorite = Favorite.create(favorite_params)

    if favorite.valid?
      redirect_to candle_path(favorite.candle)
    else 
      flash[:my_errors] = favorite.errors.full_messages
      redirect_to new_favorite_path
    end 
  end 

  private 

  def favorite_params
    params.require(:favorite).permit(:candle_id, :dog_user_id)
  end 

end
