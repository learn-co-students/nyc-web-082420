# Active Record Basics
- SQL... we're really not gonna take a lot questions here 
- ORM
- Active Record (AR)

## Questions
- Associations labs; what are we acting on? ( instance, class, table, row )
- AR:Base v AR:Migration... how are they different?
  - different classes
  - Migration is responsible for... migrating the tables 
  - Base is responsible to allowing your Ruby class to interact with a specific table 
- rake db:rollback ==> you're not gonna use this a ton 
- up/down (i have almost never seen used in production)... use change 
- new/save vs create 
- deleting files? 
- ActiveRecord::Migration[4.2] ... diff labs call for diff versions, shouldn't need to change 

## Why Active Record?
- SQL: the language we use to interact with a SQL database (sqlite3, postgresql)
  - caryn we're not writing much SQL, why so many labs?
  - What is AR actually doing ==> SQL commands for you
  - Fair game in interviews 
  - You could have to write a lot on the job 
- ORM
  - libraries that write SQL code for you or let you write SQL in another language file
  - some you gotta write a lot of SQL yourself
  - others, you will write VERY LITTLE SQL 
- Active Record (AR) 
  - is an ORM that gives you a lot of infrastructure (methods, helpers, macros, etc)
  - a lot of infrastructure means *a lot of rules*


## From OO to Active Record

- Review Tables
- Rake Migrations
- Models


- One to Many (probably afternoon)
- Many to Many (probably afternoon)

### Our Ecosystem is Expanding!
- Models ==> Ruby
- Tables / DB ==> Rake & Migrations (AR)

- What is persistence? "Saving"/"Remembering" data STORE THE DATA SOMEPLACE 
- If I make a table, I SHOULD make a class b/c I can store the info but I need ruby (class) to interact with it 
- If make a class, I should only make a table if I need persistence 


- Add a new method to interact with an instance ==> Ruby 
- Add a table to my DB ====> Rake 
- Add a new attribute/column to a table ===> Rake  (both as an instinct makes sense, but just Rake)

## Resources
- 5 AR Methods it might be nice to know: https://medium.com/swlh/5-must-know-active-record-methods-

### More helpful AR Methods
- .find_or_create


## Icebox 
- Any implications of Ruby 3.0? Caryn hasn't checked to see what they've said 
- AR and NoSQL?
- If we delete db/migrate where does the file go? 
- t.datetime and t.timestamps 
- If we delete/drop, and have say, 3 migrations. What happens when we first migrate. Does the first migration happen, or all three? And can we rollback one by one after, or will a rollback, rollback all three?