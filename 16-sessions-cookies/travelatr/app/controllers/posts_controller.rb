class PostsController < ApplicationController

  def index
    @posts = Post.all 
    render :index
  end

  def show
    @post = Post.find(params[:id])
    if session[:views] == nil
      session[:views] = 0
    end
    session[:views] = session[:views].to_i + 1
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      redirect_to post_path(@post)
    else
      render :new
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      redirect_to post_path(@post)
    else
      render :edit
    end
  end

  def like
    @post = Post.find(params[:id])
    @post.likes += 1
    @post.save

    redirect_to post_path(@post)
  end

  private

  def post_params
    params.require(:post).permit(:title, :content, :blogger_id, :destination_id)
  end
end