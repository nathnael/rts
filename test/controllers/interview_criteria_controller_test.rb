require 'test_helper'

class InterviewCriteriaControllerTest < ActionDispatch::IntegrationTest
  setup do
    @interview_criterium = interview_criteria(:one)
  end

  test "should get index" do
    get interview_criteria_url
    assert_response :success
  end

  test "should get new" do
    get new_interview_criterium_url
    assert_response :success
  end

  test "should create interview_criterium" do
    assert_difference('InterviewCriterium.count') do
      post interview_criteria_url, params: { interview_criterium: { created_by: @interview_criterium.created_by, deleted_at: @interview_criterium.deleted_at, interview_id: @interview_criterium.interview_id, modified_by: @interview_criterium.modified_by, skill_id: @interview_criterium.skill_id } }
    end

    assert_redirected_to interview_criterium_url(InterviewCriterium.last)
  end

  test "should show interview_criterium" do
    get interview_criterium_url(@interview_criterium)
    assert_response :success
  end

  test "should get edit" do
    get edit_interview_criterium_url(@interview_criterium)
    assert_response :success
  end

  test "should update interview_criterium" do
    patch interview_criterium_url(@interview_criterium), params: { interview_criterium: { created_by: @interview_criterium.created_by, deleted_at: @interview_criterium.deleted_at, interview_id: @interview_criterium.interview_id, modified_by: @interview_criterium.modified_by, skill_id: @interview_criterium.skill_id } }
    assert_redirected_to interview_criterium_url(@interview_criterium)
  end

  test "should destroy interview_criterium" do
    assert_difference('InterviewCriterium.count', -1) do
      delete interview_criterium_url(@interview_criterium)
    end

    assert_redirected_to interview_criteria_url
  end
end
