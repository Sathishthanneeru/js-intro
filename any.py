# count = 0
# i = 0
# while i < 10:
#     i=i+1
#     j=1
#     while j < 31:
#         print(i,j)
#         j += 1
# list = [1,2,3.4,-57,100,123,-99]
# sum=0
# count=0
# for i in list:
#     sum=sum+i
#     count=count+1
# print(sum)
# if count == 0:
#     print("emprty list")
# else:
#     print(sum/count)


# list1 =[[1,2,3],[1,2.3,4],[-34,44,55]]
# sum=0
# count=0
# for i in list1:
#     for j in i:
#         sum=sum+j
#         count=count+1
# print(sum)
# print(sum/count)



# def sum(a,b, *c):
#     sum = a+b
#     for i in c:
#         sum=sum+i

#     return sum
# print(sum(1,23,4,5,6,))



# factorial of numbers

# def fact(n):
#      if n ==1:
#           return 1
#      temp = fact(n-1)
#      print(temp)
#      return n * temp
# res = fact(5)
# print(res)



# fabanoice series
 
# def fib(n):
#     if n <=1:
#         return n
#     return fib(n-1) + fib(n-2)
# print(fib(8))
 


# def print_num(n):
#     print(n)
#     if n ==0:
#         return
#     print_num(n-1)
#     print(n)
# print_num(12)



# def fuction_decorator(func):
#     def wrapper():
#         print("pls check a4 sheets")
#         func()
#         print("tq")
#     return wrapper
# @fuction_decorator
# def printer():
#     print("printing......")
# printer()

# sets 

# set1={69,1,2,3,4,5}
# set2={10,11,12,13,9,31,38,55,8,7,6,5,14,15,20}
# print (set1.union(set2))
