class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy]
  protect_from_forgery except: [:async_save_project_requirement, :async_remove_project_requirement, :async_get_project_requirements]

  # GET /projects
  # GET /projects.json
  def index
    @projects = Project.all
  end

  # GET /projects/1
  # GET /projects/1.json
  def show
    @client = Client.find_by_id(@project.client_id)
    @created_by = User.find_by_id(@project.created_by)
    @project_requirements = ProjectRequirement.includes(:project, :skill_type).where(project_id: @project.id)
  end

  # GET /projects/new
  def new
    @project = Project.new
  end

  # GET /projects/1/edit
  def edit
  end

  # POST /projects
  # POST /projects.json
  def create
    @project = Project.new(project_params)
    @project.created_by = current_user.id
    respond_to do |format|
      if @project.save
        format.html { redirect_to @project, notice: 'Project was successfully created.' }
        format.json { render :show, status: :created, location: @project }
      else
        format.html { render :new }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /projects/1
  # PATCH/PUT /projects/1.json
  def update
    @project.modified_by = current_user.id
    respond_to do |format|
      if @project.update(project_params)
        format.html { redirect_to @project, notice: 'Project was successfully updated.' }
        format.json { render :show, status: :ok, location: @project }
      else
        format.html { render :edit }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /projects/1
  # DELETE /projects/1.json
  def destroy
    @project.destroy
    respond_to do |format|
      format.html { redirect_to projects_url, notice: 'Project was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def async_save_project_requirement    
    project_id = project_params["project_id"]
    skill_type_id = project_params["skill_type_id"]
    no_of_excellers = project_params["no_of_excellers"]   
    start_date = project_params["start_date"]   
    end_date = project_params["end_date"]   

    @project_requirement = ProjectRequirement.new({project_id: project_id, skill_type_id: skill_type_id, amount: no_of_excellers, start_date: start_date, end_date: end_date, created_by: current_user.id})
    puts "############################### @project_requirement: " + @project_requirement.inspect
    # @flag = false
    
    respond_to do |format|
      format.html
      if(@project_requirement.save)
        format.json { render :json => @project_requirement.id.to_json }
      end
    end
  end

  def async_remove_project_requirement    
    project_requirement_id = project_params["project_requirement_id"]

    @project_requirement = ProjectRequirement.find_by_id(project_requirement_id)
    puts "############################### @project_requirement: " + @project_requirement.inspect
    @flag = false
    if(@project_requirement.destroy)
        @flag = true
    end
    
    respond_to do |format|
      format.html
      format.json { render :json =>  @flag.to_json }
    end
  end

  def async_get_project_requirements    
    project_id = project_params["project_id"]

    @project_requirements = ProjectRequirement.joins(:project, :skill_type).select("skill_types.name as skill_type_name", :skill_type_id, :amount, :start_date, :end_date).where(project_id: project_id).pluck_to_hash("project_requirements.id as pr_id", "skill_types.name as skill_type_name", "project_requirements.amount as amount", "projects.start_date as start_date", "projects.end_date as end_date", "project_requirements.id as progress")

    puts "############################### @project_requirement: " + { "data" => [@project_requirements.to_json] }.inspect
        
    respond_to do |format|
      format.html
      format.json { render :json => @project_requirements.to_json }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.require(:project).permit(:name, :client_id, :status, :start_date, :end_date, :created_by, :modified_by, :deleted_at, :project_id, :skill_type_id, :no_of_excellers, :project_requirement_id, :project_requirements => [:id, :project_id, :skill_type_id, :amount, :start_date, :end_date])
    end
end
