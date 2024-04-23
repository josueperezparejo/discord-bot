# Discord Bot

## Description
This is a Discord bot developed with Node.js using the discord.js library. The bot is designed to provide specific functionalities within a Discord server.

## Initial Setup
1. Clone this repository to your local machine.
2. Install dependencies by running `npm install`.
3. Create a `.env` file in the project's root directory and add the following environment variables with your own values:

TOKEN=YourDiscordToken
CLIENT_ID=YourClientId
GUILD_ID=YourGuildId

4. Run the command deployment script with `npm run deploy`. This will deploy the application commands to your Discord server.

## Usage
- To run the bot in development mode with automatic restart, you can use the command `npm run dev`.
- The bot will respond to commands defined in the files located in the `commands` directory. You can add new commands following the structure of the provided example files.

## Available Scripts
- `npm test`: Runs tests (currently no tests specified).
- `npm run dev`: Starts the bot in development mode with automatic restart using Nodemon.
- `npm run deploy`: Deploys the application commands to your Discord server.

## Main Dependencies
- `discord.js`: Library for interacting with the Discord API.
- `dotenv`: For loading environment variables from a `.env` file.

## Development Dependencies
- `eslint`: Linting tool to maintain consistent and high-quality code.
- `nodemon`: Utility for automatically restarting the application when changes are detected in files.