# frozen_string_literal: true

# class ApplicationController
class ApplicationController < ActionController::Base
  #before_action :authenticate_user!
  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action do
    I18n.locale = session[:locale]
  end


  # def authenticate_user!(return_point = request.url)
  #   #binding.pry
  #   unless user_signed_in?
  #     #set_return_point(return_point)
  #     redirect_to request_path
  #   end
  # end

  # def set_return_point(path, overwrite = false)
  #   if overwrite || session[:return_point].blank?
  #     session[:return_point] = path
  #   end
  # end

  # def return_point
  #   session[:return_point] || root_path
  # end

  def authenticate_user!
    if user_signed_in?
      super
    else
      # redirect_to login_path, :notice => 'if you want to add a notice'
      # if you want render 404 page
      render json: {'error': 'Требуется авторизация'}, status: 401
      #render json: { success: 0, error: 'Wrong authorization' }, status: 401
      #render :file => File.join(Rails.root, 'public/404'), :formats => [:html], :status => 404, :layout => false
    end
  end

  def after_sign_in_path_for(_user)
    flash.clear
    root_path
  end

  def destroy_user_session
    session[:user] = nil
    root_path
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[name email password])
    devise_parameter_sanitizer.permit(:account_update,
                                      keys: %i[name email password current_password password_confirmation])
  end
end
