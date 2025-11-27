# 💼 Jobify

A full-stack job management platform where users can explore, post, update, and accept jobs — built with **Next.js**, **Node.js**, **Express**, **MongoDB**, and **Firebase Authentication**.  
This project demonstrates end-to-end CRUD operations, protected routes, and real-world integration of modern web technologies.


---

## 🧩 Features

### 🔐 Authentication
- User login and registration using **Firebase Authentication**
- Supports **Google Sign-In**
- Displays logged-in user’s **name**
- Protected routes for sensitive pages (`/addJob`, `/myJobs`, )
- Users stay logged in even after refreshing the page

### 💼 Job Management
- **Add a Job:** Authenticated users can post jobs with details like title, category, summary, salary, and vacancy.
- **View All Jobs:** Browse all posted jobs in a grid layout.
- **Job Details:** View complete job info with option to accept the job.
- **Update/Delete:** Job owners can edit or delete their own jobs.

### 🎨 UI & UX
- Fully responsive across **mobile, tablet, and desktop**
- Elegant **animated banner** and dynamic sections using **Motion**
- Interactive **Top Categories**, **About Platform**, and **FAQ** sections
- **Toast notifications** for all success/error actions (no `alert()` used)
- **Loading spinners** during data fetch operations

---

## ⚙️ Tech Stack

| Category | Technology |
|-----------|-------------|
| **Frontend** | Next.js, Tailwind CSS, DaisyUI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | Next Auth Authentication |
| **HTTP Client** | Axios |
| **UI Enhancements** | Motion, React Icons, React Spinners |
| **Notifications** | React Toastify, SweetAlert2 |
| **Date Handling** | date-fns |
| **Typing Effect** | react-simple-typewriter |

---

## 🧠 Core Functionalities

### 1. **Home Page**
- Animated banner with CTA buttons
- Latest 6 jobs fetched dynamically from MongoDB
- Static sections: Top Categories, About Platform, FAQ, How It Works

### 2. **All Jobs**
- Grid layout of all jobs
- Sorting by posted date/time
- View Details button for each job

### 3. **Add Job**
- Form for posting new jobs (private route)
- Auto-filled “Posted By”, “User Email”, and “Posted Date”
- Shows toast notification on successful submission

### 4. **My Added Jobs**
- Lists jobs created by the logged-in user
- Update and Delete options available
- Instant UI update after deletion

### 5. **Update Job**
- Pre-filled editable form
- Confirmation toast upon update success


---
## 🚀 Live Links

https://jobify-next-client.vercel.app

