# Cloud-Based Classroom Resource Sharing System

## Problem Statement
Students often have notes, lab manuals, previous question papers, and reference materials scattered across messaging applications, personal devices, and different cloud folders. Finding the correct resource can become difficult.

## Objective
To provide a centralized cloud-based platform for organizing and accessing academic resources according to subject, unit, and resource type.

## Main Features
- Add academic resources
- Organize resources by subject
- Classify resources as notes, lab manuals, question papers, or references
- Search resources
- Filter resources by subject
- Store resource links
- Ready for cloud database and cloud storage integration

## Cloud Computing Concept
The application can use **Firebase Firestore** to store resource metadata and **Firebase Storage** or another cloud storage service to store uploaded documents.

### Proposed Architecture

User Browser
      |
      v
HTML / CSS / JavaScript
      |
      +------------------+
      |                  |
      v                  v
Firestore Database   Cloud Storage
      |                  |
      +--------+---------+
               |
               v
       Academic Resources

## Technologies
- HTML5
- CSS3
- JavaScript
- Firebase Firestore
- Firebase Storage

## Project Structure

```text
cloud-classroom-resource-sharing/
├── index.html
├── style.css
├── app.js
└── README.md
```

## How to Run
1. Clone or download the repository.
2. Open `index.html` in a browser.
3. Test adding, searching, and filtering resources.

## Cloud Integration
For a complete cloud implementation:
1. Create a Firebase project.
2. Enable Firestore.
3. Enable Firebase Storage.
4. Register a web application.
5. Add the Firebase configuration.
6. Store resource metadata in Firestore.
7. Upload documents to cloud storage.
8. Save generated file URLs in Firestore.
9. Deploy the application using Firebase Hosting.

## Future Enhancements
- Student and faculty login
- File upload directly from the browser
- Download tracking
- Favorites/bookmarks
- Admin approval for uploaded resources
- Unit-wise navigation
- Role-based access control
- Cloud storage usage monitoring

## Conclusion
This project demonstrates how cloud storage and cloud databases can make academic resources centrally available and easier to organize and access across devices.
