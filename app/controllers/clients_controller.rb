class ClientsController < ApplicationController
  before_action :set_client, only: [:show, :edit, :update, :destroy]

  # GET /clients
  # GET /clients.json
  def index
    @clients = Client.all
  end

  # GET /clients/1
  # GET /clients/1.json
  def show
    @address = Address.find_by_id(@client.address_id)
  end

  # GET /clients/new
  def new
    @client = Client.new
  end

  # GET /clients/1/edit
  def edit
    @address = Address.find_by_id(@client.address_id)
  end

  # POST /clients
  # POST /clients.json
  def create
    address_hash = client_params[:address]
    address = Address.new(address_hash)
    address.created_by = current_user.id
    address.save
    client_map = client_params.except(:address)
    client_map[:address_id] = address.id
    @client = Client.new(client_map)
    @client.created_by = current_user.id

    respond_to do |format|
      if @client.save
        format.html { redirect_to @client, notice: 'Client was successfully created.' }
        format.json { render :show, status: :created, location: @client }
      else
        format.html { render :new }
        format.json { render json: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /clients/1
  # PATCH/PUT /clients/1.json
  def update
    address_hash = client_params[:address]       
    address = Address.find_by_id(@client.address_id)
    address.modified_by = current_user.id
    address.update(address_hash)
    client_map = client_params.except(:address)
    respond_to do |format|
      if @client.update(client_map)
        format.html { redirect_to @client, notice: 'Client was successfully updated.' }
        format.json { render :show, status: :ok, location: @client }
      else
        format.html { render :edit }
        format.json { render json: @client.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /clients/1
  # DELETE /clients/1.json
  def destroy
    @client.destroy
    respond_to do |format|
      format.html { redirect_to clients_url, notice: 'Client was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_client
      @client = Client.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def client_params
      params.require(:client).permit(:name, :rep_name, :address_id, :status, :created_by, :modified_by, :deleted_at, :address => [:email, :postal_code, :zip_code, :house_no, :cell_phone, :work_phone, :street_no, :sub_city, :woreda, :city, :state, :country])
    end
end
