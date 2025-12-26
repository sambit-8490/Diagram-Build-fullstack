# ER Diagram Builder

## Introduction
The ER Diagram Builder is a web-based application designed to help users create, edit, and share Entity-Relationship (ER) diagrams. ER diagrams are an essential part of database design, and this application aims to simplify the process by offering an intuitive interface to draw entities, relationships, and attributes. The tool supports exporting diagrams, and integrating with various database management tools. It’s ideal for both beginners and experienced developers working on database schema design.

## Project Type
Frontend | Backend | Fullstack

## Deployed App
Frontend: [Link](https://entity-craft.vercel.app/)
Backend: [link](https://browser-breakers-be.onrender.com)
Database: https://deployed-site.whatever

## Directory Structure
- frontend
```
src/
├─ assets/
├─ components/
│  ├─ Another/
│  ├─ Auth/
│  ├─ ColorMode/
│  ├─ Dashboard/
│  ├─ ExportButton/
│  ├─ tables/
│  ├─ Template/
│  ├─ WhiteSpace/
├─ context/
│  ├─ AuthContext.jsx
│  ├─ ThemeContext.jsx
├─ pages/
│  ├─ About.jsx
│  ├─ AllRoutes.jsx
│  ├─ Footer.jsx
│  ├─ Home.jsx
│  ├─ MainPage.jsx
│  ├─ Navbar.jsx
│  ├─ TeamAbout.jsx
│  ├─ ThemeSwitch.jsx
├─ utils/
│  ├─ ApiEndPoints.js
├─ hooks/
├─ PrivateRoute/
├─ App.css
├─ App.jsx
├─ index.css
├─ main.jsx
.env
.gitignore
index.html
.eslint.config.js
package-lock.json
package.json
postcss.config.js
README.md
tailwind.config.js
vercel.json
vite.config.js
```

- backend
```
src/
├─ controllers/
├─ middleware/
├─ models/
├─ routes/
├─ utils/
.env
.env.example
.gitignore
app.js
package-lock.json
package.json
```

## Video Walkthrough of the project
Attached a very short video walkthough of all of the features [[link]](https://youtu.be/roHsoD81Scw)

## Video Walkthrough of the codebase
Attached a very short video walkthough of codebase [[Link]](https://youtu.be/FXNXMXomI-Y)

## Features
List out the key features of your application.

- *User Authentication* : Sign up, log in, and log out functionality.
- *Diagram Creation and Editing* : Create, edit, and delete ER diagrams with the ability to add entities, attributes, and relationships (one-to-one, one-to-many, many-to-many).
- *Diagram Saving and Loading* : Save and load diagrams to/from the user’s account.
- *Exporting Diagrams* : Export diagrams to PNG, PDF, or SVG formats.
- *Automatic Layout and Styling* : Automatic layout algorithms and customizable styling options for a neat and appealing design.
- *Version Control* : Track changes and revert to previous versions.
- *Comments and Annotations* : Add comments and annotations for better collaboration.
- *Template Library* : Pre-made templates for common database designs.
- *Mobile Responsiveness* : Fully responsive design for mobile devices.

## design decisions or assumptions
List your design desissions & assumptions

## Installation & Getting started
Detailed instructions on how to install, configure, and get the project running. For BE/FS projects, guide the reviewer how to check mongodb schema etc.

```bash
git clone https://github.com/PoojaSingh31github/WEB_039_Browser_Breakers.git
cd WEB_039_Browser_Breakers
npm install
npm run dev
```

## Screenshots

### Home Page
![image](https://github.com/user-attachments/assets/2a7d9b71-ec82-4e15-a871-feb340ccde0a)

### Login Page
![image](https://github.com/user-attachments/assets/1a809ca3-38bb-41c7-b96f-c70091565d60)

### ER Diagram Template Page
![image](https://github.com/user-attachments/assets/8a0b4dac-a81e-4950-adad-b6358be49af4)

### Schema Page
![image](https://github.com/user-attachments/assets/95926dc2-5841-4533-9374-347fdaec8ec3)

### Home Page (Phone)
![image](https://github.com/user-attachments/assets/5444f577-fc94-4d26-b4c7-cfe91d5dd157)

### Schema Page (Phone)
![image](https://github.com/user-attachments/assets/d7d8dc62-df2f-4648-8d8d-b028d82503f9)

### ER Diagram Page (Phone)
![image](https://github.com/user-attachments/assets/530d0872-076c-44c7-9048-f0e2c08320cc)


## Credentials
### login credentials 
- **email** - test1@gmail.com
- **Password** - 123456

## API Endpoints

### User Authentication
- **POST** `/users/login` - User login.
- **POST** `/users/signup` - User signup.
- **GET** `/users/getUser` - Get user details.

### Project Management
- **POST** `/project/` - Create a new project.
- **GET** `/project/getProject/{id}` - Get project by ID.
- **PUT** `/project/updateProject/{id}` - Update project by ID.
- **DELETE** `/project/deleteProject/{id}` - Delete project by ID.
- **GET** `/project/getAllProjects` - Retrieve all projects.

---

## Technology Stack

### Frontend:
- **Vite**
- **Context-API**
- **Xyflow library**
- **CSS / Tailwind CSS** (for styling)

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB** (for data storage)
