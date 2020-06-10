library(readxl)
data <- read_excel("D:/Google Drive/3 Studying/University/3 course (2019-2020)/2 semester/DM (Data mining)/labs/Associative rules/data.xls", 
                   range = "B1:K21")
data <- as(as.matrix(data),"transactions")

library(arules)
library(arulesViz)
apriori(data, parameter =  list(support=0.2, confidence=0.8)) -> rules
inspect(sort(rules,by="support"))

plot(rules,method="graph",control=list(type="itemsets"))
plot(rules)
plot(rules, method="grouped")