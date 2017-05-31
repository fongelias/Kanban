# Kanban
A IDB Kanban made for offline use.

![Kanban Dashboard](/screenshots/kanbanDashboard.png)

## Features/Implementation
### UI
The UI uses angular 1.5 with es6, and is made of two components. The page(s) are managed with react-router, in order to accommodate future expansion of the application. The styling is in SCSS, and all compiling is done with Webpack + Babel.

### Database
The database uses local IndexedDB, which is utilized in angular components via a object as a service. The stored object is a board with an array of tasks as a property. Because of this, only a single store is used.

### Offline Use
Offline use is enabled primarily by the service worker caching of assets, combined with the use of IndexedDB as a datasource. This requires a change in the service-worker for each update, but allows the user to visit the site once and use it whenever/wherever.

## Future Direction
The primary anticipated future changes to this project will primarily involve improving the UX. There are clunky aspects of the UI, specifically in adding tasks, as well as issues in some parts of the responsiveness of the application (some inputs have text that is cut off when the screen size changes). Finally, some interactions can be more visually apparent, such as the inputs (when clicked).

An additonal feature that can be added is the storage and viewing of completed tasks. 


