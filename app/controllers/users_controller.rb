class UsersController < ApplicationController
    skip_before_action :authorized_user, only: [:index, :create]

    def index
        render json: User.all, status: :ok
    end

    def show
        # binding.break
        user = User.find_by(id: session[:user_id]) 
        if user
            render json: user
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def update
        render json: find_user.update(user_params), status: :accepted
    end

    private

    def find_user
        User.find(params[:id])
    end

    def user_params
        params.permit(:user_name, :password, :date_of_birth, :age, :profile_pic_url, :pronouns, :bio)
    end
end