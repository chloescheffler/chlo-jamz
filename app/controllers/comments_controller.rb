class CommentsController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :show, :create, :update, :destroy]
    
    def index
        if (params[:song_id]) 
            render json: Song.find(params[:song_id]).comments, status: :ok
         else 
            render json: Comment.all, status: :ok
        end
    end

    def show 
        render json: find_comment, status: :ok
    end

    def create
        render json: Comment.create!(comment_params), status: :created
    end

    def update
        find_comment.update(params.permit(:description))
        render json: find_comment, status: :accepted
    end

    def destroy
        comment = find_comment
        if comment
            comment.destroy
            head :no_content
        else
            render json: { error: "comment not found" }, status: 404
        end
    end

    private 

    def find_comment
        Comment.find_by(id: params[:id])
    end

    def comment_params
        params.permit(:description, :song_id, :user_id)
    end
end
