require 'test_helper'

class ExcellerInterviewsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exceller_interview = exceller_interviews(:one)
  end

  test "should get index" do
    get exceller_interviews_url
    assert_response :success
  end

  test "should get new" do
    get new_exceller_interview_url
    assert_response :success
  end

  test "should create exceller_interview" do
    assert_difference('ExcellerInterview.count') do
      post exceller_interviews_url, params: { exceller_interview: { comment: @exceller_interview.comment, created_by: @exceller_interview.created_by, deleted_at: @exceller_interview.deleted_at, exceller_id: @exceller_interview.exceller_id, interview_criteria_id: @exceller_interview.interview_criteria_id, interviewer_id: @exceller_interview.interviewer_id, modified_by: @exceller_interview.modified_by, score: @exceller_interview.score } }
    end

    assert_redirected_to exceller_interview_url(ExcellerInterview.last)
  end

  test "should show exceller_interview" do
    get exceller_interview_url(@exceller_interview)
    assert_response :success
  end

  test "should get edit" do
    get edit_exceller_interview_url(@exceller_interview)
    assert_response :success
  end

  test "should update exceller_interview" do
    patch exceller_interview_url(@exceller_interview), params: { exceller_interview: { comment: @exceller_interview.comment, created_by: @exceller_interview.created_by, deleted_at: @exceller_interview.deleted_at, exceller_id: @exceller_interview.exceller_id, interview_criteria_id: @exceller_interview.interview_criteria_id, interviewer_id: @exceller_interview.interviewer_id, modified_by: @exceller_interview.modified_by, score: @exceller_interview.score } }
    assert_redirected_to exceller_interview_url(@exceller_interview)
  end

  test "should destroy exceller_interview" do
    assert_difference('ExcellerInterview.count', -1) do
      delete exceller_interview_url(@exceller_interview)
    end

    assert_redirected_to exceller_interviews_url
  end
end
