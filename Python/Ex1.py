from turtle import *

SUN_RADIUS = 50
MERCURY_RADIUS = 10
MERCURY_DISTANCE = 80
VENUS_RADIUS = 15
VENUS_DISTANCE = 120
EARTH_RADIUS = 20
EARTH_DISTANCE = 160
MARS_RADIUS = 17
MARS_DISTANCE = 220
JUPITER_RADIUS = 40
JUPITER_DISTANCE = 300
SATURN_RADIUS = 35
SATURN_DISTANCE = 380
URANUS_RADIUS = 30
URANUS_DISTANCE = 460
NEPTUNE_RADIUS = 25
NEPTUNE_DISTANCE = 540

setup(1300, 600)
title("Solar System")
bgcolor("black")
tracer(False)
speed(0)

penup()
goto(-600, 0)
pendown()
fillcolor("gray")
begin_fill()
left(30)
forward(50)
right(60)
forward(100)
right(120)
forward(100)
right(60)
forward(50)
end_fill()

penup()
goto(0, 30)
pendown()
fillcolor("yellow")
begin_fill()
circle(SUN_RADIUS)
end_fill()

penup()
goto(MERCURY_DISTANCE, 0)
pendown()
fillcolor("gray")
begin_fill()
circle(MERCURY_RADIUS)
end_fill()

penup()
goto(VENUS_DISTANCE, 0)
pendown()
fillcolor("orange")
begin_fill()
circle(VENUS_RADIUS)
end_fill()

penup()
goto(EARTH_DISTANCE, 0)
pendown()
fillcolor("blue")
begin_fill()
circle(EARTH_RADIUS)
end_fill()

penup()
goto(MARS_DISTANCE, 0)
pendown()
fillcolor("red")
begin_fill()
circle(MARS_RADIUS)
end_fill()

penup()
goto(JUPITER_DISTANCE, 0)
pendown()
fillcolor("tan")
begin_fill()
circle(JUPITER_RADIUS)
end_fill()

penup()
goto(SATURN_DISTANCE, 0)
pendown()
fillcolor("light gray")
begin_fill()
circle(SATURN_RADIUS)
end_fill()

penup()
goto(URANUS_DISTANCE, 0)
pendown()
fillcolor("light blue")
begin_fill()
circle(URANUS_RADIUS)
end_fill()

penup()
goto(NEPTUNE_DISTANCE, 0)
pendown()
fillcolor("dark blue")
begin_fill()
circle(NEPTUNE_RADIUS)
end_fill()
color("yellow")

penup()
goto(-150, 70)
pendown()
for _ in range(12):
    forward(20)
    backward(20)
    left(360 / 12)

penup()
goto(-250, 80)
pendown()
for _ in range(12):
    forward(20)
    backward(20)
    left(360 / 12)

penup()
goto(-350, 90)
pendown()
for _ in range(12):
    forward(20)
    backward(20)
    left(360 / 12)

penup()
goto(-270, 150)
pendown()
for _ in range(12):
    forward(20)
    backward(20)
    left(360 / 12)

penup()
goto(270, 150)
pendown()
fillcolor("yellow")
begin_fill()
for _ in range(5):
    forward(100)
    right(144)
end_fill()

hideturtle()
update()

done()