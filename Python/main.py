import disnake

from disnake.ext import commands

from disnake.ext.commands import Context

bot = commands.Bot(command_prefix="!", intents=disnake.Intents.all())


@bot.slash_command()
async def test(interaction: disnake.AppCmdInter):
    await interaction.send("комманда выполнена! RTMC")
    
@bot.command(name='play')
async def play(ctx: Context, *, youtube_link: str):
    # Check if the user is in a voice channel
    if ctx.author.voice:
        channel = ctx.author.voice.channel

        # Connect to the voice channel
        voice_channel = await channel.connect()

        # Play the YouTube link
        voice_channel.play(disnake.FFmpegPCMAudio(youtube_link), after=lambda e: print(f'Finished playing: {e}'))

        await ctx.send(f'Now playing: {youtube_link}')
    else:
        await ctx.send('You must be in a voice channel to use this command.')

bot.run("MTA5OTM1OTkwMzE3NDM2OTM4NA.G7_C8f.z_a4CJAKr4bAMtxwWS48RIDoY2Va8CxmveMvVc")