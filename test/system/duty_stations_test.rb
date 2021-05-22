require "application_system_test_case"

class DutyStationsTest < ApplicationSystemTestCase
  setup do
    @duty_station = duty_stations(:one)
  end

  test "visiting the index" do
    visit duty_stations_url
    assert_selector "h1", text: "Duty Stations"
  end

  test "creating a Duty station" do
    visit duty_stations_url
    click_on "New Duty Station"

    fill_in "Address", with: @duty_station.address_id
    fill_in "Created by", with: @duty_station.created_by
    fill_in "Deleted at", with: @duty_station.deleted_at
    fill_in "Modified by", with: @duty_station.modified_by
    fill_in "Name", with: @duty_station.name
    click_on "Create Duty station"

    assert_text "Duty station was successfully created"
    click_on "Back"
  end

  test "updating a Duty station" do
    visit duty_stations_url
    click_on "Edit", match: :first

    fill_in "Address", with: @duty_station.address_id
    fill_in "Created by", with: @duty_station.created_by
    fill_in "Deleted at", with: @duty_station.deleted_at
    fill_in "Modified by", with: @duty_station.modified_by
    fill_in "Name", with: @duty_station.name
    click_on "Update Duty station"

    assert_text "Duty station was successfully updated"
    click_on "Back"
  end

  test "destroying a Duty station" do
    visit duty_stations_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Duty station was successfully destroyed"
  end
end
