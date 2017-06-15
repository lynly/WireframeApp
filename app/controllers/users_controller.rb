class UsersController < ApplicationController
  before_action :check_if_logged_out, only: [:new, :create]
  before_action :check_if_logged_in, only: [:edit, :update]

  def index
    @all_users = User.all
  end

  def show
    @user = User.find(params[:id])
    @wireframes = Wireframe.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new( user_params )

    if @user.save
      flash[:notice] = 'User was successfully created.'
      session[:user_id] = @user.id
      redirect_to user_path(@user)
    else
      flash.now[:error] = 'Could not create user.'
      render 'new'
    end
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    user = User.find_by( id: params['id'] )
    if user.authenticate(params["user"]["password"])
        user.update ( user_params )
        redirect_to "/users/#{user.id}"
    else
      redirect_to root_path
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to users_path()
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end

  def check_if_logged_out
    if @current_user
      flash[:error] = "You are already logged in"
      redirect_to users_path()
    end
  end

  def check_if_logged_in
    unless @current_user
      flash[:error] = "You need to be logged in for that"
      redirect_to login_path
    end
  end

end
