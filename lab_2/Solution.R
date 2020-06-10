library(readxl)
library(rpart)
library(rpart.plot)
library(party)

Sys.setlocale("LC_ALL","Russian_Russia")
input <- read_excel("D:/Google Drive/3 Studying/University/3 course (2019-2020)/
2 semester/DM (Data mining)/labs/Decision Tree Classification/data.xls", 
                   range = "B1:R102")



rpart_tree <- rpart(formula = rev(input), data=input, method = "class")
rpart_tree
rpart.plot(rpart_tree)
rpart.plot(rpart_tree, type = 4, extra = 101)

p<-predict(rpart_tree, input, type="class")
summary(p)

