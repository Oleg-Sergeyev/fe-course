module LocalesHelper
  def language_link_name
    locale == I18n.default_locale.to_s ? 'EN' : 'RU'
  end

  def locale
    lang = session.fetch(:locale, I18n.default_locale.to_s)
    unless I18n.available_locales.map(&:to_s).include? lang

      lang = I18n.default_locale.to_s
    end
    lang
  end
end
