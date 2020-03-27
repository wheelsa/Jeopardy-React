class Api::CardsController < ApplicationController

  def index
    group = Group.find(params[:group_id])
    render json: group.cards
  end

  def create
    group = Group.find(params[:group_id])
    render json: group.cards.create(card_params)
  end

  def update
  end

  def destroy
    card.find(params[:id]).destroy
  end

  private 
  def card_params
    params.require(:card).permit(:question, :score, :answer1, :answer2, :answer3, :answer4, :correctAnswer)
  end 
end
