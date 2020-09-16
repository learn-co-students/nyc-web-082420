class CandlesController < ApplicationController
  def index
    @candles = Candle.all
    # render :index
  end

  def show 
    @candle = Candle.find(params[:id])
  end 
  
  def new 
    @candle = Candle.new
  end 
  
  def create
    candle = Candle.create(candle_params)
    
    redirect_to candle_path(candle)
  end 

  def edit 
    @candle = Candle.find(params[:id])
  end 
  
  def update 
    @candle = Candle.find(params[:id])
    @candle.update(candle_params)
    
    redirect_to candle_path(@candle)
  end 
  
  def destroy 
    @candle = Candle.find(params[:id])
    @candle.destroy

    redirect_to candles_path
    
  end 

  private 

  def candle_params 
    params.require(:candle).permit(:name, :price, :scent)
  end 

end
