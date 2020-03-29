class Api::TeamsController < ApplicationController
  before_action :set_team, only: [:show, :update, :destroy]
  
  def index
    render json: Team.all
  end

  def show
    render json: @team
  end

  def create
    team = Team.new(team_params)
    if team.save
      render json: team
    else
      render json: team.errors, status: 422
    end
  end

  def update
    if @team.update(team_params)
      render json: @team
    else 
      render json: @team.errors, status: 422
    end
  end

  def destroy
    @team.destroy
  end

  private

  def set_team
    @team = Team.find(params[:id])
  end 

  def team_params
    params.require(:team).permit(:name, :teamScore, :id, :turn)
  end

  
end
