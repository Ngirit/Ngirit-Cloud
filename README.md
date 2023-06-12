# ** Ngirit-Project Backend C23-PR488**
This is the backend repository for ngirit. Inside this there is program RESTFul API and the Authentification and the program to Deploying ngirit using App Engine.
##All the component from this program :
* Node: Node v16.13.1
* npm: 8.1.2
* Google Cloud SQL: 2.1.0 (MYSQL5.7)
* Google Cloud Functions: 1.10.0
## Step #1
### Create Database on MYSQL 
* Create mysql from gcp
* Add database folder ngiritdatabase inside the database
* setup the table 
## Step #2 
### Deploy app using App Engine in gcp
```
# git clone repository
$ git clone https://github.com/Ngirit/Ngirit-Cloud.git
# enter app directory
$ cd Ngirit-Cloud
$ cd backend
```
## Step #3
### Configuration the Database
* Add file .env
* Fill .env folder :
PORT='YourPORT'
DB_PORT='YourDataBasePort'
DB_HOST='YourDataBaseHost'
DB_NAME='YourDBName'
DB_PASS='YourDBPass'
MYSQL_DB='YourFolderInsideMYSQL'

## Step#4
### Install Node and dependencies 
```
# Install the dependencies in node_modules folder
$ npm install
# Install all dependencies
$ npm install ci
# Run 
$ node .
# Run using Nodemon
$ npm run 
```
## Step#5
### Deploy App in App Engine 
* Initialize SDK
$ gcloud init
* Deploy
$ gcloud app deploy



