class ExcellerAddressesController < ApplicationController
  before_action :set_exceller_address, only: [:show, :edit, :update, :destroy]

  # GET /exceller_addresses
  # GET /exceller_addresses.json
  def index
    @exceller_addresses = ExcellerAddress.all
  end

  # GET /exceller_addresses/1
  # GET /exceller_addresses/1.json
  def show
  end

  # GET /exceller_addresses/new
  def new
    @exceller_address = ExcellerAddress.new
  end

  # GET /exceller_addresses/1/edit
  def edit
  end

  # POST /exceller_addresses
  # POST /exceller_addresses.json
  def create
    @exceller_address = ExcellerAddress.new(exceller_address_params)

    respond_to do |format|
      if @exceller_address.save
        format.html { redirect_to @exceller_address, notice: 'Exceller address was successfully created.' }
        format.json { render :show, status: :created, location: @exceller_address }
      else
        format.html { render :new }
        format.json { render json: @exceller_address.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exceller_addresses/1
  # PATCH/PUT /exceller_addresses/1.json
  def update
    respond_to do |format|
      if @exceller_address.update(exceller_address_params)
        format.html { redirect_to @exceller_address, notice: 'Exceller address was successfully updated.' }
        format.json { render :show, status: :ok, location: @exceller_address }
      else
        format.html { render :edit }
        format.json { render json: @exceller_address.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exceller_addresses/1
  # DELETE /exceller_addresses/1.json
  def destroy
    @exceller_address.destroy
    respond_to do |format|
      format.html { redirect_to exceller_addresses_url, notice: 'Exceller address was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exceller_address
      @exceller_address = ExcellerAddress.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def exceller_address_params
      params.require(:exceller_address).permit(:exceller_id, :address_id, :status, :created_by, :modified_by, :deleted_at)
    end
end
