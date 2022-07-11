module Api
  module V1
    class CommentsController < ApplicationController
      def index
        @comments = Comment.includes(:comments).news_comments.where(commentable_id: params[:news_id])
      end

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
          @commentable = Post.find_by_id(params[:news_id])
        end
      end
    end
  end
end
