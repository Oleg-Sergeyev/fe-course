module Api
  module V1
    class SessionsController < Devise::SessionsController
      #before_action :configure_permitted_parameters
      respond_to :json

      def create_session
        resource = User.find_for_database_authentication(:email => params[:user][:email])

        if resource.nil?
          render :json=> {:success => 0, :error => "No Such User"}, :status=>401
        else
          if resource.valid_password?(params[:user][:password])
            sign_in(:user, resource)
            render :json=> {:success => 1}
          else
            render :json=> {:success => 0, :error => "Wrong Password"}, :status=>401
          end
        end 
      end

      def after_sign_in_path_for(_user)
        root_path
      end

      private

      # def user_params
      #   params.require(:user).permit(:username, :email, :password, :password_confirmation)
      # end

      # def configure_permitted_parameters
      #   devise_parameter_sanitizer.permit(:sign_up, keys: [:username])
      # end
    end
  end
end
