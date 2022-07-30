# frozen_string_literal: true

class NewsController < ApplicationController
  before_action :set_news, only: %i[show edit update destroy simple_rating]
  before_action :authenticate_user!, only: %i[new edit update simple_rating]
  skip_before_action :verify_authenticity_token, only: [:simple_rating]
  respond_to :json

  def index
    @news = News.includes(:likes)
  end

  def new
    @news = News.new
  end

  def create
    @news = News.new(news_params)
    respond_to do |format|
      if @news.save
        #format.html { redirect_to user_news_index_path, notice: 'News was successfully created.' }
        format.json { render :show, status: :created, location: @news }
      else
        #format.html { redirect_to  user_news_new_path, status: :unprocessable_entity }
        format.json { render json: @news.errors, status: :unprocessable_entity }
      end
    end
  end

  def heart
    session[:flag]
  end

  def edit
    @news = News.find(params[:id])
  end

  def show
    session[:news_id] = params[:id]
    Rails.logger.info "******** session[:flag] in SHOW = #{session[:flag]} ***********"
  end

  def update
    respond_to do |format|
      if @news.update(news_params)
        #format.html { redirect_to user_news_index_path, notice: 'News was successfully updated.' }
        format.json { render :show, status: :ok, location: @news }
      else
        #format.html { redirect_to  user_news_new_path, status: :unprocessable_entity }
        format.json { render json: @news.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @news.destroy
    respond_to do |format|
      #format.html { redirect_to user_news_path, notice: 'News was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def set_news
    id = params[:news_id] || params[:id]
    @news = News.find(id)
    if current_user
      @current_like_news = Like.where(news_id: id, user_id: current_user.id)
      Rails.logger.info "******** @current_like_news.first= #{@current_like_news.first} ***********"
      session[:flag] = @current_like_news.empty? ? 0 : 1
    else
      session[:flag] = 0
      @current_like_news = nil
    end
  end

  def simple_rating
    current_rating = @news.simple_rating
    if !current_user
      session[:flag] = 0
      render json: { simple_rating: current_rating, heart: session[:flag]}
      return
    end

    if !@current_like_news.empty?
      Like.find_by(news_id: params[:news_id]).destroy
      current_rating -= 1
      @news.update(simple_rating: current_rating)
      session[:flag] = 0
    else
      current_rating += 1
      Like.create!(user_id: current_user.id, news_id: params[:news_id])
      @news.update(simple_rating: current_rating)
      session[:flag] = 1
    end
    render json: { simple_rating: current_rating, heart: session[:flag]}
  end

  private

  def news_params
    params.require(:news).permit(:header, :body, :source, :date, :state, :rating)
  end
end
