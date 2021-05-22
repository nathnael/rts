class InterviewCriteriaController < ApplicationController
  before_action :set_interview_criterium, only: [:show, :edit, :update, :destroy]

  # GET /interview_criteria
  # GET /interview_criteria.json
  def index
    @interview_criteria = InterviewCriterium.all
  end

  # GET /interview_criteria/1
  # GET /interview_criteria/1.json
  def show
  end

  # GET /interview_criteria/new
  def new
    @interview_criterium = InterviewCriterium.new
  end

  # GET /interview_criteria/1/edit
  def edit
  end

  # POST /interview_criteria
  # POST /interview_criteria.json
  def create
    @interview_criterium = InterviewCriterium.new(interview_criterium_params)

    respond_to do |format|
      if @interview_criterium.save
        format.html { redirect_to @interview_criterium, notice: 'Interview criterium was successfully created.' }
        format.json { render :show, status: :created, location: @interview_criterium }
      else
        format.html { render :new }
        format.json { render json: @interview_criterium.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /interview_criteria/1
  # PATCH/PUT /interview_criteria/1.json
  def update
    respond_to do |format|
      if @interview_criterium.update(interview_criterium_params)
        format.html { redirect_to @interview_criterium, notice: 'Interview criterium was successfully updated.' }
        format.json { render :show, status: :ok, location: @interview_criterium }
      else
        format.html { render :edit }
        format.json { render json: @interview_criterium.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /interview_criteria/1
  # DELETE /interview_criteria/1.json
  def destroy
    @interview_criterium.destroy
    respond_to do |format|
      format.html { redirect_to interview_criteria_url, notice: 'Interview criterium was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_interview_criterium
      @interview_criterium = InterviewCriterium.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def interview_criterium_params
      params.require(:interview_criterium).permit(:interview_id, :skill_id, :created_by, :modified_by, :deleted_at)
    end
end
