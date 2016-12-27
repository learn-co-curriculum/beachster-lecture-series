class BeachesController < ApplicationController
  before_action :set_beach

  def index
    render json: Beach.all
  end

  def create
    beach = Beach.new(beach_params)
    if beach.save
      render json: { beach: beach, message: "#{beach.title} was successfully created!" }
    else
      render json: { error: 'There was an issue creating this beach!' }
    end
  end

  def show
    if @beach
      render json: @beach
    else
      render json: { error: 'Sorry, this is not a beach!' }
    end
  end

  def edit
    if @beach.update(beach_params)
      render json: { beach: @beach, message: "#{@beach.title} was successfully updated!" }
    else
      render json: { error: "#{@beach.title} was not updated correctly!"}
    end
  end


  private

    def set_beach
      @beach = Beach.find_by_id(params[:id])
    end

    def beach_params
      params.require(:beach).permit(:title, :city, :state, :latitude, :longitude, :rating, :photo_url)
    end

end
