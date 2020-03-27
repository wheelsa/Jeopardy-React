class Api::GroupsController < ApplicationController
  before_action :set_group, only: [:show, :update, :destroy]

  def index
    render json: Group.all
  end
  def show
    render json: @group
  end

  private

  def set_group
    @group = Group.find(params[:id])
  end 

  def group_params
    params.require(:group).permit(:name, :id)
  end
end
