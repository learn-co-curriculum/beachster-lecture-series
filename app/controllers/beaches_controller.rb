class BeachesController < ApplicationController

  def index
    render json: Beach.all
  end

  def create
    beach = Beach.new(beach_params)
    if beach.save
      render json: beach
    else
      render json: { error: 'There was an issue creating this beach' }
    end
  end

  def show
    beach = Beach.find_by_id(params[:id])
    if beach
      render json: beach
    else
      render json: { error: 'Sorry, this is not a beach' }
    end
  end

  private

    def beach_params
      params.require(:beach).permit(:title, :city, :state, :latitude, :longitude, :rating, :photo_url)
    end

end
