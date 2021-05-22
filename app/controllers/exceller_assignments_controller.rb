class ExcellerAssignmentsController < ApplicationController
  before_action :set_exceller_assignment, only: [:show, :edit, :update, :destroy]

  # GET /exceller_assignments
  # GET /exceller_assignments.json
  def index
    @exceller_assignments = ExcellerAssignment.all
  end

  # GET /exceller_assignments/1
  # GET /exceller_assignments/1.json
  def show
  end

  # GET /exceller_assignments/new
  def new
    @exceller_assignment = ExcellerAssignment.new
  end

  # GET /exceller_assignments/1/edit
  def edit
  end

  # POST /exceller_assignments
  # POST /exceller_assignments.json
  def create
    @exceller_assignment = ExcellerAssignment.new(exceller_assignment_params)

    respond_to do |format|
      if @exceller_assignment.save
        format.html { redirect_to @exceller_assignment, notice: 'Exceller assignment was successfully created.' }
        format.json { render :show, status: :created, location: @exceller_assignment }
      else
        format.html { render :new }
        format.json { render json: @exceller_assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /exceller_assignments/1
  # PATCH/PUT /exceller_assignments/1.json
  def update
    respond_to do |format|
      if @exceller_assignment.update(exceller_assignment_params)
        format.html { redirect_to @exceller_assignment, notice: 'Exceller assignment was successfully updated.' }
        format.json { render :show, status: :ok, location: @exceller_assignment }
      else
        format.html { render :edit }
        format.json { render json: @exceller_assignment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /exceller_assignments/1
  # DELETE /exceller_assignments/1.json
  def destroy
    @exceller_assignment.destroy
    respond_to do |format|
      format.html { redirect_to exceller_assignments_url, notice: 'Exceller assignment was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_exceller_assignment
      @exceller_assignment = ExcellerAssignment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def exceller_assignment_params
      params.require(:exceller_assignment).permit(:exceller_id, :project_id, :skill_id, :start_date, :end_date, :status, :created_by, :modified_by, :deleted_at)
    end
end
