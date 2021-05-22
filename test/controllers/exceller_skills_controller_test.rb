require 'test_helper'

class ExcellerSkillsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exceller_skill = exceller_skills(:one)
  end

  test "should get index" do
    get exceller_skills_url
    assert_response :success
  end

  test "should get new" do
    get new_exceller_skill_url
    assert_response :success
  end

  test "should create exceller_skill" do
    assert_difference('ExcellerSkill.count') do
      post exceller_skills_url, params: { exceller_skill: { created_by: @exceller_skill.created_by, deleted_at: @exceller_skill.deleted_at, exceller_id: @exceller_skill.exceller_id, modified_by: @exceller_skill.modified_by, proficiency: @exceller_skill.proficiency, skill_id: @exceller_skill.skill_id } }
    end

    assert_redirected_to exceller_skill_url(ExcellerSkill.last)
  end

  test "should show exceller_skill" do
    get exceller_skill_url(@exceller_skill)
    assert_response :success
  end

  test "should get edit" do
    get edit_exceller_skill_url(@exceller_skill)
    assert_response :success
  end

  test "should update exceller_skill" do
    patch exceller_skill_url(@exceller_skill), params: { exceller_skill: { created_by: @exceller_skill.created_by, deleted_at: @exceller_skill.deleted_at, exceller_id: @exceller_skill.exceller_id, modified_by: @exceller_skill.modified_by, proficiency: @exceller_skill.proficiency, skill_id: @exceller_skill.skill_id } }
    assert_redirected_to exceller_skill_url(@exceller_skill)
  end

  test "should destroy exceller_skill" do
    assert_difference('ExcellerSkill.count', -1) do
      delete exceller_skill_url(@exceller_skill)
    end

    assert_redirected_to exceller_skills_url
  end
end
