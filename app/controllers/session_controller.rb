class SessionController < ApplicationController
  def new
  end

  def create
    user = User.find_by :email => params[:email]
    if user.present? && user.authenticate(params[:password])
      session[:user_id] = user.id
      # flash[:notice] = "Login successful!"
      redirect_to "/users"
    else
      flash[:error] = "The password or email was incorrect"
      redirect_to login_path
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to root_path
  end
end
