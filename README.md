## NodeJS Boilerplate @Buggged

### Folder Stricture

```bash
+---public
|       README.md
|
+---src
|   |   app.js
|   |
|   +---api
|   |   |   index.js
|   |   |
|   |   +---controllers
|   |   |       auth.js
|   |   |
|   |   +---middlewares
|   |   |       auth.js
|   |   |
|   |   \---routes
|   |           auth.js
|   |           todo.js
|   |
|   +---config
|   |       index.js
|   |
|   +---helpers
|   |       errorHandlers.js
|   |
|   +---jobs
|   +---loaders
|   |       events.js
|   |       modal.js
|   |       mongoose.js
|   |
|   +---models
|   |       user.js
|   |
|   +---services
|   |       auth.js
|   |
|   \---subscribers
|           email.js
|           index.js
|
\---tests
        README.md
```

Public: For static folder serve  
tests: Where all your tests goes in  
src: Main working directory  
  
src/api: Things related to Rest Api Handelling  
src/api/routes: All routes defined here
src/api/controllers: Validate route parameters and call service to executer business logic  
src/api/middlewares: Route middlewares goes in here
  
src/config: Load .env configs to a constant and export it so we will get intillesence  
  
src/helpers: All system small small helpers functions goes in here  
  
src/jobs: If anything schedulling task needed keep it in jobs  
  
src/loaders: All initial loaders that load with express app goes here  
  
src/models: All database model schemas goes in here  
  
src/services: All business logic goes in here  
  
src/subscribers: All listeners like after register you want to send a welcome message then those send_email type events will be listened in subscribers

### Edited form  
https://github.com/santiq/bulletproof-nodejs
