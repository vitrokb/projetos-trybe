CREATE VIEW faturamento_atual AS
SELECT
ROUND(MIN(pla.plano_valor), 2) AS faturamento_minimo,
ROUND(MAX(pla.plano_valor), 2) AS faturamento_maximo,
ROUND(AVG(pla.plano_valor), 2) AS faturamento_medio,
ROUND(SUM(pla.plano_valor), 2) AS faturamento_total
FROM SpotifyClone.plano_info AS pla
INNER JOIN SpotifyClone.user_info AS usr
ON usr.user_plano = pla.plano_id;
