-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);

insert into "products" ("productName", "productDesc", "team")
values 
('Los Angeles Dodgers New Era Stone/Black Custom Side Patch 59FIFTY Fitted Hat',
'Represent your Los Angeles Dodgers with this exclusive drop. One of a kind custom design makes this New Era 59FIFTY fitted hat a must have.',
'Los Angeles Dodgers'),
('Los Angeles Dodgers New Era Cream NWA Custom Side Patch 59FIFTY Fitted Hat',
'Represent your Los Angeles Dodgers with this exclusive drop. Cream top, black bill,  metallic red stitching. This New Era 59FIFTY fitted hat a must have. Clean. Classic. A hat that is stylish with anything.',
'Los Angeles Dodgers'),
('San Francisco Giants New Era Cream PG Custom Side Patch 59FIFTY Fitted Hat',
'Represent your San Francisco Giants with this exclusive drop. Cream top, black bill,  metallic gold detailing. This New Era 59FIFTY fitted hat a must have. Clean. Classic. A hat that is stylish with anything.',
'San Francisco Giants'),
('Oakland Athletics New Era 2023 Father''s Day Side Patch 59FIFTY Fitted Hat',
'Your favorite Oakland Athletics Father''s Day Hat is back! Team color hat with light blue makes this hat different then prior years and with a side patch for modern style. Show your Dad support with this special event hat.',
'Oakland Athletics'),
('Los Angeles Dodgers New Era Custom Maroon Jackie Robinson Side Patch 59FIFTY Fitted Hat',
'Represent the Dodgers with this Custom Jackie Robinson Side Patch New Era Fitted Hat. This hat features Maroon top, maroon bill, gray undervisor and has the pink/metallic gold stitching on the side patch. One of a kind custom design makes this New Era men''s 59FIFTY fitted hat a must have.',
'Los Angeles Dodgers'),
('St. Louis Cardinals New Era Brown Custom Corduroy Brim Side Patch 59FIFTY Fitted Hat',
'Represent your St. Louis Cardinals with this exclusive drop. Brown top, corduroy black bill, metallic gold detailing, corduroy button. This New Era Men''s 59FIFTY fitted hat a must have. Clean. Classic. A hat that is stylish with anything.',
'St. Louis Cardinals'),
('Chicago White Sox Watercolor Floral 59FIFTY Fitted',
'The Chicago White Sox Watercolor Floral 59FIFTY Fitted Cap features an embroidered White Sox logo surrounded by flower and bee details at the front panels and an MLB Batterman logo at the rear. Additional details include a floral undervisor.',
'Chicago White Sox'),
('Seattle Mariners Florida Marlins World Series Black Wool 59FIFTY Fitted',
'Celebrating their 1997 World Series victory, the Florida Marlins World Series 59FIFTY Fitted Cap features a 100% Wool woven fabrication with an embroidered Marlins logo at the front panels and a 1997 World Series Side Patch at the left-wear side with an MLB Batterman logo at the rear.',
'Seattle Mariners');

insert into "prices" ("productId", "price")
values
('1', '$45.99'),
('2','$49.99'),
('3','$49.99'),
('4','$42.99'),
('5','$48.99'),
('6','$49.99'),
('7','$52.99'),
('8','$39.99');

insert into "productSizes" ("productId", "sizes")
values
('1', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('2', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('3', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('4', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('5', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('6', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('7', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('8', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}');

insert into "productPhotos" ("productId", "photoUrl")
values
('8', '{ "urls": [
  "/images/marlins1.webp",
  "/images/marlins2.webp"
  ]}'),
('7', '{ "urls": [
  "/images/sox1.jpg",
  "/images/sox2.jpg",
  "/images/sox3.jpg"
  ]}'),
('6', '{ "urls": [
  "/images/cards1.webp",
  "/images/cards2.webp"
  ]}'),
('5', '{ "urls": [
  "/images/jackie1.png",
  "/images/jackie2.png",
  "/images/jackie3.png"
  ]}'),
('4', '{ "urls": [
  "/images/ath1.png",
  "/images/ath2.png",
  "/images/ath3.png"
  ]}'),
('3', '{ "urls": [
  "/images/giants1.avif",
  "/images/giants2.avif",
  "/images/giants3.avif"
  ]}'),
('2', '{ "urls": [
  "/images/dodgersB1.png",
  "/images/dodgersB2.png",
  "/images/dodgersB3.png"
  ]}'),
('1', '{ "urls": [
  "/images/dodgers1.png",
  "/images/dodgers2.png",
  "/images/dodgers3.png"
  ]}');
