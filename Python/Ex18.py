# просимо користувача ввести кількість будинків і перетворяємо її на ціле число
houses = int(input("Введіть кількість будинків: "))

# просимо користувача ввести кількість ніндзя на кожному даху та перетворяємо її на ціле число
ninjas = int(input("Введіть кількість ніндзя на кожному даху: "))

# просимо користувача ввести кількість тунелів і перетворяємо її на ціле число
tunnels = int(input("Введіть кількість тунелів: "))

# просимо користувача ввести кількість самураїв, захованих у кожному тунелі, і перетворяємо її на ціле число
samurai = int(input("Введіть кількість самураїв, захованих у кожному тунелі: "))

# обчислюємо загальну кількість ніндзь за поданою формулою
total_soldiers = houses * ninjas + tunnels * samurai

# виводемо результат5
print("Загальна кількість воїнів становить:", total_soldiers)