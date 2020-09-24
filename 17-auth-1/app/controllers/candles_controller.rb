class CandlesController < ApplicationController
  before_action :find_candle, only: [:show, :edit, :update, :destroy]

  def index
    @candles = Candle.all
    # render :index
  end

  def show 
    # @candle = Candle.find(params[:id])
  end 
  
  def new 
    @candle = Candle.new
  end 
  
  def create
    @candle = Candle.create(candle_params)
    # candle = Candle.new(candle_params)
    
    # if candle.save
    if @candle.valid? 
      flash[:success] = "Welcome to the Crush Candle"
      redirect_to candle_path(@candle)
    else 
      flash[:my_errors] = @candle.errors.full_messages

      redirect_to new_candle_path
    end     
  end 

  def edit 
    # @candle = Candle.find(params[:id])
  end 
  
  def update 
    # @candle = Candle.find(params[:id])
    @candle.update(candle_params)
    
    redirect_to candle_path(@candle)
  end 
  
  def destroy 
    # @candle = Candle.find(params[:id])
    @candle.destroy

    redirect_to candles_path
    
  end 

  private 

  def candle_params 
    params.require(:candle).permit(:name, :price, :scent)
  end 

  def find_candle 
    @candle = Candle.find(params[:id])
  end 

end
