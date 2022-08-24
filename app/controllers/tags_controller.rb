class TagsController < ApplicationController
    before_action :set_tag, only: [:show, :update, :destroy]
    # GET /tags/1 from specific user
    def index
      @tags = user_tag.order
      render json: @tags
    end
    # GET /tags/1/1
    def show
        tag = set_tag
      render json: tag
    end

    # POST /tags
    def create
      # byebug
      @tag = current_user.tags.create!(tag_params)
      render json: @tag, status: :created
    end
    
    # PATCH/PUT /tags/1
    def update
        @tag.update(tag_params)
        render json: @tag
    end

    
    # DELETE /tags/1
    def destroy
      @tag.destroy
    end

    
    private
      def user_tag
        @tag = tag.where(:user_id => current_user.id)
      end
      # Use callbacks to share common setup or constraints between actions.
      def set_tag
        tags = user_tag
        @tag = tags.find(params[:id])
      end
      # Only allow a list of trusted parameters through.
      def tag_params
        params.permit(:name)
      end
end
