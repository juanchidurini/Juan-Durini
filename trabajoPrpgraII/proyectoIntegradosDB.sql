CREATE SCHEMA proyectoIntegradorDB;
USE proyectoIntegradorDB;
CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(200) NOT NULL UNIQUE,
    email VARCHAR(200) NOT NULL UNIQUE,
    contrasennia VARCHAR(200) NOT NULL,
    birthdate DATE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE products(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,	
    image varchar(200) NOT NULL,
    productName VARCHAR(200) NOT NULL,
    usersId INT UNSIGNED,
    descripcion VARCHAR(500) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usersId) REFERENCES users(id)
);

CREATE TABLE coments(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    coment varchar(500) not null,
    usersId INT UNSIGNED,
    productsId INT UNSIGNED,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
	FOREIGN KEY (usersId) REFERENCES users(id),
    FOREIGN KEY (productsId) REFERENCES products(id)
);
INSERT INTO users VALUES
(DEFAULT, "juanchi1", "juanchi1@gmail.com", "1234", "0026-02-27", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "juanchi2", "juanchi2@gmail.com", "1234", "0026-02-27", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "juanchi3", "juanchi3@gmail.com", "1234", "0026-02-27", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "juanchi4", "juanchi4@gmail.com", "1234", "0026-02-27", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "juanchi5", "juanchi5@gmail.com", "1234", "0026-02-27", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO products VALUES
(DEFAULT, "img-cafetera-moulinex.jpg", "Cafetera Moulinex", "1", "Cafetera para hacer cafe muy rico de excelente calidad.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "img-macbook-pro-2019.jpg", "MacBook Pro", "1", "MacBook Pro Apple 2019", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "img-samsung-galaxy-s10.jpg", "Galaxy s10", "2", "Samsung Galaxy s10", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "img-tv-samsung-smart.jpg", "Samsung Smart Tv", "2", "Televisor inteligente Samnsung.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "img-casio.png", "Reloj Casio", "3", "Reloj pulsera Casio", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "img-alexa.png", "Alexa", "3", "Asistente inteligenta Alexa", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "img-timbre.png", "Timbre inalámbrico", "4", "Timbre inalámbrico a distancia de plastico.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "img-kitchen-aid.png", "Kitchen Aid", "4", "Batidora electrica de cocina.", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "img-teclado.png", "Teclado Yamaha", "5", "Teclado Yamaha de 7 octavas", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "img-sonos.png", "Sonos 300", "5", "Parlante Sonos 300", DEFAULT, DEFAULT, DEFAULT);

INSERT INTO coments VALUES
(DEFAULT, "me gusta el cafe que hace", "1", "1", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "muy futuristica", "2", "1", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "los lattes medio flojos", "3", "1", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "alta compu", "4", "2", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "no me llego nunca", "5", "2", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "a mi nieto le gusta mucho", "1", "2", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "me encata este celu", "2", "3", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "prefiero apple", "3", "3", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Cuanto dura la bateria?", "4", "3", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "me encatnta ver la tele", "5", "4", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "la uso de monitor", "1", "4", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "las pelis se ven increibles", "2", "4", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "Es sumergible?", "3", "5", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "que buen reloj!", "4", "5", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "pense que era mas grande", "5", "5", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "es justo lo que necesitaba", "1", "6", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "me gusta charlar con ella", "2", "6", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "me sirve para escuhcar musica", "3", "6", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "me resolvio mis problemas", "4", "7", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "cunato dura a bateria?", "5", "7", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "viejisimo el modelo", "1", "7", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "precio", "2", "8", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "amo esta batidora!!!!!", "3", "8", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "muy buena batidora", "4", "8", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "se lo compre a mi hijo y le encanto", "5", "9", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "me encanta tocar el piano", "1", "9", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "lo probe en vivo y me gusta como se mimetiza con los otros instrumentos", "2", "9", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "muy buena parlante, que potenica", "3", "10", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "muy buenos graves", "4", "10", DEFAULT, DEFAULT, DEFAULT),
(DEFAULT, "mejor parlante precio-calidad", "5", "10", DEFAULT, DEFAULT, DEFAULT);