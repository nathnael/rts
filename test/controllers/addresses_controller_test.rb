require 'test_helper'

class AddressesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @address = addresses(:one)
  end

  test "should get index" do
    get addresses_url
    assert_response :success
  end

  test "should get new" do
    get new_address_url
    assert_response :success
  end

  test "should create address" do
    assert_difference('Address.count') do
      post addresses_url, params: { address: { cell_phone: @address.cell_phone, city: @address.city, country: @address.country, created_by: @address.created_by, deleted_at: @address.deleted_at, email: @address.email, home_phone: @address.home_phone, house_no: @address.house_no, modified_by: @address.modified_by, postal_code: @address.postal_code, state: @address.state, sub_city: @address.sub_city, woreda: @address.woreda, work_phone: @address.work_phone, zip_code: @address.zip_code } }
    end

    assert_redirected_to address_url(Address.last)
  end

  test "should show address" do
    get address_url(@address)
    assert_response :success
  end

  test "should get edit" do
    get edit_address_url(@address)
    assert_response :success
  end

  test "should update address" do
    patch address_url(@address), params: { address: { cell_phone: @address.cell_phone, city: @address.city, country: @address.country, created_by: @address.created_by, deleted_at: @address.deleted_at, email: @address.email, home_phone: @address.home_phone, house_no: @address.house_no, modified_by: @address.modified_by, postal_code: @address.postal_code, state: @address.state, sub_city: @address.sub_city, woreda: @address.woreda, work_phone: @address.work_phone, zip_code: @address.zip_code } }
    assert_redirected_to address_url(@address)
  end

  test "should destroy address" do
    assert_difference('Address.count', -1) do
      delete address_url(@address)
    end

    assert_redirected_to addresses_url
  end
end
