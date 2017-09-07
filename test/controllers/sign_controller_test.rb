require 'test_helper'

class SignControllerTest < ActionDispatch::IntegrationTest
  test "should get in_new" do
    get sign_in_new_url
    assert_response :success
  end

  test "should get in_create" do
    get sign_in_create_url
    assert_response :success
  end

end
