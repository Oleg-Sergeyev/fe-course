# frozen_string_literal: true

# class LocalesController
class LocalesController < ApplicationController
  def toggle
    session[:locale] ||= I18n.default_locale.to_s
    session[:locale] = (session[:locale] == 'ru' ? 'en' : 'ru')
    I18n.locale = session[:locale]
    redirect_back(fallback_location: root_path)
  end
end
