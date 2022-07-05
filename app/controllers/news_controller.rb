# frozen_string_literal: true

class NewsController < ApplicationController
  before_action :set_news, only: %i[show edit update destroy simple_rating]
  before_action :authenticate_user!, only: %i[new edit update]
  skip_before_action :verify_authenticity_token, only: [:simple_rating]

  def index
    @news = News.all
  end

  def new
    @news = News.new
  end

  def create
    @news = News.new(news_params)
    respond_to do |format|
      if @news.save
        format.html { redirect_to user_news_index_path, notice: 'News was successfully created.' }
        format.json { render :show, status: :created, location: @news }
      else
        format.html { redirect_to  user_news_new_path, status: :unprocessable_entity }
        format.json { render json: @news.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
    @news = News.find(params[:id])
  end

  def show
    @news = News.find(params[:id])
    session[:flag] ||= 0
  end

  def update
    respond_to do |format|
      if @news.update(news_params)
        format.html { redirect_to user_news_index_path, notice: 'News was successfully updated.' }
        format.json { render :show, status: :ok, location: @news }
      else
        format.html { redirect_to  user_news_new_path, status: :unprocessable_entity }
        format.json { render json: @news.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @news.destroy
    respond_to do |format|
      format.html { redirect_to user_news_path, notice: 'News was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def set_news
    id = params[:news_id] || params[:id]
    @news = News.find(id)
    # @news = News.with_attached_files.find(params[:id])
  end

  def simple_rating
    return unless session[:news_id] == params[:news_id]
    return unless [-1, 1].include?(params[:rating].to_i)

    currnet_rating = @news.simple_rating

    case session[:flag]
    when 0
      currnet_rating += 1
      session[:flag] = 1
    when 1
      currnet_rating -= 1
      session[:flag] = 0
    end
    @news.update!(simple_rating: currnet_rating)
  end

  private

  def news_params
    params.require(:news).permit(:header, :body, :source, :date, :state, :rating)
  end
end
