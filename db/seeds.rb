User.destroy_all
u1 = User.create({
  name: "John Doe",
  email: "johndoe@test.com",
  password: "chicken",
  password_confirmation: "chicken"
})
u2 = User.create({
  name: "Mary Jane",
  email: "maryjane@test.com",
  password: "chicken",
  password_confirmation: "chicken"
})
u3 = User.create({
  name: "Jane Doe",
  email: "janedoe@test.com",
  password: "chicken",
  password_confirmation: "chicken"
})
u4 = User.create({
  name: "John Smith",
  email: "johnsmith@test.com",
  password: "chicken",
  password_confirmation: "chicken"
})
u5 = User.create({
  name: "Richard Miles",
  email: "richardmiles@test.com",
  password: "chicken",
  password_confirmation: "chicken"
})

puts "User Count: #{User.all.count}"

Wireframe.destroy_all

w1 = Wireframe.create({
  name: "Wireframe 1",
  user_id: u1.id
})
w2 = Wireframe.create({
  name: "Wireframe 2",
  user_id: u2.id
})
w3 = Wireframe.create({
  name: "Wireframe 3",
  user_id: u2.id
})
w4 = Wireframe.create({
  name: "Wireframe 4",
  user_id: u3.id
})
w5 = Wireframe.create({
  name: "Wireframe 5",
  user_id: u4.id
})
w6 = Wireframe.create({
  name: "Wireframe 6",
  user_id: u5.id
})

puts "Wireframe Count: #{Wireframe.all.count}"


Element.destroy_all

# e1 = Element.create({
#   wireframe_id: w3.id,
#   top: 100,
#   left: 50,
#   width: 200,
#   height: 400
# })

puts "Element Count: #{Element.all.count}"
