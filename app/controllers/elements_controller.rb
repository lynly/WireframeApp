class ElementsController < ApplicationController
  def index
    @all_elements = Element.all
  end

  def show
    @element = Element.find(params[:id])
  end

  def new
    @element = Element.new
  end

  def create
    element = Element.create( element_params() )
    redirect_to element_path(element)
  end

  def edit
    @element = Element.find(params[:id])
  end

  def update
    element = Element.find(params[:id])
    element.update( element_params() )
    redirect_to element_path(element)
  end

  def destroy
    element = Element.find(params[:id])
    element.destroy
    redirect_to elements_path()
  end

  private
  def element_params
    params.require(:element).permit(:name, :wireframe_id, :top, :left, :img_src)
  end
end
