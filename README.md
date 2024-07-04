<h1 align="center">Twitter Clone</h1>

![Demo App](https://pentacle.ams3.digitaloceanspaces.com/Sample/thumbnail.jpg)

This project is a full-stack clone of Twitter created using React for the frontend and Node.js with Express for the backend. The database is managed using MongoDB.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [Usage](#usage)

## Features

- Authentication with JSONWEBTOKENS (JWT)
- Create, read, update, and delete (CRUD) operations for posts
- Follow and unfollow users
- Like and commenting on post
- Send Notifications
- Responsive design

## Technologies

### Frontend

- React
- Vite
- Tailwind CSS
- React Router Dom
- React Query
- DaisyUI
- react hot toast

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT for authentication
- Cloudinary for image uploads

## Setup

To set up the project locally, follow these steps:

### Clone the repository

```bash
git clone https://github.com/Designer-space/Twitter_Clone.git
cd Twitter_Clone
```

### Install dependencies

#### Backend

```bash
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

### Environment Variables

```bash
NODE_ENV=
PORT=8000
MONGO_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

### Usage

#### Start the backend server

```bash
npm run dev
```

#### Start the Frontend server

```bash
cd frontend
npm run dev
```

If you get error like

> "NODE_ENV" is not recognized as an internal or external command, operable command or batch file.

refer to this stack overflow [answer](https://stackoverflow.com/questions/11928013/node-env-is-not-recognized-as-an-internal-or-external-command-operable-comman)
