class GenresController < ApplicationController
    skip_before_action :authorize
    
    def index
        render json: Genre.all, status: :ok
    end
end
