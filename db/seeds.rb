# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Group.create(name: 'React 101')
  Group.first.cards.create(
      question: ' React components have lifecycle events that fall into three general categories?',
      correctAnswer: 'Initialization, State/Property Update, Destruction',
      answer1: 'Test',
      answer2: 'Test',
      answer3: 'Initialization, State/Property Update, Destruction',
      answer4: 'Test',
      score: '200')

Group.create(name: 'React 201')
  Group.second.cards.create(
    question: ' React components have lifecycle events that fall into three general categories?',
    correctAnswer: 'Initialization, State/Property Update, Destruction',
    answer1: 'Test',
    answer2: 'Test',
    answer3: 'Initialization, State/Property Update, Destruction',
    answer4: 'Test',
    score: '200')
Group.create(name: 'Javascript')
  Group.third.cards.create(
    question: ' React components have lifecycle events that fall into three general categories?',
    correctAnswer: 'Initialization, State/Property Update, Destruction',
    answer1: 'Test',
    answer2: 'Test',
    answer3: 'Initialization, State/Property Update, Destruction',
    answer4: 'Test',
    score: '200')
Group.create(name: 'WildCard')
  Group.fourth.cards.create(
    question: ' React components have lifecycle events that fall into three general categories?',
    correctAnswer: 'Initialization, State/Property Update, Destruction',
    answer1: 'Test',
    answer2: 'Test',
    answer3: 'Initialization, State/Property Update, Destruction',
    answer4: 'Test',
    score: '200')

puts 'groups seeded'

