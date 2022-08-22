# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    Tag.create([{ name: 'Math'}, {name: 'To-do'}, {name: 'Misc.'}])
    Document.create([{ title: 'Math notes', content: '1 + 1 = 2', user_id: 2, tag_id: 1}])
    Document.create([{ title: 'English notes', content: 'The caterpillar was hungry', user_id: 2, tag_id: 1}])