module Api
  module V1
    class AuthFailure < Devise::FailureApp
      def respond
        if request.format == :json
          json_failure
        else
          super
        end
      end

      def json_failure
        self.status = 401
        self.content_type = 'json'
        self.response_body = { 'error': 'authentication error' }
      end
    end
  end
end
