CREATE VIEW historico_reproducao_usuarios AS
SELECT usr.user_name AS usuario, songs.song_name AS nome FROM SpotifyClone.user_info AS usr
INNER JOIN SpotifyClone.rep_history AS rep
ON usr.user_id = rep.user_id
INNER JOIN SpotifyClone.songs AS songs
ON rep.song_id = songs.song_id
ORDER BY usuario, nome;
