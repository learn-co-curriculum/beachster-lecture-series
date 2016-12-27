class BeachesController < ApplicationController

  def index
    render json: Beach.all
  end

  def show
    beach = Beach.find_by_id(params[:id])
    if beach
      render json: beach
    else
      render json: { error: 'Sorry, this is not a beach' }
    end
  end

end
