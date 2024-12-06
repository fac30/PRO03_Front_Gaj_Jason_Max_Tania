import { UserInputs, TracklistProps } from "./playlistTypes";

export async function fetchPlaylist(
  userResponse: UserInputs
): Promise<TracklistProps> {
  if (userResponse) {
    try {
      // change back to the ip address!!!!

      const moodTimeUrl = `http://35.176.251.92:3000/api/spotify/playlist/?date=${encodeURIComponent(
        userResponse.date
      )}T00:00:00.000Z&mood=Happy&genre=${encodeURIComponent(
        userResponse.musicGenre
      )}&playlistCount=${encodeURIComponent(
        userResponse.playlistCount
      )}&valence=0.9&energy=0.8&danceability=0.8&acousticness=0.1&tempo=120`;

      const response = await fetch(moodTimeUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // const moodTimeUrl = `http://35.176.251.92:3000/api/run/?date=${encodeURIComponent(
      //   userResponse.date
      // )}T00:00:00.000Z&eventDescription=${encodeURIComponent(
      //   userResponse.eventDescription
      // )}&musicGenre=${encodeURIComponent(
      //   userResponse.musicGenre
      // )}&playlistCount=${encodeURIComponent(userResponse.playlistCount)}`;
      // const response = await fetch(moodTimeUrl, {
      //   method: "GET",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);

      if (Array.isArray(data)) {
        return data;
      } else {
        throw new Error("Unexpected response format: data is not an array");
      }
    } catch (error) {
      console.error("Error calling Mood Time API:", error);
      return [];
    }
  }
  return [];
}
