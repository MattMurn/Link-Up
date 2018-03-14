CREATE DATABASE rightful_penguin;

USE rightful_penguin;

CREATE TABLE user(
    id INT NOT NULL AUTO_INCREMENT,
    user_name TEXT NOT NULL,
    user_phone INT NOT NULL,
    user_email TEXT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE contacts(
    id INT NOT NULL AUTO_INCREMENT,
    contact_name TEXT NULL,
    contact_where TEXT NULL,
    contact_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    contact_attr TEXT NULL,
    contact_geo TEXT NULL,
    contact_notes TEXT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE groups(
    id INT NOT NULL AUTO_INCREMENT,
    group_name TEXT NOT NULL,
    group_size INT NOT NULL, 
    group_notes TEXT NULL,
    PRIMARY KEY(id)
);
