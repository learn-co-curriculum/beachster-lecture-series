class BeachesController < ApplicationController

  def index
    render json: Beach.all
  end

end
