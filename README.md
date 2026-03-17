# Full-Stack LMS & Team Management System

### Built with Django REST Framework + React.js

- This project is an exploratory, hands-on learning experience in full-stack development, through real-world challenges and iterative problem-solving.

- The goal is to build a real-world web application combining a **Learning Management System** with a **Team & Task Management System** — think Udemy meets Jira.

## Tech Stack

**Frontend**

- React + Vite
- Tailwind CSS v4 (with custom design tokens)
- Zustand (global state management)
- React Router DOM (routing with role-based protected routes)
- Axios (API communication)
- React Hook Form (form handling)
- JWT Decode (token parsing)

**Backend**

- Django + Django REST Framework (REST API)
- SimpleJWT (authentication with role-based JWT tokens)
- drf-yasg (auto-generated Swagger API documentation)
- Pillow (image handling)
- SQLite (development database)

---

## Architecture

React (Frontend)
Zustand
Axios

Django REST API (Backend)
JWT Auth + Permissions
Course / Task / Team Models

## Features

**_ Authentication _**

- User registration and login with JWT tokens
- Password reset via email with OTP
- Role-based protected routes in React
- Profile management with avatar upload and auto-generated initials

**_ Courses _**

- Course model with title, description, thumbnail, video, level, price and status (draft/published)
- Lessons nested inside courses with custom ordering
- Categories for organizing courses
- Enrollment system — employees can self-enroll or be assigned a course by a manager
- Employees only see published courses, managers see all including drafts

**_ Search _**

- Global search across courses, tasks, teams and users
- Dropdown results grouped by type
- Filter by category, level, price and rating
- Sort by relevance, newest or popularity
- Powered by Zustand store with parallel API calls

**_ Task & Team Management _**

- Create teams
- assign members
- create and delegate tasks with subtasks

**_ API _**

- Full CRUD REST API for all models
- Custom permission classes per role
- Auto-generated Swagger UI for API testing and documentation
- Cart and checkout with real payments
- Coupon and discount system
- Video upload and file downloads
- Chat management system
- Student progress tracking
- Notifications system
- Task and team management system
- Kanban Board, Drag-and-drop task management with columns (To Do, In Progress, Review, Done)

## Screenshots

<img width="1129" height="766" alt="image" src="https://github.com/user-attachments/assets/2cc86204-7d38-4111-9e7d-add4e78a875e" />
<img width="1132" height="768" alt="image" src="https://github.com/user-attachments/assets/18e8e8ea-7cf2-4457-8407-e5eadbfe7eae" />
<img width="1314" height="455" alt="image" src="https://github.com/user-attachments/assets/256b7ab2-76e2-47ad-8606-1ddabca09e00" />

https://imgur.com/pIbG8PC

![Screen recording](https://github.com/user-attachments/assets/fb23009d-7173-4976-9bea-b64f4605cf63)

## Getting Started

**_ Backend _**

cd backenD
python -m venv .venv
source .venv/bin/activate # Windows: .venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

**_ Frontend _**

cd frontend
npm install
npm run dev
