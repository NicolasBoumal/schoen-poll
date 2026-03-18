This is my custom system for live polling an audience, put together with Gemini.

Feel free to copy it.

1. Create a [Firebase](https://console.firebase.google.com) project. No need for analytics. In there:
2. Allow authentication with Google and as Anonymous user.
3. Create a NoSQL Firestore database (not a Realtime Database): free tier should be plenty enough with this.
4. Set the access rules (reach out to me).
5. Under Security -> Setting -> Authorized domains, make sure to include the domain from where your webpages will be served (include localhost and 127.0.0.1 while testing).
6. Copy the files from this repo and serve them from wherever (e.g., using Github Pages).
7. In each file, look for "PASTE YOUR FIREBASE CONFIG HERE": copy your data there (provided by Firebase, under Settings -> General).

Usage should be self explanatory.
