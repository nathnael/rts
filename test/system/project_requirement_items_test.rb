require "application_system_test_case"

class ProjectRequirementItemsTest < ApplicationSystemTestCase
  setup do
    @project_requirement_item = project_requirement_items(:one)
  end

  test "visiting the index" do
    visit project_requirement_items_url
    assert_selector "h1", text: "Project Requirement Items"
  end

  test "creating a Project requirement item" do
    visit project_requirement_items_url
    click_on "New Project Requirement Item"

    click_on "Create Project requirement item"

    assert_text "Project requirement item was successfully created"
    click_on "Back"
  end

  test "updating a Project requirement item" do
    visit project_requirement_items_url
    click_on "Edit", match: :first

    click_on "Update Project requirement item"

    assert_text "Project requirement item was successfully updated"
    click_on "Back"
  end

  test "destroying a Project requirement item" do
    visit project_requirement_items_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Project requirement item was successfully destroyed"
  end
end
