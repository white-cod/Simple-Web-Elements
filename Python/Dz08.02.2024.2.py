# Завдання №6 
#tk.geometry("300x200")
#btn=Button(text="Привітання", command=click)
#btn.place(x=25,y=100,width=100,height=35)
#name=Entry()
#name. place(x=150,y=100,width=110,height=35)
#ent=Entry()
#ent. place(x=25,y=30,width=110,height=35)

import tkinter as tk

def generate_sentences():
    word1 = entry1.get()
    word2 = entry2.get()
    word3 = entry3.get()

    sentence1 = f"Минулої ночі мені приснився сон - {word1}."
    sentence2 = f"Сьогодні за вікном з'явився - {word2}."
    sentence3 = f"Мені подали сніданок - {word3}."

    label1.config(text=sentence1)
    label2.config(text=sentence2)
    label3.config(text=sentence3)

window = tk.Tk()
window.geometry("400x300")

entry1 = tk.Entry(window, width=20)
entry1.pack()

entry2 = tk.Entry(window, width=20)
entry2.pack()

entry3 = tk.Entry(window, width=20)
entry3.pack()

button = tk.Button(window, text="Go", command=generate_sentences)
button.pack()
 
label1 = tk.Label(window, text="")
label1.pack()

label2 = tk.Label(window, text="")
label2.pack()

label3 = tk.Label(window, text="")
label3.pack()

window.mainloop()