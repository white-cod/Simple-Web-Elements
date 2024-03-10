import turtle

t = turtle.Turtle()

t.fillcolor("red")
t.begin_fill()

for _ in range(5):
    t.forward(100)
    t.right(144)
t.end_fill()

turtle.done()