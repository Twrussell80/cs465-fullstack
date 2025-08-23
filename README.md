# cs465-fullstack
CS-465 Full Stack Development


Architecture

Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

  For this project, I used Express HTML, JavaScript, and SPA. Express uses server-side rendering, but due to this, the page has to completely reload when it updates. Javascript allowed for more interactivity. As beneficial as it is to more easily manipulate requests, it became more complex as more was added. It became more difficult to maintain consistency with things like the UI. SPA provided smoother navigation and dynamic rendering.

Why did the backend use a NoSQL MongoDB database?

  NoSQL was used it is made to be more document oriented. This is compatible with JSON data and integrates better with the frontend, and allows for more efficient development.

Functionality

How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

  JSON is different because it is mainly used for data exchange. JSON tied the frontend together because it is a format in which can bridge the front and backends to allow for better communication.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

  I created components like the trip cards that can be reused to allow a developer to more easily maintain the application. I also changed login code that was duplicated into the authentication service.

Testing

Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

  An endpoint is a URL located in the server that the frontend connects to in order to access data. To test the endpoints, I used the HTTP methods GET, PUT, POST, and DELETE. GET is used to retrieve the necessary data, PUT is used for updating, POST will create new data, and DELETE will remove the data. The endpoints are tested in order to ensure that they work when correct input is utilized and also show an error when incorrect input is used.

Reflection

How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

  This course has helped me to learn how to create and manipulate a Single Page Application, such as developing components that can be reused, learn how to make sure APIs are structured correctly, and how to test endpoints of the application. With this understanding, I feel one step closer to succeeding in my future career.
