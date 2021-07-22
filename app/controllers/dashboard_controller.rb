class DashboardController < ApplicationController
    protect_from_forgery except: [:get_project_staffing_status]

    def index 
        @no_of_projects = Project.all.count
        @no_of_clients = Client.all.count
        @unfulfilled_projects = get_unfulfilled_projects()
        @active_projects = Project.where.not(status: Project.statuses[:active]).count
        @no_of_excellers = Exceller.all.count
        already_assigned = ProjectRequirementExceller.where(current: true).pluck(:exceller_id)
        @no_of_unassigned_excellers = Exceller.where(status_id: Exceller.status_ids[:active]).where.not(id: already_assigned).count
        @projects = Project.all.order(created_at: :desc)
        # @project_requirements = ProjectRequirement.where(project_id: @projects.first.id)
        @project_requirements = ProjectRequirement.joins(:skill_type).where(project_id: @projects.first.id).pluck_to_hash(:id, "skill_types.name as name")
        @all_project_requirements = ProjectRequirement.joins(:skill_type).order(created_at: :desc).pluck_to_hash(:id, :project_id, "skill_types.name as name")
    end

    def get_unfulfilled_projects
        projects = Project.joins(:client).all
        open_project_progress = []
        for project in projects do
            project_requirements = ProjectRequirement.where(project_id: project.id)
            no_required_excellers = 0
            no_assigned_excellers = 0
            for project_requirement in project_requirements do 
                final_state = ProjectRequirementState.where(project_requirement_id: project_requirement.id).order(order: :desc).first
                no_of_assigned_excellers = 0
                if final_state.present?
                    no_of_assigned_excellers = ProjectRequirementExceller.where(project_requirement_id: project_requirement.id, state_id: final_state.id).count
                end                
                no_required_excellers += project_requirement.amount.to_f
                no_assigned_excellers += no_of_assigned_excellers.to_f
            end
            project_progress = (no_assigned_excellers.to_f / no_required_excellers.to_f).round(2) * 100
            if project_progress < 100
                open_project_progress << { id: project.id, project: project.name, client: project.client.name, start_date: project.start_date, end_date: project.end_date, required_excellers: no_required_excellers, assigned_excellers: no_assigned_excellers, progress: project_progress }
            end
        end
        return open_project_progress
    end

    def get_project_staffing_status
        puts "project_requirement_id: " + params["project_requirement_id"].to_s

        states = ProjectRequirementState.where(project_requirement_id: params["project_requirement_id"]).order(created_at: :asc)
        puts "states: " + states.inspect
        project_requirement_status = []
        for state in states do
            no_of_excellers = ProjectRequirementExceller.where(project_requirement_id: params["project_requirement_id"], state_id: state.id, current: true).count
            project_requirement_status << {state_name: state.name, no_of_excellers: no_of_excellers}
        end

        respond_to do |format|
            format.html
            format.json { render :json => project_requirement_status.to_json }
        end
    end

    def load_data    
        render json: [12, 19, 3, 5, 2, 3]
    end
end
