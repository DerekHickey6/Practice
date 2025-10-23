import arcade

class MyWindow(arcade.Window):
    def __init__(self):
        super().__init__(800, 600, "Arcade Test")
        arcade.set_background_color(arcade.color.AZURE)

    def on_draw(self):
        self.clear()
        arcade.draw_text("Arcade Installed Successfully!", 150, 300,
                         arcade.color.BLACK, 20)

MyWindow()
arcade.run()