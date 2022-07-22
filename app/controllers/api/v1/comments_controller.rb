# frozen_string_literal: true

module Api
  module V1
    class CommentsController < ApplicationController
      before_action :authenticate_user!, only: %i[create destroy]
      skip_before_action :verify_authenticity_token
      def index
        @comments = Comment.includes(:comments).news_comments.where(commentable_id: params[:news_id])
      end

      def show
        @comments = Comment.includes(:comments).where(commentable_id: params[:news_id])
        #@comments = all_children(Comment.includes(:comments).where(commentable_type: 'news'))
        render json: @comments
      end

      # def all_children(children_array)
      #   children_array.each do |child|
      #     child.includes
      #   end
      #   children_array += children.all
      #   children.each do |child|
      #     child.all_children(children_array) if child.respond_to?(:each)
      #   end
      #   children_array
      # end

      def create
        comment = commentable.comments.new(comment_params)
        comment.author = current_user.email
        comment.save

        render json: comment
      end

      def destroy
        Comment.destroy(params[:id])
      end

      private

      def comment_params
        params.require(:comment).permit(:text, :news_id)
      end

      def commentable
        @commentable ||= if params[:comment_id]
                           Comment.find_by_id(params[:comment_id])
                         elsif params[:news_id]
                           @commentable = News.find_by_id(params[:news_id])
                         end
      end
    end
  end
end
