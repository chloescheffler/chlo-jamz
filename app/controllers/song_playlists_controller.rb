class SongPlaylistsController < ApplicationController
    skip_before_action :authorize
    
    def index
        render json: SongPlaylist.all, status: :ok
    end
end
