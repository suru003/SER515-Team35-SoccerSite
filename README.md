# Soccer-Site
SER515 Fall 2021 academic project

Members:

-- Sahithi Boddupalli

-- Shantanu Girishkumar Ojha

-- Divya Poluri

-- Jennifer Sarfo

-- Suraj Madhukar Suryawanshi



Taiga: https://tree.taiga.io/project/sahithiboddupalli-ser-515-soccer-tournament-website/timeline

Google Drive: https://drive.google.com/drive/folders/14bNzrYQ8KBoE_8aPcwUW2mgH3np70yU5?usp=sharing
-----------------------------------------------------------------------------------------------

```
**App uses Java 17**
Install Postgres
psql -U <username> 

CREATE DATABASE soccersite;
CREATE USER test WITH PASSWORD 'test';
ALTER USER test WITH SUPERUSER;

# Sample test: INSERT INTO coach VALUES('test1','abc','xyz','jsba.com','qwerty');
```
**To check**
```
psql -U test soccersite

To send requests to server: http://localhost:8090/coaches/<method_names>
```

```
**App uses Angular 11**
- Install angular material 
ng add @angular/material
- Install angular flex-layout and cdk
npm i @angular/flex-layout @angular/cdk --save

-( I had to open command promt as administrator to do the following command, it might not be needed on your end)
npm audit fix -f

-To generate a service
ng g s services\coach --skipTests=true
```

Frontend
The frontend was developed from scratch using components and elements from the Bootstrap framework and icons from fontawesome. 




