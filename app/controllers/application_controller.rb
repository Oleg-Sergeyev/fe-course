# frozen_string_literal: true

# class ApplicationController
class ApplicationController < ActionController::Base
  #before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action do
    I18n.locale = session[:locale]
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
