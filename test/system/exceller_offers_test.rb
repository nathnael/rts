require "application_system_test_case"

class ExcellerOffersTest < ApplicationSystemTestCase
  setup do
    @exceller_offer = exceller_offers(:one)
  end

  test "visiting the index" do
    visit exceller_offers_url
    assert_selector "h1", text: "Exceller Offers"
  end

  test "creating a Exceller offer" do
    visit exceller_offers_url
    click_on "New Exceller Offer"

    fill_in "Created by", with: @exceller_offer.created_by
    fill_in "Deleted at", with: @exceller_offer.deleted_at
    fill_in "Exceller", with: @exceller_offer.exceller_id
    fill_in "Modified by", with: @exceller_offer.modified_by
    fill_in "Position", with: @exceller_offer.position_id
    fill_in "Response", with: @exceller_offer.response
    click_on "Create Exceller offer"

    assert_text "Exceller offer was successfully created"
    click_on "Back"
  end

  test "updating a Exceller offer" do
    visit exceller_offers_url
    click_on "Edit", match: :first

    fill_in "Created by", with: @exceller_offer.created_by
    fill_in "Deleted at", with: @exceller_offer.deleted_at
    fill_in "Exceller", with: @exceller_offer.exceller_id
    fill_in "Modified by", with: @exceller_offer.modified_by
    fill_in "Position", with: @exceller_offer.position_id
    fill_in "Response", with: @exceller_offer.response
    click_on "Update Exceller offer"

    assert_text "Exceller offer was successfully updated"
    click_on "Back"
  end

  test "destroying a Exceller offer" do
    visit exceller_offers_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Exceller offer was successfully destroyed"
  end
end
