import { Project } from '../types'
import CalmlyIcon from '../assets/Calmly/icon.webp'
import Calmly1 from '../assets/Calmly/calmly_1.webp'
import Calmly2 from '../assets/Calmly/calmly_2.webp'
import Calmly3 from '../assets/Calmly/calmly_3.webp'
import Calmly4 from '../assets/Calmly/calmly_4.webp'
import Calmly5 from '../assets/Calmly/calmly_5.webp'
import Calmly6 from '../assets/Calmly/calmly_6.webp'
import SummifyIcon from '../assets/Summify/icon.webp'
import Summify1 from '../assets/Summify/summify_1.webp'
import Summify2 from '../assets/Summify/summify_2.webp'
import Summify3 from '../assets/Summify/summify_3.webp'
import Summify4 from '../assets/Summify/summify_4.webp'
import Summify5 from '../assets/Summify/summify_5.webp'
import Summify6 from '../assets/Summify/summify_6.webp'
import SpeechScribeIcon from '../assets/Transcriptor/icon.webp'
import SpeechScribe1 from '../assets/Transcriptor/transcriptor_1.webp'
import SpeechScribe2 from '../assets/Transcriptor/transcriptor_2.webp'
import SpeechScribe3 from '../assets/Transcriptor/transcriptor_3.webp'
import SpeechScribe4 from '../assets/Transcriptor/transcriptor_4.webp'
import SpeechScribe5 from '../assets/Transcriptor/transcriptor_5.webp'
import SpeechScribe6 from '../assets/Transcriptor/transcriptor_6.webp'
import ManifestIcon from '../assets/Manifest/icon.webp'
import Manifest1 from '../assets/Manifest/manifest_1.webp'
import Manifest2 from '../assets/Manifest/manifest_2.webp'
import Manifest3 from '../assets/Manifest/manifest_3.webp'
import Manifest4 from '../assets/Manifest/manifest_4.webp'
import Manifest5 from '../assets/Manifest/manifest_5.webp'
import Manifest6 from '../assets/Manifest/manifest_6.webp'
import SubtuneIcon from '../assets/Subtune/icon.webp'
import Subtune1 from '../assets/Subtune/subtune_1.webp'
import Subtune2 from '../assets/Subtune/subtune_2.webp'
import Subtune3 from '../assets/Subtune/subtune_3.webp'

export const projects: Project[] = [
  {
    id: 'calmly',
    title: 'Calmly',
    subtitle: 'Deep Sleep & White Noise',
    source: null,
    icon: CalmlyIcon,
    look: 'https://apps.apple.com/us/app/calmly-deep-sleep-whitenoise/id6479210598',
    images: [Calmly1, Calmly2, Calmly3, Calmly4, Calmly5, Calmly6],
    description: 'A meditation and sleep app that provides calming sounds and guided meditation sessions to help users relax and fall asleep faster.',
    technologies: ['Flutter', 'Dart', 'Bloc', 'Firebase', 'Hive', 'Lottie'],
  },
  {
    id: 'summify',
    title: 'Summify',
    subtitle: 'Summarize any text',
    source: null,
    icon: SummifyIcon,
    look: 'https://apps.apple.com/us/app/ai-text-summarizer-summify/id6478384912',
    images: [Summify1, Summify2, Summify3, Summify4, Summify5, Summify6],
    description: 'An AI-powered text summarization app that helps users quickly understand long articles, documents, and texts by generating concise summaries.',
    technologies: ['Flutter', 'Dart', 'Bloc', 'Firebase', 'Hive', 'Lottie'],
  },
  {
    id: 'speechscribe',
    title: 'SpeechScribe',
    subtitle: 'Speech to Text',
    source: null,
    icon: SpeechScribeIcon,
    look: 'https://apps.apple.com/us/app/speechscribe-speech-to-text/id6499311907',
    images: [SpeechScribe1, SpeechScribe2, SpeechScribe3, SpeechScribe4, SpeechScribe5, SpeechScribe6],
    description: 'A speech-to-text application that converts spoken words into written text with high accuracy, perfect for note-taking and transcription.',
    technologies: ['Flutter', 'Dart', 'Bloc', 'Firebase', 'Hive', 'Lottie'],
  },
  {
    id: 'manifest',
    title: 'Manifest',
    subtitle: 'Goal Setting & Tracking',
    source: null,
    icon: ManifestIcon,
    look: 'https://apps.apple.com/us/app/manifest-maker/id1601640147',
    images: [Manifest1, Manifest2, Manifest3, Manifest4, Manifest5, Manifest6],
    description: 'A goal-setting and habit tracking app that helps users manifest their dreams by setting clear objectives and tracking progress.',
    technologies: ['Flutter', 'Dart', 'Bloc', 'Firebase', 'Hive', 'Lottie'],
  },
  {
    id: 'subtune',
    title: 'Subtune',
    subtitle: 'Music Discovery',
    source: null,
    icon: SubtuneIcon,
    look: 'https://apps.apple.com/us/app/dual-subtitles-easy-learning/id6464495720',
    images: [Subtune1, Subtune2, Subtune3],
    description: 'A music discovery app that helps users find new songs and artists based on their listening preferences and mood.',
    technologies: ['Flutter', 'Dart', 'Bloc', 'Firebase', 'Hive', 'Lottie'],
  },
]
