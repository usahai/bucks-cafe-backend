-- INSERT into database
INSERT INTO Cafes (`id`,`name`,`location`,`description`) VALUES 
('d0ad2818-7e70-46f8-b9d7-70ef0538aabd','Brew Haven','West','Brew Haven, located on the scenic west side of Singapore, offers a tranquil escape with stunning views overlooking a serene reservoir. Enjoy handcrafted coffee, freshly baked treats, and a cozy ambiance perfect for relaxation or quiet conversations. Whether you\'re here to unwind or catch up with friends, Brew Haven provides a peaceful retreat from the city\'s hustle.'),
('d1ed2716-7aa4-4d12-9cfd-993ab9004572','The Cozy Cup','North','The Cozy Cup, nestled on the north side of Singapore near a lush park, offers a warm and inviting space to enjoy artisanal coffee and light bites. With its peaceful surroundings and charming atmosphere, it\'s the perfect spot for a relaxing break.'),
('b593861b-9bf9-4659-9b45-0e5b2f259a41','Coffee Roasters','South','The Coffee Roasters Cafe, located in the heart of Singapore, is a hub for coffee enthusiasts, serving freshly roasted, expertly brewed coffee. With its modern vibe and passion for quality, it\'s the perfect spot for a caffeine fix or a casual catch-up.'),
('ccb4dcab-aad2-4b78-856b-858b458438cf','The Coffee Nest','East','The Coffee Nest Cafe, situated on Singapore\'s vibrant East Coast, offers a cozy retreat for coffee lovers with its artisanal brews and relaxing atmosphere. Whether you\'re unwinding by the coast or catching up with friends, it\'s the perfect spot to enjoy a peaceful cup of coffee.'),
('c7719d2e-d69f-4e4e-9eb3-cfe8d35ba4e9','18th Century Cafe','East','The 18th Century Cafe blends timeless charm with modern elegance, offering a unique café experience inspired by classic traditions. Step into a warm, vintage ambiance while enjoying carefully crafted beverages and gourmet treats.'),
('df46570b-ecb8-45b3-a034-02c08db5c7fc','Cafe Coffee Day','North','Cafe Coffee Day, nestled in Singapore\'s north side, is a cozy destination for coffee lovers, serving rich brews and a diverse selection of treats. With its relaxed vibe, it\'s an ideal spot for unwinding or connecting with friends over a great cup of coffee.'),
('0c942471-8fd2-445f-9560-7fec99b90e2d','Marigold Cafe','West','Marigold Cafe exudes a vibrant and welcoming atmosphere, perfect for anyone seeking a cozy spot to relax and enjoy flavorful coffee and fresh bites. Its lively ambiance and friendly service make it a great place for both social gatherings and quiet moments.'),
('292a5069-800f-4860-90cd-91d391706c31','Sip and Savor','South','Sip and Savor is a cozy café with a charming small library, offering a delightful space to enjoy coffee while exploring a curated collection of books. It\'s the perfect spot to relax, sip your favorite brew, and immerse yourself in a good read.'),
('7bca3892-8cee-446b-ba97-5eeee4c05de5','Bean Bliss','East','Bean Bliss, perched atop a building with stunning views of Gardens by the Bay, offers a serene escape where you can enjoy exceptional coffee amidst breathtaking scenery. It\'s an ideal spot for savoring your favorite brew while soaking in the panoramic vistas.'),
('89cfd4f8-76d1-4116-b249-c94d5439d22b','Coffee Culture','West','Coffee Culture celebrates the art of coffee with a blend of expertly crafted brews and a warm, inviting atmosphere. It\'s the perfect place to indulge in rich, flavorful coffee while enjoying a relaxed, community-centric vibe.');

INSERT INTO Employees (`id`,`name`,`email_address`,`phone_number`,`gender`) VALUES 
('UI51C1A1D','Hannah','hannah.smith@email.com','81672546','Female'),
('UIE3153C2','Isabelle','isabelle_is@email.com','96756211','Female'),
('UI9A9B60F','Danielle','danielle00@email.com','81029384','Male'),
('UI2869F5D','Matthew','matthew_ma@email.com','90127843','Male'),
('UICDA7085','Andrew','andrew01@email.com','87768776','Male'),
('UI66E3E54','Katrina','katrina_k@email.com','97452942','Female'),
('UI77A63D6','Sylvester','sylvester_sy@email.com','91172423','Male'),
('UI3B13540','Jennifer','jennifer04@email.com','85907121','Female'),
('UI8710D1D','Nathan','nathan_nn@email.com','98970550','Male'),
('UIB3A38AB','Jonathan','steve_jobs@email.com','98970634','Male'),
('UIFB001CA','Gabrielle','gabrielle_gb@email.com','89392977','Female'),
('UI898BB01','Jessica','jessica_js@email.com','91056743','Female'),
('UICEA1B17','Harris','harris_ha@email.com','86736557','Male'),
('UI4500C4D','Christopher','christopher_ch@email.com','94216458','Male'),
('UI8F72F87','Jeremy','jeremy06@email.com','84767731','Male'),
('UI8BFF435','Rachel','rachel07@email.com','84546561','Female'),
('UI936D238','Chandler','chandler08@email.com','87316599','Male'),
('UIA249CBC','Monica','monica09@email.com','96427731','Female'),
('UIC3B44AA','Katherine','katherine10@email.com','87658712','Female'),
('UI1015F49','Leonard','leonard11@email.com','96768612','Male'),
('UIF33472D','Sabrina','sabrina12@email.com','87785612','Female');

INSERT INTO CafeEmployees (`id`,`emp_id`,`cafe_id`,`start_date`) VALUES
('dba91b99-08fe-4bf0-b77b-6be806748f5e','UI51C1A1D','d0ad2818-7e70-46f8-b9d7-70ef0538aabd','2024-01-01'),
('be698e53-8301-420d-a86b-03d74f11975a','UIE3153C2','d0ad2818-7e70-46f8-b9d7-70ef0538aabd','2024-02-01'),
('fd8c0b51-d3ad-4f26-8d3a-6ff01c97151f','UI9A9B60F','d0ad2818-7e70-46f8-b9d7-70ef0538aabd','2024-04-01'),
('ce8d232a-5df4-4c6f-a1d2-199f6f7a22fc','UI2869F5D','b593861b-9bf9-4659-9b45-0e5b2f259a41','2024-05-01'),
('437ca31d-dc30-44ec-bad5-6b4f8228de90','UICDA7085','b593861b-9bf9-4659-9b45-0e5b2f259a41','2024-08-01'),
('d6ebe08e-236a-4a1e-8172-6789c2f9a068','UI66E3E54','b593861b-9bf9-4659-9b45-0e5b2f259a41','2024-09-01'),
('de2fca92-c238-4ae8-900c-52e85ef1a465','UI77A63D6','ccb4dcab-aad2-4b78-856b-858b458438cf','2024-10-01'),
('5dfda8df-a28d-42f8-b66b-63f079823f34','UI3B13540','ccb4dcab-aad2-4b78-856b-858b458438cf','2024-02-01'),
('bd4acbd2-4dbe-4151-8a96-a3ab5c671267','UI8710D1D','c7719d2e-d69f-4e4e-9eb3-cfe8d35ba4e9','2024-04-01'),
('2e403afb-c62d-4f47-af98-7999e33419ce','UIB3A38AB','c7719d2e-d69f-4e4e-9eb3-cfe8d35ba4e9','2024-05-01'),
('83d537bc-0379-4610-83bd-989ae1386bdc','UIFB001CA','0c942471-8fd2-445f-9560-7fec99b90e2d','2024-06-01'),
('62229cb3-31cc-450a-80b4-d5ec5bbc513c','UI898BB01','292a5069-800f-4860-90cd-91d391706c31','2024-08-01'),
('f3b82847-4236-4a41-9dc2-2a2102b08dd1','UICEA1b17','7bca3892-8cee-446b-ba97-5eeee4c05de5','2024-01-01'),
('194db05f-fd73-42b8-9480-0c360d03b5d6','UI4500C4D','89cfd4f8-76d1-4116-b249-c94d5439d22b','2024-02-01'),
('09c78fbc-3786-4748-a226-bab20dac00bc','UI8F72F87','89cfd4f8-76d1-4116-b249-c94d5439d22b','2024-04-01'),
('e084a0b3-72c6-419e-b560-39844951d6ab','UI8BFF435','89cfd4f8-76d1-4116-b249-c94d5439d22b','2024-03-01'),
('a67a3f53-bdb9-43ad-bb47-b9ec4950e4a3','UI936D238','89cfd4f8-76d1-4116-b249-c94d5439d22b','2024-05-01'),
('c3f75761-39ae-4d8f-b28a-353574710704','UIA249CBC','89cfd4f8-76d1-4116-b249-c94d5439d22b','2024-07-01'),
('9db1f4a9-8684-45f4-ae40-6ff520568699','UIC3B44AA','89cfd4f8-76d1-4116-b249-c94d5439d22b','2024-09-01'),
('b0559a14-4d73-4a57-87ac-e3a62dc6447b','UI1015F49','89cfd4f8-76d1-4116-b249-c94d5439d22b','2024-01-01'),
('7be5b12b-2643-453e-a7ce-22203ec8b05d','UIF33472D','89cfd4f8-76d1-4116-b249-c94d5439d22b','2024-11-01');


-- QUERY database
SELECT * FROM Cafes;
SELECT * FROM Employees;
SELECT * FROM CafeEmployees;