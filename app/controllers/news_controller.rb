class NewsController < ApplicationController
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
        format.html { redirect_to user_news_path, notice: 'News was successfully created.' }
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
    @news = News.all
  end
  def update
    # @news.update!(params.require(:news).permit(:header, :body, :date, :source, :state))

    # redirect_to news_edit_path, notice: 'News updated'
    respond_to do |format|
        if @news.update(news_params)
          format.html { redirect_to user_news_path, notice: 'News was successfully updated.' }
          format.json { render :show, status: :ok, location: @news }
        else
          format.html { redirect_to  user_news_new_path, status: :unprocessable_entity }
          format.json { render json: @news.errors, status: :unprocessable_entity }
        end
      end
  end

  private

  def news_params
    params.require(:news).permit(:header, :body, :source, :date, :state)
  end
end
