# *RBAC Dashboard Project*

## *Overview*
This project is a *Role-Based Access Control (RBAC)* system designed to manage user access to specific resources or features based on their roles. It provides a secure and flexible way to implement authentication, authorization, and protected routes, ensuring that users only have access to what they are allowed.

The backend is built with *Node.js* and *Express, using **MongoDB* for data storage, and the frontend is built with *React. The project supports role-based access to different endpoints and features such as **Admin, **Manager, and **User*.

---

## *Features*
- *User Authentication: Secure login and registration using **bcrypt* for password hashing and *JWT* for token-based authentication.
- *Role-Based Access Control (RBAC)*:
  - Admin: Access to all resources.
  - Manager: Access to resources shared with Admin and Manager roles.
  - User: Access to basic user-level resources.
- *Token Blacklisting*: Logout functionality with JWT invalidation using an in-memory blacklist.
- *Protected Routes*: Restrict access to certain routes based on authentication and roles.
- *Scalable Design*: Modular folder structure for scalability.
- *Environment-Specific Configurations*: Secure secrets stored in .env.

---

## *Technologies Used*
### *Backend*
- *Node.js*: Runtime for building the backend server.
- *Express.js*: Lightweight framework for handling routes and middleware.
- *MongoDB*: NoSQL database for storing user data.
- *Mongoose*: Object Data Modeling (ODM) library for MongoDB.

### *Frontend*
- *React.js*: Frontend library for building user interfaces.
- *React Router DOM*: For client-side routing and navigation.

### *Other Tools*
- *JWT (JsonWebToken)*: For secure, stateless authentication.
- *bcrypt.js*: For hashing and validating passwords.
- *dotenv*: To manage environment variables.

---

## *Folder Structure*
### *Backend*

## *API Endpoints*

### *Authentication Routes*
| Method | Endpoint           | Description                   |
|--------|---------------------|-------------------------------|
| POST   | /api/auth/register | Register a new user           |
| POST   | /api/auth/login    | Authenticate a user           |
| POST   | /api/auth/logout   | Logout and invalidate token   |

### *Protected Routes*
| Method | Endpoint           | Access Level          | Description                 |
|--------|---------------------|-----------------------|-----------------------------|
| GET    | /api/users/admin   | Admin only            | Access Admin resources       |
| GET    | /api/users/manager | Admin, Manager        | Access Manager resources     |
| GET    | /api/users/user    | Admin, Manager, User  | Access User resources        |
