class CommentsController < ApplicationController
    skip_before_action :authorized_user, only: [:update]

    def index
        render json: Comment.all, status: :ok
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
        find_comment.destroy
        head :no_content
    end

    private 

    def find_comment
        Comment.find_by(params[:id])
    end

    def comment_params
        params.permit(:description, :song_id, :user_id)
    end
end
