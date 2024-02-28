DROP TABLE IF EXISTS tb_bulletin_board;


CREATE TABLE tb_bulletin_board
(
    id           INT AUTO_INCREMENT PRIMARY KEY,
    title        VARCHAR(255) NOT NULL,
    created_time TIMESTAMP
);