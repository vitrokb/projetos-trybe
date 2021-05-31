DELIMITER $

CREATE TRIGGER trigger_usuario_delete BEFORE DELETE
ON user_info
FOR EACH ROW
BEGIN
  DELETE FROM following_artist WHERE user_id = OLD.user_id;
  DELETE FROM rep_history WHERE user_id = OLD.user_id;
END$

DELIMITER ;
