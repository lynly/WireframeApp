class WireframesController < ApplicationController
  def index
    @all_wireframes = Wireframe.all
  end

  def show
    @wireframe = Wireframe.find(params[:id])
  end

  def new
    @wireframe = Wireframe.new
  end

  def create
    wireframe = Wireframe.new( wireframe_params() )
    wireframe.user = @current_user
    wireframe.save
    redirect_to wireframe_path(wireframe)
  end

  def edit
    @wireframe = Wireframe.find(params[:id])
  end

  def update
    wireframe = Wireframe.find(params[:id])
    wireframe.update( wireframe_params() )
    redirect_to wireframe_path(wireframe)
  end

  def destroy
    wireframe = Wireframe.find(params[:id])
    wireframe.destroy
    redirect_to wireframes_path()
  end

  private
  def wireframe_params
    params.require(:wireframe).permit(:name, :user_id, :height)
  end
end
