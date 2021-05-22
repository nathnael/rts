require "application_system_test_case"

class ExcellerAddressesTest < ApplicationSystemTestCase
  setup do
    @exceller_address = exceller_addresses(:one)
  end

  test "visiting the index" do
    visit exceller_addresses_url
    assert_selector "h1", text: "Exceller Addresses"
  end

  test "creating a Exceller address" do
    visit exceller_addresses_url
    click_on "New Exceller Address"

    fill_in "Address", with: @exceller_address.address_id
    fill_in "Created by", with: @exceller_address.created_by
    fill_in "Deleted at", with: @exceller_address.deleted_at
    fill_in "Exceller", with: @exceller_address.exceller_id
    fill_in "Modified by", with: @exceller_address.modified_by
    fill_in "Status", with: @exceller_address.status
    click_on "Create Exceller address"

    assert_text "Exceller address was successfully created"
    click_on "Back"
  end

  test "updating a Exceller address" do
    visit exceller_addresses_url
    click_on "Edit", match: :first

    fill_in "Address", with: @exceller_address.address_id
    fill_in "Created by", with: @exceller_address.created_by
    fill_in "Deleted at", with: @exceller_address.deleted_at
    fill_in "Exceller", with: @exceller_address.exceller_id
    fill_in "Modified by", with: @exceller_address.modified_by
    fill_in "Status", with: @exceller_address.status
    click_on "Update Exceller address"

    assert_text "Exceller address was successfully updated"
    click_on "Back"
  end

  test "destroying a Exceller address" do
    visit exceller_addresses_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Exceller address was successfully destroyed"
  end
end
