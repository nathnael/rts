require 'test_helper'

class ExcellersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exceller = excellers(:one)
  end

  test "should get index" do
    get excellers_url
    assert_response :success
  end

  test "should get new" do
    get new_exceller_url
    assert_response :success
  end

  test "should create exceller" do
    assert_difference('Exceller.count') do
      post excellers_url, params: { exceller: { address_id: @exceller.address_id, contract_signing_date: @exceller.contract_signing_date, created_by: @exceller.created_by, deleted_at: @exceller.deleted_at, duty_station: @exceller.duty_station, employment_type: @exceller.employment_type, father_name: @exceller.father_name, first_name: @exceller.first_name, grandfather_name: @exceller.grandfather_name, modified_by: @exceller.modified_by, position_id: @exceller.position_id, recommended_for: @exceller.recommended_for, status: @exceller.status, years_of_experience: @exceller.years_of_experience } }
    end

    assert_redirected_to exceller_url(Exceller.last)
  end

  test "should show exceller" do
    get exceller_url(@exceller)
    assert_response :success
  end

  test "should get edit" do
    get edit_exceller_url(@exceller)
    assert_response :success
  end

  test "should update exceller" do
    patch exceller_url(@exceller), params: { exceller: { address_id: @exceller.address_id, contract_signing_date: @exceller.contract_signing_date, created_by: @exceller.created_by, deleted_at: @exceller.deleted_at, duty_station: @exceller.duty_station, employment_type: @exceller.employment_type, father_name: @exceller.father_name, first_name: @exceller.first_name, grandfather_name: @exceller.grandfather_name, modified_by: @exceller.modified_by, position_id: @exceller.position_id, recommended_for: @exceller.recommended_for, status: @exceller.status, years_of_experience: @exceller.years_of_experience } }
    assert_redirected_to exceller_url(@exceller)
  end

  test "should destroy exceller" do
    assert_difference('Exceller.count', -1) do
      delete exceller_url(@exceller)
    end

    assert_redirected_to excellers_url
  end
end
