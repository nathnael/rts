class EmploymentTypesController < ApplicationController
  before_action :set_employment_type, only: [:show, :edit, :update, :destroy]

  # GET /employment_types
  # GET /employment_types.json
  def index
    @employment_types = EmploymentType.all
  end

  # GET /employment_types/1
  # GET /employment_types/1.json
  def show
    @created_by = User.find_by_id(@employment_type.created_by)
    @modified_by = User.find_by_id(@employment_type.modified_by)
  end

  # GET /employment_types/new
  def new
    @employment_type = EmploymentType.new
  end

  # GET /employment_types/1/edit
  def edit
  end

  # POST /employment_types
  # POST /employment_types.json
  def create
    @employment_type = EmploymentType.new(employment_type_params)
    @employment_type.created_by = current_user.id
    respond_to do |format|
      if @employment_type.save
        format.html { redirect_to @employment_type, notice: 'Employment type was successfully created.' }
        format.json { render :show, status: :created, location: @employment_type }
      else
        format.html { render :new }
        format.json { render json: @employment_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /employment_types/1
  # PATCH/PUT /employment_types/1.json
  def update
    @employment_type.modified_by = current_user.id
    respond_to do |format|
      if @employment_type.update(employment_type_params)
        format.html { redirect_to @employment_type, notice: 'Employment type was successfully updated.' }
        format.json { render :show, status: :ok, location: @employment_type }
      else
        format.html { render :edit }
        format.json { render json: @employment_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /employment_types/1
  # DELETE /employment_types/1.json
  def destroy
    @employment_type.destroy
    respond_to do |format|
      format.html { redirect_to employment_types_url, notice: 'Employment type was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employment_type
      @employment_type = EmploymentType.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def employment_type_params
      params.require(:employment_type).permit(:name, :description, :created_by, :modified_by, :deleted_at)
    end
end
