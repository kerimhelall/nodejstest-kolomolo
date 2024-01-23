# Theory

In this part you need to concisely answer each question.

## General

- What libraries do you consider necessary for any application? Which ones do you use most commonly?

  The choice of libraries depends on on the requirements of each project, but here's a grasp of what is necessary
  Frontend:
      - ReactJS
      - Angular
      - VueJS
      - Typescript.
  Frontend Extras:
    - Redux for content management (Context Api is an alternative)
    - Axios to call apis
    - Fetch API to call apis
    - Webpack for code splitting, asset management and module bundling
  Backend:
      - ExpressJS to create apis (if we are using NodeJS)
      - Django ORM
  DB Libraries:
      - Mongoose (for MongoDB)
  Testing:
      - Jest (for Javascript)
      - Pytest (for Django)
  Extras for code formatting: ESLint & Prettier

  In my past experience i have used ReactJS, VueJS, Typescript, Redux, Axios, ExpressJS, Django ORM, Jest & Pytest.
  
- How would you choose a backend? When would you use HTTP server, serverless functions or Websockets?

  Choosing a backend architecture depends on some factors such as scalability requirements and specific use cases.
  To break it down

   HTTP Servers:
    Can be used for web applications with client server architecture, sufficient for stateless applications but scaling it may require extra
    infracstructure management.
  
  Serverless Functions:
    Provides microservices architecture and is event driven, provides function as service for isolated tasks and it works well with applications whith unpredicted workloads.
    It may not be stuitable for long processes as it has limited execution time
    Example: Lambda functions from AWS

  Websockets:
    We would use websockts for realtime applications such as chat applications & online gaming platforms, where we require live updates.
    it supports bidirectional communication but it can be a bit complex to implement and have to provide ways to eliminate data leaks and memory shortage.

- When starting a new project how would you choose between OOP and Functional Programming?
  
  Choice between OOP and Functional programming depends on the requirements of the project, if the project involves complex relationships between entities, state management,
  and emphasizes encapsulation, inheritance, and polymorphism, OOP may be a suitable choice. On the other hand, if the project prioritizes immutability, pure functions, and a
  declarative style, Functional Programming may be more appropriate. 
  
- What is middleware useful for?

  A middleware is a layer which runs before a specific process, it facilitates data exchange between different components.
  it includes security featuers such as encryption, authentication before performing a specific process.
  it can help with load balancing in order to decide which server should this process run at.

  A use case i recently implemented for middlewares was the params were compressed so i added a middleware for get requests to decompress the params so the function can run
  without caring about decompressing the params and this also provided code reusability.

## TypeScript and NodeJS

- Explain what are prototypes and how does class inheritance make use of them?

  prototypes in typescript are objects associated with classes that enable inheritance. Class inheritance uses prototypes to link classes and create a chain,
  allowing instances to inherit properties and methods from their class and its ancestors.
  
- What is type narrowing and how does it work?

  it is the process of refining the type of a variable within a code block, typically through conditional statements or checks.
  it helps the TypeScript compiler understand more specific types based on certain conditions, improving type accuracy in code.
  
- How does NodeJS provide asynchronism and concurrency?

  Through its event-driven, non-blocking I/O model. It operates on a single-threaded event loop, efficiently handling asynchronous tasks by offloading I/O
  operations and executing non-blocking code. Callback functions are commonly used to manage the completion of asynchronous operations, and Node.js supports
  promises and the async/await syntax for a more readable approach.

- What is a Promise?

  it is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.

- What build tools would you use when deploying code to the cloud?

  At my current company we are using Jenkins, previous one we were using Gitlab CI/CD
  
## AWS

- Name AWS services that can be used for asynchronous communication. What are the differences between them?

  Amazon Simple Queue Service (SQS) and Amazon Simple Notification Service (SNS)
  SQS is a message queue service that decouples the components of a cloud application, while SNS is a pub/sub messaging service that enables message delivery to multiple subscribers.
  SQS is ideal for message storage and processing, ensuring reliable and scalable communication between distributed components, while SNS is suitable for pushing messages to multiple
  endpoints, such as email, HTTP, or Lambda functions.
  
- What tools do you use to monitor the application?
    Amazon CloudWatch, AWS CloudTrail, Amazon CloudWatch Logs, AWS X-Ray, AWS Config, & AWS Health.
  
- What are Secondary Indexes in DynamoDB useful for?

  For efficiently querying and retrieving data based on attributes other than the primary key. They enable optimized access patterns, reducing the need for
  full table scans and improving query performance.
