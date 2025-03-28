# User Management App

A React-based user management application built with Next.js that integrates with the [Reqres API](https://reqres.in/) to perform authentication, user listing, and user management operations (edit/delete). The application is responsive, user-friendly, and includes features like pagination, search, and toast notifications for an enhanced user experience.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Default Credentials](#default-credentials)
- [API Endpoints Used](#api-endpoints-used)
- [Deployment](#deployment)
- [Assumptions and Considerations](#assumptions-and-considerations)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

### Level 1: Authentication
- Login form with email and password fields.
- Token-based authentication using the Reqres API.
- Token persistence in `localStorage` for session management.
- Redirect to the Users List page after successful login.

### Level 2: User List
- Paginated list of users fetched from the Reqres API.
- Display of user's first name, last name, and avatar in a card layout.
- Pagination controls to navigate through different pages of users.
- Client-side search functionality to filter users by first name, last name, or email.

### Level 3: Edit and Delete Users
- Edit functionality with a pre-filled form in a dialog.
- Update user's first name, last name, and email using the Reqres API.
- Delete functionality to remove users from the list.
- Success and error messages using toast notifications.

### Additional Features
- Responsive design that works on both desktop and mobile devices.
- Protected routes to ensure only authenticated users can access the user list.
- Logout functionality to clear the session and redirect to the login page.
- Clean and modern UI using `shadcn/ui` components and Tailwind CSS.
- Error handling for API requests with user-friendly messages.

## Technologies Used
- **Framework**: Next.js 14 (with App Router)
- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **UI Components**: `shadcn/ui` (Button, Card, Input, Dialog, Toaster, etc.)
- **Icons**: `lucide-react`
- **State Management**: React Context API (for authentication)
- **HTTP Requests**: Native `fetch` API
- **Routing**: Next.js App Router
- **Notifications**: Toast notifications using `shadcn/ui` Toaster

## Project Structure    
user-management-app/
├── app/
│   ├── layout.tsx           # Root layout with AuthProvider and ThemeProvider
│   ├── page.tsx            # Login page (default route)
│   └── users/
│       └── page.tsx        # Users list page
├── components/
│   ├── edit-user-dialog.tsx # Dialog component for editing user details
│   ├── login-form.tsx      # Login form component
│   ├── user-card.tsx       # Card component for displaying user details
│   ├── user-list.tsx       # Component for listing users with pagination and search
│   └── ui/                 # shadcn/ui components (Button, Card, Input, etc.)
├── lib/
│   ├── auth-context.tsx    # Authentication context for managing login/logout
│   └── types.ts            # TypeScript types (User interface)
├── public/                 # Static assets (images, etc.)
├── styles/
│   └── globals.css         # Global CSS styles
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation

## Setup Instructions

### Prerequisites
- **Node.js**: Version 18 or higher
- **npm**: Version 8 or higher

### Steps to Run Locally
1. **Clone the Repository**:
   
   git clone https://github.com/<your-username>/user-management-app.git
   cd user-management-app
2. Install Dependencies:
   npm install
3. Install shadcn/ui Components (if not already installed):
   npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input label dialog toaster
4. Run the Development Server:
   npm run dev
5. Open in Browser:
   Open http://localhost:3000 in your browser to see the application.
   
     Usage
1. Login:
On the homepage (/), you'll see a login form.
Use the default credentials to log in (see ).
On successful login, you'll be redirected to the /users page.
2. View Users:
The /users page displays a list of users in a card layout.
Use the search bar to filter users by first name, last name, or email.
Use the "Previous" and "Next" buttons to navigate through pages of users.
3. Edit/Delete Users:
Each user card has "Edit" and "Delete" buttons.
Edit: Opens a dialog with a pre-filled form to update the user's first name, last name, and email.
Delete: Removes the user from the list and shows a success message.
Success or error messages will be displayed as toast notifications.
4. Logout:
Click the "Logout" button on the /users page to log out and return to the login page.

        Default Credentials
To log in, use the following credentials provided by the Reqres API:

Email: eve.holt@reqres.in
Password: cityslicka

        API Endpoints Used
The application integrates with the Reqres API for user management. The following endpoints are used:

POST /api/login: Authenticate user and get a token.
Body: { "email": "eve.holt@reqres.in", "password": "cityslicka" }
Response: { "token": "QpwL5tke4Pnpja7X4" }
GET /api/users?page={page}: Fetch a paginated list of users.
Response: { "page": 1, "per_page": 6, "total": 12, "total_pages": 2, "data": [...] }
PUT /api/users/{id}: Update a user's details.
Body: { "first_name": "Updated", "last_name": "Name", "email": "updated@example.com" }
Response: { "updatedAt": "2025-03-28T12:00:00.000Z" }
DELETE /api/users/{id}: Delete a user.
Response: Status 204 (No Content)

                                  Deployment
The application is deployed on Vercel for live access. You can view the deployed version here:
    https://v0-reqres-api-project.vercel.app/users

