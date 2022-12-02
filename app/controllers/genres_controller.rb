class GenresController < ApplicationController
    skip_before_action :authorized_user
    
    def index
        render json: Genre.all, status: :ok
    end
end
