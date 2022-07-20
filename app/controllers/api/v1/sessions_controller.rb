# frozen_string_literal: true

module Api
  module V1
    class SessionsController < Devise::SessionsController
      # before_action :configure_permitted_parameters
      skip_before_action :verify_authenticity_token
      respond_to :json

      def create_session
        resource = User.find_for_database_authentication(email: params[:user][:email])

        if resource.nil?
          render json: { success: 0, error: 'Wrong authorization' }, status: 401
        elsif resource.valid_password?(params[:user][:password])
          sign_in(:user, resource)
          #binding.pry
          render json: { success: 1 }
        else
          render json: { success: 0, error: 'Wrong authorization' }, status: 401
        end
      end

      def after_sign_in_path_for(_user)
        root_path
      end

      def destroy
        session[:user_id] = nil
        sign_out
        #reset_session
        @current_user = nil
        # super
        #binding.pry
        render json: { 'session': 'logout' }
      end

      def current_user_api
        if current_user
          render json: { 'name': current_user.name, 'email': current_user.email }
        else
          render json: { 'name': 'guest' }
        end
      end
      # def user_params
      #   params.require(:user).permit(:username, :email, :password, :password_confirmation)
      # end

      # def configure_permitted_parameters
      #   devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
      # end
    end
  end
end
