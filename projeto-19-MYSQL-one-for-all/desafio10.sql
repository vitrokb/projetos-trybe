DELIMITER $$
CREATE FUNCTION quantidade_musicas_no_historico(id INT) RETURNS INT READS SQL DATA
BEGIN
DECLARE total INT;
SELECT COUNT(user_id) FROM SpotifyClone.rep_history WHERE user_id = id INTO total;
RETURN total;
END $$

DELIMITER ;
