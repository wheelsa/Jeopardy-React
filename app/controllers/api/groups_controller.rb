class Api::GroupsController < ApplicationController
  def index
    render json: Group.all
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end
end
