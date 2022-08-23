class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:login, :show, :logout]

    def login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          user.update!(is_login: true)
          render json: user, status: :created
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

     # GET (current_user auto-login)
  def show
    if current_user
        render json: current_user
    else
      render json: { error: "Not logged in" }, status: :unauthorized
    end
  end

    def logout
        user = User.find(session[:user_id])
        user.update!(is_login: false)
        session[:user_id] = nil
        render json: { message: "Logout" }, status: :accepted
    end

    # def logout
    #     session.delete :user_id
    #       head :no_content
    # end
  private
  # def image_url
  #   if object.image.attached?
  #     rails_blob_path(object.image)
  #   end
  # end
end
