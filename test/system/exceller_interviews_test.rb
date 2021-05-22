require "application_system_test_case"

class ExcellerInterviewsTest < ApplicationSystemTestCase
  setup do
    @exceller_interview = exceller_interviews(:one)
  end

  test "visiting the index" do
    visit exceller_interviews_url
    assert_selector "h1", text: "Exceller Interviews"
  end

  test "creating a Exceller interview" do
    visit exceller_interviews_url
    click_on "New Exceller Interview"

    fill_in "Comment", with: @exceller_interview.comment
    fill_in "Created by", with: @exceller_interview.created_by
    fill_in "Deleted at", with: @exceller_interview.deleted_at
    fill_in "Exceller", with: @exceller_interview.exceller_id
    fill_in "Interview criteria", with: @exceller_interview.interview_criteria_id
    fill_in "Interviewer", with: @exceller_interview.interviewer_id
    fill_in "Modified by", with: @exceller_interview.modified_by
    fill_in "Score", with: @exceller_interview.score
    click_on "Create Exceller interview"

    assert_text "Exceller interview was successfully created"
    click_on "Back"
  end

  test "updating a Exceller interview" do
    visit exceller_interviews_url
    click_on "Edit", match: :first

    fill_in "Comment", with: @exceller_interview.comment
    fill_in "Created by", with: @exceller_interview.created_by
    fill_in "Deleted at", with: @exceller_interview.deleted_at
    fill_in "Exceller", with: @exceller_interview.exceller_id
    fill_in "Interview criteria", with: @exceller_interview.interview_criteria_id
    fill_in "Interviewer", with: @exceller_interview.interviewer_id
    fill_in "Modified by", with: @exceller_interview.modified_by
    fill_in "Score", with: @exceller_interview.score
    click_on "Update Exceller interview"

    assert_text "Exceller interview was successfully updated"
    click_on "Back"
  end

  test "destroying a Exceller interview" do
    visit exceller_interviews_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Exceller interview was successfully destroyed"
  end
end
