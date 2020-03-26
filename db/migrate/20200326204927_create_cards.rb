class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :question
      t.string :answer
      t.string :points
      t.belongs_to :group, null: false, foreign_key: true

      t.timestamps
    end
  end
end
