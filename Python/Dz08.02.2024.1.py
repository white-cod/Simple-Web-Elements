import tkinter

def greet():
    name = entry.get()
    if name:
        button.config(text=f"Привіт, {name}!", state=tkinter.DISABLED)

window = tkinter.Tk()
window.geometry("300x200")

entry = tkinter.Entry(window, width=10)
entry.pack()

button = tkinter.Button(window, text="Привітання", command=greet)
button.pack()

window.mainloop() 