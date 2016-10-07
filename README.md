# sailsjs-react-redux

A default template for an app using SailsJS with React and Redux.

## Installation

First install all dependencies needed with the following command:

```
$ npm install
```

After installing all dependencies, compile the javascript files using:

```
$ webpack
```

Start the start with:

```
$ npm start
```

Now if you access localhost you must see a page with a message "Hello, World!".


## Configuration

### Database Connection

Open `config/connections.js` file and edit **_local_mysql_** connection information. If you create a new connection with a different name or if you rename the connection name, you also need to update **_connection_** entry under `config/models.js` file.

### Migrate Type

To edit the type of migrate system, update **_migrate_** entry under `config/models.js`. 
#### Available options:
```
  1. safe  - never auto-migrate my database(s). I will do it myself (by hand)
  2. alter - auto-migrate, but attempt to keep my existing data (experimental)
  3. drop  - wipe/drop ALL my data and rebuild models every time I lift Sails
```
Default: *safe*
