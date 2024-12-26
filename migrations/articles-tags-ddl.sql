CREATE TABLE articles_tags(
    id int(10) unsigned NOT null AUTO_INCREMENT,
    article_id int(10) unsigned NOT null,
    tag_id int(10) unsigned NOT null,
    updated_at datetime DEFAULT CURRENT_TIMESTAMP(),
    created_at datetime DEFAULT CURRENT_TIMESTAMP(),

    PRIMARY KEY (id),
    UNIQUE KEY tags_articles_unique (article_id, tag_id),

    KEY articles_tags_tags_fk (tag_id),
    CONSTRAINT articles_tags_tags_fk FOREIGN KEY (tag_id) REFERENCES tags (id) ON DELETE CASCADE,

    KEY articles_tags_articles_fk (article_id),
    CONSTRAINT articles_tags_articles_fk FOREIGN KEY (article_id) REFERENCES articles (id) ON DELETE CASCADE
) ENGINE=INNODB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;