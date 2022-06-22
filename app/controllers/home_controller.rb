# frozen_string_literal: true

# class HomeController
class HomeController < ApplicationController
  before_action :authenticate_user!
  def index
    I18n.locale = session.fetch(:locale, I18n.default_locale).to_sym
  end
end
