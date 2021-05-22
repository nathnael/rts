class ExcellerInterviewsController < ApplicationController
  before_action :set_exceller_interview, only: [:show, :edit, :update, :destroy]

  # GET /exceller_interviews
  # GET /exceller_interviews.json
  def index
    @exceller_interviews = ExcellerInterview.all
  end

  # GET /exceller_interviews/1
  # GET /exceller_interviews/1.json
  def show
  end

  # GET /exceller_interviews/new
  def new
    @exceller_interview = ExcellerInterview.new
  end

  # GET /exceller_interviews/1/edit
  def edit
  end

  # POST /exceller_interviews
  # POST /exceller_interviews.json
  def create
    @exceller_interview = ExcellerInterview.new(exceller_interview_params)

    respond_to do |format|
      if @exceller_interview.save
        format.html { redirect_to @exceller_interview, notice: 'Exceller interview was successfully created.' }
        format.json { render :show, status: :created, location: @exceller_interview }
      else
        format.html { render :new }
        format.json { render json: @exceller_interview.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exceller_interviews/1
  # PATCH/PUT /exceller_interviews/1.json
  def update
    respond_to do |format|
      if @exceller_interview.update(exceller_interview_params)
        format.html { redirect_to @exceller_interview, notice: 'Exceller interview was successfully updated.' }
        format.json { render :show, status: :ok, location: @exceller_interview }
      else
        format.html { render :edit }
        format.json { render json: @exceller_interview.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exceller_interviews/1
  # DELETE /exceller_interviews/1.json
  def destroy
    @exceller_interview.destroy
    respond_to do |format|
      format.html { redirect_to exceller_interviews_url, notice: 'Exceller interview was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exceller_interview
      @exceller_interview = ExcellerInterview.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def exceller_interview_params
      params.require(:exceller_interview).permit(:exceller_id, :interviewer_id, :interview_criteria_id, :score, :comment, :created_by, :modified_by, :deleted_at)
    end
end
