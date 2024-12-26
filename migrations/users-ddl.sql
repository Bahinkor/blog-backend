CREATE TABLE users(
    id int(10) unsigned NOT null AUTO_INCREMENT,
    name varchar(255) NOT null,
    avatar varchar(255) DEFAULT null,
    password varchar(255) DEFAULT null,
    username varchar(255) NOT null,
    email varchar(255) NOT null,
    provider ENUM("local","google","meta") NOT null DEFAULT "local",
    role ENUM("user","admin") NOT null DEFAULT "user",
    created_at datetime DEFAULT CURRENT_TIMESTAMP(),

    PRIMARY KEY (id),
    UNIQUE KEY users_unique_username (username),
    UNIQUE KEY users_unique_email (email)
) ENGINE=INNODB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;