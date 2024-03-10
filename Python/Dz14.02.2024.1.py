import tkinter

def greet():
    name = entry.get()
    select_index = listbox.curselection()
    if name and select_index:
        select_greeting = listbox.get(select_index)
        label.config(text=f"{name}, {select_greeting}")

window = tkinter.Tk()
window.geometry("500x200")

entry = tkinter.Entry(window, width=15)
entry.place(x=200, y=50)

button = tkinter.Button(window, text="Привітання", command=greet)
button.place(x=200, y=100)

label = tkinter.Label(window, text="Введіть ваше ім'я")
label.place(x=80, y=50)

label = tkinter.Label(window, text="Вітання:")
label.place(x=340, y=30)

listbox = tkinter.Listbox(height=4)
listbox.insert(1, "З днем народження!")
listbox.insert(2, "З новим роком!")
listbox.insert(3, "З 8 Березня!")
listbox.place(x=340, y=55)

window.mainloop()