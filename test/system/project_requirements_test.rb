require "application_system_test_case"

class ProjectRequirementsTest < ApplicationSystemTestCase
  setup do
    @project_requirement = project_requirements(:one)
  end

  test "visiting the index" do
    visit project_requirements_url
    assert_selector "h1", text: "Project Requirements"
  end

  test "creating a Project requirement" do
    visit project_requirements_url
    click_on "New Project Requirement"

    fill_in "Amount", with: @project_requirement.amount
    fill_in "Created by", with: @project_requirement.created_by
    fill_in "Deleted at", with: @project_requirement.deleted_at
    fill_in "Modified by", with: @project_requirement.modified_by
    fill_in "Skill", with: @project_requirement.skill_id
    click_on "Create Project requirement"

    assert_text "Project requirement was successfully created"
    click_on "Back"
  end

  test "updating a Project requirement" do
    visit project_requirements_url
    click_on "Edit", match: :first

    fill_in "Amount", with: @project_requirement.amount
    fill_in "Created by", with: @project_requirement.created_by
    fill_in "Deleted at", with: @project_requirement.deleted_at
    fill_in "Modified by", with: @project_requirement.modified_by
    fill_in "Skill", with: @project_requirement.skill_id
    click_on "Update Project requirement"

    assert_text "Project requirement was successfully updated"
    click_on "Back"
  end

  test "destroying a Project requirement" do
    visit project_requirements_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Project requirement was successfully destroyed"
  end
end
