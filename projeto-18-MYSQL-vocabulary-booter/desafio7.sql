SELECT UCASE(CONCAT(FIRST_NAME, ' ', LAST_NAME)) AS `Nome completo`,
jh.START_DATE AS `Data de início`,
e.SALARY AS `Salário`
FROM hr.job_history AS jh
INNER JOIN hr.employees AS e
ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
WHERE MONTH(START_DATE) = 1 OR MONTH(START_DATE) = 2 OR MONTH(START_DATE) = 3
ORDER BY `Nome completo`, `Data de início`;
