require "application_system_test_case"

class InterviewCriteriaTest < ApplicationSystemTestCase
  setup do
    @interview_criterium = interview_criteria(:one)
  end

  test "visiting the index" do
    visit interview_criteria_url
    assert_selector "h1", text: "Interview Criteria"
  end

  test "creating a Interview criterium" do
    visit interview_criteria_url
    click_on "New Interview Criterium"

    fill_in "Created by", with: @interview_criterium.created_by
    fill_in "Deleted at", with: @interview_criterium.deleted_at
    fill_in "Interview", with: @interview_criterium.interview_id
    fill_in "Modified by", with: @interview_criterium.modified_by
    fill_in "Skill", with: @interview_criterium.skill_id
    click_on "Create Interview criterium"

    assert_text "Interview criterium was successfully created"
    click_on "Back"
  end

  test "updating a Interview criterium" do
    visit interview_criteria_url
    click_on "Edit", match: :first

    fill_in "Created by", with: @interview_criterium.created_by
    fill_in "Deleted at", with: @interview_criterium.deleted_at
    fill_in "Interview", with: @interview_criterium.interview_id
    fill_in "Modified by", with: @interview_criterium.modified_by
    fill_in "Skill", with: @interview_criterium.skill_id
    click_on "Update Interview criterium"

    assert_text "Interview criterium was successfully updated"
    click_on "Back"
  end

  test "destroying a Interview criterium" do
    visit interview_criteria_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Interview criterium was successfully destroyed"
  end
end
