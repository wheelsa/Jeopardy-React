class AddAnswersToCard < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :answer1, :string
    add_column :cards, :answer2, :string
    add_column :cards, :answer3, :string
    add_column :cards, :answer4, :string
    add_column :cards, :correctAnswer, :string
  end
end
