require "application_system_test_case"

class ExcellerSkillsTest < ApplicationSystemTestCase
  setup do
    @exceller_skill = exceller_skills(:one)
  end

  test "visiting the index" do
    visit exceller_skills_url
    assert_selector "h1", text: "Exceller Skills"
  end

  test "creating a Exceller skill" do
    visit exceller_skills_url
    click_on "New Exceller Skill"

    fill_in "Created by", with: @exceller_skill.created_by
    fill_in "Deleted at", with: @exceller_skill.deleted_at
    fill_in "Exceller", with: @exceller_skill.exceller_id
    fill_in "Modified by", with: @exceller_skill.modified_by
    fill_in "Proficiency", with: @exceller_skill.proficiency
    fill_in "Skill", with: @exceller_skill.skill_id
    click_on "Create Exceller skill"

    assert_text "Exceller skill was successfully created"
    click_on "Back"
  end

  test "updating a Exceller skill" do
    visit exceller_skills_url
    click_on "Edit", match: :first

    fill_in "Created by", with: @exceller_skill.created_by
    fill_in "Deleted at", with: @exceller_skill.deleted_at
    fill_in "Exceller", with: @exceller_skill.exceller_id
    fill_in "Modified by", with: @exceller_skill.modified_by
    fill_in "Proficiency", with: @exceller_skill.proficiency
    fill_in "Skill", with: @exceller_skill.skill_id
    click_on "Update Exceller skill"

    assert_text "Exceller skill was successfully updated"
    click_on "Back"
  end

  test "destroying a Exceller skill" do
    visit exceller_skills_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Exceller skill was successfully destroyed"
  end
end
