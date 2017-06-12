require 'test_helper'

class WireframesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get wireframes_index_url
    assert_response :success
  end

  test "should get show" do
    get wireframes_show_url
    assert_response :success
  end

  test "should get new" do
    get wireframes_new_url
    assert_response :success
  end

  test "should get edit" do
    get wireframes_edit_url
    assert_response :success
  end

end
