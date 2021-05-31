CREATE VIEW top_3_artistas AS
SELECT art.artist_name AS artista, COUNT(fol.artist_id) AS seguidores FROM SpotifyClone.artist_info AS art
INNER JOIN SpotifyClone.following_artist AS fol
ON art.artist_id = fol.artist_id
GROUP BY artista
ORDER BY seguidores DESC, artista
LIMIT 3;
