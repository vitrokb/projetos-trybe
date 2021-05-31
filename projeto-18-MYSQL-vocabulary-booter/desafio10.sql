SELECT pro.ProductName AS Produto, MIN(ord_det.Quantity) AS Mínima, MAX(ord_det.Quantity) AS Máxima, ROUND(AVG(Quantity), 2) AS Média
FROM w3schools.products AS pro
INNER JOIN w3schools.order_details AS ord_det
ON pro.ProductID = ord_det.productID
GROUP BY pro.ProductID
HAVING Média > 20
ORDER BY Média, Produto;
