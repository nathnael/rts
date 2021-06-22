class ProjectRequirementItemsController < ApplicationController
  before_action :set_project_requirement_item, only: %i[ show edit update destroy ]

  # GET /project_requirement_items or /project_requirement_items.json
  def index
    @project_requirement_items = ProjectRequirementItem.all
  end

  # GET /project_requirement_items/1 or /project_requirement_items/1.json
  def show
  end

  # GET /project_requirement_items/new
  def new
    @project_requirement_item = ProjectRequirementItem.new
  end

  # GET /project_requirement_items/1/edit
  def edit
  end

  # POST /project_requirement_items or /project_requirement_items.json
  def create
    @project_requirement_item = ProjectRequirementItem.new(project_requirement_item_params)

    respond_to do |format|
      if @project_requirement_item.save
        format.html { redirect_to @project_requirement_item, notice: "Project requirement item was successfully created." }
        format.json { render :show, status: :created, location: @project_requirement_item }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @project_requirement_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /project_requirement_items/1 or /project_requirement_items/1.json
  def update
    respond_to do |format|
      if @project_requirement_item.update(project_requirement_item_params)
        format.html { redirect_to @project_requirement_item, notice: "Project requirement item was successfully updated." }
        format.json { render :show, status: :ok, location: @project_requirement_item }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @project_requirement_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /project_requirement_items/1 or /project_requirement_items/1.json
  def destroy
    @project_requirement_item.destroy
    respond_to do |format|
      format.html { redirect_to project_requirement_items_url, notice: "Project requirement item was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_project_requirement_item
      @project_requirement_item = ProjectRequirementItem.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def project_requirement_item_params
      params.fetch(:project_requirement_item, {})
    end
end
