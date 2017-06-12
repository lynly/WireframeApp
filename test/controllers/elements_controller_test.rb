require 'test_helper'

class ElementsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get elements_index_url
    assert_response :success
  end

  test "should get show" do
    get elements_show_url
    assert_response :success
  end

  test "should get new" do
    get elements_new_url
    assert_response :success
  end

  test "should get edit" do
    get elements_edit_url
    assert_response :success
  end

end
