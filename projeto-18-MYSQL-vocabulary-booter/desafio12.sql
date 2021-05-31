SELECT
CONCAT(emp.FIRST_NAME, " ", emp.LAST_NAME) AS `Nome completo funcionário 1`,
emp.SALARY AS `Salário funcionário 1`,
emp.PHONE_NUMBER AS `Telefone funcionário 1`,
CONCAT(emp2.FIRST_NAME, " ", emp2.LAST_NAME) AS `Nome completo funcionário 2`,
emp2.SALARY AS `Salário funcionário 2`,
emp2.PHONE_NUMBER AS `Telefone funcionário 2`
FROM hr.employees AS emp, hr.employees AS emp2
WHERE emp.JOB_ID = emp2.JOB_ID AND CONCAT(emp.FIRST_NAME, " ", emp.LAST_NAME) <> CONCAT(emp2.FIRST_NAME, " ", emp2.LAST_NAME)
ORDER BY `Nome completo funcionário 1`, `Nome completo funcionário 2`;
