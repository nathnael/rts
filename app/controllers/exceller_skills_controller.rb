class ExcellerSkillsController < ApplicationController
  before_action :set_exceller_skill, only: [:show, :edit, :update, :destroy]

  # GET /exceller_skills
  # GET /exceller_skills.json
  def index
    @exceller_skills = ExcellerSkill.all
  end

  # GET /exceller_skills/1
  # GET /exceller_skills/1.json
  def show
  end

  # GET /exceller_skills/new
  def new
    @exceller_skill = ExcellerSkill.new
  end

  # GET /exceller_skills/1/edit
  def edit
  end

  # POST /exceller_skills
  # POST /exceller_skills.json
  def create
    @exceller_skill = ExcellerSkill.new(exceller_skill_params)

    respond_to do |format|
      if @exceller_skill.save
        format.html { redirect_to @exceller_skill, notice: 'Exceller skill was successfully created.' }
        format.json { render :show, status: :created, location: @exceller_skill }
      else
        format.html { render :new }
        format.json { render json: @exceller_skill.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exceller_skills/1
  # PATCH/PUT /exceller_skills/1.json
  def update
    respond_to do |format|
      if @exceller_skill.update(exceller_skill_params)
        format.html { redirect_to @exceller_skill, notice: 'Exceller skill was successfully updated.' }
        format.json { render :show, status: :ok, location: @exceller_skill }
      else
        format.html { render :edit }
        format.json { render json: @exceller_skill.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exceller_skills/1
  # DELETE /exceller_skills/1.json
  def destroy
    @exceller_skill.destroy
    respond_to do |format|
      format.html { redirect_to exceller_skills_url, notice: 'Exceller skill was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exceller_skill
      @exceller_skill = ExcellerSkill.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def exceller_skill_params
      params.require(:exceller_skill).permit(:exceller_id, :skill_id, :proficiency, :created_by, :modified_by, :deleted_at)
    end
end
