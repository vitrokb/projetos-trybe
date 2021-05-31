CREATE VIEW top_2_hits_do_momento AS
SELECT song.song_name AS cancao, COUNT(rep.song_id) AS reproducoes FROM SpotifyClone.songs AS song
INNER JOIN SpotifyClone.rep_history AS rep
ON song.song_id = rep.song_id
GROUP BY cancao
ORDER BY reproducoes DESC, cancao
LIMIT 2;
