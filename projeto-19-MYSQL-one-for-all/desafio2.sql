CREATE VIEW estatisticas_musicais AS
SELECT
( SELECT COUNT(*) FROM SpotifyClone.songs ) AS cancoes, 
( SELECT COUNT(*) FROM SpotifyClone.artist_info ) AS artistas,
( SELECT COUNT(*) FROM SpotifyClone.album_info ) AS albuns;
