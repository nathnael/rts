require 'test_helper'

class DutyStationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @duty_station = duty_stations(:one)
  end

  test "should get index" do
    get duty_stations_url
    assert_response :success
  end

  test "should get new" do
    get new_duty_station_url
    assert_response :success
  end

  test "should create duty_station" do
    assert_difference('DutyStation.count') do
      post duty_stations_url, params: { duty_station: { address_id: @duty_station.address_id, created_by: @duty_station.created_by, deleted_at: @duty_station.deleted_at, modified_by: @duty_station.modified_by, name: @duty_station.name } }
    end

    assert_redirected_to duty_station_url(DutyStation.last)
  end

  test "should show duty_station" do
    get duty_station_url(@duty_station)
    assert_response :success
  end

  test "should get edit" do
    get edit_duty_station_url(@duty_station)
    assert_response :success
  end

  test "should update duty_station" do
    patch duty_station_url(@duty_station), params: { duty_station: { address_id: @duty_station.address_id, created_by: @duty_station.created_by, deleted_at: @duty_station.deleted_at, modified_by: @duty_station.modified_by, name: @duty_station.name } }
    assert_redirected_to duty_station_url(@duty_station)
  end

  test "should destroy duty_station" do
    assert_difference('DutyStation.count', -1) do
      delete duty_station_url(@duty_station)
    end

    assert_redirected_to duty_stations_url
  end
end
