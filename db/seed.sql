INSERT INTO Questions(type, title, contactCol)
VALUES
('textShort', 'Enter a Location', 'location'),
('textShort', 'What kind of link was this', 'category'),
('textShort', 'Enter a Profession', 'profession'),
('selectOne', 'Gender', 'gender'), ('selectOne', 'Age', 'age'),
('selectOne', 'Complexion', 'complexion'),
('selectOne', 'Build', 'build'),('selectOne', 'Height', 'height'), 
('selectOne', 'Hair', 'hair'), ('textLong', 'Clothing', 'clothing'),
('textLong', 'Notes', 'notes'); 

INSERT INTO Answers(type, text, contactCol, questionId)
VALUES ('textShort', '','name', 1),
('textShort', 'Where did you meet this person?', 'location', 2),
('selectOne', 'Professional', 'category', 3), ('selectOne', 'Personal', 'category', 3),
('textShort', 'What was their profession', 'profession', 4),
('selectOne', 'Male', 'gender', 5), ('selectOne', 'Female', 'gender', 5),
('selectOne', '0-18: young', 'age', 6),('selectOne', '19-39: not so young', 'age', 6),
('selectOne', '65+: ooooooooold', 'age', 6), ('selectOne', 'light', 'complexion', 7),
('selectOne', 'medium-light', 'complexion', 7), ('selectOne', 'medium','complexion', 7),
('selectOne', 'medium-dark', 'complexion', 7), ('selectOne', 'dark', 'complexion', 7),
('selectOne', 'skinny', 'build', 8), ('selectOne', 'low key thicc', 'build', 8),
('selectOne', 'high key thicc', 'build', 8),('selectOne', 'LARGE', 'build', 8),
('selectOne', 'tall', 'height', 9), ('selectOne', 'medium', 'height', 9),
('selectOne', 'small', 'height', 9),('selectOne', 'black', 'hair', 10),
('selectOne', 'brown', 'hair', 10), ('selectOne', 'gray', 'hair', 10),
('selectOne', 'blonde', 'hair', 10),('selectOne', 'white', 'hair', 10),
('textLong', 'How would you describe their clothing', 'clothing', 11),
('textLong', 'What did you talk about? An interesting story?', 'notes', 12);


INSERT INTO Contacts(firstName, lastName, loc, notes);
VALUES("Conner","McGregor", "Las Vegas", "This guys should stick to MMA");