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
('Atlanta Braves ''Neapolitan Ice Cream'' 59FIFTY Fitted',
'The New Era 59FIFTY® is the originator of the true fitted. It''s our flagship style and an icon in sport and street culture thanks to its status as the official on-field cap of the MLB.',
'Atlanta Braves'),
('Seattle Mariners Florida Marlins World Series Black Wool 59FIFTY Fitted',
'Celebrating their 1997 World Series victory, the Florida Marlins World Series 59FIFTY Fitted Cap features a 100% Wool woven fabrication with an embroidered Marlins logo at the front panels and a 1997 World Series Side Patch at the left-wear side with an MLB Batterman logo at the rear.',
'Seattle Mariners'),
('River City Rumblers ''Batter Up'' 59FIFTY Fitted',
'The New Era 59FIFTY® is the originator of the true fitted. It''s our flagship style and an icon in sport and street culture thanks to its status as the official on-field cap of the MLB. Rep the River City Rumblers with this exclusive cap',
'River City Rumblers'),
('Jon Stan Cherubs Seattle Mariners 59FIFTY Fitted',
'The Jon Stan X Seattle Mariners Cherubs 59FIFTY Fitted Cap features embroidered cherub details surrounding a Mariners logo and New Era pin at the front panels with a matching MLB Batterman logo at the rear. Additional details include a Jon Stan wordmark above the New Era flag at the left-wear side, a 20th anniversary patch at the right-wear side, and a gray undervisor.',
'Seattle Mariners'),
('Brooklyn Royal Giants NLB Sandbag Cord Fitted Ballcap',
'Featuring a two-tone construction with vintage white corduroy crown and brown sueded visor, the Brooklyn Royal Giants Sandbag Cord Vintage Inspired fitted collection takes some of our favorite teams and their logos, and recontextualizes them to create fashion pieces that will shine in your wardrobe. The contemporary high crown structured fitted cap features raised embroidery front logo with embroidered side patch and rear league logo.',
'Brooklyn Royal Giants'),
('Just Caps Chrome Black 59FIFTY Fitted',
'The Just Caps Chrome Black San Diego Padres 59FIFTY Fitted Cap features an embroidered Padres logo at the front panels with a matching MLB Batterman logo at the rear. Additional details include a 40th anniversary patch at the right-wear side, chrome white crown, black visor, and dark green undervisor.',
'San Diego Padres'),
('Los Angeles Dodgers Comic Cloud 59FIFTY Fitted',
'Introducing a Los Angeles Dodgers cloud-themed aesthetic, the silhouette is composed of polyester and features woven eyelets at the crown for a breathable touch. An embroidered cloud-themed logo is seen on the face, while the flat brim displays a blue hue underneath. An embroidered World Series patch at the right makes an additional statement. The embroidered New Era flag at the left and MLB Batterman logo at the rear tie together the look.',
'Los Angeles Dodgers'),
('New York Yankees World Series Side Patch 59FIFTY Fitted',
'The New York Yankees World Series Side Patch 59FIFTY Fitted Cap features an embroidered Yankees logo at the front panels with a World Series Side patch at the left-wear side and a team color MLB Batterman logo at the rear. Additional details include a gray undervisor.',
'New York Yankees');

insert into "prices" ("productId", "price")
values
('1','45.99'),
('2','49.99'),
('3','49.99'),
('4','42.99'),
('5','48.99'),
('6','49.99'),
('7','52.99'),
('8','49.99'),
('9','39.99'),
('10','41.99'),
('11','65.99'),
('12','51.99'),
('13','47.99'),
('14','60.00'),
('15','47.99');

insert into "productSizes" ("productId", "sizes")
values
('1', '{ "sizes": [
  "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('2', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 1/2", "7 5/8"
  ]}'),
('3', '{ "sizes": [
  "7", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('4', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 5/8", "7 3/4"
  ]}'),
('5', '{ "sizes": [
  "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('6', '{ "sizes": [
  "7", "7 1/4", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('7', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 1/2", "7 3/4", "8"
  ]}'),
('8', '{ "sizes": [
  "7", "7 1/4", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('9', '{ "sizes": [
  "7", "7 1/4", "7 1/2", "7 5/8", "7 3/4", "8"
  ]}'),
('10', '{ "sizes": [
  "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('11', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4"
  ]}'),
('12', '{ "sizes": [
  "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4", "8"
  ]}'),
('13', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 1/2", "7 5/8", "7 3/4", "8"
  ]}'),
('14', '{ "sizes": [
  "7", "7 1/4", "7 1/2", "7 5/8", "7 3/4", "8"
  ]}'),
('15', '{ "sizes": [
  "7", "7 1/4", "7 3/8", "7 3/4", "8"
  ]}');

insert into "productPhotos" ("productId", "photoUrl")
values
('15', '{ "urls": [
  "/images/yankees1.png",
  "/images/yankees2.png",
  "/images/yankees3.png"
  ]}'),
('14', '{ "urls": [
  "/images/dodgersC1.webp",
  "/images/dodgersC2.webp",
  "/images/dodgersC3.webp"
  ]}'),
('13', '{ "urls": [
  "/images/padres1.png",
  "/images/padres2.png",
  "/images/padres3.png"
  ]}'),
('12', '{ "urls": [
  "/images/royals1.webp",
  "/images/royals2.webp",
  "/images/royals3.webp"
  ]}'),
('11', '{ "urls": [
  "/images/jonstan1.png",
  "/images/jonstan2.png",
  "/images/jonstan3.png",
  "/images/jonstan4.png"
  ]}'),
('10', '{ "urls": [
  "/images/rumblers1.png",
  "/images/rumblers2.png",
  "/images/rumblers3.png"
  ]}'),
('9', '{ "urls": [
  "/images/marlins1.webp",
  "/images/marlins2.webp"
  ]}'),
('8', '{ "urls": [
  "/images/braves1.png",
  "/images/braves2.png",
  "/images/braves3.png"
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
