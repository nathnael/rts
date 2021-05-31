class InterviewsController < ApplicationController
  before_action :set_interview, only: [:show, :edit, :update, :destroy]

  # GET /interviews
  # GET /interviews.json
  def index
    @interviews = Interview.all
  end

  # GET /interviews/1
  # GET /interviews/1.json
  def show
    @position = Position.find_by_id(@interview.position_id)
    @created_by = User.find_by_id(@interview.created_by)
    @interview_criteria = InterviewCriterium.includes(:skill,:interview).where( interview_id: @interview.id)
  end

  # GET /interviews/new
  def new
    @interview = Interview.new
  end

  # GET /interviews/1/edit
  def edit
    @interview_criteria = InterviewCriterium.includes(:skill,:interview).where( interview_id: @interview.id)
  end

  # POST /interviews
  # POST /interviews.json
  def create
    interview_criteria_hash = interview_params[:interview_criteria][0...-1]
    interview_criteria = interview_criteria_hash.collect { |h| InterviewCriterium.new({ skill_id: h[:skill_id], interview_id: @interview&.id, minimum_score: h[:minimum_score], created_by: current_user.id})}

    interview_map = interview_params.except(:interview_criteria)

    interview_map[:interview_criteria] = interview_criteria

    @interview = Interview.new( interview_map )
    @interview.created_by = current_user.id    

    respond_to do |format|
      if @interview.save
        format.html { redirect_to @interview, notice: 'Interview was successfully created.' }
        format.json { render :show, status: :created, location: @interview }
      else
        format.html { render :new }
        format.json { render json: @interview.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /interviews/1
  # PATCH/PUT /interviews/1.json
  def update
    @interview.modified_by = current_user.id

    interview_criteria_ids = @interview.interview_criteria.collect { |ic| ic.id }
    
    interview_criteria_hash = interview_params[:interview_criteria][0...-1]
    
    deleted_interview_criteria_ids = interview_criteria_ids -  interview_criteria_hash.collect { |r| r[:id].to_i }
    
    InterviewCriterium.where( :id => deleted_interview_criteria_ids).destroy_all 
    
    interview_criteria = interview_criteria_hash.collect do |h|   
                            
                        if h[:id] != nil
                          InterviewCriterium.find(h[:id])
                        else             
                          InterviewCriterium.new({ skill_id: h[:skill_id], interview_id: @interview.id, minimum_score: h[:minimum_score], modified_by: current_user.id})
                        end
                      end
                        
    interview_map = interview_params.except(:interview_criteria)

    interview_map[:interview_criteria] = interview_criteria

    respond_to do |format|
      if @interview.update(interview_map)
        format.html { redirect_to @interview, notice: 'Interview was successfully updated.' }
        format.json { render :show, status: :ok, location: @interview }
      else
        format.html { render :edit }
        format.json { render json: @interview.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /interviews/1
  # DELETE /interviews/1.json
  def destroy
    @interview.destroy
    respond_to do |format|
      format.html { redirect_to interviews_url, notice: 'Interview was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_interview
      @interview = Interview.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def interview_params
      params.require(:interview).permit(:name, :description, :position_id, :created_by, :modified_by, :deleted_at, :interview_criteria => [:id, :skill_id, :minimum_score])
    end
end
