require "application_system_test_case"

class SkillTypesTest < ApplicationSystemTestCase
  setup do
    @skill_type = skill_types(:one)
  end

  test "visiting the index" do
    visit skill_types_url
    assert_selector "h1", text: "Skill Types"
  end

  test "creating a Skill type" do
    visit skill_types_url
    click_on "New Skill Type"

    fill_in "Created by", with: @skill_type.created_by
    fill_in "Deleted at", with: @skill_type.deleted_at
    fill_in "Modified by", with: @skill_type.modified_by
    fill_in "Name", with: @skill_type.name
    click_on "Create Skill type"

    assert_text "Skill type was successfully created"
    click_on "Back"
  end

  test "updating a Skill type" do
    visit skill_types_url
    click_on "Edit", match: :first

    fill_in "Created by", with: @skill_type.created_by
    fill_in "Deleted at", with: @skill_type.deleted_at
    fill_in "Modified by", with: @skill_type.modified_by
    fill_in "Name", with: @skill_type.name
    click_on "Update Skill type"

    assert_text "Skill type was successfully updated"
    click_on "Back"
  end

  test "destroying a Skill type" do
    visit skill_types_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Skill type was successfully destroyed"
  end
end
