## The application:
re-View is a full-stack application used for creating and displaying all of your direct reports (employees) at a glance.

Simply sign up to create and account. Sign in to start creating your own employee database. From your dashboard you can create, view, edit and delete employees and their information.

![alt text](https://i.imgur.com/fK1DSoW.png)

Visit https://m0gm0g.github.io/capstone-client/ to start.

## Links:
Back end repo: https://github.com/M0gM0g/capstone-backend
Front end repo: https://github.com/M0gM0g/capstone-client

Front end deployed: https://m0gm0g.github.io/capstone-client/
Back end deployed: https://stormy-mesa-16781.herokuapp.com/

## Technology
For this application I used:

javascript, html, css, boostrap, handlebars, ruby on rails

## Unsolved Problems
I would like to be able to edit all of an employees information seamlessly.  In the future, I'd love to import salary information straight from human resources and allow the user to see a history of updates to track their employees progress
more efficiently.

## Wireframes and User stories

Wireframe: https://i.imgur.com/wSfFG8A.png

ERD: https://i.imgur.com/BNCKnOb.png

User Stories: As a user I want to be able to:

-create a database of employees

-store data about those employees such as:
salary history, goals, performance evaluations, future goals

-update, view, create and destroy records and employees


## Routes and Paths

User Routes: Sign Up POST /sign-up
             Sign In POST /sign-in
             Change Password PATCH /change-password
             Sign Out DELETE /sign-out

Employee Routes: Create POST /employees
               Get All   GET /employees
               Delete DELETE /employees/:id
               Update PATCH /employees/:id


## Planning, Process & Problem-solving

I planned my project using user stories, an ERD diagram and a wireframe.
I wanted the app to be straight forward and easy to use. The goal was to have all of the information that you need for an employee review at your fingertips.
I followed along with the suggested timeline and stuck to it as much as possible.
