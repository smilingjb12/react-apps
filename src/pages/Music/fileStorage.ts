export interface Track {
  id: number;
  artist: string;
  title: string;
  filePath: string;
  coverPath: string;
  duration: number;
}

export const TRACKS: Track[] = [
  {
    id: 1,
    artist: 'Julie',
    title: 'Flutter',
    filePath: 'flutter.mp3',
    coverPath: 'dfed457ca328df02910c2c90c6b08a53.jpg',
    duration: 268
  },
  {
    id: 2,
    artist: 'Crumb',
    title: 'Vinta',
    filePath: 'crumb - vinta.mp3',
    coverPath: 'ab67616d0000b27381ba6b8313211bef29a4cf6d.jpg',
    duration: 300
  },
  {
    id: 3,
    artist: 'Steve Lacy',
    title: 'Dark Red',
    filePath: 'steve-lacy-dark-red.mp3',
    coverPath: 'sasfhdsfhrhdrhdrh.png',
    duration: 174
  },
  {
    id: 4,
    artist: 'Crumb',
    title: 'Vinta',
    filePath: 'crumb - vinta.mp3',
    coverPath: 'ab67616d0000b27381ba6b8313211bef29a4cf6d.jpg',
    duration: 300
  },
  {
    id: 5,
    artist: 'Julie',
    title: 'Flutter',
    filePath: 'flutter.mp3',
    coverPath: 'dfed457ca328df02910c2c90c6b08a53.jpg',
    duration: 268
  },
  {
    id: 6,
    artist: 'Steve Lacy',
    title: 'Dark Red',
    filePath: 'steve-lacy-dark-red.mp3',
    coverPath: 'sasfhdsfhrhdrhdrh.png',
    duration: 174
  },
  {
    id: 7,
    artist: 'Crumb',
    title: 'Vinta',
    filePath: 'crumb - vinta.mp3',
    coverPath: 'ab67616d0000b27381ba6b8313211bef29a4cf6d.jpg',
    duration: 300
  },
]