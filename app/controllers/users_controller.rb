class UsersController < ApplicationController
  skip_before_action :authorize, only: [:index, :create]
  before_action :set_user, only: [:show, :update, :destroy]
  
  # GET /users
  def index
    render json: User.all
  end

  # # GET /users/1
  # def show
  #   user = User.find_by(id: session[:user_id])
  #   if user
  #     render json: user
  #   else
  #     render json: { error: "Not authorized" }, status: :unauthorized
  #   end
  # end

  def create
    @user = User.create!(user_signup_params)
    session[:user_id] = @user[:id]
    render json: @user, status: :created
  end

  # PATCH/PUT /users/1
  # def update
  #  @user.update!(user_params)
  #     render json: @user
  # end

  # DELETE /users/1
  # def destroy
  #   @user.destroy
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(session[:user_id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password, :password_confirmation, :user)
    end
    # Only for user signup
    def user_signup_params
      params.permit(:username, :password, :password_confirmation)
    end
end
