CREATE TABLE articles(
    id int(10) unsigned NOT null AUTO_INCREMENT,
    title varchar(255) NOT null,
    content mediumtext NOT null,
    slug varchar(255) NOT null,
    author_id int(10) unsigned NOT null,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP(),
    created_at datetime DEFAULT CURRENT_TIMESTAMP(),

    PRIMARY KEY (id),
    UNIQUE KEY articles_unique (slug),
    KEY articles_author_fk (author_id),
    CONSTRAINT articles_author_fk FOREIGN KEY (author_id) REFERENCES users (id) ON DELETE CASCADE
) ENGINE=INNODB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;