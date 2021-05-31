DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE total INT;
SELECT COUNT(job_h.EMPLOYEE_ID)
FROM hr.job_history AS job_h
INNER JOIN hr.employees AS emp
ON job_h.EMPLOYEE_ID = emp.EMPLOYEE_ID
WHERE emp.email = "NKOCHHAR" INTO total;
RETURN total;
END $$

DELIMITER ;
