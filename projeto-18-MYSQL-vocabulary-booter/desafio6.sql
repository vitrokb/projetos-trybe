SELECT CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS `Nome completo`,
j.JOB_TITLE AS Cargo,
jh.START_DATE AS `Data de início do cargo`,
(SELECT DEPARTMENT_NAME FROM hr.departments WHERE DEPARTMENT_ID = jh.DEPARTMENT_ID) AS Departamento
FROM hr.job_history AS jh
INNER JOIN hr.employees AS e
ON jh.EMPLOYEE_ID = e.EMPLOYEE_ID
INNER JOIN hr.jobs AS j
ON j.JOB_ID = jh.JOB_ID
ORDER BY `Nome Completo` DESC, Cargo;
