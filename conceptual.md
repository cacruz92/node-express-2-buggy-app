### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
- - A JWT is a JSON Web Token. Once a user is authenticated, they will receive a JWT and it is storws in var or localStorage to be sent with future API requests that require authentication.

- What is the signature portion of the JWT?  What does it do?
- - The signature is a version of header & payload, signed with a secret key. This ensures the token is valid and came from the server.

- If a JWT is intercepted, can the attacker see what's inside the payload?
- - Yes the payload can be seen by anyone who sees the JWT.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
- - Have the user sign in to receive their token, then you store the token(or send it along with the request body for each request), the token is then accessed by from the headers (or the request body) and then it is verified using the signature and secret key and is decoded for the payload. If the token is valid then the user information is sent and the information is then accessible.

- Compare and contrast unit, integration and end-to-end tests.
- - Unit tests focus on testing individual components or functions in isolation to make sure each function's output is as expected. Unit tests are much narrower in scope. Integration tests verify that the interactions between the differnt units work *together*. A broader scode but a bit slower than unit tests. End-to-end tests simulate real user scenaros and test the use of the application from beginnning to end. A very broad scope, as it tests the entire program (front end and back end). It is a much slower test. It is good for testing the user experience as well. It can make it difficult to spot specific bugs, though.

- What is a mock? What are some things you would mock?
- - A mock is a method in which you replace certain dependencies with objects that you can control to isolate the unit being tested. To isolate the behavior, you replace other objects by mocks that simulate their behavior. You might mock something with an unpredictable value like Math.Random since it would be impossible to guess the results of a function relying on a random number.

- What is continuous integration?
- - Continuous Integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle.

- What is an environment variable and what are they used for?
- - Environment variables provide a flexible and secure way to manage configuration and operational parameters for both system and application-level processes. When building an express application, environment variables are used to configure things such as the database connnection, specifying the port among other settings.

- What is TDD? What are some benefits and drawbacks?
- - Test Driven Development is a method where the test are written prior to the actual code. You would write the tests for the functionality you are attempting, then write the minimum amount of code necessary to make the tests pass. Some benefits include fewer bugs, since the code is being tested continuously. It also leads to improved documentation (as you are very clear about what action each function should perform), more clear and concise code (as you are only writing enough code to make the test pass), easier refactoring (as any edits would have to pass in order for you to include it). Some of the drawbacks are the amount of time it takes, poorly written tests can become an issue as you add more code and refactor, and the code can only be as simple or complex as the codes. It is also a difficult to code this way without much experience in testing frameworks.

- What is the value of using JSONSchema for validation?
- - JSON Schema allows you to make sure the information being submitted fits the criteria to be entered into your database without producing errors. For example, you want to make sure emails or phone numbers are formatted a certain way or that minimum and maximum characters are enforced.

- What are some ways to decide which code to test?

- What does `RETURNING` do in SQL? When would you use it?
- - Returning allows you to dictate which columns are returned from and SQL query.

- What are some differences between Web Sockets and HTTP?

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  - I prefer using Express because of the ease of use and consistency with the front end. I also like the ease at which we can separate the routes and have them included in the app. I also like all the packages available and the ease at which we can download all the packages.
