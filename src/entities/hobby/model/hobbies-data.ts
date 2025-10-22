import { Hobby } from './types'
import { Music, Palette, Camera, Video, Gamepad2, BookOpen, Dumbbell, Users } from 'lucide-react'

export const hobbiesData: Hobby[] = [
  {
    id: 'music',
    icon: Music,
    title: 'hobbies.music.title',
    description: 'hobbies.music.description',
  },
  {
    id: 'design',
    icon: Palette,
    title: 'hobbies.design.title',
    description: 'hobbies.design.description',
  },
  {
    id: 'photo',
    icon: Camera,
    title: 'hobbies.photo.title',
    description: 'hobbies.photo.description',
  },
  {
    id: 'video',
    icon: Video,
    title: 'hobbies.video.title',
    description: 'hobbies.video.description',
  },
  {
    id: 'games',
    icon: Gamepad2,
    title: 'hobbies.games.title',
    description: 'hobbies.games.description',
  },
  {
    id: 'reading',
    icon: BookOpen,
    title: 'hobbies.reading.title',
    description: 'hobbies.reading.description',
  },
  {
    id: 'sport',
    icon: Dumbbell,
    title: 'hobbies.sport.title',
    description: 'hobbies.sport.description',
  },
  {
    id: 'community',
    icon: Users,
    title: 'hobbies.community.title',
    description: 'hobbies.community.description',
  },
]
