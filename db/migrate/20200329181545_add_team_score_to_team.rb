class AddTeamScoreToTeam < ActiveRecord::Migration[6.0]
  def change
    add_column :teams, :teamScore, :string
  end
end
