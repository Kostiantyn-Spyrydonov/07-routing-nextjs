import { fetchNoteById } from '@/lib/api';
import NotePreview from './NotePreview.client';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function NoteModalPage({ params }: Props) {
  const { id } = await params;
  const note = await fetchNoteById(id);

  return <NotePreview note={note} />;
}
