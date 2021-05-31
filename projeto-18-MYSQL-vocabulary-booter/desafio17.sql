DELIMITER $$
CREATE TRIGGER trigger_insert_date
    BEFORE INSERT ON orders
    FOR EACH ROW
BEGIN
    SET NEW.OrderDate = NOW();
END $$
DELIMITER ;
