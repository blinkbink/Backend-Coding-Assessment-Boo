# Backend Coding Test at Boo

This project implements a backend server in Node.js with MongoDB for storing profile data and supporting commenting and voting functionality.

## Part 1: Storing Profile Data in MongoDB

- **MongoDB Setup**: Utilized `mongodb-memory-server` for ease of testing. Installed required packages via npm or yarn.

- **Code Implementation**:     
    - Connected to the MongoDB memory server using `mongoose`.
    - Defined a `Profile` schema and model for storing profile data.
    - Implemented routes for:
        - Creating new profiles (`POST /profile`).
        - Retrieving profiles by ID (`GET /profile/:id`).
        - Profile render page (`http://localhost:3000/1`)

## Part 2: Backend API for Commenting and Voting

- **API Endpoints**:
    - Implemented routes for:
        - Creating new comments (`POST /comments`).
        - Liking a comment (`POST /comments/:id/like`).
        - Unliking a comment (`POST /comments/:id/unlike`).
        - Getting comments sorted by likes (`GET /comments`).

- **Code Implementation**:
    - Defined a `Comment` schema and model for storing comment data.
    - Implemented logic for creating comments, liking/unliking comments, and retrieving comments sorted by likes.

## Instructions to Run

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the server with `npm start`.
4. Test the API endpoints using tools like Postman or cURL.

## Automated Test Using Jest
`npm install`

## Additional Notes
- Initial Project Provide by Boo https://drive.google.com/file/d/1_--abKT6sl3ruwG3QNoksXm2LP03r7Uf/view?usp=sharing
- Automated test `npm test`
- Postman Collection https://api.postman.com/collections/24829541-62f302b6-1804-42f0-ae93-6adfe1654f22?access_key=PMAT-01HS4Z9MVT7A91AW16VY7N9NWX
