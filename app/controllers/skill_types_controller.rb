class SkillTypesController < ApplicationController
  before_action :set_skill_type, only: [:show, :edit, :update, :destroy]

  # GET /skill_types
  # GET /skill_types.json
  def index
    @skill_types = SkillType.all
  end

  # GET /skill_types/1
  # GET /skill_types/1.json
  def show
    @created_by = User.find_by_id(@skill_type.created_by)
    @modified_by = User.find_by_id(@skill_type.modified_by)
    @skills = Skill.joins(:skill_types).where(skill_types: {id: @skill_type.id})
  end

  # GET /skill_types/new
  def new
    @skill_type = SkillType.new
  end

  # GET /skill_types/1/edit
  def edit
    @skills = Skill.joins(:skill_types).where(skill_types: {id: @skill_type.id})
  end

  # POST /skill_types
  # POST /skill_types.json
  def create
    skill_hash = skill_type_params[:skills][0...-1]
    skill_type_skills = skill_hash.collect { |h| SkillTypeSkill.new({ skill_id: h[:id], skill_type_id: @skill_type&.id, created_by: current_user.id})}

    skill_type_map = skill_type_params.except(:skills)

    skill_type_map[:skill_type_skills] = skill_type_skills

    @skill_type = SkillType.new( skill_type_map )
    @skill_type.created_by = current_user.id   

    respond_to do |format|
      if @skill_type.save
        format.html { redirect_to @skill_type, notice: 'Skill type was successfully created.' }
        format.json { render :show, status: :created, location: @skill_type }
      else
        format.html { render :new }
        format.json { render json: @skill_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /skill_types/1
  # PATCH/PUT /skill_types/1.json
  def update
    @skill_type.modified_by = current_user.id

    skill_ids = @skill_type.skill_type_skills.collect { |sts| sts.skill_id }
    
    skill_hash = skill_type_params[:skills][0...-1]
    
    deleted_skill_ids = skill_ids -  skill_hash.collect { |r| r[:id].to_i }
    
    SkillTypeSkill.where( :skill_id => deleted_skill_ids).destroy_all
    
    skills = skill_hash.collect do |h|  
              existing_sts = SkillTypeSkill.where(skill_type_id: @skill_type.id, skill_id: h[:id], modified_by: current_user.id).first
              if existing_sts.present?
                puts "############################################### h[:id]: " + h[:id].inspect
                existing_sts
              else             
                SkillTypeSkill.new({ skill_id: h[:id], skill_type_id: @skill_type.id, created_by: current_user.id})
              end
            end
                        
    skill_type_map = skill_type_params.except(:skills)

    skill_type_map[:skill_type_skills] = skills
    respond_to do |format|
      if @skill_type.update(skill_type_map)
        format.html { redirect_to @skill_type, notice: 'Skill type was successfully updated.' }
        format.json { render :show, status: :ok, location: @skill_type }
      else
        format.html { render :edit }
        format.json { render json: @skill_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /skill_types/1
  # DELETE /skill_types/1.json
  def destroy
    @skill_type.destroy
    respond_to do |format|
      format.html { redirect_to skill_types_url, notice: 'Skill type was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_skill_type
      @skill_type = SkillType.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def skill_type_params
      params.require(:skill_type).permit(:name, :description, :created_by, :modified_by, :deleted_at, :skills => [:id])
    end
end
