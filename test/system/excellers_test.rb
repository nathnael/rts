require "application_system_test_case"

class ExcellersTest < ApplicationSystemTestCase
  setup do
    @exceller = excellers(:one)
  end

  test "visiting the index" do
    visit excellers_url
    assert_selector "h1", text: "Excellers"
  end

  test "creating a Exceller" do
    visit excellers_url
    click_on "New Exceller"

    fill_in "Address", with: @exceller.address_id
    fill_in "Contract signing date", with: @exceller.contract_signing_date
    fill_in "Created by", with: @exceller.created_by
    fill_in "Deleted at", with: @exceller.deleted_at
    fill_in "Duty station", with: @exceller.duty_station
    fill_in "Employment type", with: @exceller.employment_type
    fill_in "Father name", with: @exceller.father_name
    fill_in "First name", with: @exceller.first_name
    fill_in "Grandfather name", with: @exceller.grandfather_name
    fill_in "Modified by", with: @exceller.modified_by
    fill_in "Position", with: @exceller.position_id
    fill_in "Recommended for", with: @exceller.recommended_for
    fill_in "Status", with: @exceller.status
    fill_in "Years of experience", with: @exceller.years_of_experience
    click_on "Create Exceller"

    assert_text "Exceller was successfully created"
    click_on "Back"
  end

  test "updating a Exceller" do
    visit excellers_url
    click_on "Edit", match: :first

    fill_in "Address", with: @exceller.address_id
    fill_in "Contract signing date", with: @exceller.contract_signing_date
    fill_in "Created by", with: @exceller.created_by
    fill_in "Deleted at", with: @exceller.deleted_at
    fill_in "Duty station", with: @exceller.duty_station
    fill_in "Employment type", with: @exceller.employment_type
    fill_in "Father name", with: @exceller.father_name
    fill_in "First name", with: @exceller.first_name
    fill_in "Grandfather name", with: @exceller.grandfather_name
    fill_in "Modified by", with: @exceller.modified_by
    fill_in "Position", with: @exceller.position_id
    fill_in "Recommended for", with: @exceller.recommended_for
    fill_in "Status", with: @exceller.status
    fill_in "Years of experience", with: @exceller.years_of_experience
    click_on "Update Exceller"

    assert_text "Exceller was successfully updated"
    click_on "Back"
  end

  test "destroying a Exceller" do
    visit excellers_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Exceller was successfully destroyed"
  end
end
