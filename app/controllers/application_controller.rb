class ApplicationController < ActionController::API
  include ActionController::Cookies
  include ActiveStorage::Blob::Analyzable

  before_action :authorize

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  
  private
  
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def authorize
    unless current_user
    render json: { errors: ["Not authorized"] }, status: :unauthorized 
    end
    # return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end

  def record_not_found(e)
    render json: { error: "#{e.model} not found" }, status: :not_found
  end

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end
end
