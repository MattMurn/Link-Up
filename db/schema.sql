CREATE DATABASE rightful_penguin;

USE rightful_penguin;

CREATE TABLE Users(
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE contacts(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NULL,
    where VARCHAR(255) NULL,
    age INT NULL, 
    build VARCHAR(255) NULL,
    gender VARCHAR(255) NULL,
    occupation VARCHAR(255) NULL,
    hair VARCHAR(255) NULL,
    complexion VARCHAR(255) NULL,
    clothing TEXT NULL,
    notes TEXT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE groups(
    id INT NOT NULL AUTO_INCREMENT,
    category VARCHAR(255) NULL,
    PRIMARY KEY(id)
);


CREATE TABLE Questions(
    id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(255) NOT NULL, 
    title VARCHAR(255) NULL, 
    contactCol VARCHAR(255) NULL,  
    PRIMARY KEY(id)

)

CREATE TABLE Answers(
    id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(255) NOT NULL, 
    title VARCHAR(255) NULL, 
    contactCol VARCHAR(255) NULL,  
    questionId INT NOT NULL,
    PRIMARY KEY(id)

)