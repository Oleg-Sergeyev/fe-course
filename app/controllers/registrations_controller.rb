# frozen_string_literal: true

# class RegistrationsController
class RegistrationsController < Devise::RegistrationsController
  private

  # Redirect to the URL after modifying Devise resource (Here, our user)
  def after_update_path_for(_resource)
    edit_user_registration_path
  end
end
