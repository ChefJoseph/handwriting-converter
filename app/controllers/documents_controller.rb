class DocumentsController < ApplicationController
    before_action :set_document, only: [:show, :destroy]

    # GET /documents/1 from specific user
    def index
      @documents = user_document.order(updated_at: :desc)
      render json: @documents
    end
    # GET /documents/1/1
    def show
        document = set_document
      render json: document

    end

    def latest
      @document = Document.last
      render json: DocumentSerializer.new(@document).serializable_hash[:data][:attributes]
    end 

    # POST /documents
    def create
      
      # byebug
      @document = current_user.documents.create!(document_params)
      render json: @document, status: :created
    end
    
    # PATCH/PUT /documents/1
    def update
      doc = Document.find(params[:id])
      doc.update!(document_params)
      render json: doc
    end

    
    # DELETE /documents/1
    def destroy
      @document = Document.find(params[:id])
      @document.destroy
    end

    private
      def user_document
        @document = Document.where(:user_id => current_user.id)
      end
      # Use callbacks to share common setup or constraints between actions.
      def set_document
        documents = user_document
        @document = documents.find(params[:id])
      end
      # Only allow a list of trusted parameters through.
      def document_params
        params.permit(:title, :content, :tag_id, :user_id, :folder_id)
      end
  end
  
  
  
  
  
  
  
  