CREATE VIEW perfil_artistas AS
SELECT
art.artist_name AS artista, alb.album_name AS album, COUNT(fol.artist_id) AS seguidores
FROM SpotifyClone.artist_info AS art
INNER JOIN SpotifyClone.album_info AS alb
ON art.artist_id = alb.album_artist_id
INNER JOIN SpotifyClone.following_artist AS fol
ON art.artist_id = fol.artist_id
GROUP BY artista, album
ORDER BY seguidores DESC, artista, album;
