import tensorflow as tf

# Define the model architecture
model = tf.keras.Sequential([
    tf.keras.layers.Dense(64, activation='relu', input_shape=(784,)),
    tf.keras.layers.Dense(10)
])

# Compile the model
model.compile(optimizer='adam',
              loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
              metrics=['accuracy'])

# Load the training data
insults = ["You're so ugly, you could scare a zombie back to life.",
           "You're dumber than a box of rocks.",
           "I've seen better looking food in a dumpster.",
           "You're the human equivalent of a participation trophy.",
           "You're not just a waste of space, you're a black hole of incompetence."]

x_train = [insult.encode() for insult in insults]
y_train = [0, 1, 2, 3, 4]

# Train the model
model.fit(x_train, y_train, epochs=5)

# Generate some insults
for _ in range(5):
    prediction = model.predict(["You're a waste of oxygen."])
    insult = insults[int(prediction)]
    print(insult)