# Object Orientation

## Questions
- What's all this about `@`?
- Covering DQs? 
- Labs... when do we need initialize? When do we need getters, setters?


## What is OO
Functional Programming < ==== DON'T WORRY ABOUT 

Object Oriented Programming

Instagram 
Users ==> username, password, bio 
Post (Images / Videos)
Comments
Likes 
Followers
Tags

Runescape ==> Gabriel 
users
characters
skills
monsters 

Ruby
Strings
Float
Int
Arrays
Hashes 
Booleans

has properties that can be accessed / behaviors performed via methods 
has methods !! used through dot notation !! 

Why a blueprint?
1. consistency 
2. DRY and not creating more work for ourselves

- user.rb 
- app/models/user.rb
- app/models/class_name.rb


## Agenda

- Teach our app what a `User` is
    - A `User` has a `name`
    - A `User` has an `age`
    - A `User` has `ss_number`
    - A `User` can change their `name`, `age`, and `ss_number`
    - A `User` should be able to say it's `name` and `age`
    - A `User`should not be able to show their `ss_number`
- A `User` can sign in, view, and edit their personal information
