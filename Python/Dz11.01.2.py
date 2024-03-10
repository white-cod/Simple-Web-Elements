#ВВЕДЕННЯ-ВИВЕДЕННЯ №2
alpha = float(input("Введіть альфа в радіанах (0 < альфа < 2*pi): "))

while alpha <= 0 or alpha >= 2 * 3.14:
    print("Введіть значення у діапазоні (0 < alpha < 2*pi).")
    alpha = float(input("Введіть альфа в радіанах (0 < альфа < 2*pi): "))

deg = 180 / 3.14
alpha_deg = alpha * deg

print(f"Альфа в градусах: {alpha_deg}")