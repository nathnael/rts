class ExcellersController < ApplicationController
  before_action :set_exceller, only: [:show, :edit, :update, :destroy]

  # GET /excellers
  # GET /excellers.json
  def index
    @excellers = Exceller.all
  end

  # GET /excellers/1
  # GET /excellers/1.json
  def show
  end

  # GET /excellers/new
  def new
    @exceller = Exceller.new
  end

  # GET /excellers/1/edit
  def edit
  end

  # POST /excellers
  # POST /excellers.json
  def create
    @exceller = Exceller.new(exceller_params)

    respond_to do |format|
      if @exceller.save
        format.html { redirect_to @exceller, notice: 'Exceller was successfully created.' }
        format.json { render :show, status: :created, location: @exceller }
      else
        format.html { render :new }
        format.json { render json: @exceller.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /excellers/1
  # PATCH/PUT /excellers/1.json
  def update
    respond_to do |format|
      if @exceller.update(exceller_params)
        format.html { redirect_to @exceller, notice: 'Exceller was successfully updated.' }
        format.json { render :show, status: :ok, location: @exceller }
      else
        format.html { render :edit }
        format.json { render json: @exceller.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /excellers/1
  # DELETE /excellers/1.json
  def destroy
    @exceller.destroy
    respond_to do |format|
      format.html { redirect_to excellers_url, notice: 'Exceller was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exceller
      @exceller = Exceller.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def exceller_params
      params.require(:exceller).permit(:first_name, :father_name, :grandfather_name, :position_id, :address_id, :years_of_experience, :recommended_for, :contract_signing_date, :employment_type, :duty_station, :status, :created_by, :modified_by, :deleted_at)
    end
end
