require 'test_helper'

class ExcellerOffersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @exceller_offer = exceller_offers(:one)
  end

  test "should get index" do
    get exceller_offers_url
    assert_response :success
  end

  test "should get new" do
    get new_exceller_offer_url
    assert_response :success
  end

  test "should create exceller_offer" do
    assert_difference('ExcellerOffer.count') do
      post exceller_offers_url, params: { exceller_offer: { created_by: @exceller_offer.created_by, deleted_at: @exceller_offer.deleted_at, exceller_id: @exceller_offer.exceller_id, modified_by: @exceller_offer.modified_by, position_id: @exceller_offer.position_id, response: @exceller_offer.response } }
    end

    assert_redirected_to exceller_offer_url(ExcellerOffer.last)
  end

  test "should show exceller_offer" do
    get exceller_offer_url(@exceller_offer)
    assert_response :success
  end

  test "should get edit" do
    get edit_exceller_offer_url(@exceller_offer)
    assert_response :success
  end

  test "should update exceller_offer" do
    patch exceller_offer_url(@exceller_offer), params: { exceller_offer: { created_by: @exceller_offer.created_by, deleted_at: @exceller_offer.deleted_at, exceller_id: @exceller_offer.exceller_id, modified_by: @exceller_offer.modified_by, position_id: @exceller_offer.position_id, response: @exceller_offer.response } }
    assert_redirected_to exceller_offer_url(@exceller_offer)
  end

  test "should destroy exceller_offer" do
    assert_difference('ExcellerOffer.count', -1) do
      delete exceller_offer_url(@exceller_offer)
    end

    assert_redirected_to exceller_offers_url
  end
end
