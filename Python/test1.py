import discord
import youtube_dl

class MusicBot(discord.Client):

    def __init__(self, token):
        super().__init__()
        self.token = token
        self.voice_client = None
        self.queue = []

    async def on_ready(self):
        print("Подключен как {}".format(self.user))

    async def on_message(self, message):
        if message.author == self.user:
            return

        if message.content.startswith("!play"):
            song_url = message.content.split(" ")[1]
            if not song_url.startswith("https://"):
                song_url = "https://www.youtube.com/watch?v=" + song_url

            self.queue.append(song_url)
            await self.play_next()

        if message.content.startswith("!pause"):
            if self.voice_client is not None:
                self.voice_client.pause()

        if message.content.startswith("!resume"):
            if self.voice_client is not None:
                self.voice_client.resume()

        if message.content.startswith("!stop"):
            if self.voice_client is not None:
                self.voice_client.stop()

    async def connect_to_voice_channel(self, channel):
        if self.voice_client is not None:
            await self.voice_client.disconnect()

        self.voice_client = await channel.connect()

    async def play_next(self):
        if len(self.queue) == 0:
            return

        song_url = self.queue.pop(0)
        ydl_opts = {
            "format": "bestaudio/best",
            "postprocessors": [
                {"key": "FFmpegExtractAudio", "preferredcodec": "mp3", "preferredquality": "192"}
            ],
        }
        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            audio_file = ydl.extract_info(song_url, download=True)['url']

        self.voice_client.play(discord.FFmpegPCMAudio(executable="ffmpeg\\ffmpeg.exe", source=audio_file))


if __name__ == "__main__":
    with open("token.txt", "r") as f:
        token = f.read()

    bot = MusicBot(token)
    bot.run()