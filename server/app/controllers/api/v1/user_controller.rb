class Api::V1::UserController < Api::V1::BaseController
  def index
    users = User.all
    render json: {data: users}
  end
end
