class DutyStationsController < ApplicationController
  before_action :set_duty_station, only: [:show, :edit, :update, :destroy]

  # GET /duty_stations
  # GET /duty_stations.json
  def index
    @duty_stations = DutyStation.all
  end

  # GET /duty_stations/1
  # GET /duty_stations/1.json
  def show
    @address = Address.find_by_id(@duty_station.address_id)
  end

  # GET /duty_stations/new
  def new
    @duty_station = DutyStation.new
  end

  # GET /duty_stations/1/edit
  def edit    
    @address = Address.find_by_id(@duty_station.address_id)
  end

  # POST /duty_stations
  # POST /duty_stations.json
  def create    
    address_hash = duty_station_params[:address]    
    address = Address.new(address_hash)
    address.created_by = current_user.id
    address.save
    puts 'address: ' + address.inspect
    duty_station_map = duty_station_params.except(:address)
    duty_station_map[:address_id] = address.id
    @duty_station = DutyStation.new(duty_station_map)
    @duty_station.created_by = current_user.id
    respond_to do |format|
      if @duty_station.save
        format.html { redirect_to @duty_station, notice: 'Duty station was successfully created.' }
        format.json { render :show, status: :created, location: @duty_station }
      else
        format.html { render :new }
        format.json { render json: @duty_station.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /duty_stations/1
  # PATCH/PUT /duty_stations/1.json
  def update
    address_hash = duty_station_params[:address]       
    address = Address.find_by_id(@duty_station.address_id)
    address.modified_by = current_user.id
    address.update(address_hash)
    duty_station_map = duty_station_params.except(:address)
    respond_to do |format|
      if @duty_station.update(duty_station_map)
        format.html { redirect_to @duty_station, notice: 'Duty station was successfully updated.' }
        format.json { render :show, status: :ok, location: @duty_station }
      else
        format.html { render :edit }
        format.json { render json: @duty_station.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /duty_stations/1
  # DELETE /duty_stations/1.json
  def destroy
    @duty_station.destroy
    respond_to do |format|
      format.html { redirect_to duty_stations_url, notice: 'Duty station was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_duty_station
      @duty_station = DutyStation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def duty_station_params
      params.require(:duty_station).permit(:name, :address_id, :created_by, :modified_by, :deleted_at, :address => [:email, :postal_code, :zip_code, :house_no, :street_no, :sub_city, :woreda, :city, :state, :country])
    end
end
