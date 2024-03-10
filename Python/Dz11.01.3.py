#ЦІЛІ ЧИСЛА №1
year = int(input("Введіть рік: "))
century = (year - 1) // 100 + 1
print(f"Відповідним століттям для {year} року є {century} століття")

#ЦІЛІ ЧИСЛА №2
number = int(input("Введіть тризначне число: "))
hundreds = number // 100
tens = (number % 100) // 10
ones = number % 10
new_number = tens * 100 + hundreds * 10 + ones
print(f"Число, отримане при перестановці сотень і десятків: {new_number}")