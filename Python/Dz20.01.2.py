import turtle

t = turtle.Turtle()

t.penup()
t.goto(-100, 0)
t.pendown()

t.write("Шпилька", font=("Arial", 12, "normal"))

t.penup()
t.goto(-35, 0)
t.pendown()

t.write("Тимофій", font=("Arial", 12, "normal"))

turtle.done()