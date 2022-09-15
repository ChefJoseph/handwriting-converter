# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    Tag.create([
        {name: 'Math'}, 
        {name: 'To-do'}, 
        {name: 'Science'},
        {name: 'History'},
        {name: 'Politics'},
        {name: 'Finance'},
        {name: 'Coding'},
        {name: 'English'},
        {name: 'Misc'}
    ])

    Folder.create(
        {name: 'Work', user_id: 1}
    )

    Document.create([{ title: 'Math notes', content: '1 + 1 = 2', user_id: 1, folder_id: 1}])
    Document.create([{ title: 'English notes', content: 'The caterpillar was hungry', user_id: 2}])
    Document.create([{ title: 'History notes', content: 'Christopher Columbus', user_id: 1}])
    Document.create([{ title: 'Sexy Notes', content: '69', user_id: 2}])
    Document.create([{ title: 'Secret Notes', content: 'Psssss', user_id: 1, folder_id: 1}])
    Document.create([{ title: 'Political Notes', content: 'MAGA', user_id: 2}])
    Document.create([{ title: 'Gossip Notes', content: 'OMG OMG OMG', user_id: 1}])
    Document.create([{ title: 'Foreign Notes', content: 'HOLA COMO ESTAS', user_id: 2}])

    Tagging.create!(document_id: 1, tag_id: 1)
    Tagging.create!(document_id: 1, tag_id: 2)
    Tagging.create!(document_id: 1, tag_id: 3)
    Tagging.create!(document_id: 2, tag_id: 4)
    Tagging.create!(document_id: 2, tag_id: 5)
    Tagging.create!(document_id: 2, tag_id: 7)
    Tagging.create!(document_id: 2, tag_id: 6)
    Tagging.create!(document_id: 3, tag_id: 6)
    Tagging.create!(document_id: 3, tag_id: 8)

    puts "seeded!"