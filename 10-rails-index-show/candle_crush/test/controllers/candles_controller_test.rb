require 'test_helper'

class CandlesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get candles_index_url
    assert_response :success
  end

end
