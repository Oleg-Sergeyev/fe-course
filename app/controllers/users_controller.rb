# frozen_string_literal: true

class UsersController < ApplicationController
  before_action :authenticate_user!, only: %i[index edit show update]
  skip_before_action :verify_authenticity_token, only: [:index]
  respond_to :json

  def index
    @user = current_user
  end

  def edit
    @user = current_user
  end

  def show
    @user = current_user
  end

  def update
    current_user.update!(params.require(:user).permit(:info, :name, :email, :password))

    redirect_to user_edit_path, notice: 'User updated'
  end
end
