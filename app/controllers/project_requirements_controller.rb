class ProjectRequirementsController < ApplicationController
  before_action :set_project_requirement, only: [:show, :edit, :update, :destroy]

  # GET /project_requirements
  # GET /project_requirements.json
  def index
    @project_requirements = ProjectRequirement.all
  end

  # GET /project_requirements/1
  # GET /project_requirements/1.json
  def show
  end

  # GET /project_requirements/new
  def new
    @project_requirement = ProjectRequirement.new
  end

  # GET /project_requirements/1/edit
  def edit
  end

  # POST /project_requirements
  # POST /project_requirements.json
  def create
    @project_requirement = ProjectRequirement.new(project_requirement_params)

    respond_to do |format|
      if @project_requirement.save
        format.html { redirect_to @project_requirement, notice: 'Project requirement was successfully created.' }
        format.json { render :show, status: :created, location: @project_requirement }
      else
        format.html { render :new }
        format.json { render json: @project_requirement.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_requirements/1
  # PATCH/PUT /project_requirements/1.json
  def update
    respond_to do |format|
      if @project_requirement.update(project_requirement_params)
        format.html { redirect_to @project_requirement, notice: 'Project requirement was successfully updated.' }
        format.json { render :show, status: :ok, location: @project_requirement }
      else
        format.html { render :edit }
        format.json { render json: @project_requirement.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_requirements/1
  # DELETE /project_requirements/1.json
  def destroy
    @project_requirement.destroy
    respond_to do |format|
      format.html { redirect_to project_requirements_url, notice: 'Project requirement was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_requirement
      @project_requirement = ProjectRequirement.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_requirement_params
      params.require(:project_requirement).permit(:skill_id, :amount, :created_by, :modified_by, :deleted_at)
    end
end
