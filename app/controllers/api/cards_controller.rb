class Api::CardsController < ApplicationController

  def index
    group = Group.find(params[:group_id])
    render json: group.cards
  end

  def create
    group = Group.find(params[:group_id])
    render json: group.cards.create(card_params)
  end

  def show
    group = Group.find(params[:group_id])
    render json: group.cards.find(params[:id])
  end 

  def update
    group = Group.find(params[:group_id])
    card = group.cards.find(params[:id])
    card.update_attributes(card_params)
    render json: group.cards.find(params[:id])
  end

  def destroy
    card.find(params[:id]).destroy
  end

  private 
  def card_params
    params.require(:card).permit(:question, :score, :answer1, :answer2, :answer3, :answer4, :correctAnswer, :id, :group_id)
  end 
end
