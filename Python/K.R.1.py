print("Введіть довжини сторін трикутника")

side1 = float(input("Введіть довжину першої сторони: "))
side2 = float(input("Введіть довжину другої сторони: "))
side3 = float(input("Введіть довжину третьої сторони: "))
s = side1 + side2 + side3

if side1 == side2 == side3:
    print("Трикутник є рівностороннім трикутником.")
elif side1 == side2 or side1 == side3 or side2 == side3:
    print("Трикутник є рівнобедреним трикутником.")

print(f"Периметр: {s}")