<!-- ABOUT THE PROJECT -->
*View the backend repository [here](https://github.com/shiyanboxer/recall.ai-demo-be)*

# About The Project
This is a simple web application that showcases the [Recall.ai](https://www.recall.ai) in action. The project was developed using Python, Flask, React, Typescript, and the Recall.ai API. Users can input a bot name and a Google or Zoom meeting link, enabling the Recall.ai bot to join the meeting. Additionally, users have the capability to disconnect the meeting bot and pause and resume recordings.

<!-- FEATURES -->
## Features
- **Create Bot**: The bot is generated when a valid meeting link and bot name are provided. This feature utilizes the [Create Bot endpoint](https://recallai.readme.io/reference/bot_create).
- **Transcribe Meeting**: Recall.ai transcribes meeting dialogues, making them visible on the screen. This feature utilizes the  [Bot Transcript List](https://recallai.readme.io/reference/bot_transcript_list)
- **Pause Bot**: This feature instructs the bot to pause a recording. This feature utilizes the [Pause Recording Create endpoint](https://recallai.readme.io/reference/bot_pause_recording_create).
- **Resume Bot**: This feature allows the bot to continue recording, by utilizing the [Bot Resume Recording Create endpoint](https://recallai.readme.io/reference/bot_resume_recording_create).
- **Leave Meeting**: This feature allows the bot to leave the meeting, by utilizing the [Bot Leave Call Create endpoin](https://recallai.readme.io/reference/bot_leave_call_create)

<!-- TECHNOLOGIES -->
### Built With
- React
- Typescript
- NextJS
- MUI
- axios

<!-- PROJECT -->
## Project Structure
The project is divided into two separate repositories: the frontend repository and the backend repository.

<!-- PREREQUISITES -->
## Prerequisites
* **npm** - Installation guide found [here](https://www.npmjs.com/).

<!-- QUICKSTART -->
## QuickstartClone the [repository](https://github.com/mui/material-ui):

1. **Clone the Repository**

   ```sh
   git clone https://github.com/shiyanboxer/recall.ai-demo-fe.git
   ```

2. **Install the Project Dependencies**

   ```bash
   npm run dev
   ```
   
3. **Run the Server**

   Now you’re ready to run the server, run the following command in your terminal

   ```bash
      cd src
      python app.py
   ```
4. **Open Localhost**

  Open http://localhost:3000/ to see the project
