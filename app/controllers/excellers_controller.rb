class ExcellersController < ApplicationController
  before_action :set_exceller, only: [:show, :edit, :update, :destroy, :async_save_exceller_interviews, :async_update_exceller_interview_item]

  protect_from_forgery except: [:async_get_exceller_interview_items]

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

  def async_get_exceller_interviews    
    exceller_id = exceller_params["exceller_id"]

    @project_requirements = ExcellerInterview.joins(:exceller, :interviewer, interview: :position).select("exceller_interviews.id as exceller_interview_id", "interviews.name as interview", "positions.name as position", "CONCAT(interviewers_exceller_interviews.first_name, ' ', interviewers_exceller_interviews.father_name) AS interviewer").where(exceller_id: exceller_id).pluck_to_hash("exceller_interviews.id as exceller_interview_id", "interviews.name as interview", "positions.name as position", "CONCAT(interviewers_exceller_interviews.first_name, ' ', interviewers_exceller_interviews.father_name) AS interviewer")
        
    respond_to do |format|
      format.html
      format.json { render :json => @project_requirements.to_json }
    end
  end

  def async_save_exceller_interviews        
    exceller_interview = ExcellerInterview.new(exceller_params["add_exceller_interview"])
    interview_criteria = InterviewCriterium.where(interview_id: exceller_interview.interview_id)
    puts "###################################### interview_criteria: " + interview_criteria.inspect
    respond_to do |format|
      if exceller_interview.save
        for ic in interview_criteria do
          exceller_interview_item = ExcellerInterviewItem.new(exceller_interview_id: exceller_interview.id, interview_criteria_id: ic.id, created_by: current_user.id)
          exceller_interview_item.save
        end
        format.html { redirect_to @exceller, notice: 'Exceller Interview was successfully added.' }
        format.json { render :json => @exceller.to_json }
      else
        format.html { redirect_to @exceller, notice: 'Exceller Interview was not added.' }
        format.json { render json: @exceller.errors, status: :unprocessable_entity }
      end
    end
  end

  def async_get_exceller_interview_items    
    exceller_interview_id = exceller_params["exceller_interview_id"]

    @exceller_interview_items = ExcellerInterviewItem.joins(interview_criterium: :skill).where(exceller_interview_id: exceller_interview_id).select("exceller_interview_items.id as exceller_interview_item_id, skills.name as skill_name, interview_criteria.minimum_score, exceller_interview_items.score", "exceller_interview_items.comment").order(created_at: :desc)
        
    respond_to do |format|
      format.html
      format.json { render :json => @exceller_interview_items.to_json }
    end
  end

  def delete_ei
    exceller_interview = ExcellerInterview.find_by_id(params[:id])
    exceller = Exceller.find_by_id(exceller_interview.exceller_id)
    exceller_interview_items = ExcellerInterviewItem.where(exceller_interview_id: params[:id])
    for eii in exceller_interview_items do
      eii.destroy
    end
    exceller_interview.destroy
    respond_to do |format|
      format.html { redirect_to exceller, notice: 'Exceller Interview was successfully deleted.' }
      format.json { head :no_content }
    end
  end

  def async_update_exceller_interview_item
    exceller_interview_item = ExcellerInterviewItem.find_by_id(exceller_params["exceller_interview_item"]["id"])
    exceller_interview_item.score = exceller_params["exceller_interview_item"]["score"]
    exceller_interview_item.comment = exceller_params["exceller_interview_item"]["comment"]
    respond_to do |format|
      if exceller_interview_item.save
        format.html { redirect_to @exceller, notice: 'Project Requirement Item was successfully updated.' }
        format.json { render :json => @exceller.to_json }
      else
        format.html { redirect_to @exceller, errors: 'Project Requirement Item was not updated.' }
        format.json { render json: @exceller.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exceller
      @exceller = Exceller.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def exceller_params
      params.require(:exceller).permit(:profile_picture, :first_name, :father_name, :grandfather_name, :dob, :position_id, :address_id, :years_of_experience, :recommended_for_id, :contract_signing_date, :employment_type_id, :duty_station_id, :status_id, :created_by, :modified_by, :deleted_at, :exceller_id, :exceller_interview_id, :address => [:email, :postal_code, :home_phone, :cell_phone, :work_phone, :zip_code, :house_no, :street_no, :sub_city, :woreda, :city, :state, :country], :add_exceller_interview => [:id, :exceller_id, :interview_id, :interviewer_id], :exceller_interview_item => [:id, :score, :comment])
    end
end
