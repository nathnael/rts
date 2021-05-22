require 'test_helper'

class ExcellerAssignmentsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exceller_assignment = exceller_assignments(:one)
  end

  test "should get index" do
    get exceller_assignments_url
    assert_response :success
  end

  test "should get new" do
    get new_exceller_assignment_url
    assert_response :success
  end

  test "should create exceller_assignment" do
    assert_difference('ExcellerAssignment.count') do
      post exceller_assignments_url, params: { exceller_assignment: { created_by: @exceller_assignment.created_by, deleted_at: @exceller_assignment.deleted_at, end_date: @exceller_assignment.end_date, exceller_id: @exceller_assignment.exceller_id, modified_by: @exceller_assignment.modified_by, project_id: @exceller_assignment.project_id, skill_id: @exceller_assignment.skill_id, start_date: @exceller_assignment.start_date, status: @exceller_assignment.status } }
    end

    assert_redirected_to exceller_assignment_url(ExcellerAssignment.last)
  end

  test "should show exceller_assignment" do
    get exceller_assignment_url(@exceller_assignment)
    assert_response :success
  end

  test "should get edit" do
    get edit_exceller_assignment_url(@exceller_assignment)
    assert_response :success
  end

  test "should update exceller_assignment" do
    patch exceller_assignment_url(@exceller_assignment), params: { exceller_assignment: { created_by: @exceller_assignment.created_by, deleted_at: @exceller_assignment.deleted_at, end_date: @exceller_assignment.end_date, exceller_id: @exceller_assignment.exceller_id, modified_by: @exceller_assignment.modified_by, project_id: @exceller_assignment.project_id, skill_id: @exceller_assignment.skill_id, start_date: @exceller_assignment.start_date, status: @exceller_assignment.status } }
    assert_redirected_to exceller_assignment_url(@exceller_assignment)
  end

  test "should destroy exceller_assignment" do
    assert_difference('ExcellerAssignment.count', -1) do
      delete exceller_assignment_url(@exceller_assignment)
    end

    assert_redirected_to exceller_assignments_url
  end
end
