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
    @position = Position.find_by_id(@exceller.position_id)
    @recommended_for = Position.find_by_id(@exceller.recommended_for_id)
    @employment_type = EmploymentType.find_by_id(@exceller.employment_type_id)
    @duty_station = DutyStation.find_by_id(@exceller.duty_station_id)
    @address = Address.find_by_id(@exceller.address_id)
  end

  # GET /excellers/new
  def new
    @exceller = Exceller.new
  end

  # GET /excellers/1/edit
  def edit
    @address = Address.find_by_id(@exceller.address_id)
  end

  # POST /excellers
  # POST /excellers.json
  def create
    profile_picture = exceller_params[:profile_picture]
    address_hash = exceller_params[:address]    
    address = Address.new(address_hash)
    address.created_by = current_user.id
    address.save
    exceller_map = exceller_params.except(:address, :profile_picture)
    exceller_map[:address_id] = address.id
    @exceller = Exceller.new(exceller_map)
    @exceller.created_by = current_user.id

    respond_to do |format|
      if @exceller.save
        if profile_picture
          File.open(Rails.root.join('public', 'uploads', profile_picture.original_filename), 'wb') do |file|
            file.write(profile_picture.read)
            @uniq_path = Rails.root.join('public', 'uploads', @exceller.id.to_s + DateTime.now.to_s + File.extname(file))
            File.rename(file, @uniq_path)
            @exceller.profile_picture_url = @exceller.id.to_s + DateTime.now.to_s + File.extname(file)
            @exceller.save
          end
        end
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
    profile_picture = exceller_params[:profile_picture]
    address_hash = exceller_params[:address]       

    if profile_picture.present?
      if @exceller.profile_picture_url.present?
        File.delete(Rails.root.join('public', 'uploads', @exceller.profile_picture_url)) if File.exist?(Rails.root.join('public', 'uploads', @exceller.profile_picture_url))
      end
      File.open(Rails.root.join('public', 'uploads', profile_picture.original_filename), 'wb') do |file|
        file.write(profile_picture.read)
        @uniq_path = Rails.root.join('public', 'uploads', @exceller.id.to_s + DateTime.now.to_s + File.extname(file))
        File.rename(file, @uniq_path)
        @exceller.profile_picture_url = @exceller.id.to_s + DateTime.now.to_s + File.extname(file)
        @exceller.save
      end
    end

    address = Address.find_by_id(@exceller.address_id)
    address.modified_by = current_user.id
    address.update(address_hash)
    exceller_map = exceller_params.except(:address, :profile_picture)
    respond_to do |format|
      if @exceller.update(exceller_map)
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
      params.require(:exceller).permit(:profile_picture, :first_name, :father_name, :grandfather_name, :dob, :position_id, :address_id, :years_of_experience, :recommended_for_id, :contract_signing_date, :employment_type_id, :duty_station_id, :status_id, :created_by, :modified_by, :deleted_at, :address => [:email, :postal_code, :home_phone, :cell_phone, :work_phone, :zip_code, :house_no, :street_no, :sub_city, :woreda, :city, :state, :country])
    end
end
