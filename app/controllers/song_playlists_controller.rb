class SongPlaylistsController < ApplicationController
    skip_before_action :authorized_user
    
    def index
        render json: SongPlaylist.all, status: :ok
    end
end
