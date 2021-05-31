CREATE SCHEMA IF NOT EXISTS `SpotifyClone` DEFAULT CHARACTER SET utf8 ;
USE `SpotifyClone` ;


CREATE TABLE IF NOT EXISTS `SpotifyClone`.`plano_info` (
  `plano_id` INT NOT NULL,
  `plano_name` VARCHAR(45) NULL,
  `plano_valor` DECIMAL(3,2) NULL,
  PRIMARY KEY (`plano_id`)
)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `SpotifyClone`.`user_info` (
  `user_id` INT NOT NULL,
  `user_plano` INT NULL,
  `user_name` VARCHAR(50) NULL,
  `user_age` INT NULL,
  PRIMARY KEY (`user_id`),
  FOREIGN KEY (`user_plano`)
  REFERENCES `SpotifyClone`.`plano_info` (`plano_id`)
)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `SpotifyClone`.`artist_info` (
  `artist_id` INT NOT NULL,
  `artist_name` VARCHAR(45) NULL,
  PRIMARY KEY (`artist_id`)
)
ENGINE = InnoDB;



CREATE TABLE IF NOT EXISTS `SpotifyClone`.`album_info` (
  `album_id` INT NOT NULL,
  `album_name` VARCHAR(45) NULL,
  `album_artist_id` INT NULL,
  PRIMARY KEY (`album_id`),
  FOREIGN KEY (`album_artist_id`)
  REFERENCES `SpotifyClone`.`artist_info` (`artist_id`)
)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `SpotifyClone`.`following_artist` (
  `user_id` INT NOT NULL,
  `artist_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `artist_id`),
  FOREIGN KEY (`user_id`)
  REFERENCES `SpotifyClone`.`user_info` (`user_id`),
  FOREIGN KEY (`artist_id`)
  REFERENCES `SpotifyClone`.`artist_info` (`artist_id`)
)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `SpotifyClone`.`songs` (
  `song_id` INT NOT NULL,
  `song_name` VARCHAR(80) NULL,
  `artist_id` INT NULL,
  `album_id` INT NULL,
  PRIMARY KEY (`song_id`),
  FOREIGN KEY (`artist_id`)
  REFERENCES `SpotifyClone`.`artist_info` (`artist_id`),
  FOREIGN KEY (`album_id`)
  REFERENCES `SpotifyClone`.`album_info` (`album_id`)
)
ENGINE = InnoDB;


CREATE TABLE IF NOT EXISTS `SpotifyClone`.`rep_history` (
  `user_id` INT NOT NULL,
  `song_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `song_id`),
  FOREIGN KEY (`song_id`)
  REFERENCES `SpotifyClone`.`songs` (`song_id`),
  FOREIGN KEY (`user_id`)
  REFERENCES `SpotifyClone`.`user_info` (`user_id`)
)
ENGINE = InnoDB;

INSERT INTO SpotifyClone.plano_info (plano_id, plano_name, plano_valor)
VALUES (1, 'gratuito', 0),
(2, 'familiar', 7.99),
(3, 'universitário', 5.99);


INSERT INTO SpotifyClone.`user_info` (`user_id`, user_plano, `user_name`, user_age)
VALUES (1, 1, 'Thati', 23),
(2, 2, 'Cintia', 35),
(3, 3, 'Bill', 20),
(4, 1, 'Roger', 45);


INSERT INTO SpotifyClone.artist_info (artist_id, artist_name)
VALUES (1,'Walter Phoenix'),
(2, 'Peter Strong'),
(3, 'Lance Day'),
(4, 'Freedie Shannon');


INSERT INTO SpotifyClone.album_info (album_id, album_name, album_artist_id)
VALUES (1, 'Envious', 1),
(2, 'Exuberant', 1),
(3, 'Hallowed Steam', 2),
(4, 'Incandescent', 3),
(5, 'Temporary Culture', 4);


INSERT INTO SpotifyClone.following_artist (`user_id`, artist_id)
VALUES (1, 1),
(1, 4),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(3, 1),
(4, 4);


INSERT INTO SpotifyClone.songs (song_id, song_name, artist_id, album_id)
VALUES (1, 'Soul For Us', 1, 1),
(2, 'Reflections Of Magic', 1, 1),
(3, 'Dance With Her Own', 1, 1),
(4, 'Troubles Of My Inner Fire', 1, 2),
(5, 'Time Fireworks', 1, 2),
(6, 'Magic Circus', 2, 3),
(7, 'Honey, So Do I', 2, 3),
(8, "Sweetie, Let's Go Wild", 2, 3),
(9, 'She Knows', 2, 3),
(10, 'Fantasy For Me', 3, 4),
(11, 'Celebration Of More', 3, 4),
(12, 'Rock His Everything', 3, 4),
(13, 'Home Forever', 3, 4),
(14, 'Diamond Power', 3, 4),
(15, "Honey, Let's Be Silly", 3, 4),
(16, 'Thang Of Thunder', 4, 5),
(17, 'Words Of Her Life', 4, 5),
(18, 'Without My Streets', 4, 5);


INSERT INTO SpotifyClone.rep_history (`user_id`, song_id)
VALUES (1, 1),
(1, 6),
(1, 14),
(1, 16),
(2, 13),
(2, 17),
(2, 2),
(2, 15),
(3, 4),
(3, 16),
(3, 6),
(4, 3),
(4, 18),
(4, 11);
