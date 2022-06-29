class NewsController < ApplicationController
  before_action :set_news, only: %i[show edit update destroy]
  before_action :authenticate_user!, only: %i[new edit update]
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
    @news = News.find(params[:id])
    #@news = News.with_attached_files.find(params[:id])
  end

  private

  def news_params
    params.require(:news).permit(:header, :body, :source, :date, :state)
  end
end
