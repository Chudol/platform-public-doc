# Getting started

### Authorization
- Every endpoint needs header parameter x-api-key , which is SECRET KEY of platform.

### Additionally Data
- Some api requests accepting query param "additionally_data", which is string of additionally data you want to pull from API divided by comma.  

##### For Example: 
- Get User request is pulling user data, Online Time, Purchased courses, finished and in progress lessons.
- If you want additionally data, like: "courses analytics, lessons analytics, subscriptions", then you can send query param ``` additionally_data ``` with content: ```courses,lessons,subscriptions``` and API will send you with user data also Course Analytics, Lessons Analytics and subscriptions of user.  
- In description at every endpoint you will find what additionally data you can ask API

### Pagination
- In List endpoints api sends object with 2 props. ```items``` and ```pagination```  
> items is an array of items (like users, courses)  
> pagination is object, which contains totalItems (total items for ALL pages), totalPages, page (page of items), limit (number of items for one page)  
- Page starting with 0. It means, that first page is 0 and second page is 1


## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Platform%20-%20Public%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Platform%20-%20Public%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `PlatformPublicAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Platform%20-%20Public%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Platform%20-%20Public%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Platform%20-%20Public%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Platform%20-%20Public%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Platform - Public APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Platform%20-%20Public%20APIController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [UsersController](#users_controller)
* [CoursesController](#courses_controller)
* [MiscController](#misc_controller)

## <a name="users_controller"></a>![Class: ](https://apidocs.io/img/class.png ".UsersController") UsersController

### Get singleton instance

The singleton instance of the ``` UsersController ``` class can be accessed from the API Client.

```javascript
var controller = lib.UsersController;
```

### <a name="get_users"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUsers") getUsers

> Get users with pagination
> 
> #### Additionally Data
> 
> ``` courses ```: Courses analytics (Progress, number of lessons, lessons which user started)  
> ``` lifeTimeValue ```: The sum of all orders invoices
> 
> #### Response Data
> 
> ```json
> {
>     "items": [
>         {
>             "_id": Id of User
>             "firstName": First Name
>             "lastName": Last Name
>             "createdAt": Registration Date
>             "email": Email
>             "courses": [
>                 {
>                     "_id": Id of course
>                     "name": Name of course
>                     "progress": Percentage progress
>                     "startAt": Date, when user started course
>                     "userLessonsStarted": Lessons, that user started
>                     "lessonsCount": Total lessons in the course
>                 }
>             ]
>             "lifeTimeValue": The sum of all orders invoices
>         }
>     ]
>     "pagination": {
>         "totalItems": Total items for all pages
>         "totalPages": Total pages
>         "page": Page number (Starts with 0)
>         "limit": Items for one page
>         "skip": -
>     }
> }
> ```


```javascript
function getUsers(page, limit, name, email, additionallyData, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Required ```  | TODO: Add a parameter description |
| name |  ``` Required ```  | TODO: Add a parameter description |
| email |  ``` Required ```  | TODO: Add a parameter description |
| additionallyData |  ``` Required ```  | TODO: Add a parameter description |
| xApiKey |  ``` Required ```  | Secret API KEY |



#### Example Usage

```javascript

    var page = 231;
    var limit = 231;
    var name = 'name';
    var email = 'email';
    var additionallyData = additionally_data;
    var xApiKey = 'x-api-key';

    controller.getUsers(page, limit, name, email, additionallyData, xApiKey, function(error, response, context) {

    
    });
```



### <a name="get_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.getUser") getUser

> Get user by ID
> 
> #### Additionally Data
> 
> ``` courses ```: Courses analytics (Progress, number of lessons, lessons which user started)  
> ``` modules ```: Modules Analytics for Courses Analytics (Requires to pull courses in Additionally Data)  
> ``` lessons ```: Lessons Analytics for Modules Analytics (Requires to pull courses and modules in Additionally Data)  
> ``` orders ```: The sum of all orders invoices , total numbers of all invoices and all orders data  
> ``` quizes ```: Results of finished quizes  
> ``` subscriptions ```: Active and Ended subscriptions
> 
> ##### In first item of modulesAnalytics array are lessons which has NO MODULE and their progress
> 
> #### Response Data
> 
> ```json
> {
>     "_id": ID of user
>     "firstName": First Name
>     "lastName": Last Name
>     "createdAt": Registration date
>     "email": Email
>     "credits": Total amount of credits
>     "finishedLessons": [
>         {
>             "_id": ID of lesson
>             "name": Lesson name
>         }
>     ]
>     "inProgressLessons": [
>         {
>             "_id": ID of lesson
>             "name": Lesson name
>         }
>     ]
>     "purchasedCourses": [
>         {
>             "_id": ID of course
>             "name": Course name
>         }
>     ]
>     "purchasedLessons": [
>         {
>             "_id": ID of lesson
>             "name": Lesson name
>         }
>     ]
>     "loginSessions": Total login sessions
>     "totalLoginTime": Total active time
>     "averageLoginTime": Average active time
>     "courses": [
>         {
>             "_id": Id of course
>             "name": Name of course
>             "progress": Percentage progress
>             "startAt": Date, when user started course
>             "userLessonsStarted": Lessons, that user started
>             "lessonsCount": Total lessons in the course
>             "modulesAnalytics": [
>                 {
>                     "progress": Progress of lessons with NO MODULE
>                     "lessonsAnalytics": [
>                         {
>                             "_id": ID of lesson
>                             "name": Lesson name
>                             "notStartedYet": Flag, if user started this lesson (Boolean)
>                             "isInProgress": Flag, if user has lesson in progress (Boolean)
>                             "isFinished": Flag, if user finished this lesson (Boolean)
>                         }
>                     ]
>                 }
>                 {
>                     "_id": ID of module
>                     "name": Module Name
>                     "progress": Progress of module
>                     "lessonsAnalytics": [
>                         {
>                             "_id": ID of lesson
>                             "name": Lesson name
>                             "notStartedYet": Flag, if user started this lesson (Boolean)
>                             "isInProgress": Flag, if user has lesson in progress (Boolean)
>                             "isFinished": Flag, if user finished this lesson (Boolean)
>                         }
>                     ]
>                 }
>             ]
>         }
>     ]
>     "totalPurchases": Total amount of all orders (Initial + recurring)
>     "lifeTimeValue": Total amount of spend money on platform
>     "orders": [
>         {
>             "_id": Id of order
>             "vs": Variable Symbol
>             "price": Price
>             "createdAt": Date of payment
>             "course": {
>                 "_id": Id of course paid
>                 "name": Name of course paid
>             }
>         }
>         {
>             "_id": Id of order
>             "vs": Variable Symbol
>             "price": Price
>             "createdAt": Date of payment
>             "checkout": {
>                 "_id": Id of checkout paid
>                 "name": Name of checkout paid
>             }
>         }
>     ]
>     "quizes": [
>         {
>             "_id": Id of quiz
>             "title": Quiz Title
>             "finishedAt": Date of quiz finish
>             "points": Points acquired in quiz
>             "results": [
>                 {
>                     "question": Question Text (String)
>                     "answer": Answer (String)
>                 }
>             ]
>             "reward": {
>                 "title": Title of reward
>                 "minPoints": Minimum points for reward
>                 "maxPoints": Maximum points for reward
>                 "creditsReward": Credits rewarded to user
>                 "courses": [
>                     {
>                         "_id": Id of course rewarded to user
>                         "name": Name of course rewarded to user
>                     }
>                 ]
>             }
>         }
>     ]
>     "subscriptions": [
>         {
>             "membershipStarted": Date of membership start
>             "membershipTo": Date of membership end (Or date of next payment)
>             "active": Flag, if subscriptions is still active (Boolean)
>             "refunded": Flag, if subscriptions is refunded (Boolean)
>             "isPastDue": Flag, if subscriptions is Past Due (Boolean)
>             "cancelled": Flag, if subscriptions is cancelled (Boolean)
>             "membership": {
>                 "name": Name of subscription membership
>             }
>             "period": {
>                 "name": Name of subscription membership period
>             }
>         }
>     ]
>     "endedSubscriptions": [
>         {
>             "membershipStarted": Date of membership start
>             "membershipTo": Date of membership ended
>             "active": false
>             "refunded": Flag, if subscriptions is refunded (Boolean)
>             "isPastDue": Flag, if subscriptions is Past Due (Boolean)
>             "cancelled": Flag, if subscriptions is cancelled (Boolean)
>             "membership": {
>                 "name": Name of subscription membership
>             }
>             "period": {
>                 "name": Name of subscription membership period
>             }
>         }
>     ]
> }
> ```


```javascript
function getUser(additionallyData, userId, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| additionallyData |  ``` Required ```  | Additionally data for pull, separated by comma |
| userId |  ``` Required ```  | TODO: Add a parameter description |
| xApiKey |  ``` Required ```  | Secret API KEY |



#### Example Usage

```javascript

    var additionallyData = courses,modules,lessons,orders,quizes,subscriptions;
    var userId = '5fc8b3183272c100145c82e5';
    var xApiKey = '{SECRET_KEY}';

    controller.getUser(additionallyData, userId, xApiKey, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden |




### <a name="create_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.createUser") createUser

> #### Request Body (JSON)
> 
> ```json
> {
>     "firstName": First Name *Required
>     "lastName": Last Name *Required
>     "email": Email *Required
>     "password": Password (If null, password will be generated and sent to user's email)
>     "role": Role ID (Default is USER ROLE)
>     "credits": Total amount of credits
>     "invoicing": {
>         "name": Company Name
>         "vatNo": VAT Number
>         "street": Invoicing Street
>         "city": Invoicing City
>         "countryCode": Incoicing Country Code
>         "zipcode": Invoicing Zip Code
>     }
> }
> ```


```javascript
function createUser(xApiKey, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| xApiKey |  ``` Required ```  | Secret API KEY |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var xApiKey = '{SECRET_KEY}';
    var contentType = 'application/json';
    var body = new CreateUserRequest({
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe2@domain.com"
});

    controller.createUser(xApiKey, contentType, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden |




### <a name="assign_courses_to_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.assignCoursesToUser") assignCoursesToUser

> - Add course or courses to user purchases.  
> - User will get Lifetime access to this course/s
> - Response is Array of users purchased courses
> 
> #### Request Body (JSON)
> ```json
> {
>     "courses": [String/Array] Course ID or Courses IDs Array *Required
> }
> ```


```javascript
function assignCoursesToUser(userId, xApiKey, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |
| xApiKey |  ``` Required ```  | Secret API KEY |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = '6047bf67cc31abe60383996b';
    var xApiKey = '{SECRET_KEY}';
    var contentType = 'application/json';
    var body = new AssignCoursesToUserRequest({
  "courses": [
    "5f9bf6510de1cf1618c88faf",
    "5f9bf6e30de1cf1618c88fb1"
  ]
});

    controller.assignCoursesToUser(userId, xApiKey, contentType, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 500 | Internal Server Error |




### <a name="update_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.updateUser") updateUser

> #### Request Body (JSON)
> 
> ```json
> {
>     "firstName": First Name
>     "lastName": Last Name
>     "email": Email
>     "password": Password (If null, password will be generated and sent to user's email)
>     "role": Role ID (Default is USER ROLE)
>     "credits": Total amount of credits
>     "invoicing": {
>         "name": Company Name
>         "vatNo": VAT Number
>         "street": Invoicing Street
>         "city": Invoicing City
>         "countryCode": Incoicing Country Code
>         "zipcode": Invoicing Zip Code
>     }
> }
> ```


```javascript
function updateUser(userId, xApiKey, contentType, body, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |
| xApiKey |  ``` Required ```  | Secret API KEY |
| contentType |  ``` Required ```  | TODO: Add a parameter description |
| body |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = '603519eeef9afa0f890abfc1';
    var xApiKey = '{SECRET_KEY}';
    var contentType = 'application/json';
    var body = new UpdateUserRequest({
  "firstName": "Jack",
  "password": "1234"
});

    controller.updateUser(userId, xApiKey, contentType, body, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden |




### <a name="delete_user"></a>![Method: ](https://apidocs.io/img/method.png ".UsersController.deleteUser") deleteUser

> It's impossible to delete user with orders. If you want delete user with orders, contact support
> 
> ---
> 
> Deleting user also delete user's   
> - Comments  
> - Threads  
> - Lessons and bonuses notes  
> - Subscriptions
> - Quiz  
> - Course Analytics


```javascript
function deleteUser(userId, xApiKey, contentType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| userId |  ``` Required ```  | TODO: Add a parameter description |
| xApiKey |  ``` Required ```  | Secret API KEY |
| contentType |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var userId = '6047bfb2cc31abe60383996c';
    var xApiKey = '{SECRET_KEY}';
    var contentType = 'application/json';

    controller.deleteUser(userId, xApiKey, contentType, function(error, response, context) {

    
    });
```

#### Errors

| Error Code | Error Description |
|------------|-------------------|
| 403 | Forbidden |




[Back to List of Controllers](#list_of_controllers)

## <a name="courses_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CoursesController") CoursesController

### Get singleton instance

The singleton instance of the ``` CoursesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CoursesController;
```

### <a name="get_courses"></a>![Method: ](https://apidocs.io/img/method.png ".CoursesController.getCourses") getCourses

> Get courses with pagination
> 
> #### Additionally Data
> 
> ``` membersData ```: The sum of members which paid course and members which have access to course via membership  
> ``` memberships ```: Memberships which contains this course
> 
> #### Response Data
> 
> ```json
> {
>     "items": [
>         {
>             "_id": ID of course
>             "name": Course name
>             "hasCheckout": Flag, if course can be bought separately (Boolean)
>             "price": Default price of course,
>             "createdAt": Date of course creation
>             "description": Description (HTML)
>             "membersPaidCourse": Members, which bought course separately, or has been given to them from quiz or admin
>             "membersInCourseMembership":Members, which has access to course from membership
>             "totalMembers": Total sum of membersPaidCourse and membersInCourseMembership
>             "memberships: [
>                 {
>                     "_id": ID of membership
>                     "name": Name of Membership
>                 }
>         }
>     ]
>     "pagination": {
>         "totalItems": Total items for all pages
>         "totalPages": Total pages
>         "page": Page number (Starts with 0)
>         "limit": Items for one page
>         "skip": -
>     }
> }
> ```


```javascript
function getCourses(page, limit, name, additionallyData, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| page |  ``` Required ```  | TODO: Add a parameter description |
| limit |  ``` Required ```  | TODO: Add a parameter description |
| name |  ``` Required ```  | TODO: Add a parameter description |
| additionallyData |  ``` Required ```  | TODO: Add a parameter description |
| xApiKey |  ``` Required ```  | Secret API KEY |



#### Example Usage

```javascript

    var page = 0;
    var limit = 10;
    var name = 'cour';
    var additionallyData = membersData,memberships;
    var xApiKey = '{SECRET_KEY}';

    controller.getCourses(page, limit, name, additionallyData, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="misc_controller"></a>![Class: ](https://apidocs.io/img/class.png ".MiscController") MiscController

### Get singleton instance

The singleton instance of the ``` MiscController ``` class can be accessed from the API Client.

```javascript
var controller = lib.MiscController;
```

### <a name="poll_activity_data"></a>![Method: ](https://apidocs.io/img/method.png ".MiscController.pollActivityData") pollActivityData

> - Endpoint for downloading activitiy data like "Finished Course", "Finished Lesson", etc.  
> - Endpoint will download all data of selected trigger name for last 1 hour and mark them as "POLLED", so on next call this data will be ignored
> 
> #### How to use  
> - Endpoint accepting parameter **triggerName** which can be one of this:     
> <br/>
> 
> **finish-course**: poll data about users and course they finished  
> **finish-lesson**: poll data about users and lesson they finished
> 
> <br/><br/>
> - Endpoint also accepting query, when you can select which course or lesson activity you want to get  
> <br />
> **course**: Course ID for finish-course
> **lesson**: Lesson ID for finish-lesson


```javascript
function pollActivityData(triggerName, xApiKey, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| triggerName |  ``` Required ```  | TODO: Add a parameter description |
| xApiKey |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var triggerName = 'finish-course';
    var xApiKey = '{SECRET_KEY}';

    controller.pollActivityData(triggerName, xApiKey, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



