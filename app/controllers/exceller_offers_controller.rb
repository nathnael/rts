class ExcellerOffersController < ApplicationController
  before_action :set_exceller_offer, only: [:show, :edit, :update, :destroy]

  # GET /exceller_offers
  # GET /exceller_offers.json
  def index
    @exceller_offers = ExcellerOffer.all
  end

  # GET /exceller_offers/1
  # GET /exceller_offers/1.json
  def show
  end

  # GET /exceller_offers/new
  def new
    @exceller_offer = ExcellerOffer.new
  end

  # GET /exceller_offers/1/edit
  def edit
  end

  # POST /exceller_offers
  # POST /exceller_offers.json
  def create
    @exceller_offer = ExcellerOffer.new(exceller_offer_params)

    respond_to do |format|
      if @exceller_offer.save
        format.html { redirect_to @exceller_offer, notice: 'Exceller offer was successfully created.' }
        format.json { render :show, status: :created, location: @exceller_offer }
      else
        format.html { render :new }
        format.json { render json: @exceller_offer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exceller_offers/1
  # PATCH/PUT /exceller_offers/1.json
  def update
    respond_to do |format|
      if @exceller_offer.update(exceller_offer_params)
        format.html { redirect_to @exceller_offer, notice: 'Exceller offer was successfully updated.' }
        format.json { render :show, status: :ok, location: @exceller_offer }
      else
        format.html { render :edit }
        format.json { render json: @exceller_offer.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exceller_offers/1
  # DELETE /exceller_offers/1.json
  def destroy
    @exceller_offer.destroy
    respond_to do |format|
      format.html { redirect_to exceller_offers_url, notice: 'Exceller offer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exceller_offer
      @exceller_offer = ExcellerOffer.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def exceller_offer_params
      params.require(:exceller_offer).permit(:exceller_id, :position_id, :response, :created_by, :modified_by, :deleted_at)
    end
end
