CREATE VIEW cancoes_premium AS
SELECT song.song_name AS nome, COUNT(rep.song_id) AS reproducoes
FROM SpotifyClone.songs AS song
INNER JOIN SpotifyClone.rep_history AS rep
ON song.song_id = rep.song_id
INNER JOIN SpotifyClone.user_info AS usr
ON rep.user_id = usr.user_id
WHERE usr.user_plano = 2 OR usr.user_plano = 3
GROUP BY nome
ORDER BY nome;
