a = int(input("Введіть перше число: "))
b = int(input("Введіть друге число: "))

if b % a == 0:
    print(f"{a} є дільником {b}.")
else:
    print(f"{a} не є дільником {b}.")