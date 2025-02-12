# Discord Bot

## Installation

1. Clone the repository:
```
git clone https://github.com/Javadkarami-com/discord-bot.git
```

2. Install the required dependencies:
```
cd discord-bot
npm install
```

3. Create a `.env` file in the root directory and add your Discord bot token:
```
token=YOUR_BOT_TOKEN
```

## Usage

1. Start the bot:
```
node index.js
```

2. The bot will log in and set its presence to "Playing IG: icyshop.ir".

## API

### Commands

1. `@bot-mention`: The bot will respond with a message.
2. `247 join <voice-channel-id>`: The bot will join the specified voice channel.
3. `247 avchange <avatar-url>`: The bot owner can change the bot's avatar to the specified URL.

### Events

1. `ready`: The bot logs in and sets its presence.
2. `message`: The bot listens for messages and responds to the commands.

### Embeds

1. `vc_error`: Displayed when the voice channel ID is invalid.
2. `vc_success`: Displayed when the bot successfully joins a voice channel.
3. `av_error`: Displayed when the avatar URL is invalid.
4. `av_success`: Displayed when the bot's avatar is successfully changed.
5. `errormsg`: Displayed when an error occurs during the bot's operation.
