class SongsController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :show]
    
    def index
        if (params[:genre]) 
            render json: Song.joins(:genre).where({genre: {name: params[:genre]}})
        elsif (params["no-limit"])
            render json: Song.all
        else 
            render json: Song.order(Arel.sql("RANDOM()")).limit(10), status: :ok
        end
    end

    def show
        render json: find_song, status: :ok
    end

    def create
        render json: Song.create!(song_params), status: :created
    end

    def update
        render json: find_song.update(song_params), status: :accepted
    end

    def destroy
        find_song.destroy
        head :no_content
    end

    private

    def find_song
        Song.find(params[:id])
    end

    def song_params
        params.permit(:name, :artist, :url, :genre_id)
    end
end
