class FoldersController < ApplicationController
    def index
        @folders = user_folder.order(updated_at: :desc)
        render json: @folders
    end

    def show
        @folder = set_folder
        render json: @folder
    end

    def latest
        @folder = Folder.last
        render json: DocumentSerializer.new(@folder).serializable_hash[:data][:attributes]
    end 


    def create
        @folder = current_user.folders.create!(folder_params)
        render json: @folder, status: :created
    end
    
    # PATCH/PUT /documents/1
    def update
        @folder = Folder.find(params[:id])
        @folder.update!(folder_params)
        render json: @folder
    end

    
    
    def destroy
        @folder = Folder.find(params[:id])
        @folder.destroy
    end

    private
    def user_folder
        @folder = Folder.where(:user_id => current_user.id)
    end
    # Use callbacks to share common setup or constraints between actions.
    def set_folder
        folders = user_folder
        @folder = folder.find(params[:id])
    end
    # Only allow a list of trusted parameters through.
    def folder_params
        params.permit(:name, :user_id)
    end
end
