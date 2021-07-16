class ProjectsController < ApplicationController
  before_action :set_project, only: [:show, :edit, :update, :destroy, :async_save_project_requirements, :async_update_project_requirement_item, :async_edit_project_requirement, :async_add_project_requirement_state, :async_add_project_requirement_flow, :async_add_project_requirement_exceller]
  protect_from_forgery except: [:async_save_project_requirement, :async_remove_project_requirement, :async_get_project_requirements, :async_add_project_requirement_state]

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
    @existing_skill_types = ProjectRequirement.where(project_id: @project.id).pluck(:skill_type_id)
    @project_requirement_states = ProjectRequirementState.joins(:project_requirement).where("project_requirements.project_id" => @project.id)
    @project_requirement_flows = ProjectRequirementFlow.joins(:project_requirement).where("project_requirements.project_id" => @project.id)
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

    project_requirements = ProjectRequirement.joins(:project, :skill_type).select("skill_types.name as skill_type_name", :skill_type_id, :amount, :start_date, :end_date).where(project_id: project_id).pluck_to_hash("project_requirements.id as pr_id", "skill_types.id as skt_id", "skill_types.name as skill_type_name", "project_requirements.amount as amount", "project_requirements.start_date as start_date", "project_requirements.end_date as end_date", "project_requirements.id as progress")
    
    project_requirement_progress = []
    for project_requirement in project_requirements do      
      final_state = ProjectRequirementState.where(project_requirement_id: project_requirement["pr_id"]).order(order: :desc).first
      no_of_assigned_excellers = ProjectRequirementExceller.where(project_requirement_id: project_requirement["pr_id"], state_id: final_state.id).count
      progress = (no_of_assigned_excellers.to_f / project_requirement["amount"].to_f).round(2) * 100
      puts "##################################### project_requirement['amount']: " + project_requirement["amount"].inspect
      project_requirement.merge!(progress: progress)
      project_requirement_progress << project_requirement
    end
        
    respond_to do |format|
      format.html
      format.json { render :json => project_requirement_progress.to_json }
    end
  end

  def async_save_project_requirements    
    
    project_requirement = ProjectRequirement.new(project_params["add_project_requirement"])
    skills = SkillTypeSkill.where(skill_type_id: project_requirement.skill_type_id).joins(:skill).select("skills.id", "skills.name", "skills.default_minimum_score", "skills.description")
    respond_to do |format|
      if project_requirement.save
        for skill in skills do
          project_requirement_item = ProjectRequirementItem.new(project_requirement_id: project_requirement.id, skill_id: skill.id, minimum_score: skill.default_minimum_score, description: skill.description, created_by: current_user.id)
          project_requirement_item.save
        end
        format.html { redirect_to @project, notice: 'Project Requirement was successfully added.' }
        format.json { render :json => @project.to_json }
      else
        format.html { redirect_to @project, flash: { error: "Project Requirement was not added." }}
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end
  
  def async_get_project_requirement_items    
    project_requirement_id = project_params["project_requirement_id"]
    skill_type_id = project_params["skill_type_id"]

    skill_ids = Skill.joins(:skill_types).where(skill_types: {id: skill_type_id}).pluck(:id)
    @project_requirement_items = ProjectRequirementItem.joins(:skill).where(project_requirement_id: project_requirement_id, skill_id: skill_ids).select("project_requirement_items.id as pri_id, skills.id as skill_id, skills.name as skill_name, project_requirement_items.minimum_score, skills.description as description")
        
    respond_to do |format|
      format.html
      format.json { render :json => @project_requirement_items.to_json }
    end
  end

  def async_update_project_requirement_item
    project_requirement_item = ProjectRequirementItem.find_by_id(project_params["project_requirement_item"]["id"])
    
    respond_to do |format|
      if project_requirement_item.update(project_params["project_requirement_item"])
        format.html { redirect_to @project, notice: 'Project Requirement Item was successfully updated.' }
        format.json { render :json => @project.to_json }
      else
        format.html { redirect_to @project, flash: { error: 'Project Requirement Item was not updated.' } }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  def async_edit_project_requirement    
    project_requirement = ProjectRequirement.find_by_id(project_params["add_project_requirement"]["id"])
    
    respond_to do |format|
      if project_requirement.update(project_params["add_project_requirement"])
        format.html { redirect_to @project, notice: 'Project Requirement was successfully updated.' }
        format.json { render :json => @project.to_json }
      else
        format.html { redirect_to @project, flash: { error: 'Project Requirement was not updated.' } }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  def delete_pr
    project_requirement = ProjectRequirement.find_by_id(params[:id])
    project = Project.find_by_id(project_requirement.project_id)
    project_requirement.destroy
    respond_to do |format|
      format.html { redirect_to project, notice: 'Project Requirement was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def async_add_project_requirement_state     
    project_requirement_state = ProjectRequirementState.new(project_params["project_requirement_state"])
    respond_to do |format|
      if project_requirement_state.save
        format.html { redirect_to @project, notice: 'Recruitment State was successfully added.' }
        format.json { render :json => @project.to_json }
      else
        format.html { redirect_to @project, flash: { error: "Recruitment State was not added." } }
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end
  
  def async_get_project_requirement_states    
    project_requirement_id = project_params["project_requirement_id"]

    @project_requirement_items = ProjectRequirementState.where(project_requirement_id: project_requirement_id).order(order: :asc)
        
    respond_to do |format|
      format.html
      format.json { render :json => @project_requirement_items.to_json }
    end
  end

  def async_get_pr_assigned_excellers
    project_requirement_id = project_params["project_requirement_id"]
    states = ProjectRequirementState.where(project_requirement_id: project_requirement_id).order(created_at: :asc)
    pris = ProjectRequirementItem.where(project_requirement_id: project_requirement_id)
    
    pr_states = []
    excellers = []
    for state in states do
      final_states = ProjectRequirementFlow.where(project_requirement_id: project_requirement_id, initial_state_id: state.id).pluck(:final_state_id)
      if state.name.include? "Potential"
        skills = Skill.all
        already_assigned = ProjectRequirementExceller.where(project_requirement_id: project_requirement_id).pluck(:exceller_id)
        active_excellers = Exceller.where(status_id: Exceller.status_ids[:active]).where.not(id: already_assigned)
        potential_excellers = []
        requires_interview = []
        failed_candidates = []
        for active_exceller in active_excellers do
          exceller_skills = ExcellerInterviewItem.joins(:exceller_interview, interview_criterium: :skill).where("exceller_interviews.exceller_id" => active_exceller.id, "interview_criteria.skill_id" => pris.pluck(:skill_id)).group("interview_criteria.skill_id").average("exceller_interview_items.score")

          required_scores = Hash[pris.pluck("skill_id", "minimum_score").map {|key, value| [key, value]}]
          exceller_results = []
          failed_status = false
          interview_status = false
          for required_score in required_scores do  
            
            
            if exceller_skills[required_score[0]].present?
              
              if exceller_skills[required_score[0]].to_f >= required_score[1].to_f
                # puts "#################################################### required_score[1]: " + required_score[1].inspect
                exceller_results << [
                  # "required_skill_id" => required_score[0],
                  skills.find_by_id(required_score[0]).name,
                  required_score[1].to_s,
                  exceller_skills[required_score[0]],
                  "Pass"
                ]
              elsif exceller_skills[required_score[0]].to_f < required_score[1].to_f
                # puts "#################################################### required_score[1]: " + required_score[1].inspect
                failed_status = true
                exceller_results << [
                  # "required_skill_id" => required_score[0],
                  skills.find_by_id(required_score[0]).name,
                  required_score[1].to_s,
                  exceller_skills[required_score[0]],
                  "Fail"
                ]
              end
            else
              interview_status = true
              exceller_results << [
                # "required_skill_id" => required_score[0],
                skills.find_by_id(required_score[0]).name,
                required_score[1],
                "N/A",
                "Interview Required"
              ]
            end
          end

          workflow_history = ProjectRequirementExceller.joins(:exceller, :state, :performed).where(project_requirement_id: project_requirement_id, exceller_id: active_exceller.id).order(created_at: :desc).pluck("project_requirement_states.name as state", "CONCAT(users.first_name, ' ',users.last_name) AS full_name","project_requirement_excellers.date_performed", "project_Requirement_excellers.current", "project_requirement_excellers.comment")

          position = Position.find_by_id(active_exceller.position_id)
          status = active_exceller.status_id.humanize
          if interview_status
            requires_interview << {
              'id':active_exceller.id,
              'title':active_exceller.name,
              'class': 'interview_required',
              'profile_picture_url': active_exceller.profile_picture_url,
              'exceller_name': active_exceller.name,
              'exceller_position': position.name,
              'exceller_status': status,
              'detail_result': exceller_results.to_json,
              'workflow_history': workflow_history.to_json
            }
          elsif failed_status
            failed_candidates << {
              'id':active_exceller.id,
              'title':active_exceller.name,
              'class': 'failed_candidate',
              'profile_picture_url': active_exceller.profile_picture_url,
              'exceller_name': active_exceller.name,
              'exceller_position': position.name,
              'exceller_status': status,
              'detail_result': exceller_results.to_json,
              'workflow_history': workflow_history.to_json
            }
          else
            potential_excellers << {
              'id':active_exceller.id,
              'title':active_exceller.name,
              'class': 'potential_candidate',
              'profile_picture_url': active_exceller.profile_picture_url,
              'exceller_name': active_exceller.name,
              'exceller_position': position.name,
              'exceller_status': status,
              'detail_result': exceller_results.to_json,
              'workflow_history': workflow_history.to_json
            }
          end       
        end
        excellers = potential_excellers + failed_candidates + requires_interview

        pr_states << {
          "id" => state.id, 
          "title" => state.name, 
          "name" => state.name, 
          "class" => "kanban-info", 
          "dragTo" => final_states, 
          "item" => excellers          
        }
      else
        # puts "########################################## Other than potentials"
        other_excellers = []
        pres = ProjectRequirementExceller.joins(:exceller).where(project_requirement_id: project_requirement_id, state_id: state.id, current: true)
        for pre in pres do
          exceller_skills = ExcellerInterviewItem.joins(:exceller_interview, interview_criterium: :skill).where("exceller_interviews.exceller_id" => pre.exceller.id, "interview_criteria.skill_id" => pris.pluck(:skill_id)).group("interview_criteria.skill_id").average("exceller_interview_items.score")
          skills = Skill.all
          required_scores = Hash[pris.pluck("skill_id", "minimum_score").map {|key, value| [key, value]}]
          exceller_results = []
          failed_status = false
          interview_status = false
          for required_score in required_scores do              
            
            if exceller_skills[required_score[0]].present?
              
              if exceller_skills[required_score[0]].to_f >= required_score[1].to_f
                # puts "#################################################### required_score[1]: " + required_score[1].inspect
                exceller_results << [
                  # "required_skill_id" => required_score[0],
                  skills.find_by_id(required_score[0]).name,
                  required_score[1].to_s,
                  exceller_skills[required_score[0]],
                  "Pass"
                ]
              elsif exceller_skills[required_score[0]].to_f < required_score[1].to_f
                # puts "#################################################### required_score[1]: " + required_score[1].inspect
                failed_status = true
                exceller_results << [
                  # "required_skill_id" => required_score[0],
                  skills.find_by_id(required_score[0]).name,
                  required_score[1].to_s,
                  exceller_skills[required_score[0]],
                  "Fail"
                ]
              end
            else
              interview_status = true
              exceller_results << [
                # "required_skill_id" => required_score[0],
                skills.find_by_id(required_score[0]).name,
                required_score[1],
                "N/A",
                "Interview Required"
              ]
            end
          end
          workflow_history = ProjectRequirementExceller.joins(:exceller, :state, :performed).where(project_requirement_id: project_requirement_id, exceller_id: pre.exceller.id).pluck("project_requirement_states.name as state", "CONCAT(users.first_name, ' ',users.last_name) AS full_name","project_requirement_excellers.date_performed", "project_Requirement_excellers.current", "project_requirement_excellers.comment")
          position = Position.find_by_id(pre.exceller.position_id)
          status = pre.exceller.status_id.humanize
          other_excellers << {
            'id': pre.exceller.id,
            'title':  pre.exceller.name,
            'profile_picture_url': pre.exceller.profile_picture_url,
            'exceller_name': pre.exceller.name,
            'exceller_position': position.name,
            'exceller_status': status,
            'detail_result': exceller_results.to_json,
            'workflow_history': workflow_history.to_json
          }
        end
        
        pr_states << {
          "id" => state.id, 
          "title" => state.name, 
          "name" => state.name, 
          "class" => "kanban-info", 
          "dragTo" => final_states, 
          "item" => other_excellers
        }
      end
    end

    respond_to do |format|
      format.html
      format.json { render :json => pr_states.to_json }
    end
  end

  def delete_prs
    project_requirement_state = ProjectRequirementState.joins(:project_requirement).find_by_id(params[:id])
    project = Project.find_by_id(project_requirement_state.project_requirement.project_id)
    project_requirement_state.destroy
    respond_to do |format|
      format.html { redirect_to project, flash: { error: "Project Requirement State was successfully destroyed." } }
      format.json { head :no_content }
    end
  end

  def async_add_project_requirement_flow     
    project_requirement_flow = ProjectRequirementFlow.new(project_params["project_requirement_flow"])
    respond_to do |format|
      if project_requirement_flow.save
        format.html { redirect_to @project, notice: 'Recruitment Flow was successfully added.' }
        format.json { render :json => @project.to_json }
      else
        format.html { redirect_to @project, flash: { error: "Recruitment Flow was not added." }}
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end
  
  def async_get_project_requirement_flows    
    project_requirement_id = project_params["project_requirement_id"]

    @project_requirement_flows = ProjectRequirementFlow.joins("INNER JOIN project_requirement_states as initial_state ON initial_state.id = project_requirement_flows.initial_state_id INNER JOIN project_requirement_states as final_state ON final_state.id = project_requirement_flows.final_state_id").where("project_requirement_flows.project_requirement_id" => project_requirement_id).select(:id, :name, :initial_state_id, :final_state_id, "initial_state.name as initial_state_name", "final_state.name as final_state_name")
        
    respond_to do |format|
      format.html
      format.json { render :json => @project_requirement_flows.to_json }
    end
  end

  def async_add_project_requirement_exceller     
    project_requirement_exceller = ProjectRequirementExceller.new(project_params["project_requirement_exceller"])
    # puts "##################### project_requirement_exceller: " + project_requirement_exceller.inspect
    last_state = ProjectRequirementExceller.where(project_requirement_id: project_requirement_exceller.project_requirement_id, exceller_id: project_requirement_exceller.exceller_id, current: true).first
    if last_state.present?
      last_state.current = false
      last_state.save
    end    
    project_requirement_exceller.current = true,
    project_requirement_exceller.performed_by = current_user.id
    project_requirement_exceller.created_by = current_user.id
    
    respond_to do |format|
      if project_requirement_exceller.save
        format.html { redirect_to @project, notice: 'Exceller was successfully progressed.' }
        format.json { render :json => @project.to_json }
      else
        format.html { redirect_to @project, flash: { error: "Exceller progress failed." }}
        format.json { render json: @project.errors, status: :unprocessable_entity }
      end
    end
  end

  def delete_prf
    project_requirement_flow = ProjectRequirementFlow.joins(:project_requirement).find_by_id(params[:id])
    project = Project.find_by_id(project_requirement_flow.project_requirement.project_id)
    project_requirement_flow.destroy
    respond_to do |format|
      format.html { redirect_to project, notice: 'Project Requirement Flow was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = Project.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_params
      params.require(:project).permit(:id, :name, :client_id, :status, :start_date, :end_date, :created_by, :modified_by, :deleted_at, :project_id, :skill_type_id, :no_of_excellers, :project_requirement_id, :add_project_requirement => [:id, :project_id, :skill_type_id, :amount, :start_date, :end_date], :project_requirements => [:id, :project_id, :skill_type_id, :amount, :start_date, :end_date], :project_requirement_item => [:id, :skill_id, :minimum_score, :description], :project_requirement_state => [:id, :project_requirement_id, :name, :description, :order], :project_requirement_flow => [:id, :name, :project_requirement_id, :initial_state_id, :final_state_id], :project_requirement_exceller => [:id, :project_requirement_id, :exceller_id, :state_id, :date_performed, :comment])
    end
end

