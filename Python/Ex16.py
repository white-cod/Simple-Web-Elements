# У цьому рядку користувачеві пропонується ввести питому теплоємність тіла, а потім перетворює введене значення на число з плаваючою точкою (float).
c = float(input("Введіть питому теплоємність (Дж/кг·°C): "))

# Цей рядок пропонує користувачеві ввести масу тіла, а потім перетворює введені дані на число з плаваючою точкою (float).
m = float(input("Введіть масу тіла (Кг): "))

# Цей рядок пропонує користувачеві ввести початкову температуру тіла, а потім перетворює введені дані на float.
t1 = float(input("Введіть початкову температуру тіла (°C): "))

# Отримати остаточну температуру тіла від користувача
t2 = float(input("Введіть кінцеву температуру тіла (°C): "))

# Цей рядок розраховує кількість тепла за формулою Q = cm(t2 - t1).
Q = c * m * (t2 - t1)

# Цей рядок друкує кількість тепла, що подається на консоль.
print("Кількість теплоти становить:", Q, "Дж")