require "application_system_test_case"

class ExcellerAssignmentsTest < ApplicationSystemTestCase
  setup do
    @exceller_assignment = exceller_assignments(:one)
  end

  test "visiting the index" do
    visit exceller_assignments_url
    assert_selector "h1", text: "Exceller Assignments"
  end

  test "creating a Exceller assignment" do
    visit exceller_assignments_url
    click_on "New Exceller Assignment"

    fill_in "Created by", with: @exceller_assignment.created_by
    fill_in "Deleted at", with: @exceller_assignment.deleted_at
    fill_in "End date", with: @exceller_assignment.end_date
    fill_in "Exceller", with: @exceller_assignment.exceller_id
    fill_in "Modified by", with: @exceller_assignment.modified_by
    fill_in "Project", with: @exceller_assignment.project_id
    fill_in "Skill", with: @exceller_assignment.skill_id
    fill_in "Start date", with: @exceller_assignment.start_date
    fill_in "Status", with: @exceller_assignment.status
    click_on "Create Exceller assignment"

    assert_text "Exceller assignment was successfully created"
    click_on "Back"
  end

  test "updating a Exceller assignment" do
    visit exceller_assignments_url
    click_on "Edit", match: :first

    fill_in "Created by", with: @exceller_assignment.created_by
    fill_in "Deleted at", with: @exceller_assignment.deleted_at
    fill_in "End date", with: @exceller_assignment.end_date
    fill_in "Exceller", with: @exceller_assignment.exceller_id
    fill_in "Modified by", with: @exceller_assignment.modified_by
    fill_in "Project", with: @exceller_assignment.project_id
    fill_in "Skill", with: @exceller_assignment.skill_id
    fill_in "Start date", with: @exceller_assignment.start_date
    fill_in "Status", with: @exceller_assignment.status
    click_on "Update Exceller assignment"

    assert_text "Exceller assignment was successfully updated"
    click_on "Back"
  end

  test "destroying a Exceller assignment" do
    visit exceller_assignments_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Exceller assignment was successfully destroyed"
  end
end
