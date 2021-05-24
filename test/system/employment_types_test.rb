require "application_system_test_case"

class EmploymentTypesTest < ApplicationSystemTestCase
  setup do
    @employment_type = employment_types(:one)
  end

  test "visiting the index" do
    visit employment_types_url
    assert_selector "h1", text: "Employment Types"
  end

  test "creating a Employment type" do
    visit employment_types_url
    click_on "New Employment Type"

    fill_in "Created by", with: @employment_type.created_by
    fill_in "Deleted at", with: @employment_type.deleted_at
    fill_in "Description", with: @employment_type.description
    fill_in "Modified by", with: @employment_type.modified_by
    fill_in "Name", with: @employment_type.name
    click_on "Create Employment type"

    assert_text "Employment type was successfully created"
    click_on "Back"
  end

  test "updating a Employment type" do
    visit employment_types_url
    click_on "Edit", match: :first

    fill_in "Created by", with: @employment_type.created_by
    fill_in "Deleted at", with: @employment_type.deleted_at
    fill_in "Description", with: @employment_type.description
    fill_in "Modified by", with: @employment_type.modified_by
    fill_in "Name", with: @employment_type.name
    click_on "Update Employment type"

    assert_text "Employment type was successfully updated"
    click_on "Back"
  end

  test "destroying a Employment type" do
    visit employment_types_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Employment type was successfully destroyed"
  end
end
