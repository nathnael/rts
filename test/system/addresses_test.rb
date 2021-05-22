require "application_system_test_case"

class AddressesTest < ApplicationSystemTestCase
  setup do
    @address = addresses(:one)
  end

  test "visiting the index" do
    visit addresses_url
    assert_selector "h1", text: "Addresses"
  end

  test "creating a Address" do
    visit addresses_url
    click_on "New Address"

    fill_in "Cell phone", with: @address.cell_phone
    fill_in "City", with: @address.city
    fill_in "Country", with: @address.country
    fill_in "Created by", with: @address.created_by
    fill_in "Deleted at", with: @address.deleted_at
    fill_in "Email", with: @address.email
    fill_in "Home phone", with: @address.home_phone
    fill_in "House no", with: @address.house_no
    fill_in "Modified by", with: @address.modified_by
    fill_in "Postal code", with: @address.postal_code
    fill_in "State", with: @address.state
    fill_in "Sub city", with: @address.sub_city
    fill_in "Woreda", with: @address.woreda
    fill_in "Work phone", with: @address.work_phone
    fill_in "Zip code", with: @address.zip_code
    click_on "Create Address"

    assert_text "Address was successfully created"
    click_on "Back"
  end

  test "updating a Address" do
    visit addresses_url
    click_on "Edit", match: :first

    fill_in "Cell phone", with: @address.cell_phone
    fill_in "City", with: @address.city
    fill_in "Country", with: @address.country
    fill_in "Created by", with: @address.created_by
    fill_in "Deleted at", with: @address.deleted_at
    fill_in "Email", with: @address.email
    fill_in "Home phone", with: @address.home_phone
    fill_in "House no", with: @address.house_no
    fill_in "Modified by", with: @address.modified_by
    fill_in "Postal code", with: @address.postal_code
    fill_in "State", with: @address.state
    fill_in "Sub city", with: @address.sub_city
    fill_in "Woreda", with: @address.woreda
    fill_in "Work phone", with: @address.work_phone
    fill_in "Zip code", with: @address.zip_code
    click_on "Update Address"

    assert_text "Address was successfully updated"
    click_on "Back"
  end

  test "destroying a Address" do
    visit addresses_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Address was successfully destroyed"
  end
end
