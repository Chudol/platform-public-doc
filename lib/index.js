/**
  * @module PlatformPublicAPILib
  *
  * ### Authorization - Every endpoint needs header parameter x-api-key , which is SECRET KEY of
  * platform.  ### Additionally Data - Some api requests accepting query param "additionally_data",
  * which is string of additionally data you want to pull from API divided by comma.    ##### For
  * Example:  - Get User request is pulling user data, Online Time, Purchased courses, finished and
  * in progress lessons. - If you want additionally data, like: "courses analytics, lessons
  * analytics, subscriptions", then you can send query param ``` additionally_data ``` with content:
  * ```courses,lessons,subscriptions``` and API will send you with user data also Course Analytics,
  * Lessons Analytics and subscriptions of user.   - In description at every endpoint you will
  * find what additionally data you can ask API  ### Pagination - In List endpoints api sends
  * object with 2 props. ```items``` and ```pagination```   > items is an array of items (like
  * users, courses)   > pagination is object, which contains totalItems (total items for ALL pages),
  * totalPages, page (page of items), limit (number of items for one page)   - Page starting with
  * 0. It means, that first page is 0 and second page is 1
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const UsersController = require('./Controllers/UsersController');
const CoursesController = require('./Controllers/CoursesController');
const MiscController = require('./Controllers/MiscController');
const M200GetUsers = require('./Models/M200GetUsers');
const Item = require('./Models/Item');
const Course = require('./Models/Course');
const Pagination = require('./Models/Pagination');
const M200GetUser = require('./Models/M200GetUser');
const FinishedLesson = require('./Models/FinishedLesson');
const InProgressLesson = require('./Models/InProgressLesson');
const PurchasedCourse = require('./Models/PurchasedCourse');
const PurchasedLesson = require('./Models/PurchasedLesson');
const Course1 = require('./Models/Course1');
const ModulesAnalytic = require('./Models/ModulesAnalytic');
const LessonsAnalytic = require('./Models/LessonsAnalytic');
const Order = require('./Models/Order');
const Course2 = require('./Models/Course2');
const Checkout = require('./Models/Checkout');
const Quize = require('./Models/Quize');
const Result = require('./Models/Result');
const Reward = require('./Models/Reward');
const Subscription = require('./Models/Subscription');
const Membership = require('./Models/Membership');
const Period = require('./Models/Period');
const EndedSubscription = require('./Models/EndedSubscription');
const Errors = require('./Models/Errors');
const CreateUserRequest = require('./Models/CreateUserRequest');
const Errors2 = require('./Models/Errors2');
const M200CreateUser = require('./Models/M200CreateUser');
const AssignCoursesToUserRequest = require('./Models/AssignCoursesToUserRequest');
const M200AssignCourseToUser = require('./Models/M200AssignCourseToUser');
const UpdateUserRequest = require('./Models/UpdateUserRequest');
const Errors4 = require('./Models/Errors4');
const M200UpdateUser = require('./Models/M200UpdateUser');
const M200DeleteUser = require('./Models/M200DeleteUser');
const M200GetCourses = require('./Models/M200GetCourses');
const Item1 = require('./Models/Item1');
const Membership2 = require('./Models/Membership2');
const M200PollActivityDatum = require('./Models/M200PollActivityDatum');
const Lesson = require('./Models/Lesson');
const User = require('./Models/User');
const M403UserNotFoundException = require('./Exceptions/M403UserNotFoundException');
const M403ValidationErrorException = require('./Exceptions/M403ValidationErrorException');
const M500NonValidCourseIDException = require('./Exceptions/M500NonValidCourseIDException');
const M403ValidationError2Exception = require('./Exceptions/M403ValidationError2Exception');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of PlatformPublicAPILib
    Configuration,
    Environments,
    // controllers of PlatformPublicAPILib
    UsersController,
    CoursesController,
    MiscController,
    // models of PlatformPublicAPILib
    M200GetUsers,
    Item,
    Course,
    Pagination,
    M200GetUser,
    FinishedLesson,
    InProgressLesson,
    PurchasedCourse,
    PurchasedLesson,
    Course1,
    ModulesAnalytic,
    LessonsAnalytic,
    Order,
    Course2,
    Checkout,
    Quize,
    Result,
    Reward,
    Subscription,
    Membership,
    Period,
    EndedSubscription,
    Errors,
    CreateUserRequest,
    Errors2,
    M200CreateUser,
    AssignCoursesToUserRequest,
    M200AssignCourseToUser,
    UpdateUserRequest,
    Errors4,
    M200UpdateUser,
    M200DeleteUser,
    M200GetCourses,
    Item1,
    Membership2,
    M200PollActivityDatum,
    Lesson,
    User,
    // exceptions of PlatformPublicAPILib
    M403UserNotFoundException,
    M403ValidationErrorException,
    M500NonValidCourseIDException,
    M403ValidationError2Exception,
    APIException,
};

module.exports = initializer;
