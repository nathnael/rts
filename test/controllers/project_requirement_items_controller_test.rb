require 'test_helper'

class ProjectRequirementItemsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @project_requirement_item = project_requirement_items(:one)
  end

  test "should get index" do
    get project_requirement_items_url
    assert_response :success
  end

  test "should get new" do
    get new_project_requirement_item_url
    assert_response :success
  end

  test "should create project_requirement_item" do
    assert_difference('ProjectRequirementItem.count') do
      post project_requirement_items_url, params: { project_requirement_item: {  } }
    end

    assert_redirected_to project_requirement_item_url(ProjectRequirementItem.last)
  end

  test "should show project_requirement_item" do
    get project_requirement_item_url(@project_requirement_item)
    assert_response :success
  end

  test "should get edit" do
    get edit_project_requirement_item_url(@project_requirement_item)
    assert_response :success
  end

  test "should update project_requirement_item" do
    patch project_requirement_item_url(@project_requirement_item), params: { project_requirement_item: {  } }
    assert_redirected_to project_requirement_item_url(@project_requirement_item)
  end

  test "should destroy project_requirement_item" do
    assert_difference('ProjectRequirementItem.count', -1) do
      delete project_requirement_item_url(@project_requirement_item)
    end

    assert_redirected_to project_requirement_items_url
  end
end
