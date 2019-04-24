## Let your friends view/change your microphone status in real time!
Is this a great idea?  I'll let you be the judge.

This relies on Applescript under the hood, so it's only gonna work for macOS users.  Sorry!

## What's happening?

Have you ever been in a meeting where a single person is in charge of muting/unmuting the audio input on Skype/Zoom/Hangouts?  If you're not sitting directly next to that person, chances are you can't see whether you're muted or not.  You have to do a awkward little wave to get them to open the mic, just so you can say "Yep, got it."

Not anymore!

Have your microphone owner run this Node.js application, and then anyone on the same network can connect to their machine and update the microphone's volume.  This is done (not-so-robustly) using WebSockets for communication and Applescript to change the machine's volume.

## Run it.

- `npm install` to pull down the dependencies.
- `node index.js` to run the application.
- Copy the URL from your terminal and pass it on.

![Screenshot](mute_screenshot.png "Mute Screenshot")
