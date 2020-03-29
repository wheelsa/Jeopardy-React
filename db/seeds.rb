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
      answer1: 'Answer 1',
      answer2: 'Answer 1',
      answer3: 'Answer 3',
      answer4: 'Answer 4',
      score: '100')

      Group.first.cards.create(
      question: ' React 102?',
      correctAnswer: 'React 102',
      answer1: 'Test',
      answer2: 'Test',
      answer3: 'React 2',
      answer4: 'Test',
      score: '200')
      
      Group.first.cards.create(
        question: ' React 102?',
        correctAnswer: 'React 102',
        answer1: 'Test',
        answer2: 'Test',
        answer3: 'React 2',
        answer4: 'Test',
        score: '300')

      Group.first.cards.create(
        question: ' React 102?',
        correctAnswer: 'React 102',
        answer1: 'Test',
        answer2: 'Test',
        answer3: 'React 2',
        answer4: 'Test',
        score: '400')

    Group.first.cards.create(
      question: ' React 102?',
      correctAnswer: 'React 102',
      answer1: 'Test',
      answer2: 'Test',
      answer3: 'React 2',
      answer4: 'Test',
      score: '500')

Group.create(name: 'React 200')
  Group.second.cards.create(
    question: 'React 201?',
    correctAnswer: 'React 201',
    answer1: 'Test',
    answer2: 'Test',
    answer3: 'React 201',
    answer4: 'Test',
      score: '100'
      )

  Group.second.cards.create(
    question: 'React 201?',
    correctAnswer: 'React 201',
    answer1: 'Test',
    answer2: 'Test',
    answer3: 'React 201',
    answer4: 'Test',
      score: '200'
      )
  
  Group.second.cards.create(
    question: 'React 201?',
    correctAnswer: 'React 201',
    answer1: 'Test',
    answer2: 'Test',
    answer3: 'React 201',
    answer4: 'Test',
      score: '300'
      )
  Group.second.cards.create(
    question: 'React 201?',
    correctAnswer: 'React 201',
    answer1: 'Test',
    answer2: 'Test',
    answer3: 'React 201',
    answer4: 'Test',
      score: '400'
      )
  
  Group.second.cards.create(
        question: 'React 201?',
        correctAnswer: 'React 201',
        answer1: 'Test',
        answer2: 'Test',
        answer3: 'React 201',
        answer4: 'Test',
          score: '500'
          )
        


Group.create(name: 'Javascript')
Group.third.cards.create(
  question: 'Javascript?',
  correctAnswer: 'Javascript ELITE',
  answer1: 'Test',
  answer2: 'Test',
  answer3: 'Javascript ELITE',
  answer4: 'Test',
  score: '100')
  Group.third.cards.create(
    question: 'Javascript?',
    correctAnswer: 'Javascript ELITE',
    answer1: 'Test',
    answer2: 'Test',
    answer3: 'Javascript ELITE',
    answer4: 'Test',
    score: '200')
    Group.third.cards.create(
      question: 'Javascript?',
      correctAnswer: 'Javascript ELITE',
      answer1: 'Test',
      answer2: 'Test',
      answer3: 'Javascript ELITE',
      answer4: 'Test',
      score: '300')
      Group.third.cards.create(
        question: 'Javascript?',
        correctAnswer: 'Javascript ELITE',
        answer1: 'Test',
        answer2: 'Test',
        answer3: 'Javascript ELITE',
        answer4: 'Test',
        score: '400')
  Group.third.cards.create(
    question: 'Javascript?',
    correctAnswer: 'Javascript ELITE',
    answer1: 'Test',
    answer2: 'Test',
    answer3: 'Javascript ELITE',
    answer4: 'Test',
    score: '500')
    


Group.create(name: 'WildCard')
  Group.fourth.cards.create(
    question: ' Wildcard ??? ',
    correctAnswer: 'Wildcard!?@#$',
    answer1: 'Test',
    answer2: 'Test',
    answer3: 'Wildcard!?@#$',
    answer4: 'Test',
    score: '100')
    Group.fourth.cards.create(
      question: ' Wildcard ??? ',
      correctAnswer: 'Wildcard!?@#$',
      answer1: 'Test',
      answer2: 'Test',
      answer3: 'Wildcard!?@#$',
      answer4: 'Test',
      score: '200')
      Group.fourth.cards.create(
        question: ' Wildcard ??? ',
        correctAnswer: 'Wildcard!?@#$',
        answer1: 'Test',
        answer2: 'Test',
        answer3: 'Wildcard!?@#$',
        answer4: 'Test',
        score: '300')
        Group.fourth.cards.create(
          question: ' Wildcard ??? ',
          correctAnswer: 'Wildcard!?@#$',
          answer1: 'Test',
          answer2: 'Test',
          answer3: 'Wildcard!?@#$',
          answer4: 'Test',
          score: '400')
          Group.fourth.cards.create(
            question: ' Wildcard ??? ',
            correctAnswer: 'Wildcard!?@#$',
            answer1: 'Test',
            answer2: 'Test',
            answer3: 'Wildcard!?@#$',
            answer4: 'Test',
            score: '500')

puts 'groups and cards seeded'

