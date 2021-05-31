SELECT pro.ProductName AS Produto, pro.Price AS Preço
FROM w3schools.products AS pro
INNER JOIN w3schools.order_details AS ord_det
ON pro.ProductID = ord_det.ProductID
GROUP BY ord_det.ProductID, ord_det.Quantity
HAVING ord_det.Quantity > 80
ORDER BY Produto;
