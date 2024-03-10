import threading

def main(x=0, y=0, z=0, n=0, data=[]):
    result = [[]]
    for j in data:
        idx = data.index(j)
        while idx + 1 < len(data):
            result.append([data[idx], data[idx + 1]])

    print(f"Result from main function: {result}")

def user_input():
    x = int(input("Enter the number of additions for Peter: "))
    y = int(input("Enter the number of additions for Marichka: "))
    z = int(input("Enter the number of additions for other students: "))
    n = int(input("Enter the number of students: "))
    print(f"User input: x={x}, y={y}, z={z}, n={n}")

def main_threading():
    try:
        data = [[123, 312], [124, 5125, 125], [4152, 554]]

        thread_main = threading.Thread(target=main, kwargs={"data": data.copy()})
        thread_user_input = threading.Thread(target=user_input)

        thread_additional1 = threading.Thread(target=main, kwargs={"data": data.copy()})
        thread_additional2 = threading.Thread(target=user_input)

        thread_main.start()
        thread_user_input.start()
        thread_additional1.start()
        thread_additional2.start()

        thread_main.join()
        thread_user_input.join()
        thread_additional1.join()
        thread_additional2.join()
    except Exception as e:
        print(f"Exception: {e}")

if __name__ == "__main__":
    main_threading()