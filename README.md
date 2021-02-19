# inSight
Front-end application that consumes inSightAPI.

### Prerequisites

```
Node
inSightAPI

```

### Deploy

Clone this project.
Edit the Api.js with the correct URL to the inSightAPI.
Execute the following commands:

```
1) npm install
2) npm start

```
After that you should have a page in your browser running the application.
Example: http://localhost:3000/

### Application
At the home page you should see a DataTable with the Sol Id and its average temperature.
To see a more detailed information about the Sol you can double click a row to go to the about page.
At the about page you will have the Sol Id, Minimun temperature, Average temperature, High temperature and the last update time.
The home page will refresh every 5minutes to get the latest data from the API.

### Build with

* [React](https://reactjs.org/)
* [inSightAPI](https://github.com/EloisaMedrado/inSightAPI/)

### Author

* **Eloisa Medrado** -  [EloisaMedrado](https://github.com/EloisaMedrado)
