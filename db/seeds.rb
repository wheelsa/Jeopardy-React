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
      answer1: 'Test1',
      answer2: 'Test2',
      answer3: 'Initialization, State/Property Update, Destruction',
      answer4: 'Test4',
      score: '100',
      viewCard: true

      )

      Group.first.cards.create(
      question: ' React 102?',
      correctAnswer: 'React 102',
      answer1: 'Test1',
      answer2: 'Test2',
      answer3: 'React 2',
      answer4: 'Test4',
      score: '200',
      viewCard: true)
      
      Group.first.cards.create(
        question: ' React 102?',
        correctAnswer: 'React 102',
        answer1: 'Test1',
        answer2: 'Test2',
        answer3: 'React 2',
        answer4: 'Test4',
        score: '300',
        viewCard: true)

      Group.first.cards.create(
        question: ' React 102?',
        correctAnswer: 'React 102',
        answer1: 'Test1',
        answer2: 'Test2',
        answer3: 'React 2',
        answer4: 'Test4',
        score: '400',
        viewCard: true)

    Group.first.cards.create(
      question: ' React 102?',
      correctAnswer: 'React 102',
      answer1: 'Test1',
      answer2: 'Test2',
      answer3: 'React 2',
      answer4: 'Test4',
      score: '500',
      viewCard: true)

Group.create(name: 'React 200')
  Group.second.cards.create(
    question: 'React 201?',
    correctAnswer: 'React 201',
    answer1: 'Test1',
    answer2: 'Test2',
    answer3: 'React 201',
    answer4: 'Test4',
      score: '100',
      viewCard: true
      )

  Group.second.cards.create(
    question: 'React 201?',
    correctAnswer: 'React 201',
    answer1: 'Test1',
    answer2: 'Test2',
    answer3: 'React 201',
    answer4: 'Test4',
      score: '200',
      viewCard: true
      )
  
  Group.second.cards.create(
    question: 'React 201?',
    correctAnswer: 'React 201',
    answer1: 'Test1',
    answer2: 'Test2',
    answer3: 'React 201',
    answer4: 'Test4',
    score: '300',
    viewCard: true
      )
  Group.second.cards.create(
    question: 'React 201?',
    correctAnswer: 'React 201',
    answer1: 'Test1',
    answer2: 'Test2',
    answer3: 'React 201',
    answer4: 'Test4',
    score: '400',
    viewCard: true
      )
  
  Group.second.cards.create(
        question: 'React 201?',
        correctAnswer: 'React 201',
        answer1: 'Test1',
        answer2: 'Test2',
        answer3: 'React 201',
        answer4: 'Test4',
        score: '500',
        viewCard: true
          )
        


Group.create(name: 'Javascript')
Group.third.cards.create(
  question: 'Javascript?',
  correctAnswer: 'Javascript ELITE',
  answer1: 'Test1',
  answer2: 'Test2',
  answer3: 'Javascript ELITE',
  answer4: 'Test4',
  score: '100',
  viewCard: true)

  Group.third.cards.create(
    question: 'Javascript?',
    correctAnswer: 'Javascript ELITE',
    answer1: 'Test1',
    answer2: 'Test2',
    answer3: 'Javascript ELITE',
    answer4: 'Test3',
    score: '200',
    viewCard: true)

    Group.third.cards.create(
      question: 'Javascript?',
      correctAnswer: 'Javascript ELITE',
      answer1: 'Test1',
      answer2: 'Test2',
      answer3: 'Javascript ELITE',
      answer4: 'Test3',
      score: '300',
      viewCard: true)
      Group.third.cards.create(
        question: 'Javascript?',
        correctAnswer: 'Javascript ELITE',
        answer1: 'Test1',
        answer2: 'Test2',
        answer3: 'Javascript ELITE',
        answer4: 'Test3',
        score: '400',
        viewCard: true)
  Group.third.cards.create(
    question: 'Javascript?',
    correctAnswer: 'Javascript ELITE',
    answer1: 'Test1',
    answer2: 'Test2',
    answer3: 'Javascript ELITE',
    answer4: 'Test4',
    score: '500',
    viewCard: true)
    


Group.create(name: 'WildCard')
  Group.fourth.cards.create(
    question: ' Wildcard ??? ',
    correctAnswer: 'Wildcard!?@#$',
    answer1: 'Test1',
    answer2: 'Test2',
    answer3: 'Wildcard!?@#$',
    answer4: 'Test4',
    score: '100',
    viewCard: true)
    Group.fourth.cards.create(
      question: ' Wildcard ??? ',
      correctAnswer: 'Wildcard!?@#$',
      answer1: 'Test1',
      answer2: 'Test2',
      answer3: 'Wildcard!?@#$',
      answer4: 'Test4',
      score: '200',
      viewCard: true)
  Group.fourth.cards.create(
    question: ' Wildcard ??? ',
    correctAnswer: 'Wildcard!?@#$',
    answer1: 'Test1',
    answer2: 'Test2',
    answer3: 'Wildcard!?@#$',
    answer4: 'Test4',
    score: '300',
    viewCard: true)
    Group.fourth.cards.create(
      question: ' Wildcard ??? ',
      correctAnswer: 'Wildcard!?@#$',
      answer1: 'Test1',
      answer2: 'Test2',
      answer3: 'Wildcard!?@#$',
      answer4: 'Test4',
      score: '400',
      viewCard: true)
      Group.fourth.cards.create(
        question: ' Wildcard ??? ',
        correctAnswer: 'Wildcard!?@#$',
        answer1: 'Test1',
        answer2: 'Test2',
        answer3: 'Wildcard!?@#$',
        answer4: 'Test4',
        score: '500',
        viewCard: true)

Team.create(
  name: 'Circles',
  teamScore: '0',
  turn: true)

Team.create(
  name: 'Squares',
  teamScore: '0',
  turn: false)

puts 'groups, cards, teams seeded'

