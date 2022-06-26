class UsersController < ApplicationController
  def index
  end
  def edit
    @user = current_user
  end
  def show
    @user = current_user
  end
  def update
    current_user.update!(params.require(:user).permit(:info, :name, :email, :password))
    redirect_to user_edit_path
  end
end
