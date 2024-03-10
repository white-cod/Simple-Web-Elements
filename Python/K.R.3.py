num = int(input("Введіть число для позначення дня тижня: "))

if num == 1:
    day = "Понеділок"
elif num == 2:
    day = "Вівторок"
elif num == 3:
    day = "Середа"
elif num == 4:
    day = "Четвер"
elif num == 5:
    day = "П'ятниця"
elif num == 6:
    day = "Субота"
elif num == 7:
    day = "Неділя"
else:
    print("Будь ласка, введіть число від 1 до 7.")
    exit()

print(f"День тижня: {day}")