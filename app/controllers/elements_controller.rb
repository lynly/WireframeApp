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
    wireframe = Wireframe.find( params[:id] )
    element = Element.new(wireframe_id: wireframe.id, name: wireframe.name, left: params[:left], top: params[:top], width: params[:width], height: params[:height], element_type: params[:element_type])

    if element.save
      render json: element
    end
  end

  def edit
    @element = Element.find(params[:id])
  end

  def update
    element = Element.find(params[:id])
    element.update_attributes(left: params[:left], top: params[:top], width: params[:width], height: params[:height])

    render json: {message: "Updated"}
  end

  def destroy
    element = Element.find(params[:id])
    element.destroy
    redirect_to elements_path()
  end

  private
  def element_params
    params.require(:element).permit(:wireframe_id,:name, :top, :left, :width, :height)
  end
end
