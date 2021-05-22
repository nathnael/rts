require 'test_helper'

class ExcellerAddressesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exceller_address = exceller_addresses(:one)
  end

  test "should get index" do
    get exceller_addresses_url
    assert_response :success
  end

  test "should get new" do
    get new_exceller_address_url
    assert_response :success
  end

  test "should create exceller_address" do
    assert_difference('ExcellerAddress.count') do
      post exceller_addresses_url, params: { exceller_address: { address_id: @exceller_address.address_id, created_by: @exceller_address.created_by, deleted_at: @exceller_address.deleted_at, exceller_id: @exceller_address.exceller_id, modified_by: @exceller_address.modified_by, status: @exceller_address.status } }
    end

    assert_redirected_to exceller_address_url(ExcellerAddress.last)
  end

  test "should show exceller_address" do
    get exceller_address_url(@exceller_address)
    assert_response :success
  end

  test "should get edit" do
    get edit_exceller_address_url(@exceller_address)
    assert_response :success
  end

  test "should update exceller_address" do
    patch exceller_address_url(@exceller_address), params: { exceller_address: { address_id: @exceller_address.address_id, created_by: @exceller_address.created_by, deleted_at: @exceller_address.deleted_at, exceller_id: @exceller_address.exceller_id, modified_by: @exceller_address.modified_by, status: @exceller_address.status } }
    assert_redirected_to exceller_address_url(@exceller_address)
  end

  test "should destroy exceller_address" do
    assert_difference('ExcellerAddress.count', -1) do
      delete exceller_address_url(@exceller_address)
    end

    assert_redirected_to exceller_addresses_url
  end
end
