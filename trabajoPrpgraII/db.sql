CREATE SCHEMA proyecto;
USE proyecto;
CREATE TABLE usuarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    mail VARCHAR(250) NOT NULL UNIQUE,
    contrasenia VARCHAR(500) NOT NULL,
    foto VARCHAR(300),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO usuarios VALUES (
DEFAULT,
'juanchi1@gmail.com',
'123456',
'foto.jpg',
null,
null,
null
),
(
DEFAULT,
'juanchi2@gmail.com',
'123456',
'foto.jpg',
null,
null,
null
),
(
DEFAULT,
'juanchi3@gmail.com',
'123456',
'foto.jpg',
null,
null,
null
);

ALTER TABLE usuarios ADD COLUMN fechaDeNac DATE;


CREATE TABLE productos(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    descripcion TEXT,
    usuarioId INT UNSIGNED,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);

INSERT INTO productos VALUES(
DEFAULT,
'xxxxxxxxxxxx',
2
);









