DELIMITER $$
CREATE PROCEDURE albuns_do_artista (IN nome VARCHAR(50))
BEGIN
SELECT art.artist_name AS artista, alb.album_name AS album
FROM SpotifyClone.artist_info AS art
INNER JOIN SpotifyClone.album_info AS alb
ON art.artist_id = alb.album_artist_id
WHERE art.artist_name = nome;
END $$
DELIMITER ;
