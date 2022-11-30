class PlaylistsController < ApplicationController
    skip_before_action :authorize

    def index 
        render json: Playlist.all, status: :ok
    end

    def show
        render json: find_genre, status: :ok
    end

    private

    def find_genre
        Genre.find_by(params[:id])
    end
end
