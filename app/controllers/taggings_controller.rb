class TaggingsController < ApplicationController
    # before_action :set_tagging, only: [:show, :update, :destroy]
    # GET /taggings/1 from specific user
    def index
      render json: Tagging.all
    end
    # GET /taggings/1/1
    def show
      render json: find_tagging
    end

    # POST /taggings
    def create
      # byebug
      @tagging = current_user.taggings.create!(tagging_params)
      render json: @tagging, status: :created
    end
    
    # PATCH/PUT /taggings/1
    def update
        @tagging.update(tagging_params)
        render json: @tagging
    end

    
    # # DELETE /taggings/1
    # def destroy
    #   @tagging.destroy
    # end

    
    private
      def find_tagging
        @taggings = Tagging.find(params[:id])
      end
      # Use callbacks to share common setup or constraints between actions.
    #   def set_tagging
    #     taggings = user_tagging
    #     @tagging = taggings.find(params[:id])
    #   end
    #   # Only allow a list of trusted parameters through.
      def tagging_params
        params.permit(:document_id, :tag_id )
      end
end
